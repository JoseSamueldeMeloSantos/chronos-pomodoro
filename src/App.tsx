import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'


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

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form'>{/*É o container principal de um formulário.Agrupa campos de entrada, botões e outros elementos.*/}
                    <div className='formRow'>
                      <DefaultInput labelText='qualquerCoisa' id='meuInput' type='string' title='Titulo' placeholder='Digite algo'/>
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0 0</p>
                    </div>

                    <div className="formRow">
                        <button>Enviar</button>
                    </div>                    
                </form>
            </Container>
        </>
    )
}


//export {App}//fazendo isso obriga a imporatar como app
//usando export na declaracao da funcao tb