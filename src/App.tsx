import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'



//componente do react e uma funcao 
export function App() {//usa o nome da classe
    return (//so permite retornar um elemento pai(usando a tag vazia vc evita essa obrigatoriedade)
        
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>
        </>
    )
}


//export {App}//fazendo isso obriga a imporatar como app
//usando export na declaracao da funcao tb