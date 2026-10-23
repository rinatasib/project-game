import s from './Header.module.css';

export function Header() {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header_inner}>

                    <a href="/" className={s.logoLink}>
                        <img
                            src="src/assets/logo.png" alt="" className={s.logoImage}/>
                        <span className={s.logoText}>Ход за ходом</span>
                    </a>

                    <nav className={s.nav} >
                        <a href="/" className={s.navLink}>Главная</a>
                        <a href="/catalog" className={s.navLink}>Каталог</a>
                        <a href="/cart" className={s.navLink}>Корзина</a>
                    </nav>

                </div>
            </div>
        </header>
    );
}
