import s from './SectionTitle.module.css'

const SectionTitle = ({ location, text }) => {
  return (
    <h2 className={location !== 'advantages' ? s.black : s.white}>{text}</h2>
  )
}

export default SectionTitle
