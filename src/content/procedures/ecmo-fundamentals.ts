import type { Topic } from "@/content-types";

export const ecmoFundamentals: Topic = {
  id: "ecmo-fundamentals",
  slug: "ecmo-fundamentals",
  title: "ECMO Fundamentals & Critical Care Management",
  category: "procedures",
  oneLiner: "Veno-Venous (VV) vs Veno-Arterial (VA) ECMO physiology, ultra-protective lung rest, Harlequin syndrome, LV distension, and circuit emergency management.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 48: Extracorporeal Membrane Oxygenation and Extracorporeal Life Support"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 36: Extracorporeal Life Support in the Critically Ill"
    }
  ],
  currentStatus: "Current as of the 2021 ELSO (Extracorporeal Life Support Organization) Guidelines and recent landmark trials (CESAR, EOLIA, ECLS-SHOCK).",
  otherReferences: [
    "Combes A, et al. Extracorporeal Membrane Oxygenation for Severe Acute Respiratory Distress Syndrome (EOLIA). N Engl J Med. 2018;378(21):1965-1975.",
    "Peek GJ, et al. Efficacy and economic assessment of conventional ventilatory support versus extracorporeal membrane oxygenation for severe adult respiratory failure (CESAR): a multicentre randomised controlled trial. Lancet. 2009;374(9698):1351-1363.",
    "Thiele H, et al. Extracorporeal Life Support in Infarct-Related Cardiogenic Shock (ECLS-SHOCK). N Engl J Med. 2023;389(14):1286-1297."
  ],
  relationships: [
    { type: "prerequisite", targetId: "ards", label: "Refractory hypoxemic respiratory failure indications for VV-ECMO (EOLIA criteria)" },
    { type: "prerequisite", targetId: "cardiogenic-shock", label: "Refractory cardiogenic shock indications for VA-ECMO and LV venting" },
    { type: "related-to", targetId: "cardiac-arrest-post-arrest", label: "Extracorporeal Cardiopulmonary Resuscitation (ECPR) in refractory cardiac arrest" },
    { type: "complication", targetId: "bleeding", label: "Circuit-induced consumptive coagulopathy and systemic hemorrhage" }
  ],
  sections: [
    {
      id: "ecmo-fundamentals.overview",
      kind: "overview",
      title: "Circuit Mechanics & The Fundamental VV vs VA Distinction",
      summary: "Extracorporeal Membrane Oxygenation (ECMO) provides temporary artificial gas exchange and/or circulatory support. Veno-Venous (VV) ECMO provides pure respiratory support; Veno-Arterial (VA) ECMO provides combined hemodynamic and respiratory support.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "ecmo-guideline-elso-2021",
          relevance: "ELSO 2021 Guidelines on adult ECMO configurations, cannulation, circuit management, and anticoagulation"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "An ECMO circuit consists of: (1) large-bore drainage cannula, (2) centrifugal blood pump, (3) polymethylpentene (PMP) hollow-fiber membrane oxygenator with integrated heat exchanger, (4) return cannula, and (5) gas blender delivering sweep gas. Oxygen delivery is governed primarily by blood flow rate (L/min) and inlet saturation; CO2 clearance is governed primarily by sweep gas flow rate (L/min)."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Veno-Venous (VV) ECMO (Lungs Only)", value: "Drains deoxygenated venous blood from IVC/SVC, passes it through the oxygenator, and returns fully oxygenated blood into the right atrium (via internal jugular vein or dual-lumen cannula). Cardiac output relies entirely on the patient's native heart. Indicated for refractory severe ARDS." },
            { label: "Veno-Arterial (VA) ECMO (Heart & Lungs)", value: "Drains deoxygenated venous blood from right atrium/IVC, passes it through the oxygenator, and returns pressurized oxygenated blood into the arterial system (femoral artery or ascending aorta). Provides full hemodynamic circulatory support + gas exchange. Indicated for refractory cardiogenic shock, massive PE, and ECPR." }
          ]
        }
      ]
    },
    {
      id: "ecmo-fundamentals.patient-selection",
      kind: "diagnosis",
      title: "Patient Selection & The EOLIA / CESAR Indications",
      summary: "Patient selection requires severe gas exchange or circulatory failure refractory to conventional therapy with a reversible underlying etiology and absence of fatal contraindications.",
      provenance: "trial",
      evidenceRefs: [
        {
          kind: "trial",
          id: "ecmo-cesar-trial",
          relevance: "CESAR randomized trial demonstrating that referral to an ECMO center significantly improved 6-month disability-free survival (63% vs 47%) in severe respiratory failure"
        },
        {
          kind: "systematic-review",
          id: "ecmo-ards-individual-patient-meta-analysis",
          relevance: "Goligher et al. IPD meta-analysis (JAMA 2018) of 429 patients demonstrating 27% reduction in 60-day mortality (RR 0.73, P=0.008) with VV-ECMO in severe ARDS"
        }
      ],
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "VV-ECMO Indications (EOLIA Criteria)", value: "(1) PaO2/FiO2 < 50 mmHg for > 3 hours despite optimized PEEP and prone positioning; (2) PaO2/FiO2 < 80 mmHg for > 6 hours; (3) Arterial pH < 7.15 with PaCO2 >= 60 mmHg for > 6 hours secondary to severe hypercapnic acidosis despite Pplat <= 32 cmH2O." },
            { label: "VA-ECMO Indications", value: "Cardiogenic shock with Cardiac Index < 1.8 L/min/m2, SBP < 90 mmHg, and lactate > 3-4 mmol/L despite maximum inotropes/vasopressors and mechanical support (IABP/Impella), or cardiac arrest (ECPR with witness arrest < 60 min)." },
            { label: "Contraindications", value: "Absolute: Irreversible catastrophic brain injury, uncontrolled terminal malignancy, severe irreversible multi-organ failure without transplant candidacy. Relative: High-pressure mechanical ventilation > 7-10 days, severe active intracranial hemorrhage, extreme obesity." }
          ]
        }
      ]
    },
    {
      id: "ecmo-fundamentals.differential-selection",
      kind: "differential-diagnosis",
      title: "Mechanical Circulatory Support Device Selection",
      summary: "Differentiate VA-ECMO from isolated LV unloading (Impella) and counterpulsation (IABP).",
      provenance: "trial",
      evidenceRefs: [
        {
          kind: "trial",
          id: "ecmo-ecls-shock-trial",
          relevance: "ECLS-SHOCK trial (NEJM 2023) showing routine early VA-ECMO in acute MI cardiogenic shock did not reduce 30-day mortality (47.8% vs 49.0%) and increased bleeding complications"
        }
      ],
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Veno-Arterial (VA) ECMO", value: "Full biventricular + respiratory support (flows 4-6 L/min). Increases LV afterload; requires careful monitoring for LV distension." },
            { label: "Impella (Transvalvular Axial Pump)", value: "Directly unloads left ventricle by pumping blood from LV into ascending aorta (flows 2.5-5.5 L/min). Reduces LV wall stress and myocardial oxygen consumption without gas exchange." },
            { label: "ECPELLA (VA-ECMO + Impella)", value: "Combination of VA-ECMO (systemic perfusion + oxygenation) and Impella (simultaneous direct LV venting and decompression) for refractory cardiogenic shock with closed aortic valve." }
          ]
        }
      ]
    },
    {
      id: "ecmo-fundamentals.management",
      kind: "management",
      title: "ICU Management: Ultra-Protective Ventilation & Anticoagulation",
      summary: "Ventilator resting settings to allow lung healing, systemic anticoagulation titration, and circuit surveillance.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Ultra-Protective 'Lung Rest' Settings on VV-ECMO: Once ECMO is initiated, immediately reduce ventilator intensity to prevent ventilator-induced lung injury (VILI): Volume Control or Pressure Control with Tidal Volume 3 to 4 mL/kg predicted body weight, Driving Pressure <= 10 cmH2O, Plateau Pressure <= 24 cmH2O, PEEP 10-15 cmH2O, Respiratory Rate 10-12/min, and FiO2 <= 0.30-0.40.",
            "Anticoagulation Protocol: Systemic anticoagulation with IV Unfractionated Heparin (target anti-Xa 0.2-0.4 IU/mL or aPTT 50-70 seconds) or Bivalirudin (direct thrombin inhibitor, ideal in heparin-induced thrombocytopenia).",
            "Managing Sweep Gas & PO2/PCO2: Adjust Sweep Gas flow to control PaCO2 and arterial pH. AVOID rapid clearance of severe chronic hypercapnia (lowering PaCO2 too fast causes sudden cerebral alkalosis, cerebral vasoconstriction, and intracranial hemorrhage). Adjust Blood Flow rate (L/min) and FiO2 on blender to maintain PaO2 65-90 mmHg.",
            "VA-ECMO Left Ventricular Distension Management: Peripheral VA-ECMO pumps retrograde flow into the femoral artery, increasing LV afterload. If the stunned LV cannot open the aortic valve, massive LV distension, intraventricular stasis/thrombosis, and flash pulmonary edema occur. Management: Inotropic support (dobutamine/milrinone), IABP, or mechanical venting (Impella / atrial septostomy)."
          ]
        }
      ]
    },
    {
      id: "ecmo-fundamentals.monitoring",
      kind: "monitoring",
      title: "Circuit Pressure Monitoring & Dual Arterial Lines",
      summary: "Transmembrane pressure monitoring, cannula position surveillance, and right radial arterial line monitoring.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Transmembrane Gradient (Ppost - Ppre)", value: "Monitor pre-membrane and post-membrane oxygenator pressures. A transmembrane pressure drop > 50-70 mmHg indicates oxygenator clot formation and impending membrane failure." },
            { label: "Right Radial Arterial Line (Harlequin Screen)", value: "Mandatory in peripheral VA-ECMO: Right radial arterial line reflects blood perfusing the coronary and cerebral circulation. If the native lungs are failing, deoxygenated blood from the LV creates cerebral and myocardial hypoxia ('Harlequin Syndrome')." },
            { label: "Distal Perfusion Catheter (DPC)", value: "Continuous monitoring of lower extremity pulse/perfusion distal to the femoral arterial cannula to prevent limb ischemia and compartment syndrome." }
          ]
        }
      ]
    },
    {
      id: "ecmo-fundamentals.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of catastrophic circuit emergencies, vascular complications, and escalation criteria.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Immediate", value: "Cannulation site hemorrhage, vascular dissection, air embolism into arterial line, severe limb ischemia distal to femoral arterial cannula." },
            { label: "Configuration-Specific", value: "Harlequin Syndrome (North-South syndrome in VA-ECMO — treated by converting to VAV-ECMO or optimizing lung ventilation); LV distension with intraventricular thrombus; Recirculation in VV-ECMO (fully oxygenated blood from return cannula directly enters drainage cannula without circulating systemically, identified by high pre-oxygenator SvO2 > 80% with low patient SpO2)." },
            { label: "Late / Delayed", value: "Intracranial hemorrhage (fatal in 10-15% of ECMO patients), heparin-induced thrombocytopenia (HIT), circuit thrombosis, acquired von Willebrand syndrome." },
            { label: "Escalation Triggers", value: "Sudden oxygenator failure (acute drop in post-membrane PO2 or massive clot); acute circuit air lock (immediate clamp and circuit change); severe lower limb compartment syndrome requiring emergent fasciotomy." }
          ]
        }
      ]
    },
    {
      id: "ecmo-fundamentals.pitfalls",
      kind: "controversies",
      title: "Critical Care ECMO Pitfalls & Circuit Hazards",
      summary: "High-yield bedside pitfalls including rapid CO2 washout, Harlequin syndrome, and recirculation detection.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Rapid CO2 Washout", value: "Clearing severe chronic hypercapnia rapidly within hours on VV ECMO causes cerebral alkalosis, profound cerebral vasoconstriction, and catastrophic intracranial hemorrhage." },
            { label: "Pitfall: Missing Harlequin Syndrome", value: "Relying on lower-extremity or femoral arterial blood gas in peripheral VA ECMO with native LV recovery and failing lungs; right radial arterial line is mandatory to detect upper-body cerebral/coronary deoxygenation." },
            { label: "Pitfall: Failing to Unload the LV", value: "Allowing retrograde VA ECMO flow against a non-ejecting LV causes massive intraventricular stasis, aortic root thrombosis, and severe hydrostatic pulmonary edema; requires early inotropes, IABP, or Impella venting." },
            { label: "Pitfall: Excessive Ventilator Settings", value: "Maintaining standard tidal volumes (6-8 mL/kg) on VV ECMO rather than ultra-protective rest settings (3-4 mL/kg, Pplat <= 24 cmH2O), perpetuating VILI." },
            { label: "Pitfall: Recirculation in VV ECMO", value: "Failing to recognize that cannula proximity allows oxygenated return blood to enter the drainage cannula directly (high pre-membrane SvO2 > 80% with low patient SpO2), requiring cannula repositioning." }
          ]
        }
      ]
    }
  ]
};
