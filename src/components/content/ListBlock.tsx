interface ListBlockProps {
  readonly ordered: boolean;
  readonly items: readonly string[];
}

export function ListBlock({ ordered, items }: ListBlockProps) {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <ListTag className={`flex flex-col gap-1.5 pl-5 text-body text-ink ${ordered ? "list-decimal" : "list-disc"}`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ListTag>
  );
}
