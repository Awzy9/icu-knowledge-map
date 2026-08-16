import { Callout, type CalloutTone } from "@/components/ui/Callout";

export function CalloutBlock({ tone, text }: { readonly tone: CalloutTone; readonly text: string }) {
  return <Callout tone={tone}>{text}</Callout>;
}
