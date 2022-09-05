// Copyright (C) 2012-2022 Zammad Foundation, https://zammad-foundation.org/

console.log("start config");

import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  setupFile: "./setupHistoire.ts",
  plugins: [HstVue()],
});
