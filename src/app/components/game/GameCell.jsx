
export const GameCell = ({children , onClick , key}) => {
  return (
    <button onClick={()=> onClick(key)}  className='border border-slate-200 -ml-px -mt-px flex items-center justify-center'>
        {children}
    </button>
  )
}


