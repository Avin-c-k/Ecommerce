import { Routes, Route, Link } from "react-router-dom"
import Home from "./navigation/home"
import SignUp from "./navigation/signup"
import Basket from "./navigation/basket"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './mainRouter.css'



const MainRouter = ({cartItems,handleAddClick,handleRemoveProduct,handleCartClear}) => {

   

    return (<>
        <header className="header">
            <div className="head">
                <h1 ><Link to="/" className="title"><img className="logo-size" src="./pics/logo_eclecticcart.png" alt="logo of cart"></img> </Link></h1>
            </div>
            <div className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><Link to="signup">Sign up</Link></li>
                </ul>
                <ul>
                    <li><Link to="basket" className="basket"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                    <div className="item-count">
                        {cartItems.length===0?"":cartItems.length}
                    </div>
                </ul>
            </div>
        </header>
        <Routes >
            <Route path="/" element={<Home handleAddClick={handleAddClick}/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="basket" element={<Basket cartItems={cartItems}  handleAddClick={handleAddClick} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>}/>
         </Routes>
        </>
    )
}

export default MainRouter