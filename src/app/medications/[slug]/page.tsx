import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllMedicationSlugs, getMedication } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SpectrumVisualizer } from "@/components/medications/SpectrumVisualizer";
import { PkPdVisualizer } from "@/components/medications/PkPdVisualizer";
import { FolatePathwayVisualizer } from "@/components/medications/FolatePathwayVisualizer";
import { AmphotericinVasoconstrictionVisualizer } from "@/components/medications/AmphotericinVasoconstrictionVisualizer";
import { BroadNotBetterCallout } from "@/components/medications/BroadNotBetterCallout";
import { BookmarkToggle } from "@/components/bookmarks/BookmarkToggle";
import { physiologyProfiles } from "@/content/physiology-profiles";
import { PhysiologyEngine } from "@/components/physiology/PhysiologyEngine";
import { RelatedContent } from "@/components/content/RelatedContent";
import { getRelatedContentForMedication } from "@/registry";

import { MedicationTracker } from "@/components/medications/MedicationTracker";

interface MedicationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllMedicationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: MedicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) return { title: "Medication Not Found" };
  return {
    title: `${med.name} (${med.genericName}) | ICU Medications`,
    description: med.summary,
  };
}

export default async function MedicationDetailPage({ params }: MedicationPageProps) {
  const { slug } = await params;
  const med = getMedication(slug);

  if (!med) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <MedicationTracker slug={med.slug} name={med.name} />
      {/* Navigation Header */}
      <div className="flex flex-col gap-4 border-b border-border pb-6">
        <Breadcrumbs items={[{ label: "Medications", href: "/medications" }, { label: med.name }]} />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-md bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-primary">
                {med.subcategory}
              </span>
              {med.brandNames.length > 0 && (
                <span className="text-xs text-ink-muted">
                  Brands: {med.brandNames.join(", ")}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-ink">{med.name}</h1>
            <p className="text-sm italic text-ink-muted mt-0.5">{med.genericName} — {med.class}</p>
          </div>
          <div className="flex items-center gap-3">
            <BookmarkToggle type="medication" id={med.slug} />
          </div>
        </div>

        {/* One-Liner Summary Box */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-ink leading-relaxed font-medium">
          💡 <strong>ICU High-Yield Summary:</strong> {med.summary}
        </div>
      </div>

      {/* 1. Mechanism & Target Diagram */}
      <section id="mechanism" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>🧬</span> Mechanism of Action & Target Pathway
        </h2>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-ink">{med.mechanism.title}</h3>
          <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-ink-muted leading-relaxed">
            {med.mechanism.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          {med.mechanism.visualDiagram && (
            <div className="mt-3 rounded-lg bg-surface border border-border p-3 text-xs font-mono text-primary font-bold text-center">
              {med.mechanism.visualDiagram}
            </div>
          )}
        </div>
      </section>

      {/* Specialized Pathway Visualizer for TMP-SMX */}
      {med.slug === "tmp-smx" && <FolatePathwayVisualizer />}

      {/* Specialized Physiology Visualizer for Liposomal Amphotericin B */}
      {med.slug === "liposomal-amphotericin-b" && <AmphotericinVasoconstrictionVisualizer />}

      {/* 2. Antimicrobial Spectrum (Anti-Infectives) */}
      {med.spectrum && <SpectrumVisualizer spectrum={med.spectrum} drugName={med.name} />}

      {/* 3. Pharmacokinetics & Pharmacodynamics (PK/PD) */}
      <PkPdVisualizer pkPd={med.pkPd} drugName={med.name} />

      {/* 4. ICU Clinical Reasoning */}
      <section id="reasoning" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>⚖️</span> ICU Clinical Reasoning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 p-4 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
              Why I Choose It (Indications & Strengths)
            </h3>
            <ul className="space-y-1.5 text-xs text-ink leading-relaxed">
              {med.icuReasoning.whyIChooseIt.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 p-4 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300">
              Why I Don't (Limitations & Gaps)
            </h3>
            <ul className="space-y-1.5 text-xs text-ink leading-relaxed">
              {med.icuReasoning.whyIDont.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-amber-500/10 border border-amber-300 dark:border-amber-900 p-4 text-xs font-medium text-amber-950 dark:text-amber-200">
          ⭐ <strong>Bedside Pearl:</strong> {med.icuReasoning.bedsidePearl}
        </div>
      </section>

      {/* 5. Dosing & Administration */}
      <section id="dosing" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>💉</span> Dosing & Administration Protocols
        </h2>

        <div className="rounded-lg bg-surface border border-border/60 p-4 space-y-1">
          <span className="text-xs font-bold text-ink uppercase tracking-wider block">Routine ICU Dosing</span>
          <p className="text-sm font-semibold text-primary">{med.dosing.routine}</p>
        </div>

        {/* Special Dosing Cards (Adult Intubation, IM, Pediatric) */}
        {(med.dosing.adultIntubationDose || med.dosing.pediatricDoseNotes || med.dosing.imDoseNotes) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {med.dosing.adultIntubationDose && (
              <div className="rounded-lg bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900 p-3.5 space-y-1">
                <span className="text-[11px] font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider block">
                  Adult IV Intubation Dose
                </span>
                <p className="text-xs font-bold text-indigo-950 dark:text-indigo-200">{med.dosing.adultIntubationDose}</p>
              </div>
            )}
            {med.dosing.pediatricDoseNotes && (
              <div className="rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 p-3.5 space-y-1">
                <span className="text-[11px] font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider block">
                  Pediatric Dosing Notes
                </span>
                <p className="text-xs text-blue-950 dark:text-blue-200">{med.dosing.pediatricDoseNotes}</p>
              </div>
            )}
            {med.dosing.imDoseNotes && (
              <div className="rounded-lg bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 p-3.5 space-y-1">
                <span className="text-[11px] font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider block">
                  IM Emergency Administration
                </span>
                <p className="text-xs text-purple-950 dark:text-purple-200">{med.dosing.imDoseNotes}</p>
              </div>
            )}
          </div>
        )}

        {/* Syndrome Specific Dosing */}
        {med.dosing.syndromeSpecific && med.dosing.syndromeSpecific.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-ink uppercase tracking-wider">Syndrome-Specific Regimens</h3>
            <div className="grid grid-cols-1 gap-2.5">
              {med.dosing.syndromeSpecific.map((syn, i) => (
                <div key={i} className="rounded-lg border border-border/80 bg-surface p-3.5 space-y-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-ink">{syn.syndrome}</span>
                    {syn.reference && <span className="text-[10px] text-ink-muted italic">{syn.reference}</span>}
                  </div>
                  <p className="text-xs font-bold text-primary">{syn.regimen}</p>
                  {syn.note && <p className="text-[11px] text-ink-muted mt-1">Note: {syn.note}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Renal & HD/CRRT Dosing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {med.dosing.renallyAdjusted && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-ink uppercase tracking-wider">Renal Function Dosing</h3>
              <div className="rounded-lg border border-border/80 overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-surface border-b border-border/60">
                    <tr>
                      <th className="p-2 font-semibold">CrCl Range</th>
                      <th className="p-2 font-semibold">Dose Adjustment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {med.dosing.renallyAdjusted.map((row, i) => (
                      <tr key={i}>
                        <td className="p-2 font-medium text-ink">{row.crclRange}</td>
                        <td className="p-2 font-semibold text-primary">{row.dose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-ink uppercase tracking-wider">Dialytic Clearance (HD / CRRT)</h3>
            <div className="rounded-lg border border-border/80 bg-surface p-3.5 space-y-2 text-xs">
              <div>
                <span className="font-bold text-ink block">Intermittent Hemodialysis (HD):</span>
                <span className="text-ink-muted">{med.dosing.hdDosing || "See labeling guidelines."}</span>
              </div>
              <div>
                <span className="font-bold text-ink block">Continuous Renal Replacement (CRRT):</span>
                <span className="text-ink-muted">{med.dosing.crrtDosing || "See labeling guidelines."}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Organ Failure Considerations */}
      <section id="organ-dysfunction" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>🩺</span> Organ Failure Considerations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="rounded-lg bg-surface border border-border p-4 space-y-1">
            <span className="font-bold text-ink uppercase tracking-wider block">Renal Failure & AKI</span>
            <p className="text-ink-muted leading-relaxed">{med.organFailure.renalConsiderations}</p>
          </div>
          <div className="rounded-lg bg-surface border border-border p-4 space-y-1">
            <span className="font-bold text-ink uppercase tracking-wider block">Hepatic Impairment & Cirrhosis</span>
            <p className="text-ink-muted leading-relaxed">{med.organFailure.hepaticConsiderations}</p>
          </div>
        </div>
      </section>

      {/* 7. Toxicity & Safety Warnings */}
      <section id="toxicity" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>⚠️</span> Toxicity & Safety Warnings
        </h2>

        {med.toxicity.blackBoxWarning && (
          <div className="rounded-lg border border-rose-300 dark:border-rose-900 bg-rose-500/10 p-4 text-xs text-rose-950 dark:text-rose-200">
            <strong className="text-rose-700 dark:text-rose-400 font-bold block mb-1">FDA BOXED WARNING:</strong>
            {med.toxicity.blackBoxWarning}
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-xs font-bold text-ink uppercase tracking-wider">Major Warnings</h3>
          <ul className="space-y-1.5 text-xs text-rose-800 dark:text-rose-300">
            {med.toxicity.majorWarnings.map((warn, i) => (
              <li key={i} className="flex items-start gap-1.5 bg-rose-50/50 dark:bg-rose-950/30 p-2 rounded border border-rose-200/60 dark:border-rose-900/60">
                <span>🚨</span>
                <span>{warn}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Bedside Drug Interactions */}
      <section id="interactions" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>🔄</span> Bedside Drug Interactions
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-surface border-b border-border/80">
              <tr>
                <th className="p-2.5 font-bold text-ink">Interacting Drug</th>
                <th className="p-2.5 font-bold text-ink">Mechanism</th>
                <th className="p-2.5 font-bold text-ink">Clinical Consequence</th>
                <th className="p-2.5 font-bold text-primary">Mandatory ICU Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {med.interactions.map((inter, i) => (
                <tr key={i}>
                  <td className="p-2.5 font-bold text-ink">{inter.drug}</td>
                  <td className="p-2.5 text-ink-muted">{inter.mechanism}</td>
                  <td className="p-2.5 text-rose-700 dark:text-rose-400 font-semibold">{inter.consequence}</td>
                  <td className="p-2.5 font-bold text-primary">{inter.icuAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. Monitoring & TDM Protocols */}
      <section id="monitoring" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>📊</span> Monitoring & TDM Protocols
        </h2>

        <div className="space-y-2">
          <h3 className="text-xs font-bold text-ink uppercase tracking-wider">Required Monitoring Parameters</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {med.monitoring.parameters.map((param, i) => (
              <li key={i} className="flex items-center gap-2 bg-surface p-2.5 rounded border border-border/60 text-ink font-medium">
                <span className="text-primary font-bold">▪</span> {param}
              </li>
            ))}
          </ul>
        </div>

        {med.monitoring.tdmProtocol && (
          <div className="rounded-lg border border-purple-200 dark:border-purple-900 bg-purple-50/40 dark:bg-purple-950/20 p-4 space-y-2 text-xs">
            <h3 className="font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider">
              Therapeutic Drug Monitoring (TDM) Protocol
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {med.monitoring.tdmProtocol.targetPeak && (
                <div><span className="font-bold text-ink block">Target Peak:</span>{med.monitoring.tdmProtocol.targetPeak}</div>
              )}
              {med.monitoring.tdmProtocol.targetTrough && (
                <div><span className="font-bold text-ink block">Target Trough:</span>{med.monitoring.tdmProtocol.targetTrough}</div>
              )}
              {med.monitoring.tdmProtocol.targetAUC && (
                <div><span className="font-bold text-ink block">Target AUC24/MIC:</span>{med.monitoring.tdmProtocol.targetAUC}</div>
              )}
            </div>
            <div>
              <span className="font-bold text-ink block">Sampling Timing:</span>
              <span className="text-ink-muted">{med.monitoring.tdmProtocol.timing}</span>
            </div>
          </div>
        )}
      </section>

      {/* 10. Antimicrobial Stewardship Callout */}
      {med.stewardship && <BroadNotBetterCallout stewardship={med.stewardship} drugName={med.name} />}

      {/* 11. Evidence & Claim-Level Citations */}
      <section id="evidence" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>📚</span> Evidence Traceability & Guideline Citations
        </h2>
        <div className="space-y-2">
          {med.evidenceTraceability.claimCitations.map((cite, i) => (
            <div key={i} className="rounded-lg bg-surface p-3 border border-border/60 text-xs space-y-1">
              <p className="font-semibold text-ink">"{cite.claim}"</p>
              <div className="flex items-center justify-between text-ink-muted text-[11px]">
                <span>Source: {cite.source}</span>
                {cite.citationUrl && (
                  <a href={cite.citationUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                    View Reference ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Patient Scenarios */}
      <section id="scenarios" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>🩺</span> Bedside Patient Scenarios
        </h2>
        <div className="space-y-4">
          {med.patientScenarios.map((scen, i) => (
            <div key={i} className="rounded-lg border border-border/80 bg-surface/50 p-4 space-y-2 text-xs">
              <h3 className="font-bold text-sm text-ink">{scen.title}</h3>
              <p className="text-ink-muted"><strong>Scenario:</strong> {scen.clinicalContext}</p>
              <div className="rounded bg-emerald-50 dark:bg-emerald-950/40 p-2.5 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-900">
                <strong>Bedside Decision:</strong> {scen.decision}
              </div>
              <p className="text-ink-muted"><strong>Rationale:</strong> {scen.rationale}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 13. Exam Traps & Misconceptions */}
      <section id="exam-traps" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>🎯</span> Exam Traps & Board Misconceptions
        </h2>
        <div className="space-y-3">
          {med.examTraps.map((trap, i) => (
            <div key={i} className="rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-500/10 p-4 text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold">
                <span>❌ Misconception:</span>
                <span>"{trap.misconception}"</span>
              </div>
              <div className="text-emerald-700 dark:text-emerald-400 font-bold">
                ✓ Reality: {trap.reality}
              </div>
              <p className="text-ink-muted leading-relaxed">{trap.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 14. Hemodynamics & Physiology */}
      {med.category === "vasopressors-inotropes" && (
        <section id="physiology" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-ink flex items-center gap-2">
            <span>🫀</span> Physiology & Hemodynamics
          </h2>
          {physiologyProfiles.find(p => p.id === med.slug) ? (
            <PhysiologyEngine profile={physiologyProfiles.find(p => p.id === med.slug)!} />
          ) : (
            <div className="p-4 bg-surface rounded-lg text-ink/70">
              Physiology profile for {med.name} is currently under development.
            </div>
          )}
        </section>
      )}

      {/* 15. Related Content */}
      <section className="mt-12">
        <RelatedContent {...getRelatedContentForMedication(slug)} />
      </section>
    </div>
  );
}
