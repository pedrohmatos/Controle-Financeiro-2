import styles from "./ItemAcao.module.css";

function ItemAcao({ dados, excluir }) {

    function fechar() {
        excluir(dados.id)
    }

    return (
        <li className={styles.item}>
            <div className={`${styles.secao} ${styles.descricao}`}>
                <h3 className={styles.titulo}>
                    Descrição:
                </h3>
                <p>
                    {dados.descricao}
                </p>
            </div>
            <footer className={styles.rodape}>
                <div className={styles.secao}>
                    <h3 className={styles.titulo}>
                        Valor:
                    </h3>
                    <p>
                        {dados.valor}
                    </p>
                </div>
                <div className={styles.secao}>
                    <h3 className={styles.titulo}>
                        Tipo:
                    </h3>
                    <p>
                        {dados.tipo}
                    </p>
                </div>
                <div onClick={fechar} className={styles.fecha}>
                    &times;
                </div>
            </footer>
        </li>
    )
}

export default ItemAcao;