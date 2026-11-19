import { Suspense } from "react";
import { PlanForm } from "@/components/PlanForm";
export const metadata = { title: "Plan a visit", description: "Send a demo enquiry for a Samarkand landmark visit." };
export default function PlanPage() { return <section className="plan-page"><div><p className="eyebrow">A considered start</p><h1>Plan a visit.</h1><p>Tell us which landmark has your attention. This portfolio form is a fully working demo, designed to be connected to an enquiry service when the project moves live.</p></div><Suspense fallback={<p>Loading enquiry form…</p>}><PlanForm /></Suspense></section>; }
