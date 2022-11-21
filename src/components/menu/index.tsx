import { Header } from "./style";
import Logo from '../../assets/Logo.svg' 
import Carro from '../../assets/carticon.svg'


export default function Menu() {
    return(
        <Header>
            <img src={Logo} />
            <ul>
                <li>Sign in</li>
                <li> <img src={Carro} /> </li>
            </ul>
        </Header>
    )
}