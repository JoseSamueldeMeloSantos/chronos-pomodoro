import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'

//componente do react e uma funcao 
export function App() {//usa o nome da classe
    return (//so permite retornar um elemento pai(usando a tag vazia vc evita essa obrigatoriedade)
        
        <>
            <Container>
                <section>Logo</section>
            </Container>

            <Container>
                <section>Menu</section>
            </Container>

            <div className='container'>
                <div className='content'>
                    <section>FORM</section>
                </div>
            </div>

            <div className='container'>
                <div className='content'>
                    <section>FOOTER</section>
                </div>
            </div>
        </>
    )
}


//export {App}//fazendo isso obriga a imporatar como app
//usando export na declaracao da funcao tb