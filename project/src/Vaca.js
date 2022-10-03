import country from "./country"
import App from './App'

function Vaca(){
    const countryEl = country.map(list =>{
        return (
            <App 
            city = {list.city}
            img = {list.img}
            desc = {list.desc}
            rating = {list.rating}
            />
        )
    })

    return (
        <div>
            {countryEl}
        </div>
    )
}

export default Vaca