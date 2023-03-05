import styles from './index.module.scss'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import Visa from '../../assets/payments/visa.png'
import Elo from '../../assets/payments/elo.png'
import Alelo from '../../assets/payments/alelo.png'
import Dinners from '../../assets/payments/dinners.png'
import Ifood from '../../assets/payments/ifood.png'
import Mastercard from '../../assets/payments/mastercard.png'
import Pix from '../../assets/payments/pix.png'
import Amex from '../../assets/payments/amex.png'
import Ticket from '../../assets/payments/ticket.png'
import Sodexo from '../../assets/payments/sodexo.png'
import LogoVtext from '../../assets/logo-vtex.png'
import LogoEcon from '../../assets/logo-econ.png'
import { useState } from 'react';

export function Footer() {
    const [email, setEmail] = useState('')
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container_one}>
                    <h3>Sobre nós</h3>
                    <ul>
                        <li>CONHEÇA</li>
                        <li>COMO COMPRAR</li>
                        <li>INDICAÇÃO E DESCONTO</li>
                    </ul>
                    <div className={styles.icons}>
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
                <div className={styles.container_two}>
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
                <div className={styles.container_three}>
                    <h3>FORMAS DE PAGAMENTO</h3>
                    <div className={styles.payments}>
                        <img src={Visa}  />
                        <img src={Elo}  />
                        <img src={Alelo} />
                    </div>
                    <div className={styles.payments}>
                        <img src={Dinners}  />
                        <img src={Ifood}  />
                        <img src={Mastercard}  />
                    </div>
                    <div className={styles.payments}>
                        <img src={Pix}  />
                        <img src={Amex}  />
                        <img src={Ticket}  />
                    </div>
                    <div className={styles.payments}>
                        <img src={Sodexo}  />
                    </div>
                </div>
                <div className={styles.container_four}>
                    <div className={styles.square}>
                        <p>CADASTRE-SE E RECEBA NOSSAS</p>
                        <h2>NOVIDADES E PROMOÇÕES</h2>
                        <div className={styles.info_footer}>
                            <span>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</span>
                        </div>

                        <form>
                            <input
                                type="email"
                                placeholder='SEU E-MAIL'
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <button type="submit">OK</button>
                        </form>

                    </div>
                </div>
            </footer>

            <div className={styles.copy}>
                <p>COPYRIGHT © 2019. TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO DE PROPRIEDADE DE SEUS RESPECTIVOS DONOS.<br></br>
                    É VEDADA A REPRODUÇÃO, TOTAL OU PARCIAL, DE QUALQUER CONTEÚDO SEM EXPRESSA AUTORIZAÇÃO.</p>

                <div className={styles.img_copy}>
                    <img src={LogoEcon} />
                    <img src={LogoVtext} />
                </div>
            </div>
        </>


    )
}