import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        center: true,
        responsive: {      
            0: { items: 1 },    
            760: { items: 2 }, 
            1024: { items: 3 } 
        },
       
    });
});

