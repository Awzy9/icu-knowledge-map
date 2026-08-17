import type { Pathway } from "@/content-types";

export const acuteValvularHemodynamicCollapse: Pathway = {
  id: "acute-valvular-hemodynamic-collapse",
  slug: "acute-valvular-hemodynamic-collapse",
  title: "Acute Valvular Hemodynamic Collapse",
  oneLiner: "Structured emergency bedside protocol from POCUS lesion differentiation to lesion-specific hemodynamics and surgical rescue.",
  startingProblem: "New Murmur + Acute Pulmonary Edema or Shock",
  relatedTopicIds: [
    "valvular-heart-disease-endocarditis",
    "cardiogenic-shock",
    "acute-heart-failure",
    "acute-aortic-syndromes",
    "acute-coronary-syndrome",
    "rv-failure",
  ],
  flow: {
    id: "trigger-valvular-collapse",
    label: "Trigger: Acute shock, flash pulmonary edema, or new cardiac murmur",
    kind: "step",
    role: "assessment",
    detail: "Immediate bedside resuscitation: high-flow oxygen/intubation, arterial line placement, and norepinephrine for shock.",
    topicId: "valvular-heart-disease-endocarditis",
    children: [
      {
        id: "pocus-lesion-identification",
        label: "Perform Emergency Bedside Echocardiography (TTE / TEE)",
        kind: "branch",
        role: "assessment",
        detail: "Differentiate dominant valve pathology: Critical AS vs Acute MR vs Acute AR vs Prosthetic Valve Thrombosis.",
        children: [
          {
            id: "branch-critical-as",
            label: "Critical Aortic Stenosis (Vmax > 4 m/s, Mean Gradient > 40 mmHg)",
            kind: "step",
            role: "decision",
            detail: "Preload-dependent, non-compliant LV. Maintain high-normal SVR with phenylephrine/norepinephrine; maintain sinus rhythm 60–80 bpm; avoid inodilators.",
            children: [
              {
                id: "as-intervention-tavr-savr",
                label: "Activate Heart Valve Team: Urgent TAVR / SAVR or Bridge Balloon Valvuloplasty",
                kind: "step",
                role: "intervention",
                detail: "Emergency transcatheter or surgical valve intervention for refractory cardiogenic shock.",
              },
            ],
          },
          {
            id: "branch-acute-mr",
            label: "Acute Severe Mitral Regurgitation (Flail Leaflet / Papillary Rupture / Giant v-waves)",
            kind: "step",
            role: "decision",
            detail: "Aggressive afterload reduction (nitroprusside, clevidipine) + inotropy (dobutamine) + mechanical LV unloading (IABP/Impella).",
            children: [
              {
                id: "mr-intervention-surgery",
                label: "Emergency Cardiac Surgery: Mitral Valve Repair or Replacement",
                kind: "step",
                role: "intervention",
                detail: "Immediate operative repair for papillary muscle rupture or endocarditic destruction.",
              },
            ],
          },
          {
            id: "branch-acute-ar",
            label: "Acute Severe Aortic Regurgitation (Cusp Perforation / Aortic Dissection)",
            kind: "step",
            role: "decision",
            detail: "Afterload reduction + inotropes; maintain HR 85–105 bpm. IABP IS STRICTLY CONTRAINDICATED (worsens aortic reflux).",
            children: [
              {
                id: "ar-intervention-surgery",
                label: "Emergency Surgical Aortic Valve Replacement (SAVR) / Root Repair",
                kind: "step",
                role: "intervention",
                detail: "Immediate surgery before irreversible myocardial distension and cardiac arrest occur.",
              },
            ],
          },
          {
            id: "branch-prosthetic-thrombosis",
            label: "Obstructive Mechanical Valve Thrombosis (Loss of Clicks, High Gradient)",
            kind: "step",
            role: "decision",
            detail: "Evaluate surgical risk and thrombus size on TEE and cine-fluoroscopy.",
            children: [
              {
                id: "prosthetic-fibrinolysis-or-surgery",
                label: "Ultra-Slow Low-Dose tPA (25 mg over 25h per TROIA) vs Emergency Reoperation",
                kind: "step",
                role: "intervention",
                detail: "Fibrinolysis for high-risk surgical candidates / right-sided valves; surgery for large mobile thrombi.",
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "iabp-in-ar-danger", text: "IABP in Acute Aortic Regurgitation is lethal — balloon inflation in diastole forces massive retrograde blood flow directly into the non-compliant LV." },
    { id: "vasodilator-in-as-danger", text: "Pure vasodilators in Critical Aortic Stenosis cause sudden catastrophic coronary hypoperfusion and cardiac arrest." },
  ],
};
