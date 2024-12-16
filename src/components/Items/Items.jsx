import "./Items.css";
import Item from "../Item/Item";

function Items(props){

    return <ul className="items-ul">
            {props.items.map( (element,i) => {
                return( 
                            <Item name = {element} imgSrc = {props.itemsImgs[i]}></Item>
                        );
            })}
    </ul>
}

export default Items;