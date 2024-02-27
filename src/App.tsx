import { useTranslation } from "react-i18next"

import "./App.css"

function App() {
  const { t, i18n } = useTranslation()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{t("siteTitle")}</p>
      </div>
      <p>
        lang:
        <button
          onClick={() => i18n.changeLanguage("ad")}
          className={i18n.language === "ad" ? "btn-active" : ""}
        >
          adults
        </button>
        <button
          onClick={() => i18n.changeLanguage("ch")}
          className={i18n.language === "ch" ? "btn-active" : ""}
        >
          children
        </button>
      </p>
    </>
  )
}

export default App
