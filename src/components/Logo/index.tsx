import Styles from './Heading.module.css';

//tipando os componentes
type HeadingProps = {
    children: React.ReactNode;
}

export function Heading(props:  HeadingProps) {//props e variavel que contem o childens
    //className -> para declarar classe no react
    //para ussar variaveis mo className e copm {}
    return <h1 className={Styles.heading}>{props.children}</h1>//usando css modules

    //usando duas variaveis no css modules
    return <h1 className={`${Styles.Heading} ${Styles.cyan}`}>ola mundo</h1>//usando css modules
}