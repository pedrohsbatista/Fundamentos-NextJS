import Link from 'next/link'

export default function Inicio() {
    //"<h1>Título</h1>"
    // JSX - permite escrever trechos HTML no javascript e quando renderizado no browser transpila para HTML 
    //return <h1>Título</h1>
    return (
        <div>
           <Link href="/estiloso">
               Estiloso
           </Link>
        </div>
    )
}