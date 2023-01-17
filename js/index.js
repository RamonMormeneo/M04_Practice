const querystring = window.location.search;

const urlParams = new URLSearchParams(querystring);
if (urlParams.get("lang")) {
  const lang = urlParams.get("lang");
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  const newURL =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?lang=" +
    lang;
  window.history.replaceState({}, "", newURL);
  const response = await fetch(`./i18n/${lang}.json`);
  const data = await response.json();
  /*codi nostre*/
  document.getElementById("").innerHTML = data.form.first_name;
}

changeLanguage("cast");
changeLanguage("cat");
changeLanguage("en");
