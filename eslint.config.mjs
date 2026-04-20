import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import  reactPlugin from 'eslint-plugin-react'

export default [
  js.configs.recommended,
  ...reactPlugin.configs.flat.recommended,  // React qoidalari
  ...reactPlugin.configs.flat["jsx-runtime"], // React import shart emas
  {
    settings: { react: { version: "detect" } }, // React versiyasini auto topadi
    rules: {
      "react/no-unescaped-entities": 0,  // ' " belgilarni yozishga ruxsat
      "react/prop-types": 0,             // prop-types tekshiruvini o'chirish
    }
  },
  prettier  // Doim oxirida!
]
