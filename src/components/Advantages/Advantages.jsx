import SectionTitle from '../SectionTitle/SectionTitle'
import AdvantagesList from './AdvantagesList'

import s from './Advantages.module.css'

const Advantages = () => {
  return (
    <section id="about" className={`section ${s.advantages}`}>
      <div className="container">
        <SectionTitle location={'advantages'} text={'Наші переваги'} />
        <AdvantagesList />
      </div>
    </section>
  )
}

export default Advantages
