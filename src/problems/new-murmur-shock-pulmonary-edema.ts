import type { ClinicalProblem } from "@/content-types";

export const newMurmurShockPulmonaryEdema: ClinicalProblem = {
  id: "new-murmur-shock-pulmonary-edema",
  slug: "new-murmur-shock-pulmonary-edema",
  title: "New Murmur + Shock / Acute Pulmonary Edema",
  category: "hemodynamic",
  oneLiner: "Emergency evaluation of sudden hemodynamic collapse and pulmonary edema with a new or changing cardiac murmur.",
  relatedTopicIds: [
    "valvular-heart-disease-endocarditis",
    "cardiogenic-shock",
    "acute-heart-failure",
    "acute-coronary-syndrome",
    "acute-aortic-syndromes",
    "shock",
    "rv-failure",
  ],
  body: [
    {
      type: "paragraph",
      text: "The combination of sudden hemodynamic collapse, flash pulmonary edema, and a new or changing cardiac murmur represents an acute surgical cardiovascular emergency until proven otherwise. Immediate bedside echocardiography (TTE/TEE) is required to differentiate acute valvular disruption (papillary muscle rupture, acute endocarditis cusp perforation, mechanical valve thrombosis) from acute decompensation of severe chronic stenotic lesions.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Critical Diagnostic Trap: Acute severe mitral regurgitation and acute severe aortic regurgitation often have soft, short, or completely inaudible murmurs due to rapid equalization of chamber pressures. Never rule out catastrophic valvular disruption based on auscultation alone.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. IMMEDIATE BEDSIDE STABILIZATION",
          value: "• High-Flow Oxygen / Positive Pressure Ventilation: Apply BiPAP or perform intubation for respiratory exhaustion. Positive intrathoracic pressure reduces LV afterload and improves forward flow in severe MR/AR, but caution is required in critical AS where drop in venous return causes arrest.\n• Invasive Monitoring: Place an arterial line immediately. Place a Pulmonary Artery Catheter (PAC) if shock is refractory: giant v-waves (> 30–50 mmHg) indicate severe acute MR or severe TR.",
        },
        {
          label: "2. FOCUSED ECHOCARDIOGRAPHY (POCUS / TEE)",
          value: "• Critical Aortic Stenosis: Peak velocity > 4.0 m/s, mean gradient > 40 mmHg, valve area < 1.0 cm²; severe concentric LV hypertrophy.\n• Acute Severe Mitral Regurgitation: Flail mitral leaflet, ruptured papillary muscle (post-MI posteromedial head), ruptured chordae, eccentric regurgitant jet on color Doppler.\n• Acute Severe Aortic Regurgitation: Cusp perforation, vegetation, aortic root dissection flap prolapse, premature mitral valve closure in late diastole.\n• Obstructive Prosthetic Valve Thrombosis: Loss of mechanical valve clicks, elevated transvalvular gradient, restricted leaflet motion on TEE/fluoroscopy.",
        },
        {
          label: "3. LESION-SPECIFIC HEMODYNAMIC RESCUE",
          value: "• Critical Aortic Stenosis: Maintain high-normal SVR with phenylephrine or norepinephrine to ensure coronary driving pressure; maintain strict sinus rhythm 60–80 bpm; avoid inodilators/vasodilators.\n• Acute Mitral & Aortic Regurgitation: Reduce afterload aggressively with IV sodium nitroprusside or nicardipine; add dobutamine for inotropy; maintain heart rate 85–105 bpm in AR (shortens diastole).\n• IABP Caution: IABP is therapeutic in acute MR (reduces afterload and unloads LV) but is ABSOLUTELY CONTRAINDICATED in aortic regurgitation (forces retrograde flow across aortic valve into LV).",
        },
        {
          label: "4. URGENT SURGICAL & INTERVENTIONAL ESCALATION",
          value: "• Activate Heart Valve Team Immediately: Emergent surgical valve repair/replacement (SAVR/MVR) for acute structural rupture.\n• Emergency TAVR / BAV: Rescue balloon aortic valvuloplasty or emergent transcatheter valve replacement for inoperable or cardiogenic shock AS.\n• Slow Fibrinolysis (PROMETHEUS Protocol): Low-dose tPA (25 mg over 25h) for high-risk mechanical valve thrombosis.",
        },
      ],
    },
  ],
};
