import styles from './styles.module.css'

type DefaultInputProps = {
    // | -> permite aceitar um ou outro(nunca os dois ao mesmo tempo)
    //type : 'string' | 'number'; 
    id: string;
    labelText: string;
    //labelText?: string// ? -> para informar que e uma propriedade opcional
//& -> adiciona todas as propriedades do type e mais alguma coisa(oque vinher em seguida) ao mesmo tempo
} & React.ComponentProps<'input'>//puxa todas as tags do input de uma vez so

//-> pega todo o restante que vc invocou no type(React.ComponentProps) sem precisar ficar invocando
export function DefaultInput({id, type,labelText, ...rest} : DefaultInputProps) {
    return (
        <>
            {/**adicionando condicao no react
             * {labelText ? <label htmlFor={id}>{labelText}</label> : ''}
             * se labeltext existir(for true) retorna o label se nao o string vazio
             */}
            
            {/*htmlFor e id tem que ser iguais*/}
            <label htmlFor={id}>{labelText}</label>{/*Serve para identificar um campo de entrada.*/}
                                    {/*uso do res*/}
            <input className= {styles.input} id={id} type={type} {...rest}/>{/*É o campo de entrada*/}
        </>

    )
}