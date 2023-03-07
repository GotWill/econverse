import { ProductType } from '../../@types/Product'
import style from './index.module.scss'
import { formatValue } from "../../helpers"
import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from "../Modal"

type Props = {
    item: ProductType;
}

export function Product({ item }: Props) {
    return (
        <div className={style.product}>
            <div className={style.item}>
                <div className={style.container_img}>
                    <img src={item.photo} alt={item.productName} />
                </div>
                <div className={style.description}>
                    <p>{item.descriptionShort}</p>
                    <p className={style.price}>{formatValue(item.price + 1000)}</p>
                    <h2>{formatValue(item.price)}</h2>
                    <p className={style.installments}>ou 12x de R$ {formatValue(item.price / 12)} sem juros</p>
                    <p className={style.free}>Frete grátis</p>

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