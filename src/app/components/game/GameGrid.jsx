

export const GameGrid = ({children}) => {
  return (
    <div className='grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px'>
        {children}
</div>
  )
}

 
