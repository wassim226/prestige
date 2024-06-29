import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

export const defaultImage = null;

export const handelResize = (setCols) => {
  const fullConfig = resolveConfig(tailwindConfig);
  setCols(() => {
    if (
      window.innerWidth >= Number(fullConfig.theme.screens.md.replace("px", ""))
    ) {
      return 4;
    } else if (
      window.innerWidth >= Number(fullConfig.theme.screens.sm.replace("px", ""))
    ) {
      return 3;
    } else if (
      window.innerWidth >= Number(fullConfig.theme.screens.ss.replace("px", ""))
    ) {
      return 2;
    } else {
      return 1;
    }
  });
};
