import Logo from '../Logo/Logo.jsx'
import Nav from '../Nav/Nav.jsx'

import Phone from '../../assets/icons/Phone.svg?react'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.headerWrap}>
      <div className="container">
        <div className={s.header}>
          <Logo location={'header'} />
          <Nav location={'header'} />

          <a href="tel:+380666730545" className={s.callUs}>
            <Phone className={s.icon} />
            +38 066 673 05 45
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
