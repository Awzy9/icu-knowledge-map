/**
 * ICU Search Alias Map + Typo Tolerance
 *
 * Purely a NAVIGATION aid: aliases map ward shorthand / brand names onto the
 * canonical terms already present in the knowledge base. Nothing here asserts
 * a clinical recommendation, and no alias changes what a page says.
 *
 * Extensible by design — add an entry to ALIAS_GROUPS and it is picked up by
 * search automatically. Brand names are also derived at build time from each
 * medication's own `brandNames` field, so the manual list stays small.
 */

/**
 * Each group lists interchangeable surface forms. A query matching ANY member
 * is expanded to ALL members, so "lasix" also searches "furosemide" and vice
 * versa.
 */
const ALIAS_GROUPS: readonly (readonly string[])[] = [
  // --- Vasoactives -------------------------------------------------------
  ["levo", "levophed", "norepinephrine", "noradrenaline", "norepi"],
  ["neo", "neosynephrine", "phenylephrine"],
  ["epi", "adrenaline", "epinephrine"],
  ["vaso", "vasopressin", "adh"],
  ["dobut", "dobutamine"],
  ["milrin", "milrinone", "primacor"],

  // --- Antiarrhythmics / cardiac ----------------------------------------
  ["amio", "amiodarone", "nexterone", "cordarone"],
  ["adenosine", "adenocard"],
  ["esmolol", "brevibloc"],
  ["labetalol", "trandate"],
  ["cardene", "nicardipine"],
  ["cleviprex", "clevidipine"],
  ["snp", "nitroprusside", "nipride", "sodium nitroprusside"],
  ["ntg", "nitroglycerin", "glyceryl trinitrate"],

  // --- Antimicrobials ----------------------------------------------------
  ["vanc", "vanco", "vancomycin"],
  ["tazo", "zosyn", "pip tazo", "piperacillin", "piperacillin-tazobactam", "pip-tazo"],
  ["mero", "meropenem", "merrem"],
  ["ertapenem", "invanz"],
  ["cefepime", "maxipime"],
  ["ceftriaxone", "rocephin"],
  ["flagyl", "metronidazole"],
  ["bactrim", "septra", "tmp smx", "tmp-smx", "trimethoprim", "sulfamethoxazole", "cotrimoxazole"],
  ["zyvox", "linezolid"],
  ["cubicin", "daptomycin"],
  ["ambisome", "liposomal amphotericin", "amphotericin"],
  ["eraxis", "anidulafungin", "echinocandin"],
  ["amikin", "amikacin"],

  // --- Sedation / analgesia / paralytics --------------------------------
  ["precedex", "dexmedetomidine", "dex"],
  ["diprivan", "propofol"],
  ["versed", "midazolam", "midaz"],
  ["ketalar", "ketamine"],
  ["sublimaze", "fentanyl"],
  ["dilaudid", "hydromorphone"],
  ["nimbex", "cisatracurium"],
  ["zemuron", "rocuronium", "roc"],
  ["anectine", "sux", "succinylcholine", "suxamethonium"],

  // --- Endocrine / metabolic / electrolytes -----------------------------
  ["solu-cortef", "solu cortef", "hydrocortisone"],
  ["solu-medrol", "solu medrol", "methylprednisolone", "methylpred"],
  ["decadron", "dexamethasone", "dex steroid"],
  ["lasix", "furosemide", "frusemide"],
  ["diamox", "acetazolamide"],
  ["bicarb", "sodium bicarbonate", "nahco3"],
  ["cagluc", "calcium gluconate", "calcium"],
  ["mag", "magnesium sulfate", "magnesium", "mgso4"],
  ["insulin", "regular insulin", "humulin"],

  // --- Anticoagulants ----------------------------------------------------
  ["ufh", "unfractionated heparin", "heparin"],
  ["lovenox", "enoxaparin", "lmwh"],

  // --- Conditions / syndromes -------------------------------------------
  ["dka", "diabetic ketoacidosis"],
  ["hhs", "hyperosmolar hyperglycemic state"],
  ["pe", "pulmonary embolism", "pulmonary embolus"],
  ["ards", "acute respiratory distress syndrome"],
  ["aki", "acute kidney injury"],
  ["gib", "gi bleed", "gastrointestinal bleeding"],
  ["ich", "intracerebral hemorrhage", "intracranial hemorrhage"],
  ["sah", "subarachnoid hemorrhage"],
  ["tbi", "traumatic brain injury"],
  ["af", "afib", "atrial fibrillation"],
  ["vt", "ventricular tachycardia"],
  ["svt", "supraventricular tachycardia"],
  ["copd", "chronic obstructive pulmonary disease"],
  ["hit", "heparin induced thrombocytopenia"],
  ["dic", "disseminated intravascular coagulation"],
  ["trali", "transfusion related acute lung injury"],
  ["taco", "transfusion associated circulatory overload"],
  ["siadh", "syndrome of inappropriate antidiuretic hormone"],
  ["csw", "cerebral salt wasting"],
  ["di", "diabetes insipidus"],
  ["vap", "ventilator associated pneumonia"],
  ["cap", "community acquired pneumonia"],
  ["hap", "hospital acquired pneumonia"],
  ["nsti", "necrotizing soft tissue infection", "necrotizing fasciitis"],

  // --- Ventilation / physiology -----------------------------------------
  ["autopeep", "auto peep", "auto-peep", "intrinsic peep", "breath stacking", "dynamic hyperinflation"],
  ["peep", "positive end expiratory pressure"],
  ["pip", "peak inspiratory pressure"],
  ["pplat", "plateau pressure"],
  ["dp", "driving pressure"],
  ["sbt", "spontaneous breathing trial"],
  ["niv", "non invasive ventilation", "noninvasive ventilation"],
  ["hfnc", "high flow nasal cannula"],
  ["ecmo", "extracorporeal membrane oxygenation"],
  ["rsi", "rapid sequence intubation"],
  ["svr", "systemic vascular resistance"],
  ["pvr", "pulmonary vascular resistance"],
  ["co", "cardiac output"],
  ["map", "mean arterial pressure"],
  ["cvp", "central venous pressure"],
  ["do2", "oxygen delivery"],
  ["rv", "right ventricle", "right ventricular"],
  ["lv", "left ventricle", "left ventricular"],
  ["pocus", "point of care ultrasound", "bedside ultrasound"],
  ["tevar", "thoracic endovascular aortic repair"],
];

