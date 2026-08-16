import { CalculatorWidget } from "@/components/calculators/CalculatorWidget";

export function CalculatorEmbedBlock({ calculatorId }: { readonly calculatorId: string }) {
  return <CalculatorWidget calculatorId={calculatorId} />;
}
