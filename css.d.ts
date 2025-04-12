// src/styles/css.d.ts
interface CSSVariables {
  "--color-dark-navy": string;
  "--color-blue-deep-sea": string;
  "--color-mint-cream": string;
  "--color-mint-green": string;
  "--color-sea-green": string;
  "--color-blue-teal": string;
  "--color-bone-white": string;
}

declare module "*.css" {
  const variables: CSSVariables;
  export default variables;
}
