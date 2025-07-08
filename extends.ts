export const components =
  import.meta.env.MODE == "development"
    ? "../nuxt-template-shadnc"
    : "github:clayltonroque/nuxt-template-shadnc#master";
