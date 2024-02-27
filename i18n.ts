// src/i18n.ts
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import HttpApi from "i18next-http-backend"

// import adTranslation from "./locales/ad/translation.json"
// import chTranslation from "./locales/ch/translation.json"

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    // resources: {
    //   ad: {
    //     translation: adTranslation,
    //   },
    //   ch: {
    //     translation: chTranslation,
    //   },
    // },
    fallbackLng: "ad",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
