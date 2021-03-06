import {NavLink,Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'

export const NavBar = () => {

    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navegar = useNavigate() 

    const irALogin = () =>{ 
        navegar("/Login",{replace:true});
    }
    const irARegister = () =>{ 
        navegar("/register",{replace:true});
    }


    return (
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'currentcolor'}}>
            <div className="container-fluid">
                <Link to='/' className='navbar-brand'>Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav navbar-center">
                        <li className="nav-item ">
                            <NavLink to='/' className='active nav-link' style={{textDecoration:'none',color:'white'}}>Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to='/' className={({isActive})=>`nav-link ${isActive ? 'isActive':''}`} style={{textDecoration:'none',color:'white'}}>Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to='/' className={({isActive})=>`nav-link ${isActive ? 'isActive':''}`}style={{textDecoration:'none',color:'white'}}>Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to='/' className={({isActive})=>`nav-link ${isActive ? 'isActive':''}`} style={{textDecoration:'none',color:'white'}}>Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to='/' className={({isActive})=>`nav-link ${isActive ? 'isActive':''}`}style={{textDecoration:'none',color:'white'}}>Home</NavLink>
                        </li>
                    </ul>


                    <ul className="navbar-nav navbar-rigth">
                        <li>
                            <button type='button' className='btn btn-outline-primary' onClick={irALogin}>Login</button>
                        </li>
                        <li>
                            <button type='button' className='btn btn-outline-success' style={{marginLeft:'10px'}} onClick={irARegister}>Register</button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
