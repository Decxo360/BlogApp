import { Link } from "react-router-dom"
import { useDispatch } from "react-redux/es/exports";
import { logIn,logOut } from '../../store/slices/auth/authContext'

export const Register = () => {

  const dispatch = useDispatch()

  return (
    <div className="card mt-5 mx-auto" style={{width:'50%'}}>
      <div className='card-header bg-dark text-light'>
        <h4>¿No te has registrado?, vamos un nuevo post esta esperando ser publicado!</h4>
      </div>
      <div className="card-body mx-5"> 
          <form>
            
            <label className='form-label'>Nombre</label>
            <input className='form-control' />
            <label className='form-label'>Apellido Paterno</label>
            <input className='form-control' />
            <label className='form-label'>Apellido Materno</label>
            <input className='form-control' />
            <label className='form-label'>Fecha de nacimiento</label>
            <input className='form-control' placeholder="En formato dd/mm/yyyy" />
            <label className='form-label'>Contraseña</label>
            <input className='form-control' />
            <label className='form-label'>Contraseña2</label>
            <input className='form-control' />
            
          </form>
      </div>
      <div className='card-footer d-grid gap-2 bg-dark'>
          <button className='btn btn-outline-primary' type='button' onClick={()=>dispatch(logOut())}>Registrarse</button>
          <h6 className='mx-auto text-light'>¿Ya tienes una cuenta?, <Link to={'/login'} style={{color:'white'}}>Logueate!</Link></h6>
      </div>
    </div>
  )
}
