import type { Pathway } from "@/content-types";

export const aki: Pathway = {
  id: "aki",
  slug: "aki",
  title: "Acute Kidney Injury",
  oneLiner: "From confirming AKI to classifying it by mechanism.",
  startingProblem: "Rising Creatinine / Falling Urine Output",
  relatedTopicIds: [
      "aki",
      "crrt",
      "shock",
      "acid-base-disorders",
      "hyperkalemia"
    ],
  flow: {
    id: "confirm-aki",
    label: "Confirm AKI",
    kind: "step",
    detail: "A rise in serum creatinine or a fall in urine output meeting KDIGO criteria, compared against the patient's known baseline.",
    children: [
      {
        id: "review-exposures",
        label: "Review medications and imaging exposure",
        kind: "step",
        detail: "Nephrotoxins, recent IV contrast, NSAIDs, ACE inhibitors/ARBs, and any recent episode of hypotension.",
        children: [
          {
            id: "assess-volume-and-bladder",
            label: "Assess volume status and bladder",
            kind: "step",
            detail: "A bedside bladder scan or Foley catheter excludes obstruction quickly; also assess for hypovolemia versus volume overload.",
            children: [
              {
                id: "classify-by-mechanism",
                label: "Classify by mechanism",
                kind: "step",
                detail: "Prerenal, intrinsic, and postrenal causes are distinguished by perfusion status, urinalysis/sediment, and imaging.",
                children: [
                  {
                    id: "prerenal",
                    label: "Prerenal",
                    kind: "branch",
                    detail: "Renal hypoperfusion from hypovolemia, hypotension, or heart failure — typically reversible with restoration of perfusion.",
                    topicId: "shock",
                  },
                  {
                    id: "intrinsic",
                    label: "Intrinsic (e.g. acute tubular necrosis)",
                    kind: "branch",
                    detail: "Direct injury to the tubules, glomeruli, or interstitium — from prolonged hypoperfusion, nephrotoxins, or an inflammatory process.",
                    topicId: "aki",
                  },
                  {
                    id: "postrenal",
                    label: "Postrenal",
                    kind: "branch",
                    detail: "Urinary tract obstruction — confirm with a bladder scan and renal ultrasound.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "aki-dialysis-indications", text: "Hyperkalemia with ECG changes, refractory pulmonary edema, or severe uncorrectable acidosis in the setting of AKI — these are indications for urgent renal replacement therapy regardless of the creatinine trend." },
    { id: "aki-anuria-flank-pain", text: "Anuria with flank pain, or a solitary/transplanted kidney — obtain an urgent renal ultrasound to exclude obstruction." },
  ],
};
