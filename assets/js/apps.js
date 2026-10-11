/*
 * APPLICATIONS LIST
 * -----------------
 * Add, edit or remove entries here to control what appears in the
 * "Applications" section of the website. No other file needs to change.
 *
 *   name        Title shown on the card
 *   description One or two lines about the app
 *   category    Used for the filter buttons (e.g. "Calculators", "Client Portal")
 *   url         Where "Launch" goes. Either:
 *                 - a folder in this website, e.g. "apps/gst-calculator/"
 *                 - an external link, e.g. "https://myapp.streamlit.app"
 *   status      "live"  -> Launch button enabled
 *               "login" -> Launch button enabled, marked as requiring sign-in
 *               "soon"  -> shown as Coming Soon, button disabled
 *   newTab      true to open in a new browser tab (recommended for external apps)
 */
window.APPS = [
  {
    name: "GST Calculator",
    description: "Add or remove GST from an amount and see the CGST / SGST / IGST split instantly.",
    category: "Calculators",
    url: "apps/gst-calculator/",
    status: "live",
    newTab: false
  },
  {
    name: "EMI Calculator",
    description: "Monthly instalment, total interest and repayment schedule for any loan.",
    category: "Calculators",
    url: "apps/emi-calculator/",
    status: "live",
    newTab: false
  },
  {
    name: "Client Document Portal",
    description: "Secure upload and download of documents for existing clients.",
    category: "Client Portal",
    url: "#",
    status: "soon",
    newTab: true
  },
  {
    name: "Compliance Calendar",
    description: "Due dates for Income Tax, GST, TDS and ROC filings at a glance.",
    category: "Resources",
    url: "#",
    status: "soon",
    newTab: false
  }
];
