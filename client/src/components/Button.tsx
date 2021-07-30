interface ButtonProps{
    color:string,
     text:string,
      onClick:()=>void,

}
const Button: React.FC<ButtonProps> = ({color,text,onClick}) => {
    return (
        <button
         onClick={onClick}
         style={{backgroundColor:color}} 
         className='btn'>
         {text}
        </button>
    )
}

export default Button
