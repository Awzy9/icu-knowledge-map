import type { Topic } from "@/content-types";

export const statusEpilepticus: Topic = {
  id: "status-epilepticus",
  slug: "status-epilepticus",
  title: "Status Epilepticus",
  category: "neurology",
  oneLiner: "Recognition and time-sensitive escalation of care for prolonged or repeated seizures.",
  status: "complete",
  lastReviewed: "2026-08-14",
  version: "1.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
    },
  ],
  currentStatus: "Current as of the 2016 American Epilepsy Society treatment guideline for established convulsive status epilepticus. The 2016 guideline explicitly does not address refractory status epilepticus treatment in detail; a 2020 AES Treatments Committee comprehensive review addresses that gap but with a lower evidence base than the initial-treatment steps.",
  otherReferences: ["Trinka E, et al. A definition and classification of status epilepticus – Report of the ILAE Task Force on Classification of Status Epilepticus. Epilepsia. 2015;56(10):1515-1523."],
  relationships: [
    { type: "prerequisite", targetId: "altered-consciousness", label: "Foundational coma evaluation" },
    { type: "complication", targetId: "hypercapnic-respiratory-failure", label: "Airway/ventilatory compromise during prolonged seizure or sedation for treatment" },
    { type: "related-to", targetId: "intracranial-hypertension", label: "Massive cerebral hypermetabolism and ICP elevation" },
    { type: "related-to", targetId: "brain-death", label: "Exclusion of reversible seizure activity before determination" },
    { type: "related-to", targetId: "hyperkalemia", label: "Electrolyte derangement precipitant and rhabdomyolysis complication" },
  ],
  sections: [
    {
      id: "status-epilepticus.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "status-epilepticus-guideline-aes-2016",
          relevance: "American Epilepsy Society guideline on treatment of status epilepticus"
        },
        {
          kind: "trial",
          id: "status-epilepticus-esett",
          relevance: "ESETT landmark trial establishing equal efficacy of levetiracetam, fosphenytoin, and valproate"
        },
        {
          kind: "trial",
          id: "status-rampart-trial",
          relevance: "RAMPART trial establishing IM midazolam as first-line prehospital status epilepticus therapy"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "A time-based operational definition drives urgency: treatment should begin well before the traditional 30-minute definition, because delay worsens both seizure control and outcome.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Status epilepticus is a neurologic emergency in which a seizure fails to self-terminate or seizures recur without full recovery between them. The modern operational definition (ILAE 2015) sets treatment initiation at 5 minutes of continuous or repeated convulsive activity — far shorter than the older 30-minute definition — reflecting evidence that both seizure self-termination becomes less likely and the risk of neuronal injury rises the longer a seizure continues untreated.",
        },
      ],
    },
    {
      id: "status-epilepticus.definition",
      kind: "definition",
      title: "Definition",
      summary: "t1 (5 minutes) is when treatment should start; t2 (30 minutes) is when ongoing seizure activity risks long-term consequences.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "t1 — treatment threshold", value: "5 minutes of continuous convulsive seizure activity, or recurrent seizures without full recovery of consciousness between them — treatment should begin at this point, not be delayed to the traditional 30-minute mark." },
            { label: "t2 — risk-of-harm threshold", value: "30 minutes — beyond this, ongoing convulsive status epilepticus carries a substantial risk of long-term neuronal injury and worse outcome." },
          ],
        },
      ],
    },
    {
      id: "status-epilepticus.diagnosis",
      kind: "diagnosis",
      title: "Diagnosis",
      summary: "Convulsive SE is usually clinically obvious; a persistently altered patient after apparent seizure cessation needs EEG to exclude nonconvulsive status epilepticus.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Convulsive status epilepticus is a clinical diagnosis based on witnessed, ongoing motor seizure activity meeting the time criteria above.",
            "If motor activity stops but the patient does not return to baseline mental status within the expected postictal interval, obtain EEG to evaluate for nonconvulsive status epilepticus — this is easy to miss without EEG and should be actively considered, not assumed to be a prolonged postictal state (see Altered Consciousness).",
            "Search for a precipitant in parallel with treatment: fingerstick glucose, electrolytes (including sodium and calcium), toxicology screen, antiepileptic drug levels if applicable, and — once stable — neuroimaging and, if indicated, evaluation for CNS infection.",
          ],
        },
      ],
    },
    {
      id: "status-epilepticus.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Continuous Motor Activity & Coma",
      summary: "Differentiate status epilepticus from psychogenic non-epileptic seizures, generalized myoclonus post-arrest, and toxic tremors.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Psychogenic Non-Epileptic Seizures (PNES): Asynchronous limb thrashing, pelvic thrusting, forced eye closure with resistance, lack of post-ictal stertorous breathing, normal continuous EEG.",
            "Post-Cardiac Arrest Myoclonus: Generalized rhythmic jerking in comatose post-cardiac arrest patients; differentiated on EEG (generalized periodic discharges vs cortical reflex myoclonus vs Lance-Adams action myoclonus).",
            "Severe Rigors / Shivering / Toxic Tremor: Shivering during targeted temperature management or severe sympathomimetic / serotonin syndrome clonus; no epileptiform activity on EEG.",
            "Nonconvulsive Status Epilepticus (NCSE): Persistent profound coma or subtle facial/ocular twitching following termination of convulsive status; confirmed by Salzburg criteria on continuous EEG."
          ]
        }
      ]
    },
    {
      id: "status-epilepticus.management",
      kind: "management",
      title: "Management",
      summary: "A time-staged algorithm — benzodiazepine first, then a second-line loading agent, then anesthetic infusion for refractory disease — with each stage started promptly rather than waiting to see if the prior stage 'might still work.'",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Simultaneously secure the airway/breathing/circulation, check glucose, and begin pharmacologic treatment — these run in parallel, not in sequence.",
        },
      ],
      children: [
        {
          id: "status-epilepticus.management.initial",
          kind: "management-subnode",
          title: "Initial Therapy (Benzodiazepine)",
          summary: "An adequately dosed benzodiazepine, given promptly, is the evidence-based first step.",
          provenance: "guideline",
          body: [
            {
              type: "list",
              ordered: false,
              items: [
                "IV lorazepam, IV diazepam, or IM midazolam (when IV access is not yet available) are all Level A (established effective) first-line options per the 2016 AES guideline.",
                "Under-dosing is a common, avoidable error — use a weight-based adequate dose rather than an arbitrarily small one out of caution.",
              ],
            },
          ],
        },
        {
          id: "status-epilepticus.management.second-line",
          kind: "management-subnode",
          title: "Second-Line Therapy",
          summary: "A loading dose of fosphenytoin, valproic acid, or levetiracetam if seizures continue after benzodiazepine — no single agent has been shown superior.",
          provenance: "guideline",
          body: [
            {
              type: "paragraph",
              text: "If seizures continue after adequate benzodiazepine dosing, give a loading dose of IV fosphenytoin/phenytoin (Level A), valproic acid (Level C), or levetiracetam (evidence rated indeterminate in the 2016 guideline, though it is very widely used in practice given its favorable side-effect profile). The 2016 guideline does not establish superiority of one second-line agent over the others — this was subsequently tested directly in the ESETT trial (see Landmark Trials), which found no meaningful difference between the three.",
            },
            {
              type: "callout",
              tone: "trial",
              text: "ESETT (2019) directly compared levetiracetam, fosphenytoin, and valproate as second-line therapy and found no significant difference in seizure termination or adverse events — choice among them can reasonably be guided by infusion time, side-effect profile, and renal/hepatic considerations rather than an expected efficacy difference.",
              evidenceId: "status-epilepticus-esett",
            },
          ],
        },
        {
          id: "status-epilepticus.management.refractory",
          kind: "management-subnode",
          title: "Refractory Status Epilepticus",
          summary: "Continuous anesthetic infusion (midazolam, propofol, or pentobarbital) with continuous EEG monitoring — this stage has a weaker evidence base than initial treatment.",
          provenance: "textbook",
          body: [
            {
              type: "paragraph",
              text: "Seizures continuing approximately 40 minutes after presentation, despite an adequate benzodiazepine and a second-line agent, define refractory status epilepticus. The 2016 AES guideline explicitly does not address this stage in detail; management is generally intubation for airway protection, a continuous IV anesthetic infusion (midazolam, propofol, or pentobarbital), and continuous EEG monitoring to titrate therapy and confirm seizure control — an approach grounded in a smaller evidence base (case series and expert consensus, summarized in a 2020 AES Treatments Committee review) than the initial treatment steps.",
            },
            {
              type: "callout",
              tone: "caution",
              text: "Be explicit that refractory-stage management is comparatively less evidence-based than initial benzodiazepine/second-line therapy — do not present continuous infusion choice or target (e.g. burst suppression) as settled by high-quality trial evidence.",
            },
          ],
        },
      ],
    },
    {
      id: "status-epilepticus.monitoring",
      kind: "monitoring",
      title: "Monitoring",
      summary: "Continuous EEG is the central monitoring tool once seizure activity is not clinically obvious — clinical exam alone cannot confirm electrographic seizure control.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Continuous EEG monitoring for any patient who required a second-line agent or anesthetic infusion, or whose mental status does not clearly track with clinically apparent seizure control — motor activity stopping does not confirm electrographic seizure termination.",
            "For refractory status epilepticus on a continuous anesthetic infusion, EEG guides both confirmation of seizure control and, when a burst-suppression or seizure-suppression target is used, titration of the infusion — though the optimal EEG target itself is not established by high-quality trial evidence (see Refractory Status Epilepticus).",
            "Trend hemodynamics and respiratory status closely during and after each escalation step (benzodiazepine, second-line load, anesthetic infusion), since each carries dose-dependent risk of hypotension and respiratory depression.",
            "Monitor core temperature, creatine kinase, and renal function if seizure activity has been prolonged, given the risk of hyperthermia and rhabdomyolysis.",
            "Once seizures are controlled, trend antiepileptic drug levels where applicable and reassess the precipitant workup — ongoing altered consciousness after apparent seizure control should prompt repeat EEG rather than being attributed to a prolonged postictal state (see Altered Consciousness).",
          ],
        },
      ],
    },
    {
      id: "status-epilepticus.complications",
      kind: "complications",
      title: "Complications",
      summary: "Airway compromise and hypoxemia during the seizure/sedation, and, with prolonged seizure activity, direct neuronal injury.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Airway compromise, aspiration, and hypoxemia during active convulsions or from the sedating effect of treatment.",
            "Hyperthermia, rhabdomyolysis, and lactic acidosis from prolonged muscular activity.",
            "Direct neuronal injury with prolonged (beyond ~30 minutes) uncontrolled seizure activity.",
            "Hemodynamic instability and respiratory depression from high-dose benzodiazepines, second-line agents, or anesthetic infusions used to achieve seizure control.",
          ],
        },
      ],
    },
    {
      id: "status-epilepticus.guidelines",
      kind: "guidelines",
      title: "Guidelines",
      summary: "The 2016 AES guideline is current for initial/established SE treatment; it does not cover refractory SE in detail.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The 2016 American Epilepsy Society guideline provides Level A/B/C evidence-graded recommendations for first- and second-line treatment of established convulsive status epilepticus, using a four-phase, time-based treatment algorithm.",
        },
      ],
    },
    {
      id: "status-epilepticus.landmark-trials",
      kind: "landmark-trials",
      title: "Landmark Trials",
      summary: "ESETT directly compared the three second-line agents and found no meaningful difference between them.",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "The 2016 AES guideline could not recommend one second-line agent over another because the evidence at that time was largely indirect. ESETT (2019) tested levetiracetam, fosphenytoin, and valproate directly, head-to-head, in a response-adaptive randomized trial that was stopped early for futility on the primary comparison — it found similar rates of seizure termination and similar adverse event rates across all three, without identifying a superior agent.",
        },
        {
          type: "callout",
          tone: "trial",
          text: "A neutral, stopped-early comparative-effectiveness trial supports treating the three second-line agents as reasonable alternatives rather than establishing them as truly interchangeable in every clinical scenario — the trial was powered to detect a difference, not to formally prove equivalence.",
          evidenceId: "status-epilepticus-esett",
        },
      ],
    },
    {
      id: "status-epilepticus.pitfalls",
      kind: "controversies",
      title: "Critical Care Status Epilepticus Pitfalls & Practice Red Lines",
      summary: "High-yield bedside errors including under-dosing benzodiazepines, delayed escalation, and missing non-convulsive status.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Benzodiazepine Under-Dosing", value: "Giving sub-therapeutic initial benzodiazepine doses (e.g. 1-2 mg lorazepam instead of the guideline-recommended 0.1 mg/kg or 4 mg IV bolus); under-dosing fails to terminate seizures while promoting GABA-A receptor internalization and pharmacoresistance (RAMPART trial)." },
            { label: "Pitfall: Repeating Ineffective Benzodiazepines", value: "Administering repeated rounds of benzodiazepines beyond 10-15 minutes instead of immediately loading a full-dose second-line non-sedating ASM (ESETT trial); delays time to definitive seizure cessation while precipitating severe respiratory depression." },
            { label: "Pitfall: Equating Motor Cessation to Control", value: "Assuming status epilepticus is terminated when overt motor convulsions cease; up to 30-40% of patients transition into Non-Convulsive Status Epilepticus (NCSE), which requires continuous EEG to detect and treat." },
            { label: "Pitfall: Delaying Intubation & Continuous Anesthesia", value: "Hesitating to initiate continuous IV anesthetic infusions (propofol, midazolam, or ketamine) with endotracheal intubation when seizures persist beyond 30-60 minutes; prolonged refractory status causes irreversible excitotoxic neuronal loss." },
            { label: "Pitfall: Missing Reversible Metabolic/Toxic Triggers", value: "Failing to check immediate point-of-care glucose, sodium, calcium, and toxicology screen (including cefepime or carbapenem neurotoxicity in renal failure)." }
          ]
        }
      ]
    }
  ],
};
