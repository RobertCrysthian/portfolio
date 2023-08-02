import preview from './preview.json'
import './Galeria.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Galeria() {
    const navigate = useNavigate();

    const DescendingList = [...preview].sort((a, b) => b.id -a.id)

    const tags = [... new Set(DescendingList.map((valor) => valor.tag))]
    const [filter, setFilter] = useState(DescendingList)
    var changeImg = (tag) => {
        var newImages = DescendingList.filter((e) => {
            return e.tag === tag;
        })
        setFilter(newImages);

    }
    return (

        <div className="galeria">
            <h1>All my projects: </h1>
            <ul>
                {tags.map((e) => { return <li onClick={() => changeImg(e)}>{e}</li> })}
                <li onClick={() => setFilter(DescendingList)}>All</li>
            </ul>
            
            <div>
                <div className="images">
                    {filter.map((e) => {
                        return <img
                            id={e.id}
                            src={e.imagem}
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