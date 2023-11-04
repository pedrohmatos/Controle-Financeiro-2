import styles from "./Botao.module.css";

function Botao({ children, tipo, imprimir }) {

    if (tipo === "button") {
        return (
            <button
                type="button"
                onClick={imprimir}
                className={styles.bttn}
            >
                {children}
            </button>
        )
    } else {
        return (
            <button type="submit" className={styles.bttn}>
                {children}
            </button>
        )
    }
}

export default Botao;