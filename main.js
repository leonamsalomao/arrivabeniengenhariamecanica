/* Barra superior */

window.addEventListener('scroll', onScroll)

const navigation = document.querySelector('#navigation')
const backToTopButton = document.querySelector('#backToTopButton')

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(product)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  /* Verifica se a seção passou da linha */

  //Topo da seção
  const sectionTop = section.offsetTop

  //Altura da seção
  const sectionHeight = section.offsetHeight

  //Topo da seção chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}



function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu */

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

/* ScrollReveal */

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #home Image, #home .stats, #product header, #product header img, #product .card, #about, #about header, #about .content'
)









function nextImage(carouselId) {
  const images = document.querySelectorAll(`#${carouselId} .carousel-image`);
  let currentIndex = [...images].findIndex(img => img.style.display !== "none");
  
  images[currentIndex].style.display = "none"; // Esconde a imagem atual
  currentIndex = (currentIndex + 1) % images.length; // Próximo índice
  images[currentIndex].style.display = "block"; // Mostra a próxima imagem
}

function prevImage(carouselId) {
  const images = document.querySelectorAll(`#${carouselId} .carousel-image`);
  let currentIndex = [...images].findIndex(img => img.style.display !== "none");
  
  images[currentIndex].style.display = "none"; // Esconde a imagem atual
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Índice anterior
  images[currentIndex].style.display = "block"; // Mostra a imagem anterior
}


imgElement.style.opacity = 0; // Fade-out
setTimeout(() => {
    imgElement.src = novaImagem;
    imgElement.style.opacity = 1; // Fade-in
}, 500);