import Button from "./Button";
interface HeaderProps{
    title?:string,
      clickAdd:()=>void,
      showAdd:Boolean

}

const Header: React.FC<HeaderProps> = ({title,clickAdd,showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd? 'red':'green'} text = {showAdd?'Close':'Add'} onClick = {clickAdd}/>
        </header>
       
    )
}
Header.defaultProps={
    title: 'Note Making App'
}
export default Header


  



