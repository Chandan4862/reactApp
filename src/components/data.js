import react from "react";
import {useParams} from 'react-router-dom'

const Data = ()=>{
    let params = useParams()
return(
    <div>
        Params {params.id}
    </div>
)
}

export default Data