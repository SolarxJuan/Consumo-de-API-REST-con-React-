import CrearEmpresa from './components/CrearEmpresa'
import CrearDepartamento from './components/CrearDepartamento'
import ListarEmpresas from './components/ListarEmpresas'
import ListarDepartamentos from './components/ListarDepartamentos'

function App() {
  return (
    <div>
      <h1>Sistema de Gestión</h1>
      <CrearEmpresa />
      <CrearDepartamento />
      <ListarEmpresas />
      <ListarDepartamentos />
    </div>
  )
}

export default App