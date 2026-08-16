"use client";

import { useCallback, useSyncExternalStore } from "react";

// Per-key in-memory listener sets so same-tab writers notify same-tab readers
// (the native `storage` event only fires in *other* tabs).
const listeners = new Map<string, Set<() => void>>();

// useSyncExternalStore requires getSnapshot to return a referentially stable
// value when nothing changed, or it re-renders forever. Cache the parsed
// value per key and only re-parse when the raw stored string actually changes.
const cache = new Map<string, { raw: string | null; value: unknown }>();

function emit(key: string) {
  listeners.get(key)?.forEach((listener) => listener());
}

function subscribe(key: string, callback: () => void): () => void {
  if (!listeners.has(key)) listeners.set(key, new Set());
  listeners.get(key)?.add(callback);
  return () => listeners.get(key)?.delete(callback);
}

function readValue<T>(key: string, initialValue: T): T {
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(key);
  } catch {
    raw = null;
  }

  const cached = cache.get(key);
  if (cached && cached.raw === raw) return cached.value as T;

  let value: T;
  try {
    value = raw !== null ? (JSON.parse(raw) as T) : initialValue;
  } catch {
    value = initialValue;
  }

  cache.set(key, { raw, value });
  return value;
}

interface UseLocalStorageState<T> {
  readonly value: T;
  readonly setValue: (next: T | ((prev: T) => T)) => void;
}

/**
 * Backed by useSyncExternalStore rather than a read-in-useEffect pattern, so
 * the client value replaces the server snapshot without a hydration
 * mismatch, and same-tab writers notify same-tab readers via an in-memory
 * listener set (native `storage` events only fire cross-tab).
 */
export function useLocalStorageState<T>(key: string, initialValue: T): UseLocalStorageState<T> {
  const getSnapshot = useCallback(() => readValue(key, initialValue), [key, initialValue]);
  const getServerSnapshot = useCallback(() => initialValue, [initialValue]);
  const subscribeToKey = useCallback((callback: () => void) => subscribe(key, callback), [key]);

  const value = useSyncExternalStore(subscribeToKey, getSnapshot, getServerSnapshot);

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const prev = readValue(key, initialValue);
      const resolved = typeof next === "function" ? (next as (prev: T) => T)(prev) : next;
      try {
        window.localStorage.setItem(key, JSON.stringify(resolved));
      } catch {
        // storage unavailable (private browsing quota, etc.) — the update is dropped, since the
        // snapshot always re-reads from storage rather than keeping separate in-memory state
      }
      emit(key);
    },
    [key, initialValue],
  );

  return { value, setValue };
}
