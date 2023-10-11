import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../Utilitice/Localstorage";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    // load cart from local storge 
    useEffect(() => {
        console.log(bottles.length);
        if(bottles.length
             ){
            const storedCart = getStoredCart()
            console.log(storedCart, bottles);
        }
    },[bottles])


    const handleAddToCard = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }



    return (
        <div>
            <h2>Bottle Available: {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
           <div className="bottle-container">
           {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCard={handleAddToCard}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;