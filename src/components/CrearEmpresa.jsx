import { useState } from "react"

function CrearEmpresa() {
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")

    async function guardarEmpresa(event) {
        event.preventDefault()
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empresa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            },
            body: JSON.stringify({
                nombre: nombre,
                direccion: direccion,
                telefono: telefono
            })
        })
        setNombre("")
        setDireccion("")
        setTelefono("")
    }

    return (
        <div>
            <h2>CREAR EMPRESA</h2>
            <form onSubmit={guardarEmpresa}>
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                <input type="text" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} required/>
                <input type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
                <button type="submit">Guardar Empresa</button>
            </form>
        </div>
    )
}

export default CrearEmpresa