import React from 'react';
import { Link} from 'react-router-dom';
import  styles from "./nav.module.css";
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import  Image from "../../Asset/image/book1.avif"


const Nav = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  return (
    <div className={styles.nav}>     
       <img style={{width:'200px', height:'70px'}}
         src= {Image} alt=''/>  
      <ul className={styles.ul}>
            <Link to='/home' className={styles.link}>
      <li>Home</li>
      </Link>     
      <Link to='/about' className={styles.link}>
      <li>About</li>
      </Link>
      <Link to='/contact' className={styles.link}>
      <li>Contact</li>
      </Link>
      
     </ul>
    </div>
  )
}

export default Nav;