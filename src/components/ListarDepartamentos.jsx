import { useEffect, useState } from "react"

function ListarDepartamentos() {
    const [departamentos, setDepartamentos] = useState([])

    useEffect(() => {
        fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/departamento?select=*', {
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        })
        .then((res) => res.json())
        .then((datos) => setDepartamentos(datos))
    }, [])

    return (
        <div>
            <h2>LISTA DE DEPARTAMENTOS</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Empresa ID</th>
                    </tr>
                </thead>
                <tbody>
                    {departamentos.map((dep) => (
                        <tr key={dep.id}>
                            <td>{dep.id}</td>
                            <td>{dep.nombre}</td>
                            <td>{dep.empresa_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarDepartamentos