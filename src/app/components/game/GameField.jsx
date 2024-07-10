import Image from 'next/image'
import {UiButton} from '../ui-kit/UiButton'

//icons
import CrossIcon from '../profile/icons/cross-icon.svg'
import RoundIcon from '../profile/icons/round-icon.svg'

const cells = new Array(19*19).fill(null)

export const GameField = () => {
  return (
    <div className='px-8 pt-5'>
        <div className='mb-4 flex justify-between items-center'>
            {/* info */}
            <div >
                <div className='flex'>
                    Ход:  
                    <Image src={CrossIcon} width={20} height={20}/>
                </div>
                <div className='flex'>
                    Следующий: 
                    <Image src={RoundIcon} width={12} height={12}/>
                </div>
            </div>
            {/* buttons */}
             <div className='flex items-center gap-3'>
                <UiButton children="Ничья" variant='primary' size='md'/>
                <UiButton children="Сдаться" variant='outline' size='md'/>
            </div>
        </div>
        {/* field */}
        <div className='grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px'>
            {cells.map((_,index)=>(
                <button key={index} className='border border-slate-200 -ml-px -mt-px flex items-center justify-center'>
                     <Image src={RoundIcon} width={20} height={20}/>
                </button>
            ))}
        </div>
    </div>
  )
}