/** alias term -> full set of expansion terms (including itself). */
const ALIAS_INDEX: ReadonlyMap<string, readonly string[]> = (() => {
  const map = new Map<string, string[]>();
  for (const group of ALIAS_GROUPS) {
    for (const term of group) {
      const key = normalizeTerm(term);
      const existing = map.get(key) ?? [];
      // Union, preserving order and avoiding duplicates
      for (const member of group) {
        if (!existing.includes(member)) existing.push(member);
      }
      map.set(key, existing);
    }
  }
  return map;
})();

/** Lowercase, strip punctuation, collapse whitespace. */
export function normalizeTerm(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Expands a raw query into the set of terms search should try.
 * Always includes the original normalized query first.
 */
export function expandQuery(query: string): readonly string[] {
  const normalized = normalizeTerm(query);
  if (normalized === "") return [];

  const terms: string[] = [normalized];

  const directGroup = ALIAS_INDEX.get(normalized);
  if (directGroup) {
    for (const term of directGroup) {
      const n = normalizeTerm(term);
      if (!terms.includes(n)) terms.push(n);
    }
  }

  return terms;
}

/**
 * Levenshtein edit distance with an early-exit ceiling. Returns a value greater
 * than `max` as soon as it is certain the distance exceeds it, so we never pay
 * full O(n*m) on obviously unrelated strings.
 */
export function editDistance(a: string, b: string, max = 2): number {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > max) return max + 1;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  let prev = new Array<number>(b.length + 1);
  let curr = new Array<number>(b.length + 1);
  for (let j = 0; j <= b.length; j += 1) prev[j] = j;

  for (let i = 1; i <= a.length; i += 1) {
    curr[0] = i;
    let rowMin = curr[0];
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      if (curr[j] < rowMin) rowMin = curr[j];
    }
    if (rowMin > max) return max + 1;
    const swap = prev;
    prev = curr;
    curr = swap;
  }

  return prev[b.length];
}

/**
 * Typo-tolerant containment test.
 *
 * Short queries (<4 chars) require an exact substring match — at that length
 * edit-distance matching produces mostly noise (e.g. "pe" would fuzzily match
 * almost everything).
 */
export function fuzzyIncludes(haystack: string, needle: string): boolean {
  if (needle.length < 4) return haystack.includes(needle);
  if (haystack.includes(needle)) return true;

  const tolerance = needle.length >= 8 ? 2 : 1;
  const words = haystack.split(/[\s\-/(),.]+/);

  for (const word of words) {
    if (word.length === 0) continue;
    if (Math.abs(word.length - needle.length) > tolerance) continue;
    if (editDistance(word, needle, tolerance) <= tolerance) return true;
  }

  return false;
}
