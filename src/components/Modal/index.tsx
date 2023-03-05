import * as Dialog from '@radix-ui/react-dialog'
import { CaretRight, X } from 'phosphor-react'
import { ProductType } from '../../@types/Product'
import { formatValue } from '../../helpers'
import style from './index.module.scss'
type Props = {
    item: ProductType
}

export function Modal({ item }: Props) {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className={style.overlay} />
            <Dialog.Content className={style.content}>
                <Dialog.Close className={style.close}>
                    <X size={20} color="#707070" />
                </Dialog.Close>

                <div className={style.info_modal}>
                    <div className={style.img}>
                        <img src={item.photo} alt={item.productName} />
                    </div>

                    <div className={style.text}>
                        <Dialog.Title className={style.title}>{item.productName}</Dialog.Title>
                        <h3>{formatValue(item.price)}</h3>
                        <p>
                            Many desktop publishing packages and web page editors now many desktop publishing
                        </p>
                        <a href="#">Veja mais detalhes do produto <CaretRight size={12} /></a>
                    </div>
                </div>

            </Dialog.Content>
        </Dialog.Portal>
    )
}