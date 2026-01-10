<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">

  <div class="app-container">

    <!-- HERO -->
    <section class="principal">

      <header class="header" :class="{ scrolled: isScrolled }">
        <div class="logo">
          <a href="#" style="color: #ffe045; text-decoration: none;">
            <p><span class="span1">Erick'a </span><span class="span2"> C & E</span></p>
          </a>
        </div>

        <!-- BOTÓN HAMBURGUESA -->
        <div class="hamburger" @click="menuOpen = !menuOpen">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav class="nav" :class="{ open: menuOpen }">
          <a href="#">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
          <a href="#reseñas">Reseñas</a>
          <a href="#ubicacion">Ubícanos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="https://wa.me/962956919?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20mi%20evento."
            target="_blank" class="btn">
            Contáctanos
          </a>
        </nav>
      </header>


      <div class="titulo reveal reveal-scale">
        <p class="a1">Erick'a</p>
        <span class="divisor"></span>
        <div class="a2">
          <p>Catering</p>
          <p>&</p>
          <p>Eventos</p>
        </div>
      </div>

      <button @click="showModal = true" class="quote-btn reveal reveal-scale">
        Cotiza Ahora
      </button>
    </section>

    <CotizacionModal :show="showModal" @close="showModal = false" />

    <!-- SERVICIOS -->
    <section id="servicios" class="services reveal">
      <div class="services-header">
        <h2>
          Todo para tu
          <span class="typing">
            {{ texto }}
          </span>
        </h2>
        <p class="services-subtitle">
          Ofrecemos productos premium para hacer de tu evento algo inolvidable.
        </p>
      </div>

      <div class="cards-container">
        <div class="card reveal reveal-scale reveal-delay-1">
          <div class="image-wrapper">
            <img src="../assets/mesasysillas.jpg">
            <div class="overlay">
              <h3>Mesas y Sillas</h3>
              <p>Diseños modernos y elegantes.</p>
            </div>
          </div>
        </div>

        <div class="card reveal reveal-scale reveal-delay-2">
          <div class="image-wrapper">
            <img src="../assets/cubiertos.JPG">
            <div class="overlay">
              <h3>Cubiertos</h3>
              <p>Estilo sofisticado.</p>
            </div>
          </div>
        </div>

        <div class="card reveal reveal-scale reveal-delay-3">
          <div class="image-wrapper">
            <img src="../assets/decoracion.jpg">
            <div class="overlay">
              <h3>Decoración</h3>
              <p>Detalles que marcan la diferencia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GALERÍA -->
    <section id="galeria" class="gallery-masonry reveal">
      <div class="gallery-header">
        <h2>Eventos que <span style="color:#ffe045;font-size:4rem">Inspiran</span></h2>
        <p class="gallery-subtitle">
          Momentos únicos creados con pasión y detalle.
        </p>
      </div>

      <!-- From Uiverse.io by ashwin_5681 -->
      <div class="slider" style="--width: 300px;
    --height: 500px;
    --quantity: 7;">
        <div class="list">
          <div class="item" style="--position: 1">
            <div class="card-carousel1">
              <p>LOS OLIVOS</p>
            </div>
          </div>
          <div class="item" style="--position: 2">
            <div class="card-carousel2">
              <p>VILLA MARIA DEL TRIUNFO</p>
            </div>
          </div>
          <div class="item" style="--position: 3">
            <div class="card-carousel3">
              <p>LINCE</p>
            </div>
          </div>
          <div class="item" style="--position: 4">
            <div class="card-carousel4">
              <p>CHORRILLOS</p>
            </div>
          </div>
          <div class="item" style="--position: 5">
            <div class="card-carousel5">
              <p>LINCE</p>
            </div>
          </div>
          <div class="item" style="--position: 6">
            <div class="card-carousel6">
              <p>SAN ISIDRO</p>
            </div>
          </div>
          <div class="item" style="--position: 7">
            <div class="card-carousel7">
              <p>MIRAFLORES</p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="reseñas" id="reseñas">
      <h2 style="font-size: 3.5rem; text-align: center;">Lo que dicen <span
          style="color:#ffe045;font-size:3rem">NUESTROS CLIENTES</span></h2>

      <div class="parent">
        <div class="div1 review">
          <p class="texto">“El servicio fue impecable, la comida llegó caliente y deliciosa.”</p>
          <span class="cliente">— María G.</span>
        </div>

        <div class="div3 review">
          <p class="texto">“Excelente presentación y sabor. Ideal para eventos corporativos.”</p>
          <span class="cliente">— Carlos R.</span>
        </div>

        <div class="div4 review">
          <p class="texto">“Todos mis invitados quedaron encantados con el catering.”</p>
          <span class="cliente">— Ana P.</span>
        </div>

        <div class="div5 review">
          <p class="texto">“Puntuales, profesionales y muy atentos a los detalles.”</p>
          <span class="cliente">— Luis M.</span>
        </div>

        <div class="div6 review">
          <p class="texto">“La mejor opción para bodas y celebraciones importantes.”</p>
          <span class="cliente">— Sofía T.</span>
        </div>

        <div class="div7 review">
          <p class="texto">“Menús variados y adaptados a nuestras necesidades.”</p>
          <span class="cliente">— Javier C.</span>
        </div>

        <div class="div8 review">
          <p class="texto">“Calidad y buen trato desde el primer contacto.”</p>
          <span class="cliente">— Paula D.</span>
        </div>

        <div class="div10 review">
          <p class="texto">“Sin duda volveremos a contratarlos.”</p>
          <span class="cliente">— Roberto V.</span>
        </div>
      </div>
    </section>


    <!-- UBICACIÓN -->
    <section id="ubicacion" class="location">
      <div class="location-text">
        <h2 style="font-size: 4rem; color: white;">Estamos cerca de ti</h2>
        <p style="color: white; font-size: 1.1rem;">
          Llegamos a todos los distritos de Lima y alrededores.
          Contáctanos para agendar tu evento.
        </p>
      </div>

      <div class="map-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.0830071176058!2d-76.941678360533!3d-12.032089393374823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c41f5e7fafb9%3A0x9f76e799edcfd74b!2sC.%20Los%20Incas%2C%20Lima%2015498!5e0!3m2!1ses-419!2spe!4v1767935007742!5m2!1ses-419!2spe"
          loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen>
        </iframe>
      </div>
    </section>




    <!-- QUIÉNES SOMOS -->
    <section id="nosotros" class="about reveal">
      <div class="about-container">

        <!-- Columna 1: Texto -->
        <div class="about-text reveal-left">
          <h2 style="font-size: 4rem;">¿Quiénes somos?</h2>

          <p class="about-description">
            En <span style="color:#ffe045;font-size:2rem;font-weight:500;">
              Erick'a Catering & Eventos
            </span>
            contamos con varios años de experiencia brindando servicios de catering y organización de eventos,
            ofreciendo calidad, confianza y atención personalizada. Atendemos todo tipo de celebraciones y
            llegamos a todos los distritos de Lima, llevando sabor, compromiso y excelencia a cada evento para
            hacerlo realmente especial.
          </p>
          <a href="https://wa.me/962956919?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20mi%20evento."
            class="about-btn" target="_blank">
            Contáctanos
          </a>
        </div>

        <!-- Columna 2: Imagen -->
        <div class="about-image reveal-right">
          <img src="../assets/somos.jpg" alt="Equipo de catering en evento" class="about-decorative">
        </div>

      </div>
    </section>





    <footer class="footer">
      <div class="footer-container">
        <!-- Logo y descripción -->
        <div class="footer-logo">
          <div class="logo-text">
            <span class="span1">Erick'a</span> <span class="span2">C & E</span>
          </div>
          <p class="footer-desc">
            Catering & Eventos<br>
            Transformamos tus celebraciones en experiencias inolvidables con calidad, confianza y atención
            personalizada.
          </p>
        </div>

        <!-- Contacto -->
        <div class="footer-contact">
          <h4>Contáctanos</h4>
          <ul>
            <li>
              <a href="https://wa.me/51962956919" target="_blank" rel="noopener" class="whatsapp-link">
                📱 WhatsApp: +51 962 956 919
              </a>
            </li>
            <li>📧 Email: info@erickacatering.com</li>
            <li>📞 Teléfono: +51 962 956 919</li>
            <li>📍 Dirección: Ate, Lima - Perú</li>
          </ul>
        </div>

        <!-- Enlaces rápidos -->
        <div class="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#nosotros">¿Quiénes Somos?</a></li>
          </ul>
        </div>

        <!-- Redes sociales -->
        <div class="footer-social">
          <h4>Síguenos</h4>
          <div class="social-icons">
            <a href="https://facebook.com/tupagina" target="_blank" rel="noopener" aria-label="Facebook">
              Facebook
            </a>
            <a href="https://instagram.com/tuperfil" target="_blank" rel="noopener" aria-label="Instagram">
              Instagram
            </a>
            <a href="https://tiktok.com/@tuusuario" target="_blank" rel="noopener" aria-label="TikTok">
              TikTok
            </a>
          </div>
        </div>
      </div>

      <!-- Línea divisoria y copyright -->
      <div class="footer-bottom">
        <p>© 2026 Erick'a Catering & Eventos. Todos los derechos reservados.</p>
        <p>
          <a href="#">Política de Privacidad</a> •
          <a href="#">Términos y Condiciones</a>
        </p>
      </div>
    </footer>


    <!-- WHATSAPP -->
    <a href="https://wa.me/962956919?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20mi%20evento."
      class="floating-contact-btn" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg">
    </a>

  </div>


