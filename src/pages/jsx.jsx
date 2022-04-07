export default function Jsx() {
    const a = 3
    const b = 4
    console.log(a * b)

    const obj = {nome: 'Pedro', idade: 10 }

    const subTitulo = <h2>Subtítulo</h2>

    function content(){
        return <p>Conteúdo</p>
    }

    return (
        <div>
            <h1>JSX é um conceito central</h1>
            {subTitulo}
            {content()}
            <h2>{"conceitos jsx".toUpperCase()}</h2>
            <p>
                {JSON.stringify({nome: 'Pedro', idade: 10 })}
            </p>
        </div>
    )
}