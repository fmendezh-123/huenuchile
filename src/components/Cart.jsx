import { useState } from 'react'
import './Cart.css'

const initialProducts = [
  {
    id: 1,
    name: 'Gorro Jardín Menta',
    category: 'GORROS CLÍNICOS',
    price: 9990,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Pack Pastel',
    category: 'SCRUNCHIES',
    price: 6990,
    quantity: 1,
  },
]

function Cart({ onBack, onContinue }) {
  const [products, setProducts] = useState(initialProducts)
  const [coupon, setCoupon] = useState('')
  const [discountApplied, setDiscountApplied] = useState(false)
  const [message, setMessage] = useState('')

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  )

  const discount = discountApplied ? subtotal * 0.1 : 0
  const total = subtotal - discount

  const updateQuantity = (id, amount) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, product.quantity + amount),
            }
          : product,
      ),
    )
  }

  const removeProduct = (id) => {
    setProducts((current) =>
      current.filter((product) => product.id !== id),
    )
  }

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'HUENU10') {
      setDiscountApplied(true)
      setMessage('¡Cupón aplicado! Tienes un 10% de descuento.')
    } else {
      setDiscountApplied(false)
      setMessage('El código ingresado no es válido.')
    }
  }

  const formatPrice = (price) =>
    `$${Math.round(price).toLocaleString('es-CL')}`

  return (
    <main className="cart-page">
      <button className="cart-back" onClick={onBack}>
        ← Seguir comprando
      </button>

      <div className="cart-heading">
        <span className="eyebrow">TU SELECCIÓN</span>
        <h1>Carrito de compra</h1>
        <p>
          {products.length} productos diferentes en tu carrito
        </p>
      </div>

      {products.length === 0 ? (
        <div className="cart-empty">
          <h2>Tu carrito está vacío</h2>
          <p>¡Descubre nuestros productos hechos a mano!</p>
          <button onClick={onBack}>Explorar productos</button>
        </div>
      ) : (
        <>
          <section className="cart-products">
            {products.map((product) => (
              <article className="cart-product" key={product.id}>
                <div className="cart-product-image">
                  <span>Fotografía próximamente</span>
                </div>

                <div className="cart-product-info">
                  <span className="cart-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <p>Preparación y despacho sujetos a confirmación.</p>

                  <button
                    className="cart-remove"
                    onClick={() => removeProduct(product.id)}
                  >
                    Eliminar
                  </button>
                </div>

                <div className="cart-quantity">
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    aria-label="Disminuir cantidad"
                  >
                    −
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>

                <strong className="cart-product-price">
                  {formatPrice(product.price * product.quantity)}
                </strong>
              </article>
            ))}
          </section>

          <section className="cart-summary">
            <span className="eyebrow">RESUMEN</span>
            <h2>Tu pedido</h2>

            <div className="cart-summary-row">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>

            <div className="cart-summary-row">
              <span>Envío</span>
              <span>Bluexpress por pagar</span>
            </div>

            <div className="cart-coupon">
              <strong>¿Tienes un código de descuento?</strong>

              <input
                type="text"
                placeholder="Ingresa tu cupón"
                value={coupon}
                onChange={(event) => setCoupon(event.target.value)}
              />

              <button onClick={applyCoupon}>Aplicar</button>
            </div>

            {message && (
              <p className={discountApplied ? 'coupon-success' : 'coupon-error'}>
                {message}
              </p>
            )}

            {discountApplied && (
              <div className="cart-summary-row">
                <span>Descuento (10%)</span>
                <strong>-{formatPrice(discount)}</strong>
              </div>
            )}

            <div className="cart-total">
              <span>Total de productos</span>
              <strong>{formatPrice(total)}</strong>
            </div>

            <p className="cart-shipping-note">
              El costo del envío por Bluexpress se paga por separado
              al courier. El total mostrado no incluye el despacho.
            </p>

            <button
              className="cart-continue"
              onClick={onContinue}
            >
              Continuar con la compra
            </button>
          </section>
        </>
      )}

      <section className="cart-benefits">
        <div>
          <span>♧</span>
          <div>
            <strong>Envíos a domicilio</strong>
            <p>Bluexpress por pagar</p>
          </div>
        </div>

        <div>
          <span>♡</span>
          <div>
            <strong>Compra como invitada</strong>
            <p>Sin necesidad de crear una cuenta</p>
          </div>
        </div>

        <div>
          <span>✉</span>
          <div>
            <strong>¿Necesitas ayuda?</strong>
            <p>Contáctanos por los canales de la tienda</p>
          </div>
        </div>
      </section>

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
          <a href="#" onClick={onBack}>Tienda</a>
          <a href="#" onClick={onBack}>Categorías</a>
          <a href="#" onClick={onBack}>Nosotras</a>
        </div>

        <div className="footer-column">
          <h3>Ayuda</h3>
          <a href="#" onClick={onBack}>Cómo comprar</a>
          <a href="#">Envíos y entregas</a>
          <a href="#">Cuidados</a>
          <a href="#">Preguntas frecuentes</a>
        </div>

        <div className="footer-column">
          <h3>¿Tienes una idea especial?</h3>
          <p>Escríbenos y creemos algo juntas.</p>
          <a href="#">HABLEMOS →</a>
        </div>

        <div className="footer-bottom">
          © 2025 HuenuChile. Hecho con cariño en Chile.
        </div>
      </footer>
    </main>
  )
}

export default Cart