import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = { metadataBase: new URL("https://stan8900.github.io/Formio"), title: { default: "Formio — The Architecture of Samarkand", template: "%s — Formio" }, description: "An independent editorial study of Samarkand’s architecture.", openGraph: { title: "Formio — The Architecture of Samarkand", description: "An independent editorial study of Samarkand’s architecture.", images: ["/images/samarkand-hero.jpeg"] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>; }
