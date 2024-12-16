import "./Header.css";
import { Link } from "react-router-dom";

function Header(){

    const handleHamMenuClick =() =>{
        if(document.querySelector(".page-ham-menu").style.display === "none"){
          document.querySelector(".page-ham-menu").style.display = "block";
          document.querySelector(".page-ham-menu").style.animation = "slideIn .2s ease-in";
        
        }else{
          document.querySelector(".page-ham-menu").style.display = "none";
          document.querySelector(".page-ham-menu").style.animation = "";
        }
      };

return (<header className="page-header">
            <Link to = "/" className = "page-title">
                PC OUTLET
            </Link>
            <div className= "header-content-separator"></div>
            <div className= "page-avatar">
                <i className=" avatar-picture fa-solid fa-user " onClick = {handleHamMenuClick}></i>
                <ul className = "page-ham-menu">
                    <li className = "page-ham-menu-li">
                      <Link to = "/admin" className="clean-link">
                        Iniciar Sesión
                      </Link>
                    </li>
                    <li className = "page-ham-menu-li-last">
                    asd
                    </li>
                </ul>
            </div>
            
            </header>
            
    );

}

export default Header;