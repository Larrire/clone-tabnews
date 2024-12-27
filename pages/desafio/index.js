import styles from './styles.module.css'

function Desafio() {
    const imgURL = "https://media.tenor.com/eXayvQU-Rh8AAAAe/gato-mago.png"

    return (
        <main>
            <img className={styles['mage-cat-img']} width={300} src={imgURL}/>
            <h3>
                Estrelas que dançam, luas a brilhar,<br/>
                2025 vem para encantar.<br/>
                Sim salabim, com magia no ar,<br/>
                o melhor ano está para começar!
            </h3>
        </main>
    )
}

export default Desafio;