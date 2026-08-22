import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhysiologyPlayground } from "@/components/physiology/PhysiologyPlayground";

export const metadata: Metadata = {
  title: "ICU Physiology Playground",
  description:
    "Change PEEP, preload, SVR, PVR, contractility, or heart rate and see the directional effect on venous return, ventricular loading, cardiac output, MAP, and oxygen delivery across ICU contexts.",
};

export default function PhysiologyPlaygroundPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Physiology Playground" }]} />
        <h1 className="text-2xl font-semibold text-ink">ICU Physiology Playground</h1>
        <p className="max-w-2xl text-sm text-ink-muted">
          Change one variable and see every effect it produces at once — including the effects that pull in opposite
          directions. Switch the clinical context to see why the same intervention behaves differently in ARDS, LV
          failure, RV failure, hypovolemia, and obstructive shock.
        </p>
      </div>

      <PhysiologyPlayground />
    </div>
  );
}
