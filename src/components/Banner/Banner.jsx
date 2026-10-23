import s from './Banner.module.css';

export function Banner() {
    return (
        <main className="container">
            <h1>Собирайте близких. <br />Остальное — <br />дело игры.</h1>
            <a href="" className={s.btn}>Перейти в каталог</a>
        </main>
    );
}
