module.exports = {
  options: {
    // Your options here
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    // trans: {
    //   component: "Trans",
    //   i18nKey: "i18nKey",
    //   defaultsKey: "defaults",
    //   extensions: [".js", ".jsx", ".ts", ".tsx"],
    //   fallbackKey: function (ns, value) {
    //     return value
    //   },
    // },
    lngs: ["ad", "ch"], // languages
    ns: ["translation"],
    defaultLng: "en",
    defaultNs: "translation",
    defaultValue: "__STRING_NOT_TRANSLATED__",
    resource: {
      // The paths where resources get loaded from. Adjust accordingly.
      loadPath: "./locales/{{lng}}/translation.json",
      savePath: "./locales/{{lng}}/translation.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    // More options...
  },
  // More configurations...
}
