/**
 * ICU Physiology Playground — directional educational model.
 *
 * SCOPE AND LIMITS
 * This encodes the DIRECTION of well-established cardiopulmonary relationships
 * (Guyton venous return, Frank–Starling, ventricular interdependence,
 * transmural LV afterload, West-zone/PVR behaviour). It deliberately produces
 * no numbers: there is no validated per-patient model behind it, so emitting
 * "PEEP 12 → CO 3.7 L/min" would be fabrication.
 *
 * Structure:
 *   BASE_RULES        canonical direction of effect in a normal circulation
 *   CONTEXT_OVERRIDES only where a named context genuinely changes the answer
 *
 * Context overrides are additive-by-output: an override for an output replaces
 * the base rule for that output only, leaving the rest of the base intact.
 */

export type Trend = "up" | "down" | "neutral" | "context-dependent";

export const CONTROL_KEYS = [
  "peep",
  "preload",
  "svr",
  "pvr",
  "contractility",
  "heartRate",
] as const;
export type ControlKey = (typeof CONTROL_KEYS)[number];

export const OUTPUT_KEYS = [
  "venousReturn",
  "rvPreload",
  "rvAfterload",
  "lvPreload",
  "lvAfterload",
  "strokeVolume",
  "cardiacOutput",
  "map",
  "oxygenDelivery",
] as const;
export type OutputKey = (typeof OUTPUT_KEYS)[number];

export const CONTEXT_KEYS = [
  "normal",
  "ards",
  "lv-failure",
  "rv-failure",
  "hypovolemia",
  "obstructive-pe",
] as const;
export type ContextKey = (typeof CONTEXT_KEYS)[number];

export type Direction = "increase" | "decrease";

export interface Effect {
  readonly trend: Trend;
  /** Short mechanism sentence shown under the arrow. */
  readonly note: string;
}

export type EffectSet = Partial<Record<OutputKey, Effect>>;

/* -------------------------------------------------------------------------- */
/*  Labels                                                                    */
/* -------------------------------------------------------------------------- */

export const CONTROL_LABEL: Readonly<Record<ControlKey, string>> = {
  peep: "PEEP",
  preload: "Preload (volume)",
  svr: "SVR",
  pvr: "PVR",
  contractility: "Contractility",
  heartRate: "Heart rate",
};

export const OUTPUT_LABEL: Readonly<Record<OutputKey, string>> = {
  venousReturn: "Venous return",
  rvPreload: "RV preload",
  rvAfterload: "RV afterload",
  lvPreload: "LV preload",
  lvAfterload: "LV afterload",
  strokeVolume: "Stroke volume",
  cardiacOutput: "Cardiac output",
  map: "MAP",
  oxygenDelivery: "Oxygen delivery (DO₂)",
};

export const CONTEXT_LABEL: Readonly<Record<ContextKey, string>> = {
  normal: "Normal",
  ards: "ARDS",
  "lv-failure": "LV failure",
  "rv-failure": "RV failure",
  hypovolemia: "Hypovolemia",
  "obstructive-pe": "Massive PE / obstructive",
};

export const CONTEXT_DESCRIPTION: Readonly<Record<ContextKey, string>> = {
  normal: "Euvolemic, normal biventricular function and lung compliance.",
  ards: "Low compliance, recruitable lung, elevated PVR risk with overdistension.",
  "lv-failure": "Dilated, afterload-sensitive LV operating on a flat Starling curve.",
  "rv-failure": "Dilated, afterload-intolerant RV with interventricular interdependence.",
  hypovolemia: "Markedly preload-dependent circulation with low mean systemic filling pressure.",
  "obstructive-pe": "Acute severe RV afterload elevation from mechanical outflow obstruction.",
};

export const TREND_GLYPH: Readonly<Record<Trend, string>> = {
  up: "↑",
  down: "↓",
  neutral: "↔",
  "context-dependent": "↕",
};

/** Screen-reader text — status is never conveyed by the arrow glyph alone. */
export const TREND_LABEL: Readonly<Record<Trend, string>> = {
  up: "increases",
  down: "decreases",
  neutral: "little change",
  "context-dependent": "context-dependent",
};

/* -------------------------------------------------------------------------- */
/*  Base rules (normal circulation)                                           */
/* -------------------------------------------------------------------------- */

