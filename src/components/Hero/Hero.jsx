import s from './Hero.module.css'

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.textWrap}>
        <div className={s.textBox}>
          <h1 className={s.title}>
            AutoTechno<span className={s.span}>KYIV</span>
          </h1>
          <p className={s.subtitle}>
            Найдосконаліші рішення для ремонту та обслуговування вашого
            автомобіля
          </p>
          <button type="button" className={s.orderBtn}>
            Підібрати запчастини
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
