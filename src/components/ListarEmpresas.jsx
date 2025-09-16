import { useEffect, useState } from "react"

function ListarEmpresas() {
    const [empresas, setEmpresas] = useState([])

    useEffect(() => {
        fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empresa?select=*', {
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        })
        .then((res) => res.json())
        .then((datos) => setEmpresas(datos))
    }, [])

    return (
        <div>
            <h2>LISTA DE EMPRESAS</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.nombre}</td>
                            <td>{emp.direccion}</td>
                            <td>{emp.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarEmpresas