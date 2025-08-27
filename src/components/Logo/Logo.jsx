import LogoSVG from '../../assets/img/logo/LogoSVG.svg?react'
import LogoFooter from '../../assets/img/logo/LogoFooter.svg?react'

const Logo = ({ location }) => {
  return <a href="/">{location === 'header' ? <LogoSVG /> : <LogoFooter />}</a>
}

export default Logo
