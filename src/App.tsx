import { Header } from "./components/Header"
import Icon1 from './assets/icons/1.png'
import Icon2 from './assets/icons/2.png'
import Icon3 from './assets/icons/3.png'
import Icon4 from './assets/icons/4.png'
import Icon5 from './assets/icons/5.png'
import Icon6 from './assets/icons/6.png'
import Icon7 from './assets/icons/7.png'
import axios from "axios"
import { useEffect, useState } from "react"
import { Product } from "./components/Product"
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Logo from './assets/logo.png'
import { Footer } from "./components/Footer"



export type ProductType = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

function App() {

  const [products, setProduct] = useState<ProductType[]>([])

  function getProducts() {
    axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json').then((response) => {
      setProduct(response.data.products);
    })
  }

  useEffect(() => {
    getProducts()
  }, [])



  return (
    <div>
      <Header />
      <main>
        <div className="container_category">
          <div className="square_area">
            <div className="box">
              <img src={Icon1} />
            </div>
            <p className="pink">Tecnologia</p>
          </div>
          <div className="square_area">
            <div className="box">
              <img src={Icon2} />
            </div>
            <p>Supermercado</p>
          </div>
          <div className="square_area">
            <div className="box">
              <img src={Icon3} />
            </div>
            <p>Bebidas</p>
          </div>
          <div className="square_area">
            <div className="box">
              <img src={Icon4} />
            </div>
            <p>Ferramentas</p>
          </div>
          <div className="square_area">
            <div className="box">
              <img src={Icon5} />
            </div>
            <p>Saúde</p>
          </div>
          <div className="square_area">
            <div className="box">
              <img src={Icon6} />
            </div>
            <p>Esportes e Fitness</p>
          </div>
          <div className="square_area">
            <div className="box">
              <img src={Icon7} />
            </div>
            <p>Moda</p>
          </div>
        </div>

        <section className="section_category">
          <div className="header">
            <h1>Produtos relacionados</h1>
            
          </div>

          <nav>
            <div className="link">
              <a href="#"><strong>CELULAR</strong></a>
            </div>
            <div className="link">
              <a href="#">ACESSÓRIOS</a>
            </div>
            <div className="link">
              <a href="#">TABLETS</a>
            </div>
            <div className="link">
              <a href="#">NOTEBOOKS</a>
            </div>
            <div className="link">
              <a href="#">TVS</a>
            </div>
            <div className="link">
              <a href="#">VER TODOS</a>
            </div>
          </nav>
        </section>

        <section className="products_list">

          <Swiper
            navigation={false}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}


          >
            <div className="container_products">
              {products.map((product, index) => (
                <SwiperSlide key={index}> <Product item={product} /></SwiperSlide>
              ))}
            </div>
          </Swiper>

          <div className="photos">
            <div className="image">
              <div className="info_area">
                <h1>Parceiros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
              </div>
            </div>
            <div className="image">
              <div className="info_area">
                <h1>Parceiros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
              </div>
            </div>
          </div>
        </section>

        <section className="products_list">
          <div className="header">
            <h1>Produtos relacionados</h1>
            <p>Ver todos</p>
          </div>
          <Swiper
            navigation={false}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}


          >
            <div className="container_products">
              {products.map((product, index) => (
                <SwiperSlide key={index}> <Product item={product} /></SwiperSlide>
              ))}
            </div>
          </Swiper>

          <div className="photos">
            <div className="image-2">
              <div className="info_area">
                <h1>Produtos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
              </div>
            </div>
            <div className="image-2">
              <div className="info_area">
                <h1>Produtos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
              </div>
            </div>
          </div>
        </section>

        <section className="brands">
                <h2>Navegue por marcas</h2>
                <div className="container_circle">
                   <div className="circle">
                      <img src={Logo} alt="" />
                      <h2>VTEX</h2>
                   </div>
                   <div className="circle">
                      <img src={Logo} alt="" />
                      <h2>VTEX</h2>
                   </div>
                   <div className="circle">
                      <img src={Logo} alt="" />
                      <h2>VTEX</h2>
                   </div>
                   <div className="circle">
                      <img src={Logo} alt="" />
                      <h2>VTEX</h2>
                   </div>
                   <div className="circle">
                      <img src={Logo} alt="" />
                      <h2>VTEX</h2>
                   </div>
                </div>
        </section>


        <section className="products_list">
          <div className="header">
            <h1>Produtos relacionados</h1>
            <p>Ver todos</p>
          </div>
          <Swiper
            navigation={false}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}


          >
            <div className="container_products">
              {products.map((product, index) => (
                <SwiperSlide key={index}> <Product item={product} /></SwiperSlide>
              ))}
            </div>
          </Swiper>

          
        </section>

        
      </main>

      <Footer/>
    </div>
  )
}

export default App
