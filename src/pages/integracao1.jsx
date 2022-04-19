import Layout from '../components/Layout'
import { useState } from 'react'

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})    
    
    // function getCliente() {
    //     fetch(`http://localhost:3000/api/clientes/${codigo}`)
    //     .then(resp => resp.json())
    //     .then(dados => setCliente(dados))
    // }    

    async function getCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
    }   

    return(
        <Layout>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={getCliente}>Obter Cliente</button>
            </div>            
            <ul>
                <li>Código:  {cliente.id}    </li>
                <li>Nome:    {cliente.nome}  </li>
                <li>Idade:   {cliente.idade} </li>
            </ul>
        </Layout>
    )
}