import { ProductType } from '../../@types/Product'
import './index.scss'
import { formatValue } from "../../helpers"
import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from "../Modal"

type Props = {
    item: ProductType;
}

export function Product({ item }: Props) {
    return (
        <div className="product">
            <div className="item">
                <div className="container_img">
                    <img src={item.photo} alt={item.productName} />
                </div>
                <div className="description">
                    <p>{item.descriptionShort}</p>
                    <p className="price">{formatValue(item.price + 1000)}</p>
                    <h2>{formatValue(item.price)}</h2>
                    <p className="installments">ou 12x de R$ {formatValue(item.price / 12)} sem juros</p>
                    <p className="free">Frete grátis</p>

                    <Dialog.Root>
                        <Dialog.DialogTrigger asChild>
                            <button> COMPRAR </button>
                        </Dialog.DialogTrigger>
                        <Modal item={item} />
                    </Dialog.Root>
                </div>
            </div>
        </div>
    )
}