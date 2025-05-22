window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".header");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  let themeBtn = document.querySelector('#theme-btn');

  themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-moon');

    if (themeBtn.classList.contains('fa-moon')) {
      document.body.classList.add('active')
    }
    else {
      document.body.classList.remove ('active');
    }
  };

  const images = [
    "../images/wedding-agency-website-images/portfolio/portfolio-9.jpg",
    "../images/wedding-agency-website-images/portfolio/portfolio-2.jpg",
    "../images/wedding-agency-website-images/portfolio/portfolio-3.jpg",
    "../images/wedding-agency-website-images/portfolio/portfolio-4.jpg",
    "../images/wedding-agency-website-images/portfolio/portfolio-7.jpg",
    "../images/wedding-agency-website-images/portfolio/portfolio-8.jpg",
  ];

  let currentIndex = 0;
  
  function changeBackground() {
    const homeSection = document.querySelector(".home");
    homeSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }
  setInterval(changeBackground, 3500);
  document.addEventListener("DOMContentLoaded", changeBackground);
  

  var swiper = new Swiper(".gallery-slider", {
    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:"auto",
    coverflowEffect: {
      rotate:20,
      stretch:0,
      depth:100,
      slideShadows:true,
    },
    loop:true,
    autoplay: {
      delay:3000,
      disableOnInteraction:false,
    },
  });

  var swiper = new Swiper(".review-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetweem:20,
    autoplay: {
      delay:3000,
      disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
    }
  })