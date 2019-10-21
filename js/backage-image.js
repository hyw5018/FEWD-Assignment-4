function backgroundImage() {
  return document.querySelector("main");
}

function clearBackgroundImage() {
  backgroundImage().classList.remove("picCity");
  backgroundImage().classList.remove("nyc");
  backgroundImage().classList.remove("sf");
  backgroundImage().classList.remove("la");
  backgroundImage().classList.remove("atx");
  backgroundImage().classList.remove("syd");
}

function setPickCityBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("picCity");
}

function setNYCBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("nyc");
}

function setSFBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("sf");
}

function setLABackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("la");
}

function setATXBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("atx");
}

function setSYDBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("syd");
}
