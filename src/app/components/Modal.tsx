import * as AlertDialog from '@radix-ui/react-alert-dialog';
import './styles.css';
import { ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type ModalProps = {
    item: Item
}

export function Modal({item} : ModalProps) {

    const [count, setCount] = useState(1)

    function decCount(){
        if(count > 1){
            setCount(state => state - 1)
        }
        
    }

    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <button className="mt-3 cursor-pointer mb-4 bg-primary text-[#FFF] text-center w-full pt-[14.08px] pb-[11.04px] rounded font-bold uppercase">Comprar</button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="AlertDialogOverlay" />
                <AlertDialog.Content className="AlertDialogContent">
                    <AlertDialog.Cancel asChild>
                        <div className='flex justify-end mb-1'>
                            <X className='cursor-pointer text-[#707070]' width={20} height={20} />
                        </div>
                    </AlertDialog.Cancel>

                    <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                        <Image width={247} height={228} src={item.photo} alt="" />

                        <div className='flex flex-col items-start'>
                            <h2 className='text-[#041E50] text-xl font-normal mb-5'> {item.productName}</h2>
                            <span className='text-[#041E50] font-black '>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            <p className='text-[#222] w-[290px] font-normal mt-4'>Many desktop publishing packages and web page editors now many desktop publishing</p>

                            <a href="#" className='flex items-center gap-1 mt-6 text-[#041E50] text-xs font-normal '>Veja mais detalhes do produto <ChevronRight width={12} height={12} /></a>

                            <div className='mt-4 border border-[#041E50]  flex justify-between py-2 px-2 items-center gap-5'>
                                <button onClick={decCount} className='text-[#041E50] '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                        <path d="M4.53816 9.81812H16.3843" stroke="#041E50" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <span className='font-medium text-[#041E50] text-base leading-4'>{count}</span>
                                <button onClick={() => setCount(state => state + 1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                        <path d="M10.6925 4.09094V15.5455" stroke="#041E50" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                                        <path d="M4.76863 9.81812H16.6148" stroke="#041E50" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <button className="mt-3 mb-4 bg-primary text-[#FFF] w-[245px] h-[44px] pt-[14.08px] pb-[11.04px] rounded font-bold uppercase">
                                Comprar
                            </button>
                        </div>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}
