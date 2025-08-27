import s from './Nav.module.css'

const nav = [
  { href: 'about', text: 'Про нас' },
  { href: 'brands', text: 'Бренди' },
  { href: 'catalog', text: 'Каталог' },
  { href: 'contacts', text: 'Замовити' },
  { href: 'footer', text: 'Контакти' },
]

const Nav = ({ location }) => {
  const links =
    location === 'header' ? nav : nav.filter((item) => item.href !== 'footer')

  return (
    <nav>
      <ul className={location === 'header' ? s.mainNav : s.footerNav}>
        {links.map((item) => (
          <li key={item.href}>
            <a href={`#${item.href}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Nav
