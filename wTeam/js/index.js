// search
const search = document.querySelector("#header-search");
const searchbox = document.querySelector(".header-search-box");
// cart
const cart = document.querySelector("#header-cart");
const cartbox = document.querySelector(".header-cart-box");
// search-header
search.addEventListener("click", function (e) {
  searchbox.classList.toggle("active");
  cartbox.classList.remove("active");
});

//cart-header
cart.addEventListener("click", () => {
  cartbox.classList.toggle("active");
  searchbox.classList.remove("active");
});
//Collection
const collbtnactives = document.querySelectorAll(".btn-white");
collbtnactives.forEach((collbtnactive) => {
  collbtnactive.addEventListener("click", () => {
    removerClass();
    collbtnactive.classList.add("active");
  });
});
function removerClass() {
  collbtnactives.forEach((collbtnactive) => {
    collbtnactive.classList.remove("active");
  });
}

// page

const pages = document.querySelectorAll(".page-item");
console.log(pages);

pages.forEach((page) => {
  page.addEventListener("click", () => {
    removePageActive();
    page.classList.add("active");
  });
});

function removePageActive() {
  pages.forEach((page) => {
    page.classList.remove("active");
  });
}

// stick-slider

$(document).ready(function () {
  $(".image-slider").slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

    arrows: false,
  });
});

// carousel

// $(document).ready(function () {
//   $(".image-carousel").slick({
//     slidesToShow: 3,
//   });
// });

//
$(document).ready(function () {
  $(".image-carousel").slick({
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
