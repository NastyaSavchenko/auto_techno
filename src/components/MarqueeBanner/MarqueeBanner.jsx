import Marquee from 'react-fast-marquee'
import s from './MarqueeBanner.module.css'

const MarqueeBanner = () => (
  <Marquee className={s.wrapper} speed={80} loop={0} gradient={false} autoFill>
    <p className={s.line}>
      Більше &nbsp;
      <span className={s.bold}>7 років</span> &nbsp; на ринку автозапчастин
      України
      <span className={s.separator} />
      Більше &nbsp;
      <span className={s.bold}>7 років</span> &nbsp; на ринку автозапчастин
      України
      <span className={s.separator} />
    </p>
  </Marquee>
)

export default MarqueeBanner
