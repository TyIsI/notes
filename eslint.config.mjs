import { js, ts, tsx } from "@tyisi/config-eslint";

ts[0].rules["@typescript-eslint/triple-slash-reference"] = "off";
tsx[0].rules["@typescript-eslint/triple-slash-reference"] = "off";

export default [{ ignores: ["dist"] }, ...js, ...ts, ...tsx];
