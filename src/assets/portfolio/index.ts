// Real image files live in this folder; Vite bundles them for local and production builds.
const load = (files: Record<string, string>) =>
  Object.keys(files).sort().map((k) => files[k]!);

const portfolio = {
  flooringExpress: load(
    import.meta.glob<string>(
      "./Flooring_Express_br_01/*.{jpg,jpeg,png}",
      { eager: true, import: "default", query: "?url" }
    )
  ),

  ocula: load(
    import.meta.glob<string>(
      "./ocula/*.{jpg,jpeg,png}",
      { eager: true, import: "default", query: "?url" }
    )
  ),

  salvationHill: load(
    import.meta.glob<string>(
      "./salvation-hill/*.{jpg,jpeg,png}",
      { eager: true, import: "default", query: "?url" }
    )
  ),

  yesterday: load(
    import.meta.glob<string>(
      "./yesterday/*.{jpg,jpeg,png}",
      { eager: true, import: "default", query: "?url" }
    )
  ),

  logos: load(
    import.meta.glob<string>(
      "./logos/*.{jpg,jpeg,png}",
      { eager: true, import: "default", query: "?url" }
    )
  ),
};

export default portfolio;


