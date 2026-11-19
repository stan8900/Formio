import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGitHubPages ? "/Formio" : "",
  assetPrefix: isGitHubPages ? "/Formio/" : undefined,
};
export default nextConfig;
