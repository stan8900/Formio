import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = { metadataBase: new URL("https://stan8900.github.io/Formio"), title: { default: "Formio — The Architecture of Samarkand", template: "%s — Formio" }, description: "An independent editorial study of Samarkand’s architecture.", openGraph: { title: "Formio — The Architecture of Samarkand", description: "An independent editorial study of Samarkand’s architecture.", images: ["/images/samarkand-hero.jpeg"] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { const assetPath = process.env.GITHUB_ACTIONS === "true" ? "/Formio" : ""; const backgroundStyle = { "--carpet-background": `url(${assetPath}/images/redcarpet-wide.png)` } as CSSProperties; return <html lang="en"><body style={backgroundStyle}><SiteHeader /><main>{children}</main><SiteFooter /></body></html>; }
