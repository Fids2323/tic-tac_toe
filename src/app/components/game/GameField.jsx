import Image from 'next/image'
import {UiButton} from '../ui-kit/UiButton'

//icons
import CrossIcon from '../profile/icons/cross-icon.svg'
import RoundIcon from '../profile/icons/round-icon.svg'

export const GameField = () => {
  return (
    <div className='px-8 pt-5'>
        <div className='mb-4 flex justify-between '>
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
        <div>
            Field
        </div>
    </div>
  )
}