const BASE_RULES: Readonly<Record<ControlKey, Readonly<Record<Direction, EffectSet>>>> = {
  peep: {
    increase: {
      venousReturn: {
        trend: "down",
        note: "Raised intrathoracic pressure raises right atrial pressure, narrowing the gradient for venous return.",
      },
      rvPreload: { trend: "down", note: "Follows the fall in venous return." },
      rvAfterload: {
        trend: "context-dependent",
        note: "Recruiting collapsed lung lowers PVR; overdistending aerated lung raises it.",
      },
      lvPreload: { trend: "down", note: "Reduced RV output and leftward septal shift reduce LV filling." },
      lvAfterload: {
        trend: "down",
        note: "Positive intrathoracic pressure lowers LV transmural pressure — a genuine afterload reduction.",
      },
      strokeVolume: {
        trend: "context-dependent",
        note: "Falls if the patient is preload-dependent; may rise where afterload reduction dominates.",
      },
      cardiacOutput: { trend: "context-dependent", note: "Net of reduced preload versus reduced LV afterload." },
      map: { trend: "context-dependent", note: "Tracks cardiac output and vascular tone." },
      oxygenDelivery: {
        trend: "context-dependent",
        note: "DO₂ is content × flow — improved oxygenation can be offset by a falling cardiac output.",
      },
    },
    decrease: {
      venousReturn: { trend: "up", note: "Lower intrathoracic pressure restores the venous pressure gradient." },
      rvPreload: { trend: "up", note: "Follows the rise in venous return." },
      rvAfterload: {
        trend: "context-dependent",
        note: "Derecruitment can raise PVR through hypoxic vasoconstriction and atelectasis.",
      },
      lvPreload: { trend: "up", note: "Greater RV output increases LV filling." },
      lvAfterload: { trend: "up", note: "Loss of positive intrathoracic pressure raises LV transmural pressure." },
      strokeVolume: { trend: "context-dependent", note: "Depends on whether preload or afterload dominates." },
      cardiacOutput: { trend: "context-dependent", note: "Often rises, at the cost of derecruitment." },
      map: { trend: "context-dependent", note: "Tracks cardiac output and vascular tone." },
      oxygenDelivery: {
        trend: "context-dependent",
        note: "Flow may improve while arterial oxygen content worsens.",
      },
    },
  },

  preload: {
    increase: {
      venousReturn: { trend: "up", note: "Higher mean systemic filling pressure widens the venous return gradient." },
      rvPreload: { trend: "up", note: "Increased RV end-diastolic volume." },
      rvAfterload: { trend: "neutral", note: "Not directly altered by volume alone." },
      lvPreload: { trend: "up", note: "Increased transpulmonary transit to the LV." },
      lvAfterload: { trend: "neutral", note: "Not directly altered by volume alone." },
      strokeVolume: { trend: "up", note: "Frank–Starling recruitment — only while on the steep part of the curve." },
      cardiacOutput: { trend: "up", note: "Stroke volume × heart rate." },
      map: { trend: "up", note: "Follows cardiac output at fixed vascular tone." },
      oxygenDelivery: { trend: "up", note: "Driven by the rise in flow." },
    },
    decrease: {
      venousReturn: { trend: "down", note: "Lower mean systemic filling pressure narrows the gradient." },
      rvPreload: { trend: "down", note: "Reduced RV end-diastolic volume." },
      lvPreload: { trend: "down", note: "Less transpulmonary transit to the LV." },
      strokeVolume: { trend: "down", note: "Movement down the Frank–Starling curve." },
      cardiacOutput: { trend: "down", note: "Stroke volume × heart rate." },
      map: { trend: "down", note: "Follows cardiac output at fixed vascular tone." },
      oxygenDelivery: { trend: "down", note: "Driven by the fall in flow." },
    },
  },

  svr: {
    increase: {
      lvAfterload: { trend: "up", note: "Higher resistance directly opposes LV ejection." },
      strokeVolume: { trend: "down", note: "Ejection against a higher impedance." },
      cardiacOutput: { trend: "down", note: "Falls with stroke volume unless rate compensates." },
      map: { trend: "up", note: "MAP ≈ CO × SVR — the resistance term dominates here." },
      oxygenDelivery: { trend: "down", note: "Pressure rises but flow falls; DO₂ follows flow." },
      venousReturn: { trend: "neutral", note: "Arterial tone change; venous capacitance largely unaltered." },
    },
    decrease: {
      lvAfterload: { trend: "down", note: "Lower impedance to LV ejection." },
      strokeVolume: { trend: "up", note: "Easier ejection increases forward stroke volume." },
      cardiacOutput: { trend: "up", note: "Rises with stroke volume." },
      map: { trend: "down", note: "MAP ≈ CO × SVR — resistance falls faster than flow rises." },
      oxygenDelivery: { trend: "up", note: "Driven by improved flow." },
    },
  },

  pvr: {
    increase: {
      rvAfterload: { trend: "up", note: "The RV must generate higher pressure to eject." },
      strokeVolume: { trend: "down", note: "RV output falls, so LV stroke volume follows." },
      lvPreload: { trend: "down", note: "Reduced RV output and septal shift limit LV filling." },
      cardiacOutput: { trend: "down", note: "Series circulation — the RV limits total flow." },
      map: { trend: "down", note: "Follows the fall in cardiac output." },
      oxygenDelivery: { trend: "down", note: "Driven by the fall in flow." },
    },
    decrease: {
      rvAfterload: { trend: "down", note: "Lower impedance to RV ejection." },
      lvPreload: { trend: "up", note: "Improved RV output raises LV filling." },
      strokeVolume: { trend: "up", note: "Improved transpulmonary flow." },
      cardiacOutput: { trend: "up", note: "The RV is no longer flow-limiting." },
      map: { trend: "up", note: "Follows cardiac output." },
      oxygenDelivery: { trend: "up", note: "Driven by improved flow." },
    },
  },

  contractility: {
    increase: {
      strokeVolume: { trend: "up", note: "Upward shift of the Frank–Starling relationship." },
      cardiacOutput: { trend: "up", note: "Stroke volume × heart rate." },
      map: { trend: "up", note: "Follows cardiac output." },
      oxygenDelivery: { trend: "up", note: "Driven by improved flow." },
      lvPreload: { trend: "down", note: "More complete emptying lowers end-systolic and end-diastolic volume." },
    },
    decrease: {
      strokeVolume: { trend: "down", note: "Downward shift of the Frank–Starling relationship." },
      cardiacOutput: { trend: "down", note: "Stroke volume × heart rate." },
      map: { trend: "down", note: "Follows cardiac output." },
      oxygenDelivery: { trend: "down", note: "Driven by the fall in flow." },
      lvPreload: { trend: "up", note: "Less complete emptying raises residual volume." },
    },
  },

  heartRate: {
    increase: {
      cardiacOutput: {
        trend: "context-dependent",
        note: "Rises until shortened diastole limits filling, after which output falls.",
      },
      strokeVolume: { trend: "down", note: "Shorter diastolic filling time reduces end-diastolic volume." },
      lvPreload: { trend: "down", note: "Less time to fill in diastole." },
      map: { trend: "context-dependent", note: "Follows cardiac output." },
      oxygenDelivery: { trend: "context-dependent", note: "Follows cardiac output." },
    },
    decrease: {
      cardiacOutput: {
        trend: "context-dependent",
        note: "Improved filling can offset the lower rate — until bradycardia dominates.",
      },
      strokeVolume: { trend: "up", note: "Longer diastole increases end-diastolic volume." },
      lvPreload: { trend: "up", note: "More time to fill in diastole." },
      map: { trend: "context-dependent", note: "Follows cardiac output." },
      oxygenDelivery: { trend: "context-dependent", note: "Follows cardiac output." },
    },
  },
};

