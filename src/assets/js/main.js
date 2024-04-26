


var trigger = document.querySelector('.offset__trigger__wrapper');
var sidebar = document.querySelector('.sidebar');
var overlay = document.querySelector('.overlay');

trigger.addEventListener('click' , function(){
      this.classList.toggle('active')
      sidebar.classList.toggle('active')
      overlay.classList.toggle('active')
  });

  overlay.addEventListener('click' , function(){
      this.classList.remove('active')
      sidebar.classList.remove('active')
      trigger.classList.remove('active')
  });



$('.main__carousel').owlCarousel({
      items:2,
      nav:true,
      dots:true,

      responsive : {
            // breakpoint from 0 up
            0 : {
                  items: 1
            },
            // breakpoint from 480 up
            480 : {
                  items:1
            },
            // breakpoint from 768 up
            768 : {
                  items:1
            }
        }
});




