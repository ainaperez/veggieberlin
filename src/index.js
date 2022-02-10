
// Burger Menu

const burgerMenu = document.getElementById('burger-menu')

burgerMenu.addEventListener('click', applyBurgerMenu)

function applyBurgerMenu () {
  const x = document.getElementById('ul-nav')
  if (x.className === 'nav_bar') {
    x.className += ' nav_active'
  } else {
    x.className = 'nav_bar'
  }
}
