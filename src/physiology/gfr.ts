import type { PhysiologyConcept } from "@/content-types";

export const gfr: PhysiologyConcept = {
  id: "physiology.gfr",
  slug: "gfr",
  title: "Glomerular Filtration Rate",
  system: "renal",
  summary: "The rate at which the kidneys filter plasma across the glomerulus — the single best overall measure of kidney function.",
  definition:
    "Glomerular filtration rate (GFR) is the volume of plasma filtered by all functioning glomeruli per minute. It depends on the net filtration pressure across the glomerular capillary and the surface area available for filtration.",
  mechanism:
    "Filtration pressure is set by the balance of hydrostatic and oncotic pressures across the glomerular capillary, and is actively regulated by the relative tone of the afferent and efferent arterioles — dilating the afferent or constricting the efferent arteriole raises filtration pressure, and vice versa. This autoregulation keeps GFR relatively stable across a range of systemic blood pressures, but it depends on intact renal perfusion and intact prostaglandin- and angiotensin-mediated arteriolar tone — which is exactly what NSAIDs and ACE inhibitors/ARBs interfere with, respectively.",
  clinicalSignificance:
    "GFR (estimated clinically from creatinine) is the primary measure used to detect and stage kidney injury, but creatinine is a lagging indicator — it only rises once a substantial fall in GFR has already occurred, so a 'normal' creatinine doesn't exclude an evolving injury.",
  icuApplications: [
    "NSAIDs and ACE inhibitors/ARBs blunt the arteriolar compensation that maintains GFR during hypoperfusion, which is why they're held or avoided in AKI and in patients at risk for it.",
    "IV contrast and other nephrotoxins are used cautiously in patients with reduced GFR, since further arteriolar or tubular insult can precipitate overt AKI.",
    "Drug dosing for renally cleared medications is adjusted based on estimated GFR, which becomes less reliable as creatinine lags behind acute changes in true filtration.",
  ],
  relatedConceptIds: ["physiology.filtration", "physiology.tubular-function"],
  relatedTopicIds: [
  "aki"
],
};
