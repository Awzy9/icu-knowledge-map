import type { Topic } from "@/content-types";

export const obstetricCriticalCare: Topic = {
  id: "obstetric-critical-care",
  slug: "obstetric-critical-care",
  title: "Obstetric Critical Care",
  category: "procedures",
  oneLiner: "Maternal physiology, preeclampsia/eclampsia, HELLP vs AFLP, postpartum hemorrhage (MTP/TXA), peripartum cardiomyopathy, and arrest.",
  status: "complete",
  lastReviewed: "2026-08-17",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter on Obstetric Critical Care and Maternal Emergencies",
    },
    {
      title: "Chest: Critical Care Medicine in Pregnancy",
      edition: "Multidisciplinary Critical Care Review Series",
      note: "Maternal Cardiopulmonary Adaptation and ICU Resuscitation",
    },
  ],
  currentStatus: "Current as of the 2020 ACOG Practice Bulletin 222, the 2023 SMFM Consult Series on Obstetric Hemorrhage, the 2018 ESC Pregnancy Cardiovascular Guidelines, and the Magpie, WOMAN, and CHAP Landmark Trials.",
  otherReferences: [
    "ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia. Obstet Gynecol. 2020;135(6):e237-e260.",
    "WOMAN Trial Collaborators. Effect of early tranexamic acid on death, hysterectomy, and other morbidities in women with post-partum haemorrhage. Lancet. 2017;389(10084):2105-2116.",
    "Magpie Trial Collaborative Group. Do women with pre-eclampsia benefit from magnesium sulphate? Lancet. 2002;359(9321):1877-1890.",
    "Tita AT, et al. Treatment for Mild Chronic Hypertension during Pregnancy (CHAP trial). N Engl J Med. 2022;386(19):1781-1792.",
    "Regitz-Zagrosek V, et al. 2018 ESC Guidelines for the management of cardiovascular diseases during pregnancy. Eur Heart J. 2018;39(34):3165-3241.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "shock", label: "Hemodynamic monitoring and oxygen delivery principles" },
    { type: "complication", targetId: "bleeding", label: "Massive postpartum hemorrhage and coagulopathy" },
    { type: "complication", targetId: "transfusion", label: "Obstetric massive transfusion protocols (MTP)" },
    { type: "differential", targetId: "dic", label: "Consumptive coagulopathy in abruption, AFE, and severe preeclampsia" },
    { type: "differential", targetId: "acute-liver-failure", label: "Acute Fatty Liver of Pregnancy (AFLP) and HELLP syndrome" },
    { type: "related-to", targetId: "pulmonary-embolism", label: "High-risk pregnancy-associated venous thromboembolism" },
    { type: "related-to", targetId: "sepsis", label: "Maternal sepsis and chorioamnionitis-induced septic shock" },
    { type: "related-to", targetId: "cardiogenic-shock", label: "Peripartum cardiomyopathy (PPCM) and acute pump failure" },
    { type: "related-to", targetId: "cardiac-arrest-post-arrest", label: "Maternal resuscitation and resuscitative hysterotomy" },
  ],
  sections: [
    {
      id: "obstetric-critical-care.overview",
      kind: "overview",
      title: "Overview",
      summary: "Obstetric critical care requires simultaneous evaluation of altered maternal physiology and fetal well-being, where aggressive maternal resuscitation is the single most effective intervention for fetal preservation.",
      provenance: "textbook",
      evidenceRefs: [
        { kind: "guideline", id: "preeclampsia-guideline-acog-2020", relevance: "ACOG guidance on preeclampsia and eclampsia management" },
        { kind: "guideline", id: "obstetric-hemorrhage-guideline-smfm-2023", relevance: "SMFM guidelines on obstetric hemorrhage resuscitation" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Critical illness complicates approximately 1–3% of pregnancies, with leading causes including severe preeclampsia/eclampsia, massive obstetric hemorrhage, maternal sepsis, amniotic fluid embolism (AFE), peripartum cardiomyopathy (PPCM), and acute pulmonary embolism. Managing the critically ill obstetric patient requires an intimate understanding of normal gestational physiological adaptations and a tightly coordinated multidisciplinary team (intensivist, maternal-fetal medicine specialist, obstetric anesthesiologist, neonatologist).",
        },
        {
          type: "paragraph",
          text: "The fundamental guiding principle in obstetric critical care is that maternal resuscitation takes absolute priority: optimizing maternal hemodynamics, oxygenation, and organ perfusion is the single most effective method to ensure fetal viability.",
        },
      ],
    },
    {
      id: "obstetric-critical-care.physiology",
      kind: "physiology",
      title: "Maternal Cardiopulmonary Adaptation & ICU Interpretation",
      summary: "Cardiovascular, respiratory, renal, and airway physiological shifts in pregnancy, and why standard non-pregnant normal lab ranges do not apply.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Normal pregnancy induces profound physiological adaptations that fundamentally alter the interpretation of vital signs, blood gases, and laboratory parameters in the ICU:",
        },
        {
          type: "list", ordered: false,
          items: [
            "Cardiovascular Adaptation: Plasma volume expands by 40–50%, cardiac output increases by 30–50% (via increased stroke volume and heart rate), and systemic vascular resistance (SVR) drops markedly. Resting blood pressure drops to a nadir in the second trimester.",
            "Aortocaval Compression: Beginning at 20 weeks gestation, the gravid uterus compresses the inferior vena cava and abdominal aorta when the patient is supine, reducing venous return by up to 30–40% and causing profound hypotension ('supine hypotensive syndrome'). In the ICU, all patients >= 20 weeks must be managed in the left lateral tilt position (15–30 degrees) or receive manual left uterine displacement (LUD).",
            "Respiratory Adaptation & ABG Interpretation: Progesterone stimulates the medullary respiratory center, increasing minute ventilation by 30–50% (primarily via tidal volume). This produces a normal physiological chronic respiratory alkalosis: PaCO2 is 28–32 mmHg, pH is 7.40–7.45, and serum HCO3 is 18–22 mEq/L. In a pregnant patient, a 'normal' non-pregnant PaCO2 of 40 mmHg represents severe respiratory acidosis and impending ventilatory arrest. Oxygen consumption (VO2) increases by 20–30%, while Functional Residual Capacity (FRC) decreases by 20%, resulting in rapid, precipitous arterial desaturation during apnea or intubation.",
            "Airway Edema & Mallampati Worsening: Estrogen-mediated hyperemia and mucosal edema narrow the glottic aperture and render pharyngeal tissues friable and prone to severe bleeding. Use a smaller endotracheal tube (6.5–7.0 mm), always have videolaryngoscopy ready, and prepare for a difficult airway.",
            "Renal Adaptation: Renal blood flow and GFR increase by 50%, resulting in lower normal baseline serum creatinine (0.4–0.6 mg/dL). A serum creatinine > 0.8–0.9 mg/dL represents clinically significant acute kidney injury.",
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.preeclampsia-severe-features-eclampsia",
      kind: "management",
      title: "Preeclampsia with Severe Features & Eclampsia",
      summary: "Diagnostic criteria, magnesium sulfate seizure prophylaxis (Magpie trial), acute antihypertensive protocols (CHAP trial), and delivery triggers.",
      provenance: "guideline",
      evidenceRefs: [
        { kind: "trial", id: "obstetric-magpie-trial", relevance: "Magpie trial proving magnesium sulfate halves eclampsia risk" },
        { kind: "trial", id: "obstetric-chap-trial", relevance: "CHAP trial establishing BP target < 140/90 in pregnancy" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Preeclampsia with severe features is new-onset hypertension (SBP >= 160 mmHg or DBP >= 110 mmHg) after 20 weeks gestation accompanied by end-organ dysfunction (thrombocytopenia < 100k, transaminitis > 2x ULN, severe RUQ pain, creatinine > 1.1 mg/dL, pulmonary edema, or new-onset visual/cerebral symptoms). Eclampsia is the occurrence of generalized tonic-clonic seizures in a preeclamptic patient.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Seizure Prophylaxis & Management (Magpie Trial): Magnesium Sulfate is first-line therapy (4–6 g IV loading dose over 15–20 minutes, followed by 1–2 g/h continuous IV infusion). Reduces eclampsia risk by 58% (RR 0.42, P < 0.0001). Monitor deep tendon reflexes, respiratory rate, and urine output. Have Calcium Gluconate (1 g IV over 3–5 minutes) immediately available at bedside for magnesium toxicity (loss of reflexes -> respiratory depression -> cardiac arrest).",
            "Urgent Antihypertensive Therapy: Target blood pressure 140–150 / 90–100 mmHg within 30–60 minutes to prevent hemorrhagic stroke. First-line IV agents: (1) Labetalol (20 mg IV initial, then 40–80 mg q10–20 min, max 300 mg); (2) Hydralazine (5–10 mg IV q20 min); (3) Nicardipine infusion (5–15 mg/h). Avoid nitroprusside (fetal cyanide poisoning) and ACE inhibitors/ARBs (fetotoxicity/renal agenesis).",
            "Definitive Therapy: Delivery of the fetus and placenta is the only definitive cure for preeclampsia, undertaken after maternal hemodynamic stabilization and seizure control.",
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.hellp-syndrome-thrombotic-microangiopathy",
      kind: "management",
      title: "HELLP Syndrome & Microangiopathy Differentiation Matrix",
      summary: "Differentiating HELLP from TTP, atypical HUS, AFLP, and DIC with a structured comparison matrix and target management.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) affects up to 10–20% of women with severe preeclampsia. Differentiating HELLP from other life-threatening pregnancy-associated thrombotic microangiopathies (TMAs) is essential because therapeutic pathways differ drastically.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "HELLP Syndrome",
              value: "Hemolysis (LDH > 600 U/L) • Transaminases (AST/ALT 100–500 U/L) • Platelets < 100,000/uL • Normal PT/PTT • Resolves within 48–72h postpartum • First-line: Prompt Delivery + Magnesium sulfate + BP control.",
            },
            {
              label: "TTP (Thrombotic Thrombocytopenic Purpura)",
              value: "Severe MAHA • Normal transaminases • Platelets profoundly low (< 20k) • Normal PT/PTT • Severe ADAMTS13 deficiency (< 10%) • First-line: Immediate Plasma Exchange (PLEX) + Corticosteroids + Caplacizumab (do NOT wait for delivery).",
            },
            {
              label: "Atypical HUS (aHUS)",
              value: "Severe MAHA • Normal transaminases • Severe Acute Kidney Injury predominant • Complement dysregulation • First-line: Eculizumab or Ravulizumab + supportive dialysis.",
            },
            {
              label: "Acute Fatty Liver of Pregnancy (AFLP)",
              value: "Microvesicular steatosis • Transaminases 300–1000 U/L • Marked Coagulopathy (low fibrinogen) • Profound Hypoglycemia, hyperammonemia • Swansea criteria >= 6 • First-line: Emergency Delivery + Continuous IV Dextrose + CRRT.",
            },
            {
              label: "Disseminated Intravascular Coagulation (DIC)",
              value: "Severe consumptive coagulopathy (prolonged PT/PTT, fibrinogen < 150 mg/dL, elevated D-dimer) • Secondary to abruption, AFE, sepsis, or massive PPH • First-line: Treat trigger + Obstetric MTP + Cryoprecipitate.",
            },
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.obstetric-hemorrhage-massive-transfusion",
      kind: "management",
      title: "Postpartum Hemorrhage & Obstetric MTP",
      summary: "Etiologies (4 Ts), Obstetric Massive Transfusion Protocol, Tranexamic Acid (WOMAN trial), fibrinogen thresholds, and uterine tamponade.",
      provenance: "guideline",
      evidenceRefs: [
        { kind: "trial", id: "obstetric-woman-trial", relevance: "WOMAN trial proving TXA reduces maternal death from bleeding" }
      ],
      body: [
        {
          type: "paragraph",
          text: "Postpartum Hemorrhage (PPH: cumulative blood loss >= 1000 mL or blood loss accompanied by signs/symptoms of hypovolemia within 24 hours of birth) is the leading cause of maternal ICU admission worldwide. Causes follow the '4 Ts': Tone (uterine atony, 70%), Tissue (retained placenta/membranes), Trauma (genital tract lacerations, uterine rupture), and Thrombin (pre-existing or acquired coagulopathy).",
        },
        {
          type: "list", ordered: false,
          items: [
            "Uterotonic Pharmacotherapy: Oxytocin (10–40 units IV infusion), Methylergonovine (0.2 mg IM; contraindicated in hypertension/preeclampsia), Carboprost / PGF2a (0.25 mg IM; contraindicated in asthma), Misoprostol (800–1000 mcg PR/buccal).",
            "Tranexamic Acid (WOMAN Landmark Trial): Administer Tranexamic Acid (TXA) 1 g IV over 10 minutes immediately upon diagnosis of PPH. A second 1 g dose is given if bleeding continues after 30 minutes. Gives significant reduction in death due to bleeding (RR 0.69 when given <= 3 hours, P = 0.008) without increasing thromboembolic complications.",
            "Obstetric Massive Transfusion Protocol (MTP): Balanced transfusion with PRBC, FFP, and Platelets in a 1:1:1 ratio. Maintain ionized calcium > 1.1–1.2 mmol/L. Normal pregnancy fibrinogen is high (400–600 mg/dL); a fibrinogen < 200–250 mg/dL indicates severe consumptive coagulopathy. Aggressively transfuse Cryoprecipitate (10–20 units) or Fibrinogen Concentrate to maintain fibrinogen > 200–250 mg/dL.",
            "Mechanical & Surgical Interventions: Intrauterine balloon tamponade (Bakri balloon), uterine compression sutures (B-Lynch), interventional radiology uterine artery embolization (UAE), bilateral hypogastric artery ligation, and emergency peripartum hysterectomy.",
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.peripartum-cardiomyopathy",
      kind: "management",
      title: "Peripartum Cardiomyopathy (PPCM)",
      summary: "Diagnostic criteria, acute pulmonary edema and cardiogenic shock management, bromocriptine therapy, and mechanical circulatory support.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Peripartum Cardiomyopathy (PPCM) is idiopathic heart failure with left ventricular systolic dysfunction (LVEF < 45%) presenting towards the end of pregnancy or in the months following delivery in the absence of other identifiable causes. Pathophysiology involves 16-kDa prolactin cleavage fragments and antiangiogenic signaling driving microvascular and myocardial injury.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Acute Heart Failure & Shock Management: Preload reduction with IV loop diuretics; afterload reduction with hydralazine and nitrates antepartum, or ACE inhibitors/ARNI (sacubitril/valsartan) postpartum. Inotropes (dobutamine or levosimendan) for low-output state. Avoid beta-blockers in acute decompensated pulmonary edema until stabilized.",
            "Bromocriptine Therapy: ESC guidelines recommend Bromocriptine (2.5 mg daily for 1 week in uncomplicated PPCM, or 2.5 mg BID for 2 weeks followed by 2.5 mg daily for 6 weeks in severe PPCM with LVEF < 25% or shock) to block prolactin release, accompanied by mandatory prophylactic anticoagulation (LMWH) due to high thrombotic risk.",
            "Anticoagulation: Severe LV dysfunction (LVEF <= 35%) combined with the hypercoagulable peripartum state carries extreme risk of LV mural thrombus and systemic embolization. Therapeutic anticoagulation with LMWH or UFH is mandatory.",
            "Mechanical Circulatory Support (MCS): Temporary MCS (Impella 5.5, VA-ECMO) for refractory cardiogenic shock serves as a highly successful bridge to myocardial recovery (which occurs in >50–70% of PPCM patients within 6 months) or heart transplantation.",
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.maternal-sepsis-shock",
      kind: "management",
      title: "Maternal Sepsis & Septic Shock",
      summary: "Pregnancy-specific sepsis scoring, pelvic/genital sources, Group A Strep toxic shock, and immediate antimicrobial resuscitation.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Maternal sepsis is life-threatening organ dysfunction resulting from infection during pregnancy, childbirth, post-abortion, or the postpartum period (up to 42 days). Classic sources include chorioamnionitis, septic abortion, postpartum endometritis, pyelonephritis, and necrotizing fasciitis.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Pathogens & Group A Streptococcus: *Streptococcus pyogenes* (GAS) causes fulminant, rapidly lethal necrotizing endometritis and toxic shock syndrome, often presenting with fever, severe pain out of proportion, and rapid hemodynamic collapse. Other common pathogens include *E. coli*, Group B Streptococcus, and anaerobes.",
            "Immediate Resuscitation (< 1 hour): Blood cultures (aerobic and anaerobic) and serum lactate; immediate broad-spectrum IV antibiotics (e.g., Piperacillin-tazobactam 4.5 g q6h + Vancomycin + Clindamycin 900 mg q8h for GAS toxin suppression); conservative crystalloid resuscitation; Norepinephrine titrated to maintain MAP >= 65 mmHg to ensure adequate uteroplacental perfusion.",
            "Urgent Source Control: Emergency dilatation and curettage (D&C) for retained infected products, percutaneous drainage of pelvic abscesses, or emergency laparotomy / hysterectomy for necrotizing myometritis.",
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.amniotic-fluid-embolism",
      kind: "management",
      title: "Amniotic Fluid Embolism (AFE)",
      summary: "Catastrophic anaphylactoid cardiopulmonary collapse, acute RV failure, fulminant DIC, supportive ICU bundle, and A-OK regimen.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Amniotic Fluid Embolism (AFE / Anaphylactoid Syndrome of Pregnancy) is an unpredictable, unpreventable obstetric emergency caused by entry of amniotic fluid and fetal antigens into the maternal circulation, triggering massive complement activation, pulmonary microvascular spasm, and systemic mast cell degranulation.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Classic Triad: (1) Sudden profound hypoxemic respiratory failure / ARDS; (2) Sudden cardiovascular collapse with acute right ventricular failure and pulmonary hypertension, progressing to left ventricular failure and shock; (3) Fulminant Disseminated Intravascular Coagulation (DIC) with catastrophic hemorrhage.",
            "Supportive ICU Bundle: Immediate endotracheal intubation with 100% FiO2; aggressive vasopressor (norepinephrine, vasopressin) and inotropic support (epinephrine, dobutamine); inhaled pulmonary vasodilators (inhaled epoprostenol or iNO) for acute RV failure; immediate activation of Obstetric MTP with aggressive cryoprecipitate replacement.",
            "A-OK Regimen (Supportive Pharmacotherapy): Atropine (1 mg IV to block vagal reflex), Ondansetron (8 mg IV to block 5-HT3 serotonin receptors and vagal spasm), and Ketorolac (30 mg IV to inhibit cyclooxygenase and thromboxane production) has emerged as an empirical supportive bundle in acute AFE cardiopulmonary collapse.",
            "Extracorporeal Life Support: VA-ECMO provides vital salvage hemodynamic support for refractory biventricular failure and shock as a bridge to pulmonary recovery.",
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.acute-fatty-liver-pregnancy",
      kind: "management",
      title: "Acute Fatty Liver of Pregnancy (AFLP)",
      summary: "Swansea diagnostic criteria, fetal fatty acid oxidation defects, profound hypoglycemia, coagulopathy, and immediate delivery.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Acute Fatty Liver of Pregnancy (AFLP) is a rare, life-threatening maternal hepatic emergency occurring in the third trimester or early postpartum, characterized by microvesicular steatosis of hepatocytes, frequently associated with a fetal defect in mitochondrial fatty acid beta-oxidation (long-chain 3-hydroxyacyl-CoA dehydrogenase LCHAD deficiency).",
        },
        {
          type: "list", ordered: false,
          items: [
            "Swansea Diagnostic Criteria (>= 6 of 14 features required): Vomiting, abdominal pain, polydipsia/polyuria, encephalopathy, elevated bilirubin (> 0.8 mg/dL), hypoglycemia (< 72 mg/dL), elevated uric acid (> 5.7 mg/dL), leukocytosis (> 11,000/uL), ascites or bright liver on ultrasound, elevated transaminases (AST/ALT > 42 U/L), elevated ammonia (> 47 umol/L), renal impairment (creatinine > 1.7 mg/dL), coagulopathy (PT > 14s or APPT > 34s), microvesicular steatosis on liver biopsy.",
            "Distinguishing Features: Unlike HELLP syndrome, AFLP causes profound hypoglycemia, severe coagulopathy with low fibrinogen, and marked hyperammonemia.",
            "Management: Immediate maternal stabilization, continuous high-dose IV dextrose infusion (10% or 50% dextrose to prevent fatal hypoglycemic coma), correction of coagulopathy, and immediate emergency delivery regardless of gestational age. Intensive ICU supportive care (CRRT for AKI/ammonia, mechanical ventilation, intracranial pressure monitoring for encephalopathy) until liver function regenerates.",
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.maternal-cardiac-arrest-resuscitative-hysterotomy",
      kind: "management",
      title: "Maternal Cardiac Arrest & Resuscitative Hysterotomy",
      summary: "ACLS modifications in pregnancy, continuous left uterine displacement, and the 4–5 minute perimortem cesarean delivery protocol.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Maternal cardiac arrest requires immediate execution of modified Advanced Cardiovascular Life Support (ACLS) and prompt decision-making regarding Resuscitative Hysterotomy (Perimortem Cesarean Delivery PMCD).",
        },
        {
          type: "list", ordered: false,
          items: [
            "Continuous Manual Left Uterine Displacement (LUD): Perform continuous one-handed or two-handed manual displacement of the uterus to the patient's left side to relieve aortocaval compression. Do NOT tilt the entire patient/backboard during active CPR, as lateral tilt significantly decreases chest compression depth and quality.",
            "Chest Compressions & Defibrillation: Position hands slightly higher on the sternum (due to elevated diaphragm). Use standard defibrillation energy doses (biphasic 120–200 J) and standard ACLS medications (epinephrine 1 mg q3–5 min, amiodarone)—pregnancy does not alter electrical or pharmacologic resuscitation protocols.",
            "The 4–5 Minute Resuscitative Hysterotomy Rule: If there is no Return of Spontaneous Circulation (ROSC) within 4 minutes of cardiac arrest in a pregnant woman with a fundal height at or above the umbilicus (>= 20 weeks gestation), perform immediate bedside Resuscitative Hysterotomy on site, with delivery completed by minute 5.",
            "Physiological Rationale: Emptying the uterus completely decompresses the IVC and abdominal aorta, immediately restoring maternal venous return and increasing maternal cardiac output during CPR by > 30–60%. It is primarily a maternal resuscitative intervention, while also maximizing survival for a viable fetus (>= 23–24 weeks). Do NOT waste time moving the patient to an operating room—perform bedside hysterotomy with a scalpel wherever CPR is occurring.",
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.monitoring",
      kind: "monitoring",
      title: "ICU Monitoring in Obstetric Critical Illness",
      summary: "Invasive arterial blood pressure monitoring, left lateral tilt, serial maternal blood gases, viscoelastic testing, and fetal heart rate monitoring.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "High-acuity maternal monitoring balances invasive hemodynamic tracking and gestational status.",
        },
        {
          type: "list", ordered: false,
          items: [
            "Invasive Arterial Line: Mandatory for severe hypertensive crises (titrating labetalol/nicardipine), shock states, and frequent blood gas sampling.",
            "Viscoelastic Hemostatic Assays (TEG / ROTEM): Essential in massive postpartum hemorrhage and amniotic fluid embolism to guide targeted fibrinogen, platelet, and plasma replacement.",
            "Serial Labs: CBC with platelets, fibrinogen, PT/PTT, AST/ALT, LDH, uric acid, creatinine, blood gas, and serum magnesium levels (therapeutic range 4.8–8.4 mg/dL or 2–3.5 mmol/L).",
            "Fetal Heart Rate Monitoring: Continuous external electronic fetal monitoring is indicated in viable gestational ages (>= 23–24 weeks) during maternal stabilization, provided it does not delay life-saving maternal interventions.",
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.complications",
      kind: "complications",
      title: "Complications & Red Lines",
      summary: "Eclamptic intracranial hemorrhage, catastrophic uterine rupture, acute liver rupture in HELLP, and maternal cardiac arrest.",
      provenance: "textbook",
      body: [
        {
          type: "list", ordered: false,
          items: [
            "Hemorrhagic Stroke: The leading cause of maternal death in preeclampsia/eclampsia, driven by uncontrolled systolic blood pressure >= 160 mmHg.",
            "Subcapsular Hepatic Hematoma Rupture: Severe complication of HELLP syndrome presenting with sudden right shoulder pain, severe shock, and hemoperitoneum, requiring emergency laparotomy / hepatic embolization.",
            "Fulminant Consumptive DIC: Severe hypofibrinogenemia (< 100 mg/dL) and diffuse microvascular bleeding following placental abruption or AFE.",
            "Hypoglycemic Coma & Encephalopathy: Fatal cerebral injury in unaddressed Acute Fatty Liver of Pregnancy.",
          ],
        },
      ],
    },
    {
      id: "obstetric-critical-care.pitfalls",
      kind: "complications",
      title: "Common Pitfalls & Clinical Pearls",
      summary: "Critical mistakes in managing the critically ill pregnant patient.",
      provenance: "textbook",
      body: [
        {
          type: "list", ordered: false,
          items: [
            "Misinterpreting Normal Pregnancy ABG: A PaCO2 of 40 mmHg in a pregnant patient is NOT normal—it represents severe respiratory acidosis and impending respiratory fatigue (normal pregnancy PaCO2 is 28–32 mmHg).",
            "Failing to Relieve Aortocaval Compression: Performing CPR or managing shock in a supine pregnant patient without Left Uterine Displacement reduces cardiac output by up to 40%. Always perform continuous manual LUD.",
            "Delaying Resuscitative Hysterotomy: Waiting beyond 4–5 minutes of cardiac arrest while trying further ACLS maneuvers drastically decreases maternal and fetal survival. Hysterotomy must be initiated at minute 4 at the bedside.",
            "Treating Preeclamptic Hypertension with Nitroprusside or ACE Inhibitors: Nitroprusside causes lethal fetal cyanide toxicity and ACE inhibitors/ARBs cause fetal renal agenesis. Use IV labetalol, hydralazine, or nicardipine.",
            "Withholding CTPA or Anticoagulation for Suspected PE: Fear of fetal radiation should never delay CT Pulmonary Angiography (fetal dose < 0.1 mGy, far below the 50 mGy safety threshold). Untreated PE is a leading cause of maternal mortality.",
          ],
        },
      ],
    },
  ],
};
