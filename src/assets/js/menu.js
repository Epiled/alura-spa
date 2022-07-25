const iconBurguer = document.querySelector('[data-burguer]');
const listaMenu = document.querySelector('[data-lista]')

iconBurguer.addEventListener('click', () => {
  listaMenu.classList.toggle('navbar_lista-ativo');
  iconBurguer.classList.toggle('fa-times')
})