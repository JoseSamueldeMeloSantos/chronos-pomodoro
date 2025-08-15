import styles from './styles.module.css'



type ButtonProps = {
    icon: React.ReactNode;
    color: 'green' | 'red';
} & React.ComponentProps<'button'>;

                        //para definir valor padrao para parametro
export function Button({icon, color = 'green', ...props} : ButtonProps) {
    return (
        <>  
            {/*O trecho {styles[color]} no React é uma forma de acessar e aplicar um estilo CSS dinamicamente a um componente. */}
            <button className={`${styles.button} ${styles[color]}`} {...props}>
                {icon}
            </button>
        </>
    )
}
