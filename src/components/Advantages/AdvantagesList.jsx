import AdvantagesCard from './AdvantagesCard'
import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import icon4 from '../../assets/icons/icon4.svg'
import icon5 from '../../assets/icons/icon5.svg'

const ITEMS = [
  {
    id: '1',
    icon: icon1,
    title: 'Великий асортимент',
    text: 'охоплюємо майже всі марки та моделі автомобілів',
  },
  {
    id: '2',
    icon: icon2,
    title: 'Перевірені ціни',
    text: 'вигідні пропозиції для якісного ремонту вашого автомобіля',
  },
  {
    id: '3',
    icon: icon3,
    title: 'Швидка доставка',
    text: 'оперативно доставимо всі необхідні деталі',
  },
  {
    id: '4',
    icon: icon4,
    title: 'Допомога в підборі автозапчастин',
    text: 'знайдемо все необхідне для вашого автомобіля',
  },
  {
    id: '5',
    icon: icon5,
    title: 'Оригінали та якісні замінники',
    text: 'гарантія надійності та довговічності запчастин',
  },
]

const AdvantagesList = () => {
  return (
    <ul>
      {ITEMS.map((item) => (
        <AdvantagesCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          text={item.text}
        />
      ))}
    </ul>
  )
}

export default AdvantagesList
