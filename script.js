(function ibg() {
  let ibg = document.querySelectorAll(".ibg, .rbg , .bg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      let compStyle = getComputedStyle(ibg[i]);

      if (compStyle.backgroundImage) {
        let oldStyle = compStyle.backgroundImage;
        ibg[i].style.backgroundImage =
          oldStyle +
          ", url(" +
          ibg[i].querySelector("img").getAttribute("src") +
          ")";
      } else {
        ibg[i].style.backgroundImage =
          "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }
})();

function picDiv() {
  let div = document.querySelectorAll(".square");
  for (var i = 0; i < div.length; i++) {
    let compStyle = getComputedStyle(div[i]);
    let widthStyle = compStyle.width;
    div[i].style.height = widthStyle;
  }
}

picDiv();

window.addEventListener("resize", picDiv);

//burger menu func

(function () {
  let burg = document.querySelector(".header__burger");
  burg.addEventListener("click", (event) => {
    let nav = document.querySelectorAll(".header__burger,.header__menu");
    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.toggle("active");
    }
    // document.body.classList.toggle("lock");
  });
})();

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab

  document.getElementById(cityName).style.display = "grid";

  document.querySelector(`.tablinks_${cityName}`).classList.toggle("active");
}
