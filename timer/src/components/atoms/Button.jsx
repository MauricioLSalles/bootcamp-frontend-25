import './Button.css'
export default function Button({text,color, ...props}) {
  return (
    <button className={`bg-${color}`} {...props}>{text}</button>
  )
}
