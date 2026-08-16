import type { PhysiologyVisual } from "@/content-types";
import { PressureRelationshipVisual } from "./PressureRelationshipVisual";
import { VqSpectrumVisual } from "./VqSpectrumVisual";
import { Do2BreakdownVisual } from "./Do2BreakdownVisual";
import { StarlingCurveVisual } from "./StarlingCurveVisual";
import { AcidBaseVisual } from "./AcidBaseVisual";

interface PhysiologyVisualPanelProps {
  readonly visual: PhysiologyVisual;
}

/** Dispatches to one of a small, fixed set of reusable interactive visual kinds — not one component per concept. */
export function PhysiologyVisualPanel({ visual }: PhysiologyVisualPanelProps) {
  switch (visual.kind) {
    case "pressure-relationship":
      return <PressureRelationshipVisual defaultPlateauPressure={visual.defaultPlateauPressure} defaultPeep={visual.defaultPeep} />;
    case "vq-spectrum":
      return <VqSpectrumVisual defaultRatio={visual.defaultRatio} />;
    case "do2-breakdown":
      return (
        <Do2BreakdownVisual
          defaultCardiacOutput={visual.defaultCardiacOutput}
          defaultHemoglobin={visual.defaultHemoglobin}
          defaultSao2={visual.defaultSao2}
        />
      );
    case "starling-curve":
      return <StarlingCurveVisual defaultPreload={visual.defaultPreload} defaultContractility={visual.defaultContractility} />;
    case "acid-base-map":
      return (
        <AcidBaseVisual
          defaultPh={visual.defaultPh}
          defaultPaco2={visual.defaultPaco2}
          defaultHco3={visual.defaultHco3}
          defaultNa={visual.defaultNa}
          defaultCl={visual.defaultCl}
        />
      );
    default:
      return null;
  }
}
