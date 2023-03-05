
import { CreditCard, CrownSimple, Heart, MagnifyingGlass, ShieldCheck, ShoppingCart, Storefront, Truck, UserCircle } from 'phosphor-react'
import './styles.scss'
import LogoImg from '../../assets/logo.png'
export function Header() {
    return (
        <>
            <header>
                <div className='header_top'>
                    <div className='flex'>
                        <ShieldCheck size={16} color="#9F9F9F" />
                        <p>Compra <strong >100% segura</strong></p>
                    </div>
                    <div className='flex'>
                        <Truck size={16} color="#9F9F9F" />
                        <p> <strong>Frete grátis</strong> acima de R$ 200</p>
                    </div>
                    <div className='flex'>
                        <CreditCard size={16} color="#9F9F9F" />
                        <p> <strong >Parcele</strong> suas compras</p>
                    </div>
                </div>
                <div className='header_middle'>
                    <div className="logo">
                        <img src={LogoImg} />
                        <strong>VTEX</strong>
                    </div>
                    <div className="input">

                        <input type="text" placeholder='O que você está buscando?' />
                        <MagnifyingGlass size={18} />
                    </div>
                    <div className='icons'>
                        <Storefront size={24} color="#9F9F9F" />
                        <Heart size={24} color="#9F9F9F" />
                        <UserCircle size={24} color="#9F9F9F" />
                        <ShoppingCart size={24} color="#9F9F9F" />
                    </div>
                </div>
                <nav className='header_bottom'>
                    <div className="links">
                        <a href="">TODAS CATEGORIAS</a>
                        <a href="">SUPERMERCADO</a>
                        <a href="">LIVROS</a>
                        <a href="">MODA</a>
                        <a href="">LANÇAMENTOS</a>
                        <a href="" className='pink'>OFERTAS DO DIA</a>
                        <div className='flex'>
                            <CrownSimple size={16} />
                            <a href="">ASSINATURA</a>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="banner">

                <div className='info'>
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