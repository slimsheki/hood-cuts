import { useEffect, useState } from 'react'
import './App.css'

const bookingUrl = 'https://www.fresha.com/bg/a/hood-cuts-silistra-dobrudzha-hgyqgo2p/booking'
const phoneNumber = 'tel:+359877452281'

const services = [
  { title: 'Мъжко подстригване', price: '13€', description: 'Чист, точен и премиум финал – за всеки стил, от минимализъм до характер.' },
  { title: 'Брада', price: '10€', description: 'Формата, контурът и детайлът, които правят лицето да изглежда по-ясно и по-строго.' },
  { title: 'Подстригване + брада', price: '18€', description: 'Комплектен образ за онези дни, в които всичко трябва да изглежда безупречно.' },
  { title: 'Камуфлаж', price: 'от 21€', description: 'Професионално покритие за по-равномерен и естествен вид на косата.' },
]

const galleryImages = [
  { src: '/images/podstrijka1.png', alt: 'Подстригване в Hood Cuts' },
  { src: '/images/podstrijka2.png', alt: 'Стил и детайли в Hood Cuts' },
  { src: '/images/podstrijka3.png', alt: 'Мъжка прическа в Hood Cuts' },
  { src: '/images/podstrijka4.png', alt: 'Премиум барбърски резултат' },
]

function App() {
  const [heroOffset, setHeroOffset] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = Math.min(28, window.scrollY * 0.08)
          setHeroOffset(offset)
          ticking = false
        })

        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Hood Cuts home">
          <img src="/images/logo.png" alt="Hood Cuts logo" className="brand-logo" />
          <span>Hood Cuts</span>
        </a>
        <nav className="nav-links" aria-label="Основна навигация">
          <a href="#about">За мен</a>
          <a href="#services">Услуги</a>
          <a href="#gallery">Галерия</a>
          <a href="#contact">Контакт</a>
        </nav>
        <a className="nav-cta" href={bookingUrl} target="_blank" rel="noreferrer">
          Запази час
        </a>
      </header>

      <main>
        <section className="hero" id="home" style={{ '--hero-parallax': `${heroOffset}px` }}>
          <div className="hero-copy">
            <p className="eyebrow">Hood Cuts • Силистра</p>
            <h1>Не просто подстригване.<br />Стил, който остава.</h1>
            <p className="hero-subtitle">Премиум барбър в Силистра.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noreferrer">
                Запази час
              </a>
              <a className="btn btn-secondary" href="#services">
                Виж услугите
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card">
              <p className="hero-card-label">Ново ниво на стила</p>
              <h2>Точност. Контраст. Премиум усещане.</h2>
              <p>От подстригване до детайли в брадата – всяка визия е създадена с прецизност и характер.</p>
            </div>
          </div>
        </section>

        <section className="section-block about-section" id="about">
          <div className="section-copy">
            <p className="eyebrow">За Даниел</p>
            <h2>Модерно подстригване с характер и чиста линия.</h2>
            <p>
              Даниел съчетава прецизност, спокойствие и строг вкус, за да създава визии, които изглеждат естествено, уверено и премиум. Всеки клиент получава внимание към детайла, от първия поглед до последната линия.
            </p>
            <p>
              В Hood Cuts не правим „просто подстригване“ – създаваме образ, който стои изправен, стилен и запомнящ се.
            </p>
          </div>
          <div className="about-image-wrap">
            <img src="/images/daniel.jpg" alt="Daniel от Hood Cuts" className="about-image" />
          </div>
        </section>

        <section className="section-block" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Услуги</p>
              <h2>Премиум грижа за визията ти.</h2>
            </div>
            <p>Избирай услуги с фокус върху прецизност, чистота и съвременен стил.</p>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-top">
                  <h3>{service.title}</h3>
                  <span>{service.price}</span>
                </div>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block value-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Защо Hood Cuts?</p>
              <h2>Повече от подстригване — отношение, детайл и стил.</h2>
            </div>
          </div>
          <div className="value-grid">
            <article className="value-card">
              <h3>Прецизност</h3>
              <p>Всяка линия има значение.</p>
            </article>
            <article className="value-card">
              <h3>Детайл</h3>
              <p>Форма, стил и чист завършек.</p>
            </article>
            <article className="value-card">
              <h3>Увереност</h3>
              <p>Излизаш с визия, която ти подхожда.</p>
            </article>
          </div>
        </section>

        <section className="section-block" id="gallery">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Галерия</p>
              <h2>Визии с чиста линия и характер.</h2>
            </div>
            <p>Подстригвания, които звучат като стил и изглеждат като марка.</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <figure className={`gallery-item ${index === 0 ? 'wide' : ''}`} key={image.src}>
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>
        </section>

        <section className="section-block info-grid" id="contact">
          <div className="info-card">
            <p className="eyebrow">Работно време</p>
            <h3>Понеделник – Събота</h3>
            <p>10:00 – 20:00</p>
            <h3>Неделя</h3>
            <p>Почивен ден</p>
          </div>
          <div className="info-card">
            <p className="eyebrow">Локация</p>
            <h3>ул. Добруджа 6</h3>
            <p>Силистра</p>
            <a className="text-link" href={phoneNumber}>+359 87 745 2281</a>
          </div>
        </section>

        <section className="section-block final-cta">
          <div>
            <p className="eyebrow">Hood Cuts</p>
            <h2>Готов ли си за прецизен стил, който говори за теб?</h2>
            <p>Резервирай час и създай визия, която не се губи в тълпата.</p>
          </div>
          <a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noreferrer">
            Запази час
          </a>
        </section>
      </main>

      <footer className="footer footer-rich">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Hood Cuts logo" className="footer-logo" />
          <div>
            <strong>Hood Cuts</strong>
            <p>ул. Добруджа 6, Силистра</p>
          </div>
        </div>
        <div className="footer-info">
          <div>
            <p className="footer-label">Работно време</p>
            <p>Понеделник – Събота, 10:00 – 20:00</p>
          </div>
          <div>
            <p className="footer-label">Телефон</p>
            <a href={phoneNumber}>+359 87 745 2281</a>
          </div>
          <div>
            <p className="footer-label">Instagram</p>
            <a href="https://www.instagram.com/danniel.georgiev/" target="_blank" rel="noreferrer">@hoodcuts</a>
          </div>
          <div>
            <p className="footer-label">Резервация</p>
            <a className="footer-text-link" href={bookingUrl} target="_blank" rel="noreferrer">Запази час</a>
          </div>
        </div>
        <p className="footer-copy">© 2026 Hood Cuts. Всички права запазени.</p>
      </footer>
    </div>
  )
}

export default App
