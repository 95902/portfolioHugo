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
  .typeString("Hello je suis Marcel")
  .pauseFor(300)
  .typeString("<strong>, Développeur Web</strong>")
  .pause(1000)
  .deleteChars(16)
  .typeString('<span style="color: #27ae60;">Dev PHP</span>!')
  .pauseFor(1000)
  .deleteChars(8)
  .typeString('<span style="color: midnightblue;">Dev JavaScript</span> !')
  .pauseFor(1000)
  .deleteChars(16)
  .typeString('<span style="color: #27ae60;">Dev Symfony</span> !')
  .pauseFor(1000)
  .deleteChars(13)
  .typeString('<span style="color: #ff7e67;">Dev Laravel</span> !')
  .pauseFor(1000)
  .deleteChars(13)
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
