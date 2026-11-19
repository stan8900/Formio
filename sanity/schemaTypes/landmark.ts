// Drop this file into a Sanity Studio (or import it from a Studio workspace).
// It intentionally uses plain schema objects so the front-end stays dependency-light.
export const landmark = { name: "landmark", title: "Landmark", type: "document", fields: [
  { name: "name", type: "string", validation: (r: { required: () => unknown }) => r.required() },
  { name: "slug", type: "slug", options: { source: "name" }, validation: (r: { required: () => unknown }) => r.required() },
  { name: "orderRank", title: "Index order", type: "number" }, { name: "eyebrow", type: "string" }, { name: "date", type: "string" },
  { name: "introduction", type: "text", rows: 3 }, { name: "story", type: "text", rows: 8 },
  { name: "cover", title: "Cover / opening image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }, { name: "caption", type: "string" }, { name: "photographer", type: "string" }, { name: "source", type: "string" }, { name: "licence", type: "string" }] },
  { name: "lookFor", title: "What to look for", type: "array", of: [{ type: "object", fields: [{ name: "title", type: "string" }, { name: "text", type: "text", rows: 3 }] }] },
  { name: "related", type: "string", description: "Slug of the related landmark" }
] };
