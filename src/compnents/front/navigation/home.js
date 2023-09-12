
import MainRouter from "../mainRouter"
import EcommerceHome from "../ecommerceHome"
function Home({handleAddClick}){

    return(
        <div>
           <EcommerceHome handleAddClick={handleAddClick}/>
        </div>

    )
}

export default Home