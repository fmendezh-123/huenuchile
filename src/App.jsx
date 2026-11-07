import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'

function App() {
    const slides = [
    {
      label: 'NUEVA COLECCIÓN',
      title: 'Tu turno, pero',
      highlight: 'con estilo',
      description:
        'Gorros clínicos cómodos, respirables y llenos de color. Diseñados y confeccionados a mano.',
      button: 'Ver gorros clínicos',
      category: 'Gorros clínicos',
    },
    {
      label: 'PIEZAS ÚNICAS',
      title: 'Pequeños detalles',
      highlight: 'que enamoran',
      description:
        'Accesorios de resina epoxi creados a mano, cada uno con su propio encanto.',
      button: 'Ver piezas de resina',
      category: 'Accesorios',
    },
    {
      label: 'HECHO A MANO',
      title: 'Detalles únicos',
      highlight: 'para ti',
      description:
        'Creaciones artesanales hechas con dedicación y cariño.',
      button: 'Explorar tienda',
      category: 'Todos',
    },
    {
      label: 'CON MUCHO CARIÑO',
      title: 'Colores que',
      highlight: 'alegran tu día',
      description:
        'Descubre accesorios y diseños especiales hechos a mano en Chile.',
      button: 'Descubrir productos',
      category: 'Todos',
    },
    {
      label: 'HUENUCHILE',
      title: 'Un detalle',
      highlight: 'especial',
      description:
        'Encuentra ese accesorio que estabas buscando.',
      button: 'Ver colección',
      category: 'Todos',
    },
  ]

  const [activeSlide, setActiveSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [showCart, setShowCart] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
  }
  if (showCart) {
  return (
    <Cart
      onBack={() => setShowCart(false)}
      onContinue={() => alert('Próximamente: continuar con el pedido')}
    />
  )
}
  return (
    <>
      {/* Barra superior */}
      <div className="announcement-bar">
        <span>ENVÍOS A TODO CHILE</span>
        <span>✧ PRODUCTOS HECHOS A MANO CON AMOR</span>
        <span>DISEÑOS ÚNICOS HECHOS A MANO</span>
      </div>

      {/* Encabezado y navegación */}
      <header className="main-header">
        <a href="#inicio" className="brand">
          <img
            src="/logos/Búho Huenu Turquesa.png"
            alt="Logo HuenuChile"
          />
          <span>huenu<span>chile</span></span>
        </a>

        <nav className="main-nav">
          <a href="#inicio">Inicio</a>
          <a href="#tienda">Tienda</a>
          <a href="#categorias">Categorías</a>
          <a href="#como-comprar">¿Cómo comprar?</a>
          <a href="#nosotros">Sobre HuenuChile</a>
        </nav>

        <div className="header-actions">
          <button aria-label="Buscar">⌕</button>
          <a href="#instagram">◎ <span>Síguenos</span></a>
          <button
  type="button"
  className="cart-icon"
  onClick={() => setShowCart(true)}
  aria-label="Abrir carrito"
>
  ♧ <span></span>
</button>
        </div>
      </header>

      {/* Página principal */}
      <main>
        
<section className="carousel-hero" id="inicio">
  <div className="carousel-content">
    <img
      className="carousel-owl"
      src="/logos/Búho Huenu Turquesa.png"
      alt="Búho HuenuChile"
    />

    <span className="eyebrow">
      ✧ {slides[activeSlide].label}
    </span>

    <h1>
      {slides[activeSlide].title}
      <br />
      <span>{slides[activeSlide].highlight}</span>
    </h1>

    <p>{slides[activeSlide].description}</p>

    <a href="#tienda" className="carousel-button">
      {slides[activeSlide].button}
      <span>→</span>
    </a>

    <div className="carousel-controls">
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Diapositiva anterior"
      >
        ‹
      </button>

      <div className="carousel-dots">
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            className={activeSlide === index ? 'active' : ''}
            onClick={() => setActiveSlide(index)}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Diapositiva siguiente"
      >
        ›
      </button>
    </div>
  </div>

  <div className="carousel-image">
    <div className="carousel-image-placeholder">
      <img
        src="/logos/Búho Huenu Turquesa.png"
        alt=""
      />
      <span>Fotografía de la colección próximamente</span>
    </div>

    <div className="handmade-stamp">
      ✧
      <span>Hecho a mano</span>
    </div>
  </div>
</section>

        
<section className="shop-section" id="tienda">
  <div className="shop-heading">
    <span className="eyebrow">HECHO A MANO PARA TI</span>
    <h2>Encuentra algo especial</h2>
    <p>
      Descubre accesorios y creaciones únicas hechas con cariño.
    </p>
  </div>


<div className="category-filters">
  {['Todos', 'Gorros clínicos', 'Coleteros', 'Accesorios', 'Otros'].map(
    (category) => (
      <button
        key={category}
        type="button"
        className={selectedCategory === category ? 'active' : ''}
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    ),
  )}
</div>

<div className="product-grid">
  {[
    {
      id: 1,
      category: 'Gorros clínicos',
      label: 'GORROS CLÍNICOS',
    },
    {
      id: 2,
      category: 'Coleteros',
      label: 'COLETEROS',
    },
    {
      id: 3,
      category: 'Accesorios',
      label: 'ACCESORIOS',
    },
    {
      id: 4,
      category: 'Otros',
      label: 'OTROS',
    },
  ]
    .filter(
      (product) =>
        selectedCategory === 'Todos' ||
        product.category === selectedCategory,
    )
    .map((product) => (
      <article className="product-card" key={product.id}>
        <div className="product-image-placeholder">
          <span>Fotografía próximamente</span>
        </div>

        <div className="product-info">
          <span className="product-category">{product.label}</span>
          <h3>Próximamente</h3>
          <p>Producto hecho a mano.</p>

          <div className="product-bottom">
            <strong>Por definir</strong>
            <button type="button" disabled>
              Próximamente
            </button>
          </div>
        </div>
      </article>
    ))}
</div>
</section>


<section className="categories-section" id="categorias">
  <div className="shop-heading">
    <span className="eyebrow">DESCUBRE</span>
    <h2>Explora nuestras categorías</h2>
    <p>Encuentra tus diseños favoritos hechos a mano.</p>
  </div>

  <div className="categories-grid">
    {[
      {
        name: 'Gorros clínicos',
        description: 'Diseños cómodos, únicos y llenos de color.',
        category: 'Gorros clínicos',
      },
      {
        name: 'Coleteros',
        description: 'Pequeños detalles para darle estilo a tu día.',
        category: 'Coleteros',
      },
      {
        name: 'Accesorios',
        description: 'Creaciones especiales hechas con dedicación.',
        category: 'Accesorios',
      },
      {
        name: 'Otros',
        description: 'Descubre más creaciones de HuenuChile.',
        category: 'Otros',
      },
    ].map((item) => (
      <article className="category-card" key={item.category}>
        <div className="category-image-placeholder">
          <span>Fotografía próximamente</span>
        </div>

        <div className="category-card-info">
          <h3>{item.name}</h3>
          <p>{item.description}</p>

          <button
            type="button"
            onClick={() => {
              setSelectedCategory(item.category)
              document.getElementById('tienda')?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            Explorar categoría →
          </button>
        </div>
      </article>
    ))}
  </div>
</section>


<section className="how-to-section" id="como-comprar">
  <div className="how-to-heading">
    <span className="eyebrow">TU COMPRA, PASO A PASO</span>

    <h2>
      Comprar en Huenu es <span>muy fácil</span>
    </h2>

    <p>
      Todo lo que necesitas para hacer tu pedido con tranquilidad.
    </p>
  </div>

  <div className="how-to-grid">
    <article className="how-to-card">
      <div className="how-to-number">01</div>
      <div className="how-to-icon">♧</div>
      <h3>Elige tus favoritos</h3>
      <p>
        Explora los productos y agrega tus favoritos al carrito.
      </p>
    </article>

    <article className="how-to-card">
      <div className="how-to-number">02</div>
      <div className="how-to-icon">♙</div>
      <h3>Completa tu pedido</h3>
      <p>
        Ingresa tus datos y elige cómo recibir tu compra.
      </p>
    </article>

    <article className="how-to-card">
      <div className="how-to-number">03</div>
      <div className="how-to-icon">✓</div>
      <h3>Selecciona tu pago</h3>
      <p>
        Elige el método de pago disponible para tu pedido.
      </p>
    </article>

    <article className="how-to-card">
      <div className="how-to-number">04</div>
      <div className="how-to-icon">◇</div>
      <h3>Recibe tu compra</h3>
      <p>
        Coordina el retiro o recibe tu pedido por Bluexpress o Starken.
      </p>
    </article>
  </div>

  <div className="how-to-action">
    <a href="#tienda" className="carousel-button">
      Explorar productos
      <span>→</span>
    </a>
  </div>
</section>



<section className="story-section" id="nosotros">

  <div className="story-quote">
    <div className="story-decoration story-decoration-top"></div>
    <div className="story-decoration story-decoration-bottom"></div>

    <span className="story-sparkle">✧</span>

    <blockquote>
      “Cada pieza nace entre telas, colores y muchas ganas de crear algo que te acompañe.”
    </blockquote>

    <span className="story-signature">
      — HUENUCHILE, HECHO EN CHILE
    </span>
  </div>

  <div className="story-content">

    <div className="story-image-placeholder">
      <span>Fotografía de nuestro proceso próximamente</span>
    </div>

    <div className="story-text">
      <span className="eyebrow">DETRÁS DE CADA DETALLE</span>

      <h2>
        Creado a mano,
        <br />
        pensado <span>con cariño</span>
      </h2>

      <p>
        Somos un emprendimiento chileno que transforma ideas y
        materiales en piezas alegres, útiles y únicas. Trabajamos
        en pequeñas colecciones para cuidar cada terminación.
      </p>

      <a href="#contacto" className="story-link">
        CONOCE NUESTRA HISTORIA
        <span>→</span>
      </a>
    </div>

  </div>

</section>


<section className="purpose-section" id="proposito">

  <div className="purpose-intro">
    <img
      className="purpose-logo"
      src="/logos/Búho Huenu Turquesa.png"
      alt="Búho HuenuChile"
    />

    <span className="eyebrow">NUESTRO PROPÓSITO</span>

    <h2>
      Color, identidad
      <br />
      <span>y autenticidad</span>
    </h2>

    <p>
      Lo que hacemos nace de una idea simple: cada persona
      merece sentirse única y expresar quién es.
    </p>
  </div>

  <article className="purpose-card mission-card">
    <span className="purpose-number">01</span>
    <span className="purpose-icon">♡</span>

    <h3>Misión</h3>

    <p>
      En Huenuchile, nuestra misión es resaltar la belleza y la esencia
      de cada persona a través de accesorios hechos a mano, creativos,
      originales y llenos de color. Creamos productos con dedicación,
      cariño y atención a los detalles, buscando que cada persona pueda
      expresar su estilo, personalidad y autenticidad, sintiéndose única
      y especial en cada momento.
    </p>
  </article>

  <article className="purpose-card vision-card">
    <span className="purpose-number">02</span>
    <span className="purpose-icon">✧</span>

    <h3>Visión</h3>

    <p>
      Ser una marca chilena de accesorios hechos a mano reconocida por
      su creatividad, originalidad y estilo juvenil, llegando a personas
      de todo Chile que buscan expresar su personalidad a través de
      productos únicos y especiales. Aspiramos a crecer como
      emprendimiento, fortalecer nuestra comunidad y convertir a
      Huenuchile en una marca querida y reconocida por celebrar la
      belleza, la diversidad y la autenticidad de cada persona.
    </p>
  </article>

</section>


{/* PREGUNTAS FRECUENTES */}
<section className="faq-section" id="preguntas">
  <div className="faq-intro">
    <span className="eyebrow">ESTAMOS PARA AYUDARTE</span>

    <h2>
      Preguntas
      <br />
      <span>frecuentes</span>
    </h2>

    <p>
      Si no encuentras lo que necesitas, contáctanos
      directamente a través de nuestros canales de atención.
    </p>
  </div>

  <div className="faq-list">
    {[
      {
        question: '¿Cómo hago una compra?',
        answer:
          'Elige tus productos favoritos, agrégalos al carrito y completa tus datos para realizar el pedido directamente en nuestra página.',
      },
      {
        question: '¿Realizan envíos a todo Chile?',
        answer:
          'Sí. Podrás recibir tu pedido mediante Bluexpress o Starken. El envío se paga al momento de recibirlo, según las condiciones del servicio.',
      },
      {
        question: '¿Puedo pedir un diseño personalizado?',
        answer:
          'Sí, puedes consultarnos por diseños personalizados y coordinaremos los detalles según la disponibilidad.',
      },
      {
        question: '¿Cuánto demora la preparación?',
        answer:
          'Los tiempos de preparación pueden variar según el producto y la disponibilidad. Te informaremos el plazo correspondiente al confirmar tu pedido.',
      },
      {
        question: '¿Cómo cuido mis productos?',
        answer:
          'Recomendamos cuidar tus accesorios, evitar golpes y mantenerlos alejados de productos químicos para conservarlos en buen estado.',
      },
    ].map((item, index) => (
      <article className="faq-item" key={index}>
        <button
          type="button"
          className="faq-question"
          onClick={() =>
            setOpenFaq(openFaq === index ? -1 : index)
          }
          aria-expanded={openFaq === index}
        >
          <span>{item.question}</span>
          <span className="faq-toggle">
            {openFaq === index ? '×' : '+'}
          </span>
        </button>

        {openFaq === index && (
          <p className="faq-answer">{item.answer}</p>
        )}
      </article>
    ))}
  </div>
</section>

{/* NEWSLETTER */}
<section className="newsletter-section">
  <div className="newsletter-content">
    <div className="newsletter-heading">
      <span className="eyebrow">NOVEDADES BONITAS</span>

      <h2>Entérate antes que nadie</h2>

      <p>
        Nuevas colecciones y pequeñas sorpresas, directamente
        en tu correo.
      </p>
    </div>

    <div className="newsletter-form">
      <label htmlFor="newsletter-email">Correo electrónico</label>

      <div className="newsletter-input-group">
        <input
          id="newsletter-email"
          type="email"
          placeholder="tu@email.cl"
        />

        <button type="button" disabled>
          Suscribirme <span>→</span>
        </button>
      </div>

      <small>
        Sin spam. Solo cosas lindas. Podrás salir cuando quieras.
      </small>
    </div>
  </div>
</section>


      </main>

      {/* Pie de página */}
      <footer className="main-footer">
        <div className="footer-brand">
          <img
            src="/logos/Búho Huenu Turquesa.png"
            alt="HuenuChile"
          />
          <p>Accesorios y cosas lindas hechas a mano en Chile.</p>
        </div>

        <div className="footer-column">
          <h3>Explora</h3>
          <a href="#tienda">Tienda</a>
          <a href="#categorias">Categorías</a>
          <a href="#nosotros">Nosotras</a>
        </div>

        <div className="footer-column">
          <h3>Ayuda</h3>
          <a href="#como-comprar">Cómo comprar</a>
          <a href="#envios">Envíos y entregas</a>
          <a href="#cuidados">Cuidados</a>
          <a href="#preguntas">Preguntas frecuentes</a>
        </div>

        <div className="footer-column">
          <h3>¿Tienes una idea especial?</h3>
          <p>Escríbenos y creemos algo juntas.</p>
          <a href="#contacto">HABLEMOS →</a>
        </div>

        <div className="footer-bottom">
          © 2025 HuenuChile. Hecho con cariño en Chile.
        </div>
      </footer>
    </>
  )
}

export default App
