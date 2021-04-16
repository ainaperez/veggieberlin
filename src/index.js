// burger menu

window.applyBurgerMenu = function applyBurgerMenu() {
  const x = document.getElementById('ul-nav')
  if (x.className === 'nav_bar') {
    x.className += ' nav_active'
  } else {
    x.className = 'nav_bar'
  }
}

// Category filters

window.onload = function () {
  document.getElementById('all')
  filterSelection('all')
  var btnContainer = document.getElementById("btnId");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[1].className = current[1].className.replace(" active", "");
      this.className += " active";
    })
  }
}

window.filterSelection = function filterSelection (c) {
  var x, i
  x = document.getElementsByClassName('content_filter')
  if (c === 'all') c = '';
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'show')
    if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show')
  }
}

function addClass (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split('')
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += ' ' + arr2[i]
    }
  }
}

function removeClass (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(' ')
}
