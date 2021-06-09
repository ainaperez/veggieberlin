
// Burger Menu

window.applyBurgerMenu = function applyBurgerMenu () {
  const x = document.getElementById('ul-nav')
  if (x.className === 'nav_bar') {
    x.className += ' nav_active'
  } else {
    x.className = 'nav_bar'
  }
}

// Category filters

window.onload = function () {
  filterSelection('all')
  document.getElementById('all')

  const btnContainer = document.getElementById('btnId')
  const btns = btnContainer.getElementsByClassName('btn')
  console.log(btns)

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      const c = btns[i].id
      console.log(c)
      const current = document.getElementsByClassName('active')
      current[1].className = current[1].className.replace(' active', '')
      this.className += ' active'
      filterSelection(c)
    })
  }

  function filterSelection (c) {
    let i
    const x = document.getElementsByClassName('content_filter')
    if (c === 'all') c = ''
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], 'show')
      if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show')
    }
  }

  function addClass (element, name) {
    let i
    const arr1 = element.className.split('')
    const arr2 = name.split(' ')
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        element.className += ' ' + arr2[i]
      }
    }
  }

  function removeClass (element, name) {
    let i
    const arr1 = element.className.split(' ')
    const arr2 = name.split(' ')
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1)
      }
    }
    element.className = arr1.join(' ')
  }
}

// aricle images zoom
/*
  window.onload = function () {
    const modal = document.getElementById('myModal')

    const img = document.getElementById('myImg')
    const modalImg = document.getElementById('img01')

    img.onclick = function () {
      modal.style.display = 'block'
      modalImg.src = this.src
    }
    const span = document.getElementsByClassName('close_modal')[0]

    span.onclick = function () {
      modal.style.display = 'none'
    }
} */
