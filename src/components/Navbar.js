import '../styles/navbar.css';
import { Button } from './Button';

export const Navbar=()=>{
    return (
      <div className="nav-container">
          <p className="logo">John.S</p>
          <div className="links">
              <ul>
                  <li><a href="!#">Home</a></li>
                  <li><a href="!#">Projects</a></li>
                  <li><Button className='btn'>Contact</Button></li>
              </ul>
          </div>
      </div>
    )
}