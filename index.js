"use strict";

// usage only in node environments, not in browser

const postcss = require("postcss");
export async function compile({ inputCSS, tailwindConfig, purge }) {
  if (purge) {
    tailwindConfig.purge = {
      enabled: true,
      content: purge, // [{ raw: '<div class="bg-green-400"></div>, extension: 'html' }]
    };
  }

  const result = await postcss([
    require("tailwindcss")(tailwindConfig),
  ]).process(inputCSS);

  return result.css;
}
