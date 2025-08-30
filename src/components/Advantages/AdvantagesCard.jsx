const AdvantagesCard = ({ icon, text, title }) => {
  return (
    <li>
      <div>
        <img src={icon} alt={title} />
      </div>
      <div>
        <h3>{title}</h3> <p>{text}</p>
      </div>
    </li>
  )
}

export default AdvantagesCard