/* -------------------------------------------------------------------------- */
/*  Context overrides — only where the context genuinely changes the answer    */
/* -------------------------------------------------------------------------- */

type ContextOverride = Partial<Record<ControlKey, Partial<Record<Direction, EffectSet>>>>;

const CONTEXT_OVERRIDES: Readonly<Record<ContextKey, ContextOverride>> = {
  normal: {},

  ards: {
    peep: {
      increase: {
        rvAfterload: {
          trend: "context-dependent",
          note: "Recruiting collapsed alveoli lowers PVR; pushing past that into overdistension raises it again.",
        },
        oxygenDelivery: {
          trend: "context-dependent",
          note: "Recruitment improves arterial oxygen content, but DO₂ still falls if cardiac output drops.",
        },
      },
    },
  },

  "lv-failure": {
    peep: {
      increase: {
        strokeVolume: {
          trend: "up",
          note: "The dilated, afterload-sensitive LV benefits from reduced transmural pressure.",
        },
        cardiacOutput: {
          trend: "up",
          note: "Afterload reduction typically outweighs the preload penalty in a congested LV.",
        },
      },
    },
    preload: {
      increase: {
        strokeVolume: {
          trend: "neutral",
          note: "The failing LV sits on a flat Starling curve — extra volume adds congestion, not output.",
        },
        cardiacOutput: { trend: "neutral", note: "Little forward gain from additional volume." },
        oxygenDelivery: {
          trend: "context-dependent",
          note: "Rising filling pressures can worsen pulmonary oedema and arterial oxygenation.",
        },
      },
    },
    svr: {
      increase: {
        strokeVolume: { trend: "down", note: "The failing LV is markedly afterload-sensitive." },
        cardiacOutput: { trend: "down", note: "Forward flow falls steeply as impedance rises." },
      },
    },
  },

  "rv-failure": {
    preload: {
      increase: {
        strokeVolume: {
          trend: "down",
          note: "RV dilation shifts the septum leftward, impairing LV filling — output falls despite more volume.",
        },
        lvPreload: {
          trend: "down",
          note: "Ventricular interdependence: a distended RV mechanically restricts the LV.",
        },
        cardiacOutput: { trend: "down", note: "The classic deterioration after fluid loading a failing RV." },
        map: { trend: "down", note: "Follows the fall in cardiac output." },
        oxygenDelivery: { trend: "down", note: "Driven by the fall in flow." },
      },
    },
    peep: {
      increase: {
        rvAfterload: { trend: "up", note: "The failing RV tolerates added afterload poorly." },
        cardiacOutput: { trend: "down", note: "Added RV afterload plus reduced preload compounds RV failure." },
        strokeVolume: { trend: "down", note: "RV output limits the whole circulation." },
      },
    },
  },

  hypovolemia: {
    preload: {
      increase: {
        strokeVolume: { trend: "up", note: "Steep part of the Frank–Starling curve — large gain per unit volume." },
        cardiacOutput: { trend: "up", note: "Markedly preload-responsive." },
        map: { trend: "up", note: "Follows the substantial rise in flow." },
      },
    },
    peep: {
      increase: {
        cardiacOutput: {
          trend: "down",
          note: "With low filling pressures the venous return penalty dominates and is poorly tolerated.",
        },
        map: { trend: "down", note: "Follows the fall in cardiac output." },
        strokeVolume: { trend: "down", note: "Highly preload-dependent circulation." },
      },
    },
  },

  "obstructive-pe": {
    peep: {
      increase: {
        rvAfterload: { trend: "up", note: "Added to an already critically elevated RV afterload." },
        cardiacOutput: { trend: "down", note: "The obstructed RV has no reserve to absorb further afterload." },
        strokeVolume: { trend: "down", note: "RV output is the limiting step." },
      },
    },
    preload: {
      increase: {
        strokeVolume: {
          trend: "context-dependent",
          note: "Modest volume may help a underfilled RV; aggressive loading worsens dilation and septal shift.",
        },
        cardiacOutput: {
          trend: "context-dependent",
          note: "Benefit is narrow and easily overshot in acute RV pressure overload.",
        },
      },
    },
    pvr: {
      decrease: {
        cardiacOutput: { trend: "up", note: "Relieving the obstruction is the definitive way to restore flow." },
      },
    },
  },
};

/* -------------------------------------------------------------------------- */
/*  Resolver                                                                  */
/* -------------------------------------------------------------------------- */

export interface ResolvedEffect {
  readonly output: OutputKey;
  readonly trend: Trend;
  readonly note: string;
  /** True when this specific output was changed by the selected context. */
  readonly contextModified: boolean;
}

/**
 * Resolves the directional effects of moving one control in one direction,
 * within one clinical context.
 */
export function resolveEffects(
  control: ControlKey,
  direction: Direction,
  context: ContextKey,
): readonly ResolvedEffect[] {
  const base = BASE_RULES[control][direction] ?? {};
  const override = CONTEXT_OVERRIDES[context]?.[control]?.[direction] ?? {};

  const outputs = new Set<OutputKey>([
    ...(Object.keys(base) as OutputKey[]),
    ...(Object.keys(override) as OutputKey[]),
  ]);

  return OUTPUT_KEYS.filter((key) => outputs.has(key)).map((output): ResolvedEffect => {
    const overridden = override[output];
    const baseline = base[output];
    const effect = overridden ?? baseline;
    return {
      output,
      trend: effect?.trend ?? "neutral",
      note: effect?.note ?? "",
      contextModified: Boolean(overridden) && context !== "normal",
    };
  });
}
