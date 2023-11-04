import styles from "./Marcador.module.css";

function Marcador({ tipo, handleChange, marcacao }) {
    return (
        <div className={styles.marcador}>
            <label htmlFor={tipo}>
                {tipo}
            </label>
            <input
                type="radio"
                name="marcador"
                id={tipo} // para direcionar ao label
                value={tipo}
                onChange={handleChange}
                checked={marcacao === tipo}
            />
        </div>
    )
}

export default Marcador;