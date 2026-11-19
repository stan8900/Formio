import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header"><Link className="wordmark" href="/">Formio<span>.</span></Link><nav aria-label="Main navigation"><Link href="/landmarks">Landmarks</Link><Link href="/about">About</Link><Link className="nav-plan" href="/plan">Plan a visit</Link></nav></header>;
}
