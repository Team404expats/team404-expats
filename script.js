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
  let burg = document.querySelectorAll(".header__burger, .header__menu");

  for (let i = 0; i < burg.length; i++) {
    burg[i].addEventListener("click", (event) => {
      let nav = document.querySelectorAll(".header__burger,.header__menu");
      for (let j = 0; j < nav.length; j++) {
        nav[j].classList.toggle("active");
      }
      // document.body.classList.toggle("lock");
    });
  }
})();

function openCity(evt, tabName) {
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

  document.getElementById(tabName).style.display = "grid";

  document.querySelector(`.tablinks_${tabName}`).classList.toggle("active");
}

//initializing swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  effect: "slide",
});

//phone mask library

const cssPhone = 'input[name="phone"';
new phoneMask().init(cssPhone);
