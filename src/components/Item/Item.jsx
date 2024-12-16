import "./Item.css";


function Item(props){
    return <li className = "page-item">
                <img className="item-img" src={props.imgSrc}></img>
                <text className="item-text">{props.name}</text>
            </li>
}

export default Item;