import Layout from '../../components/Layout/Layout'
import Hero from '../../components/Hero/Hero'
import MarqueeBanner from '../../components/MarqueeBanner/MarqueeBanner'
import Advantages from '../../components/Advantages/Advantages'
import Brands from '../../components/Brands/Brands'
import Products from '../../components/Products/Products'
import Delivery from '../../components/Delivery/Delivery'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <MarqueeBanner />
      <Advantages />
      <Brands />
      <Products />
      <Delivery />
      <Contact />
    </Layout>
  )
}

export default Home
