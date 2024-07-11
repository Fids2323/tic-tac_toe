import clsx from "clsx"

export const GameFieldLayout = ({className, children}) => {
  return (
    <div className={clsx(className,'px-8 pt-5 pb-7 bg-white rounded-2xl shadow-md')}>
      {children}
    </div>
  )
}


