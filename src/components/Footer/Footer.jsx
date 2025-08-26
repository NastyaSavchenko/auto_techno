import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import CallUs from '../CallUs/CallUs'
import WorkingHours from '../WorkingHours/WorkingHours'
import Socials from '../Socials/Socials'
import Copyright from '../Copyright/Copyright'

const Footer = () => {
  return (
    <footer>
      <Logo />
      <CallUs />
      <Nav />
      <WorkingHours />
      <Socials />
      <Copyright />
    </footer>
  )
}

export default Footer
