import { useState } from "react"

function CrearDepartamento() {
    const [nombre, setNombre] = useState("")
    const [empresa_id, setEmpresaId] = useState("")

    async function guardarDepartamento(event) {
        event.preventDefault()
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/departamento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            },
            body: JSON.stringify({
                nombre: nombre,
                empresa_id: empresa_id
            })
        })
        setNombre("")
        setEmpresaId("")
    }

    return (
        <div>
            <h2>CREAR DEPARTAMENTO</h2>
            <form onSubmit={guardarDepartamento}>
                <input type="text" placeholder="Nombre departamento" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                <input type="number" placeholder="ID Empresa" value={empresa_id} onChange={(e) => setEmpresaId(e.target.value)} required/>
                <button type="submit">Guardar Departamento</button>
            </form>
        </div>
    )
}

export default CrearDepartamento