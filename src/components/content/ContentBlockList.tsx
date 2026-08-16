import type { ContentBlock } from "@/content-types";
import { ParagraphBlock } from "./ParagraphBlock";
import { ListBlock } from "./ListBlock";
import { KeyValueTableBlock } from "./KeyValueTableBlock";
import { CalloutBlock } from "./CalloutBlock";
import { CalculatorEmbedBlock } from "./CalculatorEmbedBlock";

export function ContentBlockList({ blocks }: { readonly blocks: readonly ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-3">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <ParagraphBlock key={i} text={block.text} />;
          case "list":
            return <ListBlock key={i} ordered={block.ordered} items={block.items} />;
          case "key-value-table":
            return <KeyValueTableBlock key={i} rows={block.rows} />;
          case "callout":
            return <CalloutBlock key={i} tone={block.tone} text={block.text} />;
          case "calculator-embed":
            return <CalculatorEmbedBlock key={i} calculatorId={block.calculatorId} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
