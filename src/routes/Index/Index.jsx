import "./Index.css";
import Header from '../../components/Header/Header';
import Items from '../../components/Items/Items';


function Index(){

    return(
        <div className="index">
            <Header></Header>
            <div className='page-items-container'>
            <Items items={["computadora","computadora con pantalla","mouse y teclado","auriculares"]} itemsImgs={["https://electropc.com.ar/wp-content/uploads/DISENO-AVANZADO-PAGINA-jpg.webp","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeNG5SKeeBNT3GXdlcqmmkH6w1BiXURyVuA&s","https://m.media-amazon.com/images/I/71d7UKkg6xL._AC_SL1500_.jpg","https://products.shureweb.eu/cdn-cgi/image/width=1380,height=1380,format=auto/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp"]}></Items>
            </div>
            <div className='spacer'></div>
            <footer className='page-footer'>asd</footer>
        </div>
    );
}

export default Index;