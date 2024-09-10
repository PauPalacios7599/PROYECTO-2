const productos = [
  {
    id: 1,
    brand: 'Canyon',
    name: 'Canyon Grail CF SLX 8',
    price: 5599,
    image: './assets/imagenes/canyon8.webp',
    link: 'https://www.canyon.com/es-es/bicicletas-gravel/performance/grail/cf-slx/grail-cf-slx-8-di2/3793.html?dwvar_3793_pv_rahmenfarbe=R120_P01'
  },
  {
    id: 2,
    brand: 'Trek',
    name: 'Trek Checkpoint SLR 6 AXS',
    price: 7799,
    image: './assets/imagenes/trek.webp',
    link: 'https://www.trekbikes.com/es/es_ES/bicicletas/bicicletas-de-carretera/bicicletas-de-gravel/checkpoint/checkpoint-slr/checkpoint-slr-6-axs/p/35293/?colorCode=yellow_bluedark'
  },
  {
    id: 3,
    brand: 'Megamo',
    name: 'Megamo Silk Grx DI2 12S',
    price: 5299,
    image: './assets/imagenes/Megamo Silk grx di2.png',
    link: 'https://www.megamo.com/es/bicicletas/gravel/silk/silk-grx-di2-12s-(24)'
  },
  {
    id: 4,
    brand: 'Specialized',
    name: 'Specialized Diverge Expert Carbon',
    price: 6300,
    image: './assets/imagenes/specialized diverge expert carbon.webp',
    link: 'https://www.specialized.com/es/es/diverge-expert-carbon/p/221370?color=367650-221370'
  },
  {
    id: 5,
    brand: 'Pinarello',
    name: 'Pinarello Grevil F',
    price: 8280,
    image: './assets/imagenes/Pinarello.jpg',
    link: 'https://www.pinarello.es/bici-2022/b301-iceland-black/'
  },
  {
    id: 6,
    brand: 'BMC',
    name: 'BMC Kaius 01 THREE',
    price: 5999,
    image: './assets/imagenes/bmc.webp',
    link: 'https://es.bmc-switzerland.com/es/collections/kaius-01-gravel-bikes/products/kaius-01-three-bikes-bmc-24-10624-002'
  },
  {
    id: 7,
    brand: 'Orbea',
    name: 'Orbea Terra M20',
    price: 5799,
    image: './assets/imagenes/orbea.jpg',
    link: 'https://www.orbea.com/es-es/bicicletas/carretera/terra/cat/terra-m20iteam'
  },
  {
    id: 8,
    brand: 'Ridley',
    name: 'Ridley Invenio',
    price: 4999,
    image: './assets/imagenes/ridley.jpeg',
    link: 'https://www.ridley-bikes.com/es_ES/bikes/SBIKAFRID168'
  },
  {
    id: 9,
    brand: 'Wilier',
    name: 'Wilier Jaroon MY2024',
    price: 2000,
    image: './assets/imagenes/wilier.webp',
    link: 'https://www.wilier.com/es/bicicletas/gravel/jaroon-alu-my2024?color=j26-green-grey-1'
  },
  {
    id: 10,
    brand: 'BH',
    name: 'BH Gravel X',
    price: 3500,
    image: './assets/imagenes/BH.jpg',
    link: 'https://www.bhbikes.com/es_ES/bicicletas/carretera/aventura-y-gravel/gravelx-carbon-5-0at-lg505?c=roo'
  },
  {
    id: 11,
    brand: 'Colnago',
    name: 'Colnago C68',
    price: 7701,
    image: './assets/imagenes/Colnago.webp',
    link: 'https://www.colnago.com/es-es/premium-bikes/c68-gravel-bike'
  },
  {
    id: 12,
    brand: 'Bianchi',
    name: 'Bianchi Arcadex',
    price: 4349,
    image: './assets/imagenes/Bianchi.webp',
    link: 'https://www.bianchistore.es/product/arcadex-ekar-13s/'
  }
]

function pintarProductos(productosFiltrados) {
  console.log('Productos a pintar:', productosFiltrados)
  const container = document.querySelector('.grid-container')
  container.innerHTML = ''

  if (productosFiltrados.length === 0) {
    const productosAleatorios = obtenerProductosAleatorios(3)
    container.innerHTML =
      '<p>No se encontraron productos según los filtros, aquí tienes algunas sugerencias:</p>'
    productosAleatorios.forEach((producto) => {
      const card = document.createElement('article')
      card.className = 'card'
      card.setAttribute('data-price', producto.price)
      card.setAttribute('data-brand', producto.brand)

      card.innerHTML = `
        <h3>${producto.name}</h3>
        <img src="${producto.image}" alt="${producto.name}" />
        <p>${producto.price.toFixed(2)}€</p>
        <a href="${producto.link}" class="card-button">COMPRAR</a>
      `

      container.appendChild(card)
    })
    return
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
      <a href="${producto.link}" class="card-button">COMPRAR</a>
    `

    container.appendChild(card)
  })
}

function obtenerProductosAleatorios(cantidad) {
  const productosMezclados = [...productos].sort(() => 0.5 - Math.random())
  return productosMezclados.slice(0, cantidad)
}

function limpiarFiltros() {
  pintarProductos(productos)
}

document
  .querySelector('.limpiar-filtros-boton')
  .addEventListener('click', limpiarFiltros)

function filtrarPorPrecio(rango, productosFiltrados) {
  if (rango === '0-2500') {
    return productosFiltrados.filter(
      (producto) => producto.price >= 0 && producto.price <= 2500
    )
  } else if (rango === '2500-5000') {
    return productosFiltrados.filter(
      (producto) => producto.price > 2500 && producto.price <= 5000
    )
  } else if (rango === '5000-7500') {
    return productosFiltrados.filter(
      (producto) => producto.price > 5000 && producto.price <= 7500
    )
  } else if (rango === '7500+') {
    return productosFiltrados.filter((producto) => producto.price > 7500)
  }
  return []
}

function aplicarFiltros(marca, rangoPrecio) {
  let productosFiltrados = productos

  if (marca && marca !== 'todas') {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.brand === marca
    )
  }

  if (rangoPrecio) {
    productosFiltrados = filtrarPorPrecio(rangoPrecio, productosFiltrados)
  }

  pintarProductos(productosFiltrados)
}

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

const ordenarBoton = document.querySelector('.ordenar-boton')
ordenarBoton.addEventListener('click', function () {
  const filtrarMenu = document.querySelector('.filtrar-menu')
  const ordenarMenu = document.querySelector('.ordenar-menu')

  if (ordenarMenu.style.display === 'block') {
    ordenarMenu.style.display = 'none'
    ordenarBoton.setAttribute('aria-expanded', 'false')
  } else {
    ordenarMenu.style.display = 'block'
    filtrarMenu.style.display = 'none'
    ordenarBoton.setAttribute('aria-expanded', 'true')
  }
})

const filtrarBoton = document.querySelector('.filtrar-boton')
filtrarBoton.addEventListener('click', function () {
  const ordenarMenu = document.querySelector('.ordenar-menu')
  const filtrarMenu = document.querySelector('.filtrar-menu')

  if (filtrarMenu.style.display === 'block') {
    filtrarMenu.style.display = 'none'
    filtrarBoton.setAttribute('aria-expanded', 'false')
  } else {
    filtrarMenu.style.display = 'block'
    ordenarMenu.style.display = 'none'
    filtrarBoton.setAttribute('aria-expanded', 'true')
  }
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

document.querySelectorAll('.filtrar-menu li').forEach((li) => {
  li.addEventListener('click', function () {
    const marca = this.getAttribute('data-brand')
    const rangoPrecio = this.getAttribute('data-price-range')

    aplicarFiltros(marca === null ? 'todas' : marca, rangoPrecio)
  })
})

// Llama a la función para pintar productos al cargar la página
pintarProductos(productos)
