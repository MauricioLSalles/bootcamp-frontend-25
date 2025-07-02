import './Button.css'
export default function Button({onClick,text,color, ...props}) {
  return (
    <button onClick={onClick} className={`bg-${color}`} {...props}>{text}</button>
  )
}
