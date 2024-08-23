document.querySelector('.ordenar-boton').addEventListener('click', function () {
  const filtrarMenu = document.querySelector('.filtrar-menu')
  if (filtrarMenu.style.display === 'block') {
    filtrarMenu.style.display = 'none'
  }

  const ordenarMenu = document.querySelector('.ordenar-menu')
  ordenarMenu.style.display =
    ordenarMenu.style.display === 'block' ? 'none' : 'block'
})

document.querySelector('.filtrar-boton').addEventListener('click', function () {
  const ordenarMenu = document.querySelector('.ordenar-menu')
  if (ordenarMenu.style.display === 'block') {
    ordenarMenu.style.display = 'none'
  }

  const filtrarMenu = document.querySelector('.filtrar-menu')
  filtrarMenu.style.display =
    filtrarMenu.style.display === 'block' ? 'none' : 'block'
})

document
  .querySelector('.ordenar-menor-mayor')
  .addEventListener('click', function () {
    ordenarCards('asc')
  })

document
  .querySelector('.ordenar-mayor-menor')
  .addEventListener('click', function () {
    ordenarCards('desc')
  })

function ordenarCards(orden) {
  const container = document.querySelector('.grid-container')
  const cards = Array.from(container.querySelectorAll('.card'))

  cards.sort((a, b) => {
    const precioA = parseFloat(a.getAttribute('data-price'))
    const precioB = parseFloat(b.getAttribute('data-price'))

    return orden === 'asc' ? precioA - precioB : precioB - precioA
  })

  cards.forEach((card) => container.appendChild(card))
}

document.querySelector('.filtrar-todas').addEventListener('click', function () {
  filtrarCards('todas')
})

document
  .querySelector('.filtrar-canyon')
  .addEventListener('click', function () {
    filtrarCards('Canyon')
  })

document.querySelector('.filtrar-trek').addEventListener('click', function () {
  filtrarCards('Trek')
})

document
  .querySelector('.filtrar-megamo')
  .addEventListener('click', function () {
    filtrarCards('Megamo')
  })

document
  .querySelector('.filtrar-specialized')
  .addEventListener('click', function () {
    filtrarCards('Specialized')
  })

document
  .querySelector('.filtrar-pinarello')
  .addEventListener('click', function () {
    filtrarCards('Pinarello')
  })

document
  .querySelector('.filtrar-bianchi')
  .addEventListener('click', function () {
    filtrarCards('Bianchi')
  })

document
  .querySelector('.filtrar-colnago')
  .addEventListener('click', function () {
    filtrarCards('Colnago')
  })

document
  .querySelector('.filtrar-ridley')
  .addEventListener('click', function () {
    filtrarCards('Ridley')
  })
document.querySelector('.filtrar-bmc').addEventListener('click', function () {
  filtrarCards('BMC')
})
document.querySelector('.filtrar-bh').addEventListener('click', function () {
  filtrarCards('BH')
})

document.querySelector('.filtrar-orbea').addEventListener('click', function () {
  filtrarCards('Orbea')
})

document
  .querySelector('.filtrar-wilier')
  .addEventListener('click', function () {
    filtrarCards('Wilier')
  })

function filtrarCards(marca) {
  const container = document.querySelector('.grid-container')
  const cards = Array.from(container.querySelectorAll('.card'))

  cards.forEach((card) => {
    const cardMarca = card.getAttribute('data-brand')
    if (marca === 'todas' || cardMarca === marca) {
      card.style.display = ''
    } else {
      card.style.display = 'none'
    }
  })
}
