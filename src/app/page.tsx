import { Banner } from './components/Banner'
import { Brands } from './components/Brands'
import { Categories } from './components/Categories'
import { Footer } from './components/Foother'
import { Header } from './components/Header'
import { ListProducts } from './components/ListProducts'
import { Modal } from './components/Modal'
import { Partners } from './components/Partners'

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Categories/>
      <ListProducts/>
      <Partners/>
      <Brands/>
      <Footer/>
      
    </>
  )
}
