import styles from "./InputBox.module.css";

function InputBox({ tipo, handleChange, valor }) {

    if (tipo === "number") {
        return (
            <div className={styles.inputBox}>
                <label htmlFor={tipo}>
                    Valor
                </label>
                <input
                    value={valor}
                    onChange={handleChange}
                    type={tipo}
                    id={tipo}
                    max={1000000000}
                    placeholder="Ex: 290"
                    required
                />
            </div>
        )
    } else {
        return (
            <div className={styles.inputBox}>
                <label htmlFor={tipo}>
                    Descrição
                </label>
                <input
                    value={valor}
                    onChange={handleChange}
                    type={tipo}
                    id={tipo}
                    maxLength={50}
                    placeholder="Ex: Gasolina"
                    required
                />
            </div>
        )
    }
}

export default InputBox;