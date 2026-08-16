interface KeyValueTableBlockProps {
  readonly rows: readonly { label: string; value: string }[];
}

export function KeyValueTableBlock({ rows }: KeyValueTableBlockProps) {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <table className="w-full text-left text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-b-0">
              <th className="w-2/5 bg-surface-sunken px-3 py-2 text-xs font-medium uppercase tracking-wide text-ink-muted">
                {row.label}
              </th>
              <td className="px-3 py-2 text-ink">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
