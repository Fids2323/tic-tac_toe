import clsx from 'clsx'

/**
 * @param {{children:any,
 *  className:string,
 *  variant: "primary" | "outline",
 *  size: "md" | "lg"
 * }} props
 */

export const UiButton = ({children, className, variant, size}) => {
    const buttonClassName = clsx("transition-colors", className, 
        {
        "primary": " text-white bg-teal-600 hover:bg-teal-500 ",
        "outline": " text-teal-600 bg-white hover:bg-teal-50 border border-teal-600",
        }[variant], 
    {
        "md": "px-6 py-2 text-2sm rounded leading-tight",
        "lg": "px-5 py-2 text-2xl rounded-lg leading-tight"
    }[size])
  return (
    <button className={buttonClassName}>{children}</button>
  )
}

