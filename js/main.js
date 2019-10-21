document.addEventListener("DOMContentLoaded", function() {
  const cityPick = document.querySelector("#city-pick");
  cityPick.addEventListener("change", function(event) {
    const selectedCity = event.target.value;

    if (selectedCity === "nyc") {
      setNYCBackgroundImage();
    } else if (selectedCity === "sf") {
      setSFBackgroundImage();
    } else if (selectedCity === "la") {
      setLABackgroundImage();
    } else if (selectedCity === "atx") {
      setATXBackgroundImage();
    } else if (selectedCity === "syd") {
      setSYDBackgroundImage();
    } else {
      setPickCityBackgroundImage();
    }
  });
});
