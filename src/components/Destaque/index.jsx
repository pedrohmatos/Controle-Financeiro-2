import styles from "./Destaque.module.css";

function Destaque({ tipo, valores }) {

    return (
        <section className={styles.destaque}>
            <h2>{tipo}</h2>
            <div>{valores}</div>
        </section>
    )
}

export default Destaque;