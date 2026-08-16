import type { Topic } from "@/content-types";

export const burnsCriticalCare: Topic = {
  id: "burns-critical-care",
  slug: "burns-critical-care",
  title: "Burns & Major Burn Critical Care",
  category: "procedures",
  oneLiner: "Inhalation injury management, endpoint-driven fluid resuscitation, avoidance of fluid creep, bedside escharotomy, and hypermetabolic catabolism support.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 134: Critical Care Management of the Burned Patient"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 70: Management of Severe Burns and Inhalation Injury"
    }
  ],
  currentStatus: "Current as of the 2023 American Burn Association (ABA) / ISBI Practice Guidelines for Burn Care.",
  otherReferences: [
    "American Burn Association. Guidelines for the Management of Thermal and Inhalation Burns. J Burn Care Res. 2023;44(3):515-532.",
    "Greenhalgh DG. Management of Resuscitation in the Burn Patient. Surg Clin North Am. 2014;94(4):717-730."
  ],
  relationships: [
    { type: "prerequisite", targetId: "shock", label: "Burn shock pathophysiology: systemic capillary leak and hypovolemia" },
    { type: "prerequisite", targetId: "airway-management-rsi", label: "Immediate endotracheal intubation before upper airway edema obliterates landmarks" },
    { type: "differential", targetId: "toxicologic-emergencies", label: "Carbon monoxide (CO) and cyanide toxicity in enclosed-space smoke inhalation" },
    { type: "complication", targetId: "ards", label: "Acute respiratory distress syndrome secondary to chemical tracheobronchitis and burn shock" }
  ],
  sections: [
    {
      id: "burns-critical-care.overview",
      kind: "overview",
      title: "The Triad of Major Burn Pathophysiology",
      summary: "Major burns (>= 20% Total Body Surface Area [TBSA]) trigger a biphasic physiological response: (1) an immediate 'Burn Shock' phase (0-48h) characterized by massive systemic capillary leak and hypovolemia, followed by (2) a prolonged 'Hypermetabolic Phase' (days-weeks) of extreme catabolism and immunosuppression.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "burns-guideline-aba-isbi-2023",
          relevance: "ABA/ISBI 2023 Clinical Practice Guidelines on resuscitation titration, inhalation injury, and escharotomy"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "Thermal injury to >=20% TBSA produces extensive release of inflammatory mediators (histamine, prostaglandins, thromboxanes, oxygen radicals), leading to generalized systemic capillary hyperpermeability in both burned and unburned tissues. Fluid resuscitation must restore intravascular volume while avoiding over-resuscitation ('fluid creep') that leads to abdominal and extremity compartment syndromes."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Superficial (1st Degree)", value: "Involves epidermis only (sunburn): Erythematous, painful, dry, NO blisters. Excluded from TBSA calculation for fluid resuscitation." },
            { label: "Partial Thickness (2nd Degree)", value: "Superficial partial: Blisters, moist, red, exquisitely painful. Deep partial: Pale, waxy, dry, reduced sensation. Included in TBSA calculation." },
            { label: "Full Thickness (3rd Degree)", value: "Destruction of entire epidermis and dermis into subcutaneous fat: Leathery, dry, white/charred, completely insensate. Requires surgical excision and skin grafting." },
            { label: "4th Degree", value: "Involves underlying fascia, muscle, tendon, and bone. Requires extensive debridement and potential amputation." }
          ]
        }
      ]
    },
    {
      id: "burns-critical-care.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Assessment: TBSA Estimation & Inhalation Injury",
      summary: "Accurate TBSA estimation (Rule of Nines / Lund-Browder) and immediate evaluation for smoke inhalation and toxic gas poisoning.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Rule of Nines (Adult Estimation)", value: "Head 9%, Each Arm 9%, Anterior Trunk 18%, Posterior Trunk 18%, Each Leg 18%, Perineum 1%. Use Lund-Browder chart for precise calculation and pediatric patients (where head is larger)." },
            { label: "Inhalation Injury Diagnosis", value: "Suspect with: Fire in enclosed space, facial burns, singed nasal vibrissae, carbonaceous sputum, hoarseness, stridor. Gold standard: Bedside fiberoptic bronchoscopy showing soot deposition, mucosal erythema, ulceration, and necrosis." },
            { label: "Carbon Monoxide (CO) & Cyanide Co-Toxicity", value: "Check co-oximetry ABG for carboxyhemoglobin (COHb). Normal pulse oximetry (SpO2) CANNOT distinguish oxyhemoglobin from carboxyhemoglobin. Treat CO with 100% FiO2 (reduces half-life from 300 to 60 min). For unexplained severe lactic acidosis (>8-10 mmol/L) from house fires, administer IV Hydroxocobalamin 5 g for acute cyanide poisoning." }
          ]
        }
      ]
    },
    {
      id: "burns-critical-care.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Severe Cutaneous Loss",
      summary: "Differentiate thermal burns from toxic epidermal necrolysis, staphylococcal scalded skin syndrome, and necrotizing fasciitis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Toxic Epidermal Necrolysis (TEN / SJS): Drug-induced epidermal detachment, positive Nikolsky sign, prominent mucous membrane involvement (lips, conjunctiva, genitalia); managed in burn ICU.",
            "Staphylococcal Scalded Skin Syndrome (SSSS): Toxin-mediated superficial cleavage plane, typically in pediatric patients; spares mucosal membranes.",
            "Necrotizing Soft Tissue Infections (NSTI): Severe pain out of proportion, rapidly spreading erythema, gas/crepitus in subcutaneous tissues; requires emergent fasciotomy.",
            "Chemical / Electrical Burns: Chemical requires continuous copious water irrigation; electrical burns produce massive deep tissue/muscle necrosis (rhabdomyolysis) with minimal superficial skin injury."
          ]
        }
      ]
    },
    {
      id: "burns-critical-care.management-resuscitation",
      kind: "management",
      title: "Modern Fluid Resuscitation: Endpoint-Driven Titration",
      summary: "Formulas provide only a starting point. Resuscitation must be titrated hourly to physiological endpoints to prevent lethal 'fluid creep'.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Early Airway Securing: Low threshold for immediate endotracheal intubation in suspected upper airway burn or >=30-40% TBSA before progressive soft tissue edema completely closes the glottis.",
            "Initial Starting Formula (Modified Brooke / Parkland): Administer Balanced Crystalloid (Lactated Ringer's) at: 2 to 4 mL x Weight (kg) x % TBSA (2nd and 3rd degree). Administer HALF of the total calculated volume in the first 8 hours (from time of burn injury), and the remaining half over the next 16 hours.",
            "Hourly Titration to Physiological Endpoints: The formula is strictly a starting estimate. Adjust fluid rates UP or DOWN by 20-30% every hour based strictly on urine output: Target Adult Urine Output = 0.5 to 1.0 mL/kg/h (or 30-50 mL/h); Target Pediatric Urine Output = 1.0 to 1.5 mL/kg/h. Avoid fluid over-titration ('fluid creep') which causes fatal Abdominal Compartment Syndrome and acute pulmonary edema.",
            "Colloid Adjuncts: In major burns (>=30-40% TBSA), consider initiating 5% Albumin infusion (0.5-1.0 mL/kg/%TBSA) starting at 8 to 12 hours post-burn to restore oncotic pressure and reduce total crystalloid requirements."
          ]
        }
      ]
    },
    {
      id: "burns-critical-care.escharotomy",
      kind: "management",
      title: "Bedside Escharotomy & Burn Wound Care",
      summary: "Emergent surgical incision of non-compliant leathery eschar to relieve compartment syndrome and restore ventilation and perfusion.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Thoracic Escharotomy", value: "Indicated for circumferential full-thickness chest burns causing restrictive respiratory failure (rising peak inspiratory pressures > 35 cmH2O, low tidal volumes, hypoventilation). Longitudinal incisions along anterior axillary lines connected by a transverse subcostal incision ('shield cut') down to subcutaneous fat until eschar edges separate." },
            { label: "Extremity Escharotomy", value: "Indicated for circumferential extremity burns causing loss of distal pulses, cyanosis, delayed capillary refill, or compartment pressure > 30 mmHg. Medial and lateral mid-axial longitudinal incisions down to subcutaneous fat, avoiding the ulnar nerve at the elbow and common peroneal nerve at the fibular head." },
            { label: "Topical Antimicrobial Therapy", value: "Silver sulfadiazine (Silvadene), Mafenide acetate (Sulfamylon — penetrates thick eschar and cartilage; monitor for metabolic acidosis via carbonic anhydrase inhibition), or silver-impregnated dressings (Acticoat). Early surgical excision and skin grafting within 48-72 hours reduces sepsis and mortality." }
          ]
        }
      ]
    },
    {
      id: "burns-critical-care.monitoring",
      kind: "monitoring",
      title: "ICU Surveillance: Urine Output, Core Temp & Compartments",
      summary: "Hourly surveillance of urine output, core temperature, and intra-abdominal pressure.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Hourly Urine Output", value: "Strict Foley catheter hourly measurement: 0.5-1.0 mL/kg/h target. In electrical burns with myoglobinuria, target 1.0-2.0 mL/kg/h until urine clears." },
            { label: "Intra-Abdominal Pressure (IAP)", value: "Bladder pressure monitoring every 4 hours in burns > 30-40% TBSA or patients receiving > 250 mL/kg fluid in 24 hours (high risk of Abdominal Compartment Syndrome)." },
            { label: "Core Temperature Regulation", value: "Maintain ICU ambient room temperature at 28-32°C to prevent massive evaporative hypothermia through denuded skin." }
          ]
        }
      ]
    },
    {
      id: "burns-critical-care.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of acute airway collapse, resuscitation morbidity, and burn sepsis.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Immediate", value: "Upper airway asphyxiation from laryngeal edema, carbon monoxide and cyanide poisoning, burn shock, extremity ischemia requiring escharotomy." },
            { label: "Treatment-Related", value: "Abdominal Compartment Syndrome (ACS) and orbital compartment syndrome from fluid creep; metabolic acidosis from mafenide acetate; hypocalcemia and leukopenia from silver sulfadiazine." },
            { label: "Late / Delayed", value: "Invasive burn wound sepsis (Pseudomonas, Acinetobacter, MRSA, fungal Candida/Aspergillus), extreme hypermetabolic catabolism (resting energy expenditure up to 200% normal), Curling stress ulcers." },
            { label: "Escalation Triggers", value: "Sudden loss of distal arterial Doppler signals in a burned limb; peak inspiratory pressure > 35 cmH2O with restrictive chest eschar; intra-abdominal pressure > 20 mmHg requiring urgent decompressive laparotomy." }
          ]
        }
      ]
    },
    {
      id: "burns-critical-care.pitfalls",
      kind: "controversies",
      title: "Critical Care Burn Pitfalls & Special Considerations",
      summary: "High-yield bedside pitfalls including fluid creep, succinylcholine avoidance, and delayed airway obstruction.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Fluid Creep", value: "Over-resuscitating beyond calculated targets solely to chase high urine outputs; excessive fluid loading (>250 mL/kg/24h) causes lethal abdominal compartment syndrome, ocular compartment syndrome, and severe pulmonary edema." },
            { label: "Pitfall: Succinylcholine Post-24h", value: "Administering succinylcholine for intubation beyond 24-48 hours post-burn injury causes massive, fatal hyperkalemic cardiac arrest due to proliferation of extrajunctional acetylcholine receptors." },
            { label: "Pitfall: Delayed Airway Assessment", value: "Waiting for stridor or severe hypoxia before intubating a patient with facial burns and soot inhalation; pharyngeal and glottic edema peak during aggressive fluid resuscitation at 12-24 hours, making late intubation impossible without a surgical cricothyroidotomy." },
            { label: "Pitfall: Environmental Hypothermia", value: "Exposing extensive open burn wounds at room temperature; loss of the epidermal barrier triggers rapid evaporative heat loss, worsening coagulopathy, acidosis, and mortality." },
            { label: "Special Consideration: Chemical & Electrical Burns", value: "Electrical burns frequently have hidden deep-tissue muscle necrosis requiring aggressive fluid rates (urine output 1.0-2.0 mL/kg/h) to prevent myoglobinuric acute tubular necrosis." }
          ]
        }
      ]
    }
  ]
};
