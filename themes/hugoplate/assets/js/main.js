// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 20,
  delay: 'natural'
})
  .typeString("Hello je suis Marcel <br>")
  .pauseFor(300)
  .typeString("<strong> Développeur  Web <br></strong>")
  .pause(1000)
  .deleteChars(17)
  .typeString('<span style="color: #A6ACAF;">Dev  PHP</span>!')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<span style="color: #E67E22 ;">Dev  JavaScript</span> !')
  .pauseFor(1000)
  .deleteChars(17)
  .typeString('<span style="color: #27AE60 ;">Dev  Symfony</span> !')
  .pauseFor(1000)
  .deleteChars(15)
  .typeString('<span style="color: #2980B9;">Dev  Laravel</span> !')
  .pauseFor(1000)
  .deleteChars(9)
  .start();

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest('.nav-item').classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

})();
