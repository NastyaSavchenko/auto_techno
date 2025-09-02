import { useRef } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle.jsx'
import { BRANDS_ICONS } from '../../assets/img/brands/BrandsIcons.jsx'
import leftArrow from '../../assets/icons/leftArrow.svg'
import rightArrow from '../../assets/icons/rightArrow.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Grid } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/grid'

import s from './Brands.module.css'

const Brands = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section id="brands" className={`${s.brands}+ ' section'}`}>
      <div className="container">
        <SectionTitle text="Наші бренди" />

        <div className={s.sliderWrap}>
          <button
            ref={prevRef}
            className={`${s.navBtn} ${s.prevBtn}`}
            aria-label="Назад"
          >
            <img src={leftArrow} alt="" />
          </button>
          <button
            ref={nextRef}
            className={`${s.navBtn} ${s.nextBtn}`}
            aria-label="Вперед"
          >
            <img src={rightArrow} alt="" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Grid]}
            className={s.slider}
            slidesPerView={5}
            grid={{ rows: 3, fill: 'row' }}
            spaceBetween={24}
            // autoplay={{ delay: 2000, disableOnInteraction: false }}
            rewind={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                grid: { rows: 3, fill: 'row' },
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 3,
                grid: { rows: 3, fill: 'row' },
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                grid: { rows: 3, fill: 'row' },
                spaceBetween: 24,
              },
            }}
          >
            {BRANDS_ICONS.map((brand) => (
              <SwiperSlide key={brand.id} className={s.slide}>
                <img
                  src={brand.img}
                  alt={brand.alt}
                  loading="lazy"
                  className={s.logo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Brands
