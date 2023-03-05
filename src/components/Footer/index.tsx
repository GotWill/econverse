import './index.scss'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import Visa from '../../assets/payments/visa.png'


export function Footer() {
    return (
        <footer>
            <div className='box1'>
                <h3>Sobre nós</h3>
                <ul>
                    <li>CONHEÇA</li>
                    <li>COMO COMPRAR</li>
                    <li>INDICAÇÃO E DESCONTO</li>
                </ul>
                <div className="icons">
                    <a href="#">
                        <FaFacebookF size={22} color="#fff" />
                    </a>
                    <a href="#">
                        <FaInstagram size={22} color="#fff" />
                    </a>
                    <a href="#">
                     <FaYoutube size={22} color="#fff" />
                    </a>

                  
                </div>
            </div>
            <div className='box2'>
                <h3>INFORMAÇÕES ÚTEIS</h3>
                <ul>
                    <li>FALE CONOSCO</li>
                    <li>DÚVIDAS</li>
                    <li>PRAZOS DE ENTREGA</li>
                    <li>FORMAS DE PAGAMENTO</li>
                    <li>POLÍTICA DE PRIVACIDADE</li>
                    <li>TROCAS E DEVOLUÇÕES</li>
                </ul>
            </div>
            <div className='box3'>
                <h3>FORMAS DE PAGAMENTO</h3>
                <div className="image">
                    <img src={Visa} alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div className='box4'>

            </div>
        </footer>
    )
}