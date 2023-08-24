'use client'
import 'swiper/css'
import 'swiper/css/navigation';

import Image from "next/image";
import { Title } from "./Title";
import { Modal } from "./Modal";
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useState } from "react";


export function ListProducts() {

  const [products, setProducts] = useState<Item[]>([])

  async function getProducts() {
    const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
    const jsonData = await response.json();

    setProducts(jsonData['products'])
  }

  useEffect(() => {
    getProducts()
  }, [])


  console.log(products)

  return (
    <section className="max-w-[1280px] mx-auto pt-10 pb-10">
      <Title title="Produtos relacionados" />

      <div className="mt-1 px-4 md:px-0 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-auto border border-[#BDBDBD] py-3 px-14 flex-1 text-center">
          <strong className="text-primary text-base font-bold uppercase">celular</strong>
        </div>
        <div className="w-full md:w-auto border border-[#BDBDBD] py-3 px-14 text-center">
          <span className="text-[#3B3B3B] text-base font-normal uppercase">acessórios</span>
        </div>
        <div className="w-full md:w-auto border border-[#BDBDBD] py-3 px-14 text-center">
          <span className="text-[#3B3B3B] text-base font-normal uppercase">tablets</span>
        </div>
        <div className="w-full md:w-auto border border-[#BDBDBD] py-3 px-14 text-center">
          <span className="text-[#3B3B3B] text-base font-normal uppercase">NOTEBOOKS</span>
        </div>
        <div className="w-full md:w-auto border border-[#BDBDBD] py-3  px-14 text-center">
          <span className="text-[#3B3B3B] text-base font-normal uppercase">TVs</span>
        </div>
        <div className="w-full md:w-auto border border-[#BDBDBD] py-3 px-14 text-center">
          <span className="text-[#3B3B3B] font-normal uppercase">Ver todos</span>
        </div>

      </div>

      <Swiper className="flex justify-center mt-4 "
        spaceBetween={50}
        navigation
        breakpoints={{

          768: {
            slidesPerView: 1,
          },

          900: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 4,
          },


        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          products.map((product, index) => {
            return (
              <SwiperSlide className="my-4 flex justify-center" key={index}>
                <div className="p-3 w-[270px] mx-auto  shadow shadow-[0px 3px 19px 0px rgba(0, 0, 0, 0.22)] rounded-xl">
                  <div className="flex justify-center">
                    <Image width={247} height={228} src={product.photo} alt="" />
                  </div>
                  <h2 className="text-[#3F3F40] mt-2 font-light h-[48px]">
                    {product.productName}
                  </h2>
                  <p className="mt-3 text-[#808080] font-normal line-through leading-normal">R$ 30,90</p>
                  <h3 className="text-[#3F3F40] text-xl font-bold leading-normal">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                  <p className="mt-[2px] text-[#3F3F40] text-xs font-normal leading-normal">
                    ou 2x de R$ 200 sem juros
                  </p>
                  <p className="mt-[7px] text-primary text-xs font-normal leading-normal">
                    Frete grátis
                  </p>
                  <Modal item={product} />
                </div>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section >
  )
}