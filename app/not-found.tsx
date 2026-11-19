import Link from "next/link";

export default function NotFound() {
  return <section className="page-intro"><p className="eyebrow">Not found</p><h1>This path has<br/>no doorway.</h1><p>Return to the landmark index to continue the walk through Samarkand.</p><Link className="button" href="/landmarks">Explore landmarks</Link></section>;
}
