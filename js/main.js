function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    }                       
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
       const  nav = document.getElementById(navId);
        if (toggle && nav) {
            toggle.addEventListener('click', ()=> {
                nav.classList.toggle('show'); //js css to display menu
            });
        }
    };
    
    showMenu('nav-toggle', 'nav-menu');
    
    
    const navLink = document.querySelectorAll('.nav__link');
    
    console.log({ navLink });
    
    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show'); //When we click on each nav__link, we remove the show class
    }
    navLink.forEach((n) => n.addEventListener('click', linkAction));

    var swiper = new Swiper(".home-slider", {
        autoHeight: true,
        loop:true,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      var swiper = new Swiper(".Services-slider", {
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
           },
        },
      });
    