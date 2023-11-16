import "./header.scss"
import logo from "../../assets/images/movix-logo.svg"
const header = ()=>
{
    return <>
    <div className="header">
            <img src={logo} className="logo"></img>
    </div>

    
    </>
}

export default header