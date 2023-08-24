import Image from 'next/image'
import Img1 from '../assets/img/categories/1.png'
import Img2 from '../assets/img/categories/2.png'
import Img3 from '../assets/img/categories/3.png'
import Img4 from '../assets/img/categories/4.png'
import Img5 from '../assets/img/categories/5.png'
import Img6 from '../assets/img/categories/6.png'
import Img7 from '../assets/img/categories/7.png'



export function Categories(){
    return (
        <section className="max-w-[1280px] mx-auto mt-9 mb-9 flex justify-center items-center flex-wrap gap-14">
                <div className="rounded-xl p-9 shadow shadow-[ 0px 2px 9px 0px rgba(0, 0, 0, 0.22)]">
                    <Image src={Img1} alt="" />
                </div>

                <div className="rounded-xl p-9 shadow shadow-[ 0px 2px 9px 0px rgba(0, 0, 0, 0.22)]">
                    <Image src={Img2} alt="" />
                </div>

                <div className="rounded-xl p-9 shadow shadow-[ 0px 2px 9px 0px rgba(0, 0, 0, 0.22)]">
                    <Image src={Img3} alt="" />
                </div>

                <div className="rounded-xl p-9 shadow shadow-[ 0px 2px 9px 0px rgba(0, 0, 0, 0.22)]">
                    <Image src={Img4} alt="" />
                </div>

                <div className="rounded-xl p-9 shadow shadow-[ 0px 2px 9px 0px rgba(0, 0, 0, 0.22)]">
                    <Image src={Img5} alt="" />
                </div>


                <div className="rounded-xl p-9 shadow shadow-[ 0px 2px 9px 0px rgba(0, 0, 0, 0.22)]">
                    <Image src={Img6} alt="" />
                </div>


                <div className="rounded-xl p-9 shadow shadow-[ 0px 2px 9px 0px rgba(0, 0, 0, 0.22)]">
                    <Image src={Img7} alt="" />
                </div>
        </section>
    )
}