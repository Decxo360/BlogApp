import React from 'react'
import { Link } from 'react-router-dom'

import { logIn } from '../../store/slices/auth/authContext'
import { useDispatch, useSelector } from 'react-redux/es/exports'

export const Login = () => {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()


  return (
    <div className="card mt-5 mx-auto" style={{width:'50%'}}>
      <div className='card-header bg-dark text-light'>
        <h2>¿No has iniciado sesión?, bueno hazlo ya!</h2>
      </div>
      <div className="card-body mx-5"> 
          <form>
            <label className='form-label'>Correo</label>
            <input className='form-control' />
            <label className='form-label'>Contraseña</label>
            <input className='form-control' />
          </form>
      </div>
      <div className='card-footer d-grid gap-2 bg-dark'>
          <button onClick={()=>dispatch(logIn({correo:'derso',password:'lundstedt'}))} className='btn btn-outline-primary' type='button'>Iniciar Sesion</button>
          <h6 className='mx-auto text-light'>¿No te has registrado?, <Link to={'/register'} style={{color:'white'}}>Hazlo aqui</Link></h6>
      </div>
    </div>
  )
}
