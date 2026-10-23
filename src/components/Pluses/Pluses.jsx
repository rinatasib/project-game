import s from './Pluses.module.css';

export function Pluses() {
  return (
    <section className={s.advantages_section}>
      <h2 className={s.title}>Почему выбирают «Ход за ходом»</h2>
      
      <div className={s.cards_grid}>

        <div className={s.card}>
          <div className={s.icon_wrapper}>
            <span className={s.emoji}>⭐️</span>
          </div>
          <h3>Заботливый подбор</h3>
          <p>Мы выбираем игры, которые подходят для разных компаний и настроек.</p>
        </div>

        <div className={s.card}>
          <div className={s.icon_wrapper}>
            <span className={s.emoji}>📦</span>
          </div>
          <h3>Удобная доставка</h3>
          <p>Заказы отправляем аккуратно упакованными, чтобы всё прибыло в идеальном состоянии.</p>
        </div>

        <div className={s.card}>
          <div className={s.icon_wrapper}>
            <span className={s.emoji}>❤️</span>
          </div>
          <h3>Помощь в выборе</h3>
          <p>Если сомневаетесь, какой сценарий подойдёт именно вам, мы всегда поможем подобрать.</p>
        </div>
      </div>
    </section>
  );
}
