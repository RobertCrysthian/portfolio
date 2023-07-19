import imagens from './Images.json'
import './Galeria.css'
import { useState } from 'react'

export default function Galeria(){

    const tags = [... new Set(imagens.map((valor) => valor.tag))]
    const [filter, setFilter] =useState(imagens)
    var changeImg =(tag) => {
        var newImages = imagens.filter((e) =>{
            return e.tag === tag;
        })
        setFilter(newImages);
    }
    return(
        <div className="galeria">
            <h1>All my projects: </h1>
            <ul>
                {tags.map((e) => {return <li onClick={() => changeImg(e)}>{e}</li>})}
                <li onClick={() => setFilter(imagens)}>All</li>
            </ul>
            <div class="centralizar">
                <div className="images">
                    {filter.map((e)=> {
                        return <img src={e.imagem} alt="galery images" width={e.width} height={e.heigth}/>
                    })}
                </div>
            </div>
        </div>
    )
}