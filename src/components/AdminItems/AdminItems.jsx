import "./AdminItems.css";


function AdminItems(props){
    let names=["computadora","computadora con pantalla","mouse y teclado","auriculares"]
 let urls= [
        "https://electropc.com.ar/wp-content/uploads/DISENO-AVANZADO-PAGINA-jpg.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeNG5SKeeBNT3GXdlcqmmkH6w1BiXURyVuA&s",
        "https://m.media-amazon.com/images/I/71d7UKkg6xL._AC_SL1500_.jpg",
        "https://products.shureweb.eu/cdn-cgi/image/width=1380,height=1380,format=auto/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp"]
let prices = [123.45,
          34.44,
          12.25,
          9.2]
    return (
        names.map((name,i) =>{

                return <>
                            <li className="admin-item"><img className="admin-page-image" src={urls[Math.floor(i)]} alt={`image - ${i/4}`} /></li>
                            <li className="admin-item">{name}</li>
                            <li className="admin-item">{prices[Math.floor(i)]}</li>
                            <li className="admin-item"><button>editar</button></li>
                            <li className="admin-item"><button>eliminar</button></li>
                        </>
        })

    );
}

export default AdminItems;