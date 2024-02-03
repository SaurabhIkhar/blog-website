import { Link } from 'react-router-dom';
import './topbar.css';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = ()=>{
      dispatch({type:"LOGOUT"});
  };
  return (
    <div className='top'> 
      <div className="topLeft">
      <i className="topIcons fa-brands fa-instagram"></i>
      <i className="topIcons fa-brands fa-square-facebook"></i>
      <i className="topIcons fa-brands fa-linkedin"></i>
      <i className="topIcons fa-brands fa-square-x-twitter"></i>
      </div>
      <div className="topmid">
        <ul className='topList'>
            <li className="topListItem"><Link className='link' to="/" >HOME</Link> </li>
            <li className="topListItem"><Link className='link' to="/about" >ABOUT</Link> </li>
            <li className="topListItem"><Link className='link' to="/contact" >CONTACT</Link> </li>
            <li className="topListItem"><Link className='link' to="/write" >WRITE</Link> </li>
            <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"} </li>
        </ul>
      </div>
      <div className="topRight">
      {user ? (<Link to="/settings"><img className="topImg" src={PF+user.profilePic} alt="profilep" /></Link> ) : 
              ( <ul className='topList'>
                  <li className="topListItem"><Link className='link' to="/login" >LOGIN</Link></li>
                  <li className="topListItem"><Link className='link' to="/register" >REGISTER</Link></li>
                </ul>
               )}
      <i className="topSerchIcons fa-solid fa-magnifying-glass"></i>
      </div>
      
    </div>
  )
}
