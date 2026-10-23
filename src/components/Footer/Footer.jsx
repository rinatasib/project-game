import s from './Footer.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.grid}>

          <div className={s.brand_col}>
            <h2 className={s.logo}>Ход за ходом</h2>
            <p className={s.description}>
              Хорошие игры для вечеров, которые хочется повторить. Выбираем с заботой, отправляем с любовью.
            </p>
          </div>

          <div className={s.links_col}>
            <h3>Магазин</h3>
            <nav className={s.nav}>
              <a href="#">Главная</a>
              <a href="#">Каталог</a>
              <a href="#">Корзина</a>
            </nav>
          </div>

          <div className={s.contacts_col}>
            <h3>На связи</h3>
            <div className={s.contacts}>
              <a href="tel:88005553520" className={s.phone}>8 800 555-35-20</a>
              <a href="mailto:hello@hodzahodom.ru" className={s.email}>hello@hodzahodom.ru</a>
              <div className={s.socials}>
                <a href="#">ВКонтакте</a>
                <span className={s.separator}>·</span>
                <a href="#">Телеграм</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
