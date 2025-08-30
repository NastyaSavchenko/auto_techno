import s from './Advantages.module.css'

const AdvantagesCard = ({ icon, text, title }) => {
  return (
    <li className={s.advantagesItem}>
      <div>
        <img src={icon} alt={title} />
      </div>
      <div>
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>{text}</p>
      </div>
    </li>
  )
}

export default AdvantagesCard
