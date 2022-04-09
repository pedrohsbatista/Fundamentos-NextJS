import Navegador from '../components/Navegador'

export default function Inicio() {
    //"<h1>Título</h1>"
    // JSX - permite escrever trechos HTML no javascript e quando renderizado no browser transpila para HTML 
    //return <h1>Título</h1>
    return (
        <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                height: '100vh',
            }}>
           <Navegador destino="/estiloso"     texto="Estiloso" />
           <Navegador destino="/exemplo"      texto="Exemplo"               cor="#9400d3" />
           <Navegador destino="/jsx"          texto="Jsx"                   cor="crimson" />
           <Navegador destino="/navegacao"    texto="Navegação #01"         cor="#2f4f4f" />
           <Navegador destino="/cliente/A/1"  texto="Navegação #02"         cor="#cf8803" />
           <Navegador destino="/estado"       texto="Componente com Estado" cor="#464646" />
        </div>
    )
}