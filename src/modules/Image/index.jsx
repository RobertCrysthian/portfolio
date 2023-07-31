import preview from '../Galeria/preview.json'
import {GiSaveArrow as Save} from 'react-icons/gi'
import {AiFillLike as Like} from 'react-icons/ai'
import {AiFillDislike as Deslike} from 'react-icons/ai'
import './Image.css'
import { useNavigate, useParams } from "react-router-dom"
import img from '../../assets/Screenshot_1.png'
import { useState } from 'react'

export default function Image(){
    const [like, setLike] = useState(true)
    const navigate = useNavigate();
    var {id} = useParams();
    if(id<1){
        id=20
    }else if(id>20){
        id=1
    }
    
    return(
        <section className="sectionImage">
            <button onClick={() => navigate(`/imagem/${parseInt(id)-1}`)}>{"<"}</button>
            <img src= {preview[id-1].imgCompleta} width={600} alt="imagem selecionada"></img>
            <button onClick={() => navigate(`/imagem/${parseInt(id)+1}`)}>{">"}</button>
            <div className="info">
                    <img src={img} alt="Foto do portifólio" width={140} height={140}/>
                    <h1>{preview[id-1].titulo}</h1>
                    <div className="links">
                        <a onClick={() => setLike(!like)}>{like? <Like/> : <Deslike/>}Like</a>
                        <a><Save/>Save</a>
                    </div>



            </div>

        </section>
    )
}