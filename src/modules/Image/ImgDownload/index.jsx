import { useParams } from "react-router-dom"
import preview from "../../Galeria/preview.json"

export default function DownloadImg(){
    var {id} = useParams()
    return(
        <div>
            <img src={preview[id-1].imgCompleta}></img>
        </div>
    )
        
    
}