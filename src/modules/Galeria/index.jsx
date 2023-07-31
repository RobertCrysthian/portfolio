import preview from './preview.json'
import './Galeria.css'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Galeria(){

    const navigate = useNavigate();

    const tags = [... new Set(preview.map((valor) => valor.tag))]
    const [filter, setFilter] =useState(preview)
    var changeImg =(tag) => {
        var newImages = preview.filter((e) =>{
            return e.tag === tag;
        })
        setFilter(newImages);
    }
    return(
        <div className="galeria">
            <h1>All my projects: </h1>
            <ul>
                {tags.map((e) => {return <li onClick={() => changeImg(e)}>{e}</li>})}
                <li onClick={() => setFilter(preview)}>All</li>
            </ul>
            <div class="centralizar">
                <div className="images">
                    {filter.map((e)=> {
                        return <img src={e.imagem} 
                        alt="galery images"
                        width={380}
                        onClick={() => navigate(`imagem/${e.id}`)}
                    />
                    })}
                </div>
            </div>
        </div>
    )
}