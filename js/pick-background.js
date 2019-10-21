console.log("Pick background...");

function selectBackgroundImage() {
  const cityPick = document.querySelector("#city-pick");
  // const pickBgnImage = querySelector("#bgn-image-pick");

  cityPick.addEventListener("change", function(event) {
    const selectedCity = event.target.value;
    if (value == "nyc") {
      setNYCBackgroundImage();
    } else if (value == "sf") {
      setSFBackgroundImage();
    } else if (value == "la") {
      setLABackgroundImage();
    } else if (value == "atx") {
      setATXBackgroundImage();
    } else if (value == "syd") {
      setSYDBackgroundImage();
    } else {
      setPickCityBackgroundImage();
    }
  });
}