</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CotizacionModal from './cotizacionModal.vue'

const palabras = [
  'Evento inolvidable',
  'Día perfecto',
  'Ocasion especial',
  'Reunión memorable',
]
const menuOpen = ref(false) // Estado del menú hamburguesa

const texto = ref('')
let palabraIndex = 0
let letraIndex = 0
let escribiendo = true
let enPausa = false

onMounted(() => {
  setInterval(() => {
    if (enPausa) return   // ⛔ pausa real

    const palabraActual = palabras[palabraIndex]

    if (escribiendo) {
      texto.value += palabraActual[letraIndex]
      letraIndex++

      if (letraIndex === palabraActual.length) {
        enPausa = true
        setTimeout(() => {
          escribiendo = false
          enPausa = false
        }, 2000) // ⏸ pausa de 2 segundos
      }
    } else {
      texto.value = texto.value.slice(0, -1)

      if (texto.value.length === 0) {
        escribiendo = true
        letraIndex = 0
        palabraIndex = (palabraIndex + 1) % palabras.length
      }
    }
  }, 200)
})


const showModal = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const observeElements = () => {
  const elements = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

  elements.forEach(el => observer.observe(el))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  observeElements()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.typing {
  color: #ffe045;
  font-size: 4rem;
  white-space: nowrap;
}

.cursor {
  animation: blink 1s infinite;
  margin-left: 4px;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* ANIMACIONES */
.reveal {
  opacity: 0;
  transform: translateY(0px);
  transition: all 0.5s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  transform: translateX(-40px)
}

.reveal-scale {
  transform: scale(0.95)
}

.reveal-scale.visible {
  transform: scale(1)
}

.reveal-delay-1 {
  transition-delay: .1s
}

.reveal-delay-2 {
  transition-delay: .2s
}

.reveal-delay-3 {
  transition-delay: .3s
}

* {
  font-family: "Raleway", sans-serif;
}

/* Todos tus estilos anteriores (header, hero, services, etc.) se mantienen iguales */
.quote-btn {
  /*background blur */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid #fcf7dd;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 20px;
  font-size: 1.5rem;
  font-weight: lighter;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.quote-btn:hover {
  transform: translateY(-1px);
  border: 1px solid #ffe045;
  color: #ffe045;
}

.quote-icon {
  width: 28px;
  height: 28px;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: #fcf7dd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 10%;
  box-sizing: border-box;
  z-index: 1000;
  transition: all 0.4s ease;
}

.header.scrolled {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

}

.logo {
  display: flex;
  flex-direction: row;
  color: #ffe045;
}

.span1 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.6rem;
  font-weight: normal;
  margin: 0;
}

.span2 {
  font-size: 1.6rem;
  font-family: 'Brush Script MT', cursive;
  font-weight: lighter;
  margin: 0;
}

.nav {
  display: flex;
  align-items: center;
}

.nav .btn {
  background-color: #fcf7dd;
  color: rgb(0, 0, 0);
  padding: 10px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav .btn:hover {
  background-color: #ffe045;
  color: rgb(0, 0, 0);
}

.nav a {
  color: #fcf7dd;
  text-decoration: none;
  margin-left: 30px;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}


/* =============================
   HEADER RESPONSIVE
   ============================= */

/* HAMBURGUESA */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
}

.hamburger span {
  width: 28px;
  height: 3px;
  background: #ffe045;
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* ---------- MOBILE ---------- */
@media (max-width: 768px) { 
 

  .typing {
  color: #ffe045;
  font-size: 2rem;
  white-space: nowrap;
}

  .header {
    padding: 14px 24px;
    height: auto;
  }

  /* Mostrar hamburguesa */
  .hamburger {
    display: flex;
    z-index: 1100;
  }

  /* Ocultar menú por defecto */
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 50%;
    height: 80vh;
    background: rgba(15, 15, 15, 0.98);
    backdrop-filter: blur(12px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
    transition: right 0.4s ease;
  }

  /* Menú abierto */
  .nav.open {
    right: 0;
  }

  .nav a {
    font-size: 1.4rem;
    margin: 0;
  }

  .nav .btn {
    margin-top: 20px;
    padding: 14px 30px;
    font-size: 1rem;
  }
}






.nav a {
  font-weight: normal;
  color: #fcf7dd;
  text-decoration: none;
  margin-left: 20px;
  font-size: 20px;
}

.nav a:hover {
  color: #ffe045;
  font-size: 25px;
  font-weight: bolder;
  transition: all 0.3s ease;
}

/* Hero */
.principal {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
    url('../assets/eventoFondo.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.titulo {
  color: #fcf7dd;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.a1 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 9rem;
  margin: 0;
}

.divisor {
  width: 2px;
  height: 10em;
  background-color: #fcf7dd;
  display: inline-block;
  margin: 0 0.5rem;
}

.a2 {
  font-family: 'Brush Script MT', cursive;
  font-weight: lighter;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.a2 p {
  font-family: 'Brush Script MT', cursive;
  font-weight: lighter;
  font-size: 3rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
  line-height: 1;
  text-align: left;
}

/* =============================
   TÍTULO RESPONSIVE
   ============================= */

.titulo {
  gap: clamp(0.3rem, 1vw, 0.6rem);
  padding: clamp(1rem, 3vw, 2rem);
}

/* Texto principal */
.a1 {
  font-size: clamp(3.5rem, 14vw, 9rem);
}

/* Texto secundario */
.a2 p {
  font-size: clamp(1.4rem, 5vw, 3rem);
}

/* Divisor */
.divisor {
  height: clamp(5rem, 18vw, 10em);
  width: clamp(1px, 0.3vw, 2px);
}





.services {
  padding: 6rem 2rem;
  text-align: center;
  background-color: #f9f9e0;
  box-shadow:
    inset 0 90px 40px -30px f9f9e0,
    inset 0 -90px 40px -30px f9f9e0;
  /* Fondo muy claro para minimalismo */
}

.services-header {
  font-size: 2rem;
  margin: 0.5rem;
  color: #333;
}

.services-header h2 {
  font-size: 2rem;
  margin: 0.5rem 0 1.5rem 0;
  font-weight: 600;
  color: #333;
}

.services-subtitle {
  font-size: 1.2rem;
  color: #000000;
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.6;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
}

.card {
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  aspect-ratio: 4 / 5;
  /* Proporción elegante */
}

.card:hover {
  transform: translateY(-12px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 2rem;
  text-align: left;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.overlay p {
  font-size: 1.1rem;
  line-height: 1.5;
  opacity: 0.95;
}

/* Responsive fino */
@media (max-width: 768px) {

   .header{
    height: 9%;
  }
  .services {
    padding: 4rem 1rem;
  }

  .overlay {
    padding: 1.5rem;
  }

  .overlay h3 {
    font-size: 1.6rem;
  }
}

.gallery {
  padding: 6rem 2rem;
  text-align: center;
  background-color: #fafafa;
}

.gallery-header h2 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.gallery-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.6;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.gallery-item {
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

/* Variaciones de altura para efecto masonry dinámico */
.gallery-item.tall {
  grid-row: span 2;
}

.gallery-item.wide {
  grid-column: span 2;
}

/* Overlay sutil opcional al hover (muy minimal) */
.gallery-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.4s ease;
  pointer-events: none;
  border-radius: 16px;
}

.gallery-item:hover::after {
  background: rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .gallery {
    padding: 4rem 1rem;
  }

  .gallery-item.wide,
  .gallery-item.tall {
    grid-column: auto;
    grid-row: auto;
  }
}



.floating-contact-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25D366;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  z-index: 999;
}

.floating-contact-btn img {
  width: 40px;
  height: 40px;
}






.gallery-masonry {
  padding: 8rem 2rem;
  text-align: center;
  background-color: #f9f9e0;
  /* Fondo blanco puro para más minimalismo */
}

.gallery-header h2 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;
}

.gallery-subtitle {
  font-size: 1.3rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 5rem;
  line-height: 1.6;
}

.masonry-grid {
  column-count: 3;
  column-gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 2rem;
  background: transparent;
  transition: transform 0.4s ease;
}

.masonry-item:hover {
  transform: translateY(-8px);
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
  /* Muy sutil, casi recto */
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  /* Sombra muy ligera */
  transition: all 0.4s ease;
}

.masonry-item:hover img {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  transform: scale(1.02);
}

.masonry-desc {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #444;
  text-align: left;
  padding: 0 0.5rem;
  font-weight: 400;
}

/* Responsive: menos columnas en móvil */
@media (max-width: 1024px) {
  .masonry-grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .gallery-masonry {
    padding: 6rem 1rem;
  }

  .masonry-grid {
    column-count: 1;
    column-gap: 0;
  }

  .masonry-desc {
    text-align: center;
    font-size: 1.2rem;
  }
}


/* From Uiverse.io by ashwin_5681 */
.card-carousel1 {
  width: 100%;
  height: 90%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  padding: 20px;
  background-image:
    linear-gradient(rgb(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    url('../assets/losolivos.jpg');
  background-size: cover;
}

.card-carousel2 {
  width: 100%;
  height: 90%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  padding: 20px;
  background-image:
    linear-gradient(rgb(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    url('../assets/villamaria.jpg');
  background-size: cover;
}

.card-carousel3 {
  width: 100%;
  height: 90%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  padding: 20px;
  background-image:
    linear-gradient(rgb(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    url('../assets/lince.jpg');
  background-size: cover;
}

.card-carousel4 {
  width: 100%;
  height: 90%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  padding: 20px;
  background-image:
    linear-gradient(rgb(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    url('../assets/chorrillos.jpg');
  background-size: cover;
}

.card-carousel5 {
  width: 100%;
  height: 90%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  padding: 20px;
  background-image:
    linear-gradient(rgb(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    url('../assets/lince2.jpg');
  background-size: cover;
}

.card-carousel6 {
  width: 100%;
  height: 90%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  padding: 20px;
  background-image:
    linear-gradient(rgb(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    url('../assets/sanisidro.jpg');
  background-size: cover;
}

.card-carousel7 {
  width: 100%;
  height: 90%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  padding: 20px;
  background-image:
    linear-gradient(rgb(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    url('../assets/miraflores.jpg');
  background-size: cover;
}

.slider {
  width: 100%;
  height: var(--height);
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
}

.slider .list {
  display: flex;
  width: 100%;
  min-width: calc(var(--width) * var(--quantity));
  position: relative;
}

.slider .list .item {
  width: var(--width);
  height: var(--height);
  position: absolute;
  left: 100%;
  animation: autoRun 30s linear infinite;
  transition: filter 0.5s;
  animation-delay: calc((30s / var(--quantity)) * (var(--position) - 1) - 30s) !important;
}

.slider .list .item img {
  width: 100%;
}

@keyframes autoRun {
  from {
    left: 100%;
  }

  to {
    left: calc(var(--width) * -1);
  }
}

.slider:hover .item {
  animation-play-state: paused !important;
  filter: grayscale(1);
}

.slider .item:hover {
  filter: grayscale(0);
}

.slider[reverse="true"] .item {
  animation: reversePlay 10s linear infinite;
}

@keyframes reversePlay {
  from {
    left: calc(var(--width) * -1);
  }

  to {
    left: 100%;
  }
}




.reseñas {
  padding: 60px 20%;
  background: #f9f9e0;
}

.tituloReseña {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #333;
}

.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  height: 30rem;
}

.review {
  background: white;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.texto {
  font-size: 0.95rem;
  line-height: 1.5;
}

.cliente {
  margin-top: 12px;
  font-weight: 600;
  color: #c59d5f;
  /* dorado catering */
  font-size: 0.85rem;
}

/* Tu posicionamiento original */
.div1 {
  padding: 10%;
  grid-row: span 2 / span 2;
}

.div3 {
  padding: 10%;
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 2;
}

.div4 {
  padding: 10%;
  grid-row: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 3;
}

.div5 {
  padding: 10%;
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 4;
}

.div6 {
  padding: 10%;
  grid-row: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 3;
}

.div7 {
  padding: 10%;
  grid-row: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 1;
}

.div8 {
  padding: 10%;
  grid-row: span 2 / span 2;
  grid-column-start: 4;
  grid-row-start: 4;
}

.div10 {
  padding: 10%;
  grid-row: span 2 / span 2;
  grid-column-start: 4;
  grid-row-start: 2;
}

/* =============================
   RESEÑAS RESPONSIVE
   ============================= */

/* ---------- TABLET ---------- */
@media (max-width: 992px) {
  .reseñas {
    padding: 60px 8%;
  }

  .parent {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: auto;
  }

  /* Resetear posiciones del grid */
  .parent>div {
    grid-column: auto !important;
    grid-row: auto !important;
    padding: 20px;
  }
}

/* ---------- MÓVIL ---------- */
@media (max-width: 480px) {
  .reseñas {
    padding: 50px 5%;
  }

  .reseñas h2 {
    font-size: 2.2rem !important;
    line-height: 1.2;
  }

  .reseñas h2 span {
    font-size: 2rem !important;
  }

  .review {
    padding: 18px;
    border-radius: 12px;
  }

  .texto {
    font-size: 0.95rem;
  }

  .cliente {
    font-size: 0.85rem;
  }
}









.footer {
  background-color: #1a1a1a;
  /* Fondo oscuro elegante (cambié de #3a3838 a uno más oscuro para mejor contraste) */
  color: #fcf7dd;
  padding: 6rem 2rem 2rem;
  font-family: "Raleway", sans-serif;
}

.footer-container {
  display: grid;
  /* ¡Esto es lo que faltaba! */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto 3rem;
}

.footer-logo .logo-text {
  padding-top: 2rem;
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-logo .span1 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.footer-logo .span2 {
  font-family: 'Brush Script MT', cursive;
  font-weight: lighter;
}

.footer-desc {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;
}

.footer-contact h4,
.footer-links h4,
.footer-social h4 {
  color: #ffe045;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.footer-contact ul,
.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li,
.footer-links li {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.footer-contact a,
.footer-links a {
  color: #fcf7dd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact a:hover,
.footer-links a:hover {
  color: #ffe045;
}

.whatsapp-link {
  color: #25D366 !important;
  font-weight: 600;
}

.social-icons {
  display: flex;
  gap: 1.5rem;
}

.social-icons a {
  color: #fcf7dd;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ffe045;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(252, 247, 221, 0.2);
  font-size: 0.95rem;
  opacity: 0.8;
}

.footer-bottom a {
  font-size: 1.1rem;
  color: #fcf7dd;
  text-decoration: none;
  margin: 0 0.5rem;
}

.footer-bottom a:hover {
  color: #ffe045;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 4rem 1rem 2rem;
  }

  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }

  .social-icons {
    justify-content: center;
  }

  .footer-logo .logo-text {
    justify-content: center;
  }
}

.location {

  padding: 5rem 0;
  background: #0f0f0f;
}

.location-text {
  max-width: 1100px;
  margin: 0 auto 2.5rem;
  padding: 0 2rem;
  text-align: center;
}

.location-text h2 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
}

.location-text p {
  color: #555;
  line-height: 1.6;
}

.map-full {
  width: 100%;
  height: 420px;
  position: relative;
}

.map-full iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.map-full::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0));
  pointer-events: none;
}



.about {
  padding-right: 0px !important;
  padding: 80px 10%;
  background: #0f0f0f;
  color: #fff;
}

.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* 2 columnas */
  align-items: center;
  gap: 60px;

}

/* Columna 1: texto */
.about-text {
  padding-right: 10%;
  display: flex;
  flex-direction: column;
}

.about-text h2 {
  margin-bottom: 20px;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 30px;
}

/* Botón */
.about-btn {
  width: fit-content;
  padding: 14px 34px;
  background: #ffe045;
  color: #000;
  border-radius: 40px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
}

.about-btn:hover {
  background: #ffd000;
  transform: translateY(-3px);
}

/* Columna 2: imagen */
.about-decorative {
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  justify-self: end;
}


/* ---------- TABLET ---------- */
@media (max-width: 992px) {
  .about {
    padding: 70px 6%;
  }

  .about-container {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .about-text {
    padding-right: 0;
    padding-left: 10%;
    text-align: center;
    align-items: center;
  }

  .about-text h2 {
    font-size: 3rem;
  }

  .about-description {
    font-size: 1.05rem;
  }

  .about-decorative {
    justify-self: center;
    max-width: 500px;
  }
}

/* ---------- MÓVIL ---------- */
@media (max-width: 480px) {
  .about {
    padding: 60px 5%;
  }

  .about-text h2 {
    font-size: 2.2rem;
  }

  .about-description {
    font-size: 1rem;
    line-height: 1.6;
  }

  .about-btn {
    padding: 12px 28px;
    font-size: 0.95rem;
  }

  .about-decorative {
    max-width: 100%;
    border-radius: 12px;
  }
}
</style>