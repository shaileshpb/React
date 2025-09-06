import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const Menu = (props) => {

    const {ID} = useParams();
    
    const [menuList, setMenuList] = useState([]);
    const [restName, setRestName] = useState("");
    useEffect(() => {
        //code
        fetchData();
    }, []);

    const fetchData = async () => { 
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9753&lng=77.591&restaurantId=${ID}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        const menuData = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards ||
        json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards;
        console.log(menuData);
        setRestName(json.data.cards[0].card.card.text);
        setMenuList(menuData);
    }

    return (
        <div>
            <h1>This is Menu Page of {restName}</h1>
            <ul>
                {menuList.map((item) => {
                    return <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
                })}
            </ul>
        </div>
    )
}
export default Menu;