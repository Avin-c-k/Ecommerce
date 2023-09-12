import { useState } from "react"
import data from "./back/productData"
import './ecommerce.css'


const EcommerceHome = ({handleAddClick}) => {

    

    const [items, setItem] = useState(data)

   
    return (
        <div className="container">
            {items.map((item) => (
                <div key={item.id} className="card">
                    <img src={item.image} className="card-img"alt="electronic products"></img>
                    <h3 id="name">{item.name}</h3>
                    <h4 id="prdName">{item.product}</h4>
                    <h5 id="price">₹ {item.price}</h5>
                    <button type="submit" className="add-btn" onClick={()=>handleAddClick(item)}>Add Cart</button>

                </div>
            ))}




        </div>
    )
}

export default EcommerceHome