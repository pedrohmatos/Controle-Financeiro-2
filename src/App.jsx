import { useEffect, useState } from "react";
import "./App.css";
import "./components/impressao.css";
import Destaque from "./components/Destaque";
import InputBox from "./components/InputBox";
import Marcador from "./components/Marcador";
import swal from "sweetalert";
import ItemAcao from "./components/ItemAcao";
import { v4 as uuidv4 } from "uuid";
import Botao from "./components/Botao";

function App() {

    const [acao, setAcao] = useState(
        {
            descricao: "",
            valor: "",
            tipo: "",
            id: ""
        }
    );

    const [calculos, setCalculos] = useState(
        {
            entradas: 0,
            saidas: 0,
            total: 0
        }
    );

    const [relatorio, setRelatorio] = useState([]);

    const handleChange = (ev) => {

        switch (ev.target.getAttribute("id")) {
            case "text":
                setAcao({ ...acao, descricao: ev.target.value });
                break;
            case "number":
                setAcao({ ...acao, valor: ev.target.value });
                break;
            case "Entrada":
                setAcao({ ...acao, tipo: ev.target.value, id: uuidv4() });
                break;
            case "Saída":
                setAcao({ ...acao, tipo: ev.target.value, id: uuidv4() });
            default:
                break;
        }
    };

    useEffect(() => {
        const filtrarEntradas = relatorio.filter((obj) => {
            return obj.tipo === "Entrada";
        });
        const filtrarSaidas = relatorio.filter((obj) => {
            return obj.tipo === "Saída";
        });

        const somaDasEntradas = filtrarEntradas.reduce((ac, obj) => {
            return ac + Number(obj.valor);
        }, 0).toFixed(2);
        const somaDasSaidas = filtrarSaidas.reduce((ac, obj) => {
            return ac + Number(obj.valor);
        }, 0).toFixed(2);

        setCalculos(
            {
                entradas: somaDasEntradas,
                saidas: somaDasSaidas,
                total: (somaDasEntradas - somaDasSaidas).toFixed(2)
            }
        );

    }, [relatorio]);

    const submittForm = (ev) => {
        ev.preventDefault();

        if (acao.tipo) {
            setRelatorio(prev => [...prev, { ...acao }])
            setAcao({ descricao: "", valor: "", tipo: "" });
        } else {
            swal(
                {
                    icon: "warning",
                    text: "Lembre-se de marcar: Entrada ou saída",
                    button: {
                        text: "Entendi",
                        className: "modalAlert",
                    }
                }
            );
        }
    }

    const handleExcluir = (identidade) => {
        const novoRelatorio = relatorio.filter((obj) => {
            return obj.id !== identidade;
        });
        setRelatorio(novoRelatorio);
    };

    const handleImprimir = () => {
        window.print();
    };

    return (
        <div className="App">
            <header>
                <h1>Controle Financeiro</h1>
                <ul>
                    <li>
                        <Destaque tipo={"Entradas"} valores={calculos.entradas} />
                    </li>
                    <li>
                        <Destaque tipo={"Saídas"} valores={calculos.saidas} />
                    </li>
                    <li>
                        <Destaque tipo={"Total"} valores={calculos.total} />
                    </li>
                </ul>
            </header>
            <main>
                <form
                    onSubmit={submittForm}
                    className="valores"
                    method="get"
                    autoComplete="off"
                >
                    <div className="inputs">
                        <InputBox tipo={"text"} valor={acao.descricao} handleChange={handleChange} />
                        <InputBox tipo={"number"} valor={acao.valor} handleChange={handleChange} />
                    </div>
                    <div className="radio">
                        <Marcador tipo={"Entrada"} marcacao={acao.tipo} handleChange={handleChange} />
                        <Marcador tipo={"Saída"} marcacao={acao.tipo} handleChange={handleChange} />
                    </div>
                    <Botao tipo={"submit"}>
                        Adicionar
                    </Botao>
                </form>
                <section className="relatorio">
                    <div>
                        <Botao tipo="button" imprimir={handleImprimir}>
                            Imprimir/Salvar relatório
                        </Botao>
                    </div>
                    <ul>
                        {
                            relatorio.map((obj) => {
                                return <ItemAcao dados={obj} excluir={handleExcluir} key={obj.id} />
                            })
                        }
                    </ul>

                </section>
            </main>
            <footer>
                <p>Desenvolvido por <a href="https://github.com/pedrohmatos" target="_blank" rel="noopener noreferrer">Pedro Matos&#x1F517;</a></p>
            </footer>
        </div>
    );
}

export default App;
