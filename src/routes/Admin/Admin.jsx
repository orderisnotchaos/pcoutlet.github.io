
import "./Admin.css";
import Header from "../../components/Header/Header";
import AdminItems from "../../components/AdminItems/AdminItems";
function Admin(props){

    function handleAddItemButtonClick(){
        document.querySelector("#add-item-button-window").style.display = "block";
    };

    function handleCloseWindowButtonClick(){
        document.querySelector("#add-item-button-window").style.display = "none";
    }
    return (
        <div className="admin-page">
            <Header></Header>
            <button className="add-item-button" onClick={handleAddItemButtonClick}>Agregar</button>
            <ul className="admin-page-separators">
                <li className="admin-page-separator">imágen</li>
                <li className="admin-page-separator">nombre</li>
                <li className="admin-page-separator">precio</li>
                <li className="admin-page-separator">editar</li>
                <li className="admin-page-separator-last">eliminar</li>
            </ul>
            <ul className="admin-page-items">
                <AdminItems names = {props.names}
                            urls = {props.urls}></AdminItems>
            </ul>
            <div id = "add-item-button-window" className="add-item-button-window">
                <div className="add-item-button-window-banner">
                    <button className="close-window-button" onClick={handleCloseWindowButtonClick}>X</button>
                    <label>imágen:</label>
                    <input className= "add-item-button-window-banner-input" type="text" />
                    <label htmlFor="name">nombre:</label>
                    <input className= "add-item-button-window-banner-input" type="text" />
                    <label htmlFor="price">precio:</label>
                    <input className= "add-item-button-window-banner-input" type="text" />

                    <button>agregar</button>
                </div>
            </div>
        </div>
    );
}

export default Admin;