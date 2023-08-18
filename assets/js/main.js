(function ($) {
  $(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
      $(".header-area, .offcanvas-wraper").toggleClass("active");
    });
    $(".navbar-toggler").on("click", function () {
      $(".menu-overlay").toggleClass("show");
    });
  });
})(jQuery);

//ReadMore btn
function ReadMoreFunction1() {
  let dots1 = document.querySelector(".dots1");
  let moreText1 = document.querySelector(".more1");
  let btnText1 = document.querySelector(".moreBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read more";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less";
    moreText1.style.display = "inline";
    moreText1.style.color = "#c1bfc8";
  }
}
function ReadMoreFunction2() {
  let dots2 = document.querySelector(".dots2");

  let moreText2 = document.querySelector(".more2");
  let btnText2 = document.querySelector(".moreBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
    moreText2.style.color = "#c1bfc8";
  }
}
function ReadMoreFunction3() {
  let dots3 = document.querySelector(".dots3");

  let moreText3 = document.querySelector(".more3");
  let btnText3 = document.querySelector(".moreBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
    moreText3.style.color = "#c1bfc8";
  }
}
function ReadMoreFunction4() {
  let dots4 = document.querySelector(".dots4");

  let moreText4 = document.querySelector(".more4");
  let btnText4 = document.querySelector(".moreBtn4");

  if (dots4.style.display === "none") {
    dots4.style.display = "none";
    btnText4.innerHTML = "Read more";
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "Read less";
    moreText4.style.display = "inline";
    moreText4.style.color = "#c1bfc8";
  }
}
