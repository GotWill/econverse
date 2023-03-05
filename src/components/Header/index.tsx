
import { CreditCard, CrownSimple, Heart, MagnifyingGlass, ShieldCheck, ShoppingCart, Storefront, Truck, UserCircle } from 'phosphor-react'
import style from './styles.module.scss'
import LogoImg from '../../assets/logo.png'
import { useState } from 'react'

export function Header() {
    const [search, setSearch] = useState('')
    return (
        <>
            <header className={style.header}>
                <div className={style.header_top}>
                    <div className={style.flex}>
                        <ShieldCheck size={16} color="#9F9F9F" />
                        <p>Compra <strong >100% segura</strong></p>
                    </div>
                    <div className={style.flex}>
                        <Truck size={16} color="#9F9F9F" />
                        <p> <strong>Frete grátis</strong> acima de R$ 200</p>
                    </div>
                    <div className={style.flex}>
                        <CreditCard size={16} color="#9F9F9F" />
                        <p> <strong >Parcele</strong> suas compras</p>
                    </div>
                </div>
                <div className={style.header_middle}>
                    <div className={style.logo}>
                        <img src={LogoImg} />
                        <strong>VTEX</strong>
                    </div>
                    <div className={style.input}>
                        <input 
                        type="text" placeholder='O que você está buscando?'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                         />
                        <MagnifyingGlass size={18} />
                    </div>
                    <div className={style.icons}>
                        <Storefront size={24} color="#9F9F9F" />
                        <Heart size={24} color="#9F9F9F" />
                        <UserCircle size={24} color="#9F9F9F" />
                        <ShoppingCart size={24} color="#9F9F9F" />
                    </div>
                </div>
                <nav className={style.header_bottom}>
                    <div className={style.links}>
                        <a href="#">TODAS CATEGORIAS</a>
                        <a href="#">SUPERMERCADO</a>
                        <a href="#">LIVROS</a>
                        <a href="#">MODA</a>
                        <a href="#">LANÇAMENTOS</a>
                        <a href="#" className={style.pink}>OFERTAS DO DIA</a>
                        <div className={style.flex}>
                            <CrownSimple size={16} />
                            <a href="#">ASSINATURA</a>
                        </div>
                    </div>
                </nav>
            </header>

            <div className={style.banner}>

                <div className={style.info}>
                    <h2>
                        Venha conhecer nossas<br></br> promoções
                    </h2>
                    <h3>50% Off nos produtos </h3>
                    <button>Ver produto</button>
                </div>

            </div>
        </>

    )
}