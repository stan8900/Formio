"use client";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { landmarks } from "@/lib/content";

export function PlanForm() {
 const params = useSearchParams(); const initial = params.get("landmark") || "";
 const [state, setState] = useState<"idle" | "error" | "success">("idle"); const [message, setMessage] = useState("");
 function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const form = event.currentTarget; if (!form.checkValidity()) { setState("error"); setMessage("Please complete your name, a valid email, landmark and message."); form.reportValidity(); return; } setState("success"); setMessage("Demo enquiry received. Nothing has been sent — connect an email or storage service to make submissions live."); form.reset(); }
 return <form className="plan-form" onSubmit={submit} noValidate aria-describedby="form-status"><div className="form-grid"><label>Name <input name="name" autoComplete="name" required /></label><label>Email <input type="email" name="email" autoComplete="email" required /></label><label>Landmark <select name="landmark" required defaultValue={initial}><option value="" disabled>Select a landmark</option>{landmarks.map(l => <option key={l.slug} value={l.slug}>{l.name}</option>)}</select></label><label>Travel dates <input type="text" name="dates" placeholder="e.g. 12–16 May" /></label></div><label>What are you hoping to explore? <textarea name="message" required rows={5} /></label><button type="submit">Send demo enquiry</button><p className="demo-note">Demo submission — no email or storage integration is configured.</p><p id="form-status" className={`form-status ${state}`} role="status" aria-live="polite">{message}</p></form>;
}
