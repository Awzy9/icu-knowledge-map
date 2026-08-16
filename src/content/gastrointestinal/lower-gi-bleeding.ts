import type { Topic } from "@/content-types";

export const lowerGiBleeding: Topic = {
  id: "lower-gi-bleeding",
  slug: "lower-gi-bleeding",
  title: "Lower Gastrointestinal Bleeding (LGIB)",
  category: "gi-hepatic",
  oneLiner: "Risk stratification, the massive hematochezia upper GI rule-out, CTA localization, catheter embolization, and restrictive transfusion strategy.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 78: Acute Lower Gastrointestinal Bleeding and Colonic Hemorrhage"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 44: Severe Gastrointestinal Bleeding in the ICU"
    }
  ],
  currentStatus: "Current as of the 2023 ACG Clinical Guideline on Management of Patients With Acute Lower Gastrointestinal Bleeding.",
  otherReferences: [
    "Sengupta N, et al. Management of Patients With Acute Lower Gastrointestinal Bleeding: An Updated ACG Guideline. Am J Gastroenterol. 2023;118(2):208-231.",
    "Oakland K, et al. Diagnosis and management of acute lower gastrointestinal bleeding: guidelines from the British Society of Gastroenterology. Gut. 2019;68(5):776-789."
  ],
  relationships: [
    { type: "differential", targetId: "upper-gi-bleeding", label: "Brisk hematochezia rule: 10-15% of massive lower GI bleeding originates from an upper GI source" },
    { type: "prerequisite", targetId: "bleeding", label: "Damage control resuscitation and transfusion thresholds" },
    { type: "complication", targetId: "acute-mesenteric-ischemia", label: "Ischemic colitis and bowel infarction secondary to hemodynamic collapse" },
    { type: "related-to", targetId: "anticoagulation", label: "Emergency reversal of DOACs and warfarin in severe active hemorrhage" }
  ],
  sections: [
    {
      id: "lower-gi-bleeding.overview",
      kind: "overview",
      title: "Clinical Spectrum & Hemodynamic Presentation",
      summary: "Acute Lower Gastrointestinal Bleeding (LGIB) refers to blood loss originating distal to the ligament of Treitz (primarily the colon and rectum). In the ICU, severe LGIB presents as massive hematochezia, hemorrhagic shock, or rapid hemoglobin drop.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "lgib-guideline-acg-2023",
          relevance: "2023 ACG Guideline on acute lower gastrointestinal bleeding risk stratification, diagnostic algorithm, and interventional timing"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "Acute LGIB accounts for approximately 20% to 30% of all major GI bleeding admissions. While 80% to 85% of LGIB episodes self-terminate, massive LGIB in critically ill or anticoagulated patients carries substantial mortality. Diverticular hemorrhage (30-50%) and angiodysplasia (20-30%) represent the most frequent etiologies, followed by ischemic colitis, post-polypectomy bleeding, and rectal ulcers."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Diverticular Bleeding (30-50%)", value: "Painless, abrupt, large-volume arterial bleeding from ruptured vasa recta at the diverticulum neck; 75-80% self-terminate spontaneously, but recurrence rate is 25-40%." },
            { label: "Angiodysplasia / Vascular Ectasias (20-30%)", value: "Painless, low-pressure venous bleeding occurring in elderly patients, frequently in the cecum/right colon; strongly associated with aortic stenosis (Heyde syndrome) and ESRD/LVAD." },
            { label: "Ischemic Colitis (10-20%)", value: "Painful hematochezia with crampy abdominal pain following a transient hypotensive/hypoperfusion event; typically affects watershed zones (Griffith's point at splenic flexure, Sudeck's point at rectosigmoid)." },
            { label: "Anorectal & Stomal Lesions (5-10%)", value: "Hemorrhoidal bleeding, rectal stercoral ulceration in bedbound ICU patients, or radiation proctopathy." }
          ]
        }
      ]
    },
    {
      id: "lower-gi-bleeding.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Approach: Risk Stratification & The UGIB Rule-Out",
      summary: "Use the Oakland Score to identify high-risk patients. In hemodynamically unstable massive hematochezia, always exclude an upper GI bleeding source before proceeding to colonoscopy.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Diagnostic evaluation must simultaneously assess bleeding severity, hemodynamic stability, and the anatomical source."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Oakland Risk Score", value: "Validated risk score (evaluates age, sex, prior LGIB admission, digital rectal exam findings, heart rate, SBP, and hemoglobin). A score <= 8 identifies safe outpatient discharge; score > 8 requires inpatient ICU admission and aggressive workup." },
            { label: "CRITICAL PITFALL: The Brisk UGIB Rule", value: "In 10% to 15% of patients presenting with massive, brisk hematochezia accompanied by shock (SBP < 90, orthostasis, tachycardia), the bleeding source is actually an UPPER GI SOURCE (e.g., massive duodenal ulcer eroding into gastroduodenal artery). If shock is present, perform immediate nasogastric aspirate or urgent EGD before lower GI investigations." },
            { label: "CT Angiography (CTA)", value: "First-line diagnostic imaging of choice in hemodynamically unstable patients or patients with active ongoing bleeding: Detects bleeding rates >= 0.3-0.5 mL/min. Rapid, non-invasive, and provides precise anatomical vascular roadmap for subsequent catheter embolization." },
            { label: "Catheter Angiography & Embolization", value: "Diagnostic and therapeutic modality of choice for massive active bleeding: Detects bleeding >= 0.5-1.0 mL/min and allows immediate superselective transcatheter arterial embolization (TAE) with microcoils or gel foam." },
            { label: "Colonoscopy Timing", value: "Indicated in hemodynamically stable patients following rapid oral purge with 4-6 L polyethylene glycol (PEG) solution. Urgent colonoscopy without prep carries high risk of perforation and poor visualization." }
          ]
        }
      ]
    },
    {
      id: "lower-gi-bleeding.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Lower GI Hemorrhage",
      summary: "Systematic differentiation between arterial diverticular bleed, venous ectasias, inflammatory colitis, and anorectal trauma.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Upper GI Bleeding with Rapid Transit: Duodenal ulcer or aortoenteric fistula presenting with bright red blood per rectum; elevated BUN-to-creatinine ratio (>30:1) strongly suggests an upper source.",
            "Ischemic Colitis: Painful bloody diarrhea with severe abdominal cramping after hypotension or surgery; contrast CT shows thumbprinting and segmental bowel wall thickening.",
            "Inflammatory Bowel Disease (IBD): Severe active ulcerative colitis or Crohn's flare with fever, bloody mucoid diarrhea, tenesmus, and elevated inflammatory markers.",
            "Stercoral Rectal Ulceration: Occurs in obtunded, constipated, or immobilized ICU patients due to impacted fecalomas causing pressure necrosis of the rectal mucosa and massive venous/arterial bleeding."
          ]
        }
      ]
    },
    {
      id: "lower-gi-bleeding.management",
      kind: "management",
      title: "Resuscitation, Transfusion & Interventional Strategy",
      summary: "Restrictive transfusion (Hb target 7-8 g/dL), immediate correction of coagulopathy, and superselective transcatheter arterial embolization.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Hemodynamic Resuscitation: Place two large-bore peripheral IV lines (14-16G) or central venous catheter. Resuscitate with balanced crystalloids to restore perfusion (MAP >= 65 mmHg).",
            "Restrictive Transfusion Strategy: Maintain a restrictive red blood cell transfusion threshold (target hemoglobin 7.0 to 8.0 g/dL in general ICU patients, or 8.0 g/dL in patients with active acute coronary syndrome; TRICC trial). Liberal transfusion increases portal and systemic venous pressures, worsening rebleeding.",
            "Anticoagulation Reversal: In life-threatening active hemorrhage, urgently reverse vitamin K antagonists with 4-factor prothrombin complex concentrate (4F-PCC) + IV Vitamin K (target INR < 1.5-2.0). Reverse Direct Oral Anticoagulants (DOACs) with specific reversal agents: Idarucizumab for dabigatran, Andexanet alfa or 4F-PCC (50 IU/kg) for apixaban/rivaroxaban.",
            "Endovascular Catheter Embolization: Superselective microcatheter embolization of the bleeding vessel branches is first-line for CTA-positive active hemorrhage. Modern microcoil/gelfoam techniques have >90% technical success with <5% risk of colonic infarction.",
            "Surgical Intervention (Last Resort): Segmental colectomy or subtotal colectomy is reserved strictly for refractory massive hemorrhage failing multiple transcatheter and endoscopic interventions. Preoperative localization with CTA/angiography is critical to avoid blind 'blind' subtotal colectomy with high morbidity."
          ]
        }
      ]
    },
    {
      id: "lower-gi-bleeding.monitoring",
      kind: "monitoring",
      title: "ICU Monitoring & Serial Assessment",
      summary: "Continuous hemodynamic monitoring, serial hemoglobin checks, and detection of early rebleeding.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Serial Hemoglobin & Hematocrit", value: "Check complete blood count every 4-6 hours until stable for 24 hours. Be aware that acute blood loss may not immediately reflect in hemoglobin until volume equilibration occurs." },
            { label: "Continuous Telemetry & Blood Pressure", value: "Continuous arterial line monitoring in active massive bleeders to identify orthostatic drops or sudden rebleeding tachycardia." },
            { label: "Post-Embolization Abdominal Surveillance", value: "Frequent abdominal examinations and serial lactate checks post-embolization to detect signs of bowel ischemia or micro-perforation." }
          ]
        }
      ]
    },
    {
      id: "lower-gi-bleeding.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of hemorrhagic shock, treatment-related bowel ischemia, and escalation criteria.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Immediate", value: "Hemorrhagic hypovolemic shock, acute myocardial ischemia (type 2 MI from severe anemia), aspiration during massive hematochezia or colonoscopy prep." },
            { label: "Treatment-Related", value: "Bowel infarction/stricture post-catheter embolization, contrast-induced nephropathy from CTA, fluid overload from over-transfusion, perforation during unprepared urgent colonoscopy." },
            { label: "Late / Delayed", value: "Early rebleeding within 30 days (up to 20-30% in diverticular disease), thromboembolism following complete reversal of necessary anticoagulation." },
            { label: "Escalation Triggers", value: "Ongoing transfusion requirement > 4 units PRBCs in 24 hours; refractory hypotension despite embolization; development of peritonitis or severe lactic acidosis indicating bowel infarction." }
          ]
        }
      ]
    }
  ]
};
