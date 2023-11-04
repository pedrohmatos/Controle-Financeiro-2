import styles from "./InputBox.module.css";

function InputBox({ tipo, handleChange, valor }) {

    return (
        <div className={styles.inputBox}>
            <label htmlFor={tipo}>
                {tipo === "number" ? "Valor" : "Descrição"}
            </label>
            <input
                value={valor}
                onChange={handleChange}
                type={tipo}
                id={tipo}
                maxLength={50}
                max={1000000000}
                required
            />
        </div>
    )
}

export default InputBox;