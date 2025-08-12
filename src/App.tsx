import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react'



//componente do react e uma funcao 
export function App() {//usa o nome da classe
    return (//so permite retornar um elemento pai(usando a tag vazia vc evita essa obrigatoriedade)
        
        <>
            {/* usando atributo normal(na tag) e childens(dentro da tag) */}
            <Heading>
                ola mundo
                <button>
                    <TimerIcon/>
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ducimus ea vel, 
                esse doloremque modi. Esse tenetur, sint dolor, rerum quae aliquid veritatis 
                minus alias, laborum qui expedita ex totam?
            </p>
        </>
    )
}


//export {App}//fazendo isso obriga a imporatar como app
//usando export na declaracao da funcao tb