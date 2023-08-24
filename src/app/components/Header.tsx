import { Search, ShieldCheck, ShoppingCart, Truck } from "lucide-react";
import Logo from '../assets/img/logo/1.png'
import Image from "next/image";

export function Header() {
    return (
        <header className="max-w-[1280px] mx-auto">


            <div className="max-w-fit mx-auto items-baseline flex flex-col md:flex-row justify-center md:items-center gap-2 md:gap-[119px] p-2" style={{ borderBottom: '1px solid #9F9F9F' }}>
                <div className="flex items-center gap-2">
                    <ShieldCheck width={20} height={20} className="text-secondary" />
                    <span className="text-secondary text-sm font-medium">Compra <strong className="text-primary">100% segura</strong></span>
                </div>
                <div className="flex items-center gap-2">
                    <Truck width={20} height={20} className="text-secondary" />
                    <span className="text-secondary text-sm font-medium"><strong className="text-primary">Frete grátis</strong>  acima de R$ 200 </span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck width={20} height={20} className="text-secondary" />

                    <span className="text-secondary text-sm font-medium"><strong className="text-primary">Parcele</strong> suas compras </span>
                </div>
            </div>

            <div className="flex justify-around items-center py-3 hidden">

                <Image src={Logo} alt="" />

                <div className="relative">
                    <input
                        type="text"
                        placeholder="O que você está buscando?"
                        className="bg-input text-secondary rounded-xl py-3 px-6 w-[657px] outline-none"
                    />
                    <Search
                        width={28}
                        height={28}
                        className="text-secondary absolute top-[10px] right-4" />
                </div>

                <div className="flex items-center gap-8">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M21.8897 0.899589V0.900007H21.8537H21.8178H21.7818H21.7459H21.71H21.674H21.6381H21.6021H21.5662H21.5303H21.4943H21.4584H21.4224H21.3865H21.3505H21.3146H21.2787H21.2427H21.2068H21.1708H21.1349H21.0989H21.063H21.027H20.9911H20.9551H20.9192H20.8833H20.8473H20.8114H20.7754H20.7395H20.7035H20.6676H20.6316H20.5957H20.5597H20.5238H20.4878H20.4519H20.4159H20.38H20.344H20.3081H20.2721H20.2362H20.2002H20.1643H20.1283H20.0923H20.0564H20.0204H19.9845H19.9485H19.9126H19.8766H19.8407H19.8047H19.7688H19.7328H19.6968H19.6609H19.6249H19.589H19.553H19.5171H19.4811H19.4452H19.4092H19.3732H19.3373H19.3013H19.2654H19.2294H19.1934H19.1575H19.1215H19.0856H19.0496H19.0136H18.9777H18.9417H18.9058H18.8698H18.8338H18.7979H18.7619H18.7259H18.69H18.654H18.6181H18.5821H18.5461H18.5102H18.4742H18.4382H18.4023H18.3663H18.3303H18.2944H18.2584H18.2225H18.1865H18.1505H18.1146H18.0786H18.0426H18.0067H17.9707H17.9347H17.8988H17.8628H17.8268H17.7909H17.7549H17.7189H17.6829H17.647H17.611H17.575H17.5391H17.5031H17.4671H17.4312H17.3952H17.3592H17.3233H17.2873H17.2513H17.2153H17.1794H17.1434H17.1074H17.0715H17.0355H16.9995H16.9635H16.9276H16.8916H16.8556H16.8196H16.7837H16.7477H16.7117H16.6758H16.6398H16.6038H16.5678H16.5319H16.4959H16.4599H16.4239H16.388H16.352H16.316H16.28H16.2441H16.2081H16.1721H16.1361H16.1002H16.0642H16.0282H15.9922H15.9562H15.9203H15.8843H15.8483H15.8123H15.7764H15.7404H15.7044H15.6684H15.6325H15.5965H15.5605H15.5245H15.4885H15.4526H15.4166H15.3806H15.3446H15.3086H15.2727H15.2367H15.2007H15.1647H15.1287H15.0928H15.0568H15.0208H14.9848H14.9488H14.9129H14.8769H14.8409H14.8049H14.7689H14.733H14.697H14.661H14.625H14.589H14.5531H14.5171H14.4811H14.4451H14.4091H14.3731H14.3372H14.3012H14.2652H14.2292H14.1932H14.1572H14.1213H14.0853H14.0493H14.0133H13.9773H13.9413H13.9054H13.8694H13.8334H13.7974H13.7614H13.7254H13.6895H13.6535H13.6175H13.5815H13.5455H13.5095H13.4736H13.4376H13.4016H13.3656H13.3296H13.2936H13.2576H13.2217H13.1857H13.1497H13.1137H13.0777H13.0417H13.0058H12.9698H12.9338H12.8978H12.8618H12.8258H12.7898H12.7539H12.7179H12.6819H12.6459H12.6099H12.5739H12.5379H12.5019H12.466H12.43H12.394H12.358H12.322H12.286H12.25H12.2141H12.1781H12.1421H12.1061H12.0701H12.0341H11.9981H11.9622H11.9262H11.8902H11.8542H11.8182H11.7822H11.7462H11.7102H11.6743H11.6383H11.6023H11.5663H11.5303H11.4943H11.4583H11.4223H11.3864H11.3504H11.3144H11.2784H11.2424H11.2064H11.1704H11.1344H11.0985H11.0625H11.0265H10.9905H10.9545H10.9185H10.8825H10.8465H10.8106H10.7746H10.7386H10.7026H10.6666H10.6306H10.5946H10.5587H10.5227H10.4867H10.4507H10.4147H10.3787H10.3427H10.3067H10.2708H10.2348H10.1988H10.1628H10.1268H10.0908H10.0548H10.0188H9.98286H9.94687H9.91088H9.87489H9.83891H9.80292H9.76693H9.73095H9.69496H9.65897H9.62299H9.587H9.55101H9.51503H9.47904H9.44305H9.40707H9.37108H9.33509H9.29911H9.26312H9.22713H9.19115H9.15516H9.11917H9.08319H9.0472H9.01122H8.97523H8.93924H8.90326H8.86727H8.83129H8.7953H8.75931H8.72333H8.68734H8.65136H8.61537H8.57939H8.5434H8.50742H8.47143H8.43545H8.39946H8.36348H8.32749H8.29151H8.25552H8.21954H8.18355H8.14757H8.11158H8.0756H8.03961H8.00363H7.96764H7.93166H7.89568H7.85969H7.82371H7.78773H7.75174H7.71576H7.67977H7.64379H7.60781H7.57182H7.53584H7.49986H7.46387H7.42789H7.39191H7.35593H7.31994H7.28396H7.24798H7.212H7.17601H7.14003H7.10405H7.06807H7.03209H6.9961H6.96012H6.92414H6.88816H6.85218H6.8162H6.78022H6.74424H6.70825H6.67227H6.63629H6.60031H6.56433H6.52835H6.49237H6.45639H6.42041H6.38443H6.34845H6.31247H6.27649H6.24051H6.20454H6.16856H6.13258H6.0966H6.06062H6.02464H5.98866H5.95269H5.91671H5.88073H5.84475H5.80877H5.7728H5.73682H5.70084H5.66487H5.62889H5.59291H5.55694H5.52096H5.48498H5.44901H5.41303H5.37705H5.34108H5.3051H5.26913H5.23315H5.19718H5.1612H5.12523H5.08925H5.05328H5.01731H4.98133H4.94536H4.90938H4.87341H4.83744H4.80146H4.76549H4.72952H4.69354H4.65757H4.6216H4.58563H4.54966H4.51368H4.47771H4.44174H4.40577H4.3698H4.33383H4.29786H4.26189H4.22592H4.18995H4.15398H4.11801H4.08204H4.04607H4.0101H3.97413H3.93816H3.90219H3.86622H3.83025H3.79429H3.75832H3.72235H3.68638H3.65042H3.61445H3.57848H3.54251H3.50655H3.4708H3.47058V1.00001C3.16315 0.998594 2.86844 1.222 2.78676 1.51839L21.8897 0.899589ZM21.8897 0.899589L21.8988 0.900422C22.1984 0.927832 22.4718 1.13541 22.5787 1.41668L22.5787 1.41668L22.5791 1.41769L25.0496 8.13431C25.0496 8.13436 25.0496 8.13441 25.0496 8.13445C25.0824 8.22288 25.0995 8.31701 25.0999 8.41132V8.41175V12.2934C25.1056 12.7218 24.7226 13.11 24.2941 13.11C23.8656 13.11 23.4826 12.7218 23.4882 12.2934V9.21763M21.8897 0.899589L23.4882 9.21763M23.4882 9.21763H2.51176V23.4882H23.4882V16.6294H14.8647V18.2941L14.8647 18.2944C14.8636 18.5903 14.6706 18.8347 14.4308 18.9668C14.1911 19.0989 13.8814 19.1315 13.6307 18.9744L13.6301 18.974L9.74776 16.5035C9.51297 16.354 9.40244 16.0834 9.40244 15.8235C9.40244 15.5636 9.51297 15.293 9.74776 15.1435L13.6289 12.6737C13.6291 12.6736 13.6293 12.6735 13.6295 12.6733C13.7878 12.5697 13.9826 12.5245 14.1704 12.5478L14.1704 12.5478L14.1721 12.548C14.557 12.6027 14.8682 12.9647 14.8647 13.3534M23.4882 9.21763L0.899998 8.41194M14.8647 13.3534V13.3529H14.7647L14.8647 13.3539C14.8647 13.3537 14.8647 13.3536 14.8647 13.3534ZM14.8647 13.3534V15.0176M14.8647 15.0176H24.2941C24.7189 15.0177 25.0999 15.3987 25.0999 15.8235V24.2941C25.0999 24.7189 24.7189 25.0999 24.2941 25.0999H1.70588C1.28106 25.0999 0.900042 24.7189 0.899998 24.2941V8.41194M14.8647 15.0176V15.1176L14.7647 15.0176H14.8647ZM0.899998 8.41194V8.41175H0.999998L0.899998 8.41194ZM23.1359 7.60587L21.2574 2.51177H14.1588V7.60587H23.1359ZM12.547 2.51177H4.08816L2.75096 7.60587H12.547V2.51177ZM13.2529 16.8321V14.8149L11.6747 15.8235L13.2529 16.8321Z" fill="#9F9F9F" stroke="#9F9F9F" stroke-width="0.2" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clip-path="url(#clip0_1_1268)">
                                <path d="M16 27C16 27 3.5 20 3.5 11.5C3.50025 9.99768 4.02082 8.5418 4.97318 7.37991C5.92555 6.21801 7.25093 5.42181 8.72399 5.12669C10.197 4.83156 11.7269 5.05572 13.0533 5.76105C14.3798 6.46638 15.421 7.60935 16 8.99564L16 8.99565C16.579 7.60936 17.6202 6.46639 18.9467 5.76106C20.2731 5.05572 21.8029 4.83156 23.276 5.12669C24.7491 5.42181 26.0745 6.21801 27.0268 7.3799C27.9792 8.5418 28.4997 9.99768 28.5 11.5C28.5 20 16 27 16 27Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1268">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clip-path="url(#clip0_1_1254)">
                                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#9F9F9F" stroke-width="2" stroke-miterlimit="10" />
                                <path d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z" stroke="#9F9F9F" stroke-width="2" stroke-miterlimit="10" />
                                <path d="M7.97485 24.9218C8.72812 23.4408 9.8765 22.1971 11.2929 21.3284C12.7093 20.4598 14.3384 20 16 20C17.6615 20 19.2906 20.4598 20.707 21.3284C22.1234 22.1971 23.2718 23.4407 24.0251 24.9217" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1254">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clip-path="url(#clip0_1_1261)">
                                <path d="M23 23H8.72727L5.2402 3.82112C5.19831 3.5907 5.07688 3.3823 4.89708 3.23225C4.71728 3.08219 4.49052 3 4.25633 3H2" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 28C11.3807 28 12.5 26.8807 12.5 25.5C12.5 24.1193 11.3807 23 10 23C8.61929 23 7.5 24.1193 7.5 25.5C7.5 26.8807 8.61929 28 10 28Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23 28C24.3807 28 25.5 26.8807 25.5 25.5C25.5 24.1193 24.3807 23 23 23C21.6193 23 20.5 24.1193 20.5 25.5C20.5 26.8807 21.6193 28 23 28Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.81818 18H23.5127C23.981 18 24.4346 17.8356 24.7942 17.5355C25.1538 17.2354 25.3966 16.8186 25.4804 16.3578L27 8H6" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1261">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>



            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-24 shadow shadow-[0px 8px 16px 0px rgba(57, 48, 19, 0.12)] py-3">
                <span className="text-secondary font-medium text-xs uppercase w-full shadow shadow-[0px 8px 16px 0px rgba(57, 48, 19, 0.12)] md:w-auto md:shadow-none p-2 md:p-0 text-center">
                    Todas Categorias
                </span>

                <span className="text-secondary font-medium text-xs uppercase w-full shadow shadow-[0px 8px 16px 0px rgba(57, 48, 19, 0.12)] md:w-auto md:shadow-none p-2 md:p-0 text-center">
                    Supermercado
                </span>

                <span className="text-secondary font-medium text-xs uppercase w-full shadow shadow-[0px 8px 16px 0px rgba(57, 48, 19, 0.12)] md:w-auto md:shadow-none p-2 md:p-0 text-center">
                    Livros
                </span>

                <span className="text-secondary font-medium text-xs uppercase w-full shadow shadow-[0px 8px 16px 0px rgba(57, 48, 19, 0.12)] md:w-auto md:shadow-none p-2 md:p-0 text-center">
                    Moda
                </span>

                <span className="text-secondary font-medium text-xs uppercase w-full shadow shadow-[0px 8px 16px 0px rgba(57, 48, 19, 0.12)] md:w-auto md:shadow-none p-2 md:p-0 text-center">
                    Lançamentos
                </span>

                <span className="text-primary font-bold text-xs uppercase w-full shadow shadow-[0px 8px 16px 0px rgba(57, 48, 19, 0.12)] md:w-auto md:shadow-none p-2 md:p-0 text-center">
                    Ofertas do dia
                </span>

                <div className="flex items-center gap-3 w-full shadow shadow-[0px 8px 16px 0px rgba(57, 48, 19, 0.12)] md:w-auto md:shadow-none p-2 md:p-0 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_1_1295)">
                            <path d="M3.52571 15.3137C3.54519 15.3959 3.58109 15.4732 3.63126 15.5412C3.68142 15.6091 3.7448 15.6662 3.8176 15.7089C3.89039 15.7517 3.97108 15.7793 4.05483 15.7901C4.13857 15.8009 4.22363 15.7947 4.30489 15.7717C8.03061 14.743 11.9654 14.7426 15.6913 15.7706C15.7725 15.7935 15.8576 15.7998 15.9413 15.789C16.025 15.7782 16.1056 15.7506 16.1784 15.7079C16.2512 15.6651 16.3146 15.6081 16.3647 15.5402C16.4149 15.4723 16.4508 15.395 16.4703 15.3129L18.4616 6.8506C18.4883 6.73732 18.4828 6.61884 18.4457 6.50851C18.4087 6.39818 18.3416 6.30039 18.252 6.22615C18.1623 6.1519 18.0538 6.10415 17.9385 6.08828C17.8232 6.07241 17.7057 6.08904 17.5994 6.13631L13.6475 7.89269C13.5048 7.95611 13.3436 7.96382 13.1955 7.91429C13.0474 7.86476 12.9232 7.76159 12.8474 7.62508L10.5464 3.48334C10.4923 3.38591 10.4131 3.30472 10.317 3.2482C10.2209 3.19167 10.1115 3.16187 10 3.16187C9.88857 3.16187 9.77914 3.19167 9.68308 3.2482C9.58701 3.30472 9.50781 3.38591 9.45368 3.48334L7.15272 7.62508C7.07688 7.76159 6.95269 7.86476 6.8046 7.91429C6.6565 7.96381 6.49523 7.95611 6.35253 7.89269L2.40008 6.13604C2.29375 6.08878 2.17634 6.07215 2.06107 6.08801C1.94579 6.10386 1.83724 6.15158 1.74762 6.2258C1.658 6.30001 1.59088 6.39777 1.55381 6.50806C1.51674 6.61836 1.51119 6.73681 1.5378 6.85008L3.52571 15.3137Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1295">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span className="text-secondary font-medium text-xs uppercase">
                        Assinatura
                    </span>
                </div>


            </div>



        </header>
    )
}