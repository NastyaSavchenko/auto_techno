import LogoSVG from '../../assets/img/logo/LogoSVG.svg?react'
import LogoFooter from '../../assets/img/logo/LogoFooter.svg?react'

import s from './Logo.module.css'
const Logo = ({ location }) => {
  return (
    <a href="/" className={s.logo}>
      {location === 'header' ? <LogoSVG /> : <LogoFooter />}
    </a>
  )
}

export default Logo
