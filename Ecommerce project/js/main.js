/*==============NavBar===================*/
const menuClose = document.querySelector('.navclose');
const navMenu = document.getElementById('navmenu');
const navToggle = document.getElementById('navtoggle');

if (navToggle) {
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('active');
  }) 
}

if(menuClose){
  menuClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  })
}




// /*==============Search Box===================*/
// const search =  () => {
//   const searchInput = document.getElementById('searchinput').value.toUpperCase();
//   const searchProductContainer = document.getElementById('products');
//   const searchProductItem = document.querySelectorAll('#productitem');
//   const searchProductTitle = searchProductContainer.querySelector('.producttitle');

//   for (let i = 0; i < searchProductTitle.length; i++) {
//     const match = searchProductItem[i].querySelector('.producttitle')[0];
    
//     if(match){
//       let textValue = match.textContent || match.innerHTML

//       if(textValue.toUpperCase().indexOf(searchInput) > -1){
//         searchProductItem[i].style.display = "";
//       }else{
//         searchProductItem[i].style.display = "none";
//       }
//     }
//   }
// }



/*============== Product Gallery ===================*/
function productGallery() {
  const bigImg = document.querySelector('.bigimg');
  const smallImg = document.querySelectorAll('.smallimg');

  smallImg.forEach((img) => {
      img.addEventListener('click', function() {
        bigImg.src = this.src;
      })
  });
}

productGallery();

/*============== Popular slider ===================*/
var swiperCategories = new Swiper(".categorieswrapper", {
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
});

/*============== Arrival slider ===================*/
var arrivalWrapper = new Swiper(".arrivalwrapper", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});

/*============== Product Tabs ===================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active_tab');
        });

        target.classList.add('active_tab');

        tabs.forEach((tab) => {
            tab.classList.remove('active_tab');
        });

        tab.classList.add('active_tab');
    })
})

/*============== Header Scroll ===================*/
const header = document.getElementById('header');
const hero = document.getElementById('hero');

const heroOptions = {
  rootMargin: "-500px 0px 0px 0px"
};

// const heroObserver = new IntersectionObserver(function (entries,heroObserver) {
//   entries.forEach( entry => {
//     if(!entry.isIntersecting){
//       header.classList.add('isscrolled');
//     }else{
//       header.classList.remove('isscrolled');
//     }
//   })
// }, heroOptions);

// heroObserver.observe(hero);