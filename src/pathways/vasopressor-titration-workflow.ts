import type { Pathway } from "@/content-types";

export const vasopressorTitrationWorkflow: Pathway = {
  id: "vasopressor-titration-workflow",
  slug: "vasopressor-titration-workflow",
  title: "Vasopressor & Inotrope Initiation & Titration",
  oneLiner: "From first-line norepinephrine titration to multi-agent vasopressor escalation and inotrope selection.",
  startingProblem: "Vasodilatory Shock / Refractory Hypotension (MAP < 65)",
  relatedTopicIds: [
      "shock",
      "septic-shock",
      "cardiogenic-shock",
      "rv-failure",
      "obstructive-shock",
      "pulmonary-hypertension",
      "hypertensive-emergencies",
      "acute-heart-failure",
      "acute-aortic-syndromes",
      "arrhythmias",
      "acute-mesenteric-ischemia"
    ],
  flow: {
    id: "start-norepinephrine-first-line",
    label: "Initiate Norepinephrine as first-line vasopressor",
    kind: "step",
    role: "intervention",
    detail: "Start at 0.05 mcg/kg/min and titrate rapidly by 0.02–0.05 mcg/kg/min every 2–5 minutes to achieve target MAP 65–70 mmHg.",
    topicId: "shock",
    children: [
      {
        id: "check-norepi-dose-threshold",
        label: "Check Norepinephrine requirement: >= 0.25 mcg/kg/min?",
        kind: "branch",
        role: "decision",
        detail: "At moderate-to-high doses, add a second agent with an orthogonal mechanism of action to restore vascular tone and reduce adrenergic toxicity.",
        children: [
          {
            id: "add-vasopressin-fixed-dose",
            label: "Add Vasopressin at fixed non-titrated dose 0.03 U/min (or 0.04 U/min)",
            kind: "step",
            role: "intervention",
            detail: "V1a receptor agonist. Restores vascular sensitivity and enables significant Norepinephrine dose sparing.",
            children: [
              {
                id: "assess-cardiac-output-echo",
                label: "Perform bedside Echocardiography to evaluate cardiac output & LV/RV function",
                kind: "branch",
                role: "decision",
                detail: "Differentiate persistent pure vasoplegia from myocardial depression / septic cardiomyopathy.",
                topicId: "cardiogenic-shock",
                children: [
                  {
                    id: "myocardial-depression-dobutamine",
                    label: "Myocardial Dysfunction Present: Add Dobutamine (2.5–10 mcg/kg/min)",
                    kind: "step",
                    role: "intervention",
                    detail: "Inodilator targeting improved cardiac output and stroke volume. Monitor for tachycardia and arrhythmia.",
                  },
                  {
                    id: "persistent-vasoplegia-epinephrine-steroids",
                    label: "Refractory Vasoplegia: Add Epinephrine & IV Hydrocortisone (200 mg/day)",
                    kind: "step",
                    role: "intervention",
                    detail: "Epinephrine (0.05–0.2 mcg/kg/min) provides potent alpha-1/beta-1 support. Stress-dose steroids restore vascular responsiveness.",
                  },
                ],
              },
            ],
          },
          {
            id: "low-dose-norepi-adequate",
            label: "MAP >= 65 achieved on Norepinephrine alone (<0.25 mcg/kg/min)",
            kind: "step",
            role: "reassessment",
            detail: "Maintain MAP target, monitor perfusion parameters (lactate, urine output, CRT), and begin stepwise weaning as vasoplegia resolves.",
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "vaso-excessive-peripheral-ischemia", text: "Severe peripheral cyanosis or digital ischemia on high-dose vasopressors — evaluate for hypovolemia or cardiogenic collapse requiring cardiac output support rather than pure vasoconstriction." },
    { id: "vaso-sudden-arrhythmia", text: "New rapid atrial fibrillation or ventricular ectopy during vasopressor escalation — consider changing to vasopressin/phenylephrine and addressing electrolyte/ischemic triggers." },
  ],
};
