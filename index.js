const productos = [
  {
    id: 1,
    brand: 'Canyon',
    name: 'Canyon Grizl CF SL 8',
    price: 2999.99,
    image: 'path/to/image1.jpg'
  },
  {
    id: 2,
    brand: 'Trek',
    name: 'Trek Checkpoint SL 6',
    price: 3799.99,
    image: 'path/to/image2.jpg'
  },
  {
    id: 3,
    brand: 'Megamo',
    name: 'Megamo Silk Grx DI2 12S',
    price: 5299,
    image: 'path/to/image3.jpg'
  },
  {
    id: 4,
    brand: 'Specialized',
    name: 'Specialized Diverge Expert Carbon',
    price: 6300,
    image: 'path/to/image4.jpg'
  },
  {
    id: 5,
    brand: 'Pinarello',
    name: 'Pinarello Grevil F',
    price: 8280,
    image: 'path/to/image5.jpg'
  },
  {
    id: 6,
    brand: 'BMC',
    name: 'BMC Kaius 01 three',
    price: 5999,
    image: 'path/to/image6.jpg'
  },
  {
    id: 7,
    brand: 'Orbea',
    name: 'Orbea Terra M20',
    price: 5799,
    image: 'path/to/image7.jpg'
  },
  {
    id: 8,
    brand: 'Ridley',
    name: 'Ridley Invenio',
    price: 4999,
    image: 'path/to/image8.jpg'
  },
  {
    id: 9,
    brand: 'Wilier',
    name: 'Wilier Jaroon MY2024',
    price: 2000,
    image: 'path/to/image9.jpg'
  },
  {
    id: 10,
    brand: 'BH',
    name: 'BH Grevil X',
    price: 3500,
    image: 'path/to/image10.jpg'
  },
  {
    id: 11,
    brand: 'Colnago',
    name: 'Colnago c68',
    price: 7701,
    image: 'path/to/image11.jpg'
  },
  {
    id: 12,
    brand: 'Bianchi',
    name: 'Bianchi Arcadex',
    price: 5299,
    image: 'path/to/image12.jpg'
  }
]

// Función para renderizar productos en el contenedor
function pintarProductos(productosFiltrados) {
  const container = document.querySelector('.grid-container')
  container.innerHTML = '' // Limpia el contenedor actual

  if (productosFiltrados.length === 0) {
    container.innerHTML = '<p>No hay productos que mostrar.</p>' // Mensaje en caso de que no haya productos
  }

  productosFiltrados.forEach((producto) => {
    const card = document.createElement('article')
    card.className = 'card'
    card.setAttribute('data-price', producto.price)
    card.setAttribute('data-brand', producto.brand)

    card.innerHTML = `
      <h3>${producto.name}</h3>
      <img src="${producto.image}" alt="${producto.name}" />
      <p>${producto.price.toFixed(2)}€</p>
      <a href="#" class="card-button">COMPRAR</a>
    `

    container.appendChild(card)
  })
}

// Función para filtrar productos por marca
function filtrarProductos(marca) {
  return productos.filter((producto) => producto.brand === marca)
}

// Función para filtrar productos por rango de precio
function filtrarPorPrecio(rango) {
  if (rango === '0-2500') {
    return productos.filter(
      (producto) => producto.price >= 0 && producto.price <= 2500
    )
  } else if (rango === '2500-5000') {
    return productos.filter(
      (producto) => producto.price > 2500 && producto.price <= 5000
    )
  } else if (rango === '5000-7500') {
    return productos.filter(
      (producto) => producto.price > 5000 && producto.price <= 7500
    )
  } else if (rango === '7500+') {
    return productos.filter((producto) => producto.price > 7500)
  }
  return []
}

// Función para aplicar filtros
function aplicarFiltros(marca, rangoPrecio) {
  let productosFiltrados = productos

  if (marca && marca !== 'todas') {
    productosFiltrados = filtrarProductos(marca)
  }

  if (rangoPrecio) {
    productosFiltrados = filtrarPorPrecio(rangoPrecio)
  }

  pintarProductos(productosFiltrados) // Asegúrate de que esta línea esté presente
}

// Función para ordenar las tarjetas
function ordenarCards(orden) {
  const container = document.querySelector('.grid-container')
  const cards = Array.from(container.querySelectorAll('.card'))

  cards.sort((a, b) => {
    const precioA = parseFloat(a.getAttribute('data-price'))
    const precioB = parseFloat(b.getAttribute('data-price'))

    return orden === 'asc' ? precioA - precioB : precioB - precioA
  })

  // Reinsertar las tarjetas ordenadas en el contenedor
  cards.forEach((card) => container.appendChild(card))
}

// Alterna la visibilidad del menú de ordenar
document.querySelector('.ordenar-boton').addEventListener('click', function () {
  const filtrarMenu = document.querySelector('.filtrar-menu')
  const ordenarMenu = document.querySelector('.ordenar-menu')

  if (ordenarMenu.style.display === 'block') {
    ordenarMenu.style.display = 'none'
  } else {
    ordenarMenu.style.display = 'block'
    filtrarMenu.style.display = 'none' // Oculta el menú de filtros
  }
})

// Alterna la visibilidad del menú de filtros
document.querySelector('.filtrar-boton').addEventListener('click', function () {
  const ordenarMenu = document.querySelector('.ordenar-menu')
  const filtrarMenu = document.querySelector('.filtrar-menu')

  if (filtrarMenu.style.display === 'block') {
    filtrarMenu.style.display = 'none'
  } else {
    filtrarMenu.style.display = 'block'
    ordenarMenu.style.display = 'none' // Oculta el menú de ordenar
  }
})

// Ordenar de menor a mayor
document
  .querySelector('.ordenar-menor-mayor')
  .addEventListener('click', function () {
    ordenarCards('asc')
  })

// Ordenar de mayor a menor
document
  .querySelector('.ordenar-mayor-menor')
  .addEventListener('click', function () {
    ordenarCards('desc')
  })

// Añadir eventos de filtrado en los elementos de la lista de filtros
document.querySelectorAll('.filtrar-menu li').forEach((li) => {
  li.addEventListener('click', function () {
    const marca = this.getAttribute('data-brand')
    const rangoPrecio = this.getAttribute('data-price-range')

    // Aplicar los filtros y actualizar los productos
    aplicarFiltros(marca === null ? 'todas' : marca, rangoPrecio)
  })
})

// Añadir eventos para filtros específicos
document.querySelectorAll('.filtrar-menu li[data-brand]').forEach((li) => {
  li.addEventListener('click', () =>
    aplicarFiltro(li.getAttribute('data-brand'))
  )
})
document
  .querySelectorAll('.filtrar-menu li[data-price-range]')
  .forEach((li) => {
    li.addEventListener('click', () =>
      aplicarFiltros(null, li.getAttribute('data-price-range'))
    )
  })

// Función para aplicar el filtro por marca
function aplicarFiltro(marca) {
  const productosFiltrados = filtrarProductos(marca)
  pintarProductos(productosFiltrados)
}
