// Crear una nueva instancia de Swiper con la clase "mySwiper-1"
var swiper =new Swiper (".mySwiper-1",{
    // Mostrar un solo slide a la vez
    slidesPerView:1,
    // Espacio entre los slides
    spaceBetween:30,
    // Habilitar el bucle infinito
    loop:true,
    // Configurar la paginación con los botones de siguiente y anterior
    pagination:{
        el:".swiper-button-mext",// Elemento que contendrá los botones de paginación
        Clickable:true,// Hacer los botones de paginación clicables
    },
    // Configurar la navegación con botones de siguiente y anterior
    navigation:{
        nextEl:".swiper-button-next",// Selector del botón de siguiente
        prevEl:".swiper-button-prev",// Selector del botón de anterior
    }
    
    });

// Crear una nueva instancia de Swiper con la clase "mySwiper-1"
var swiper =new Swiper (".mySwiper-2",{
    // Mostrar un solo slide a la vez
    slidesPerView:3,
    // Espacio entre los slides
    spaceBetween:20,
    // Habilitar el bucle infinito
    loop:true,
    loopFillGroupwithBlank:true,
    navigation:{
        nextEl:".swiper-button-next",// Selector del botón de siguiente
        prevEl:".swiper-button-prev",// Selector del botón de anterior
    },
    breakpoints: {
        0:{
            slidesPerView:1,       
        },
    
        520:{
            slidesPerView:2,       
        },
    
        500:{
            slidesPerView:1       
        }
    
        }
        
    });
    
let tabInputs = document.querySelectorA11(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change', function() {
        let id= input.ariaValueMax ;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
})

});
// ------------------------------------------
// Obtén referencias a los  de navegación
const enlaceproducto = document.querySelector('a[href="#producto"]');
const enlacehorio = document.querySelector('a[href="#horario"]');
// Agrega manejadores de eventos a los enlaces


// Función para desplazarse suavemente a la sección correspondiente
function scrollToSection(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Obtén el ID de la sección
    const targetSection = document.getElementById(targetId);
    const offset = 70; // Ajusta el desplazamiento vertical

    // Realiza el desplazamiento suave
    window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth'
    });
}


    