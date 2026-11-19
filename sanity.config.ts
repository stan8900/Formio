import { schemaTypes } from "./sanity/schemaTypes";
// Sanity Studio configuration. In a Studio workspace wrap this with defineConfig()
// and add structureTool() from the `sanity` package.
export default { name: "formio", title: "Formio", projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "m5ne7qyc", dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", schema: { types: schemaTypes } };
