import "./Carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imagens from '../Galeria/Images.json'


export default function CarouselComponent(){
    return(
        <div className="centralizar">
        <section class="section_carousel">
            <h2>Projetos de destaque:</h2>
            <Carousel autoPlay={true} infiniteLoop={true} interval={3000} dynamicHeight={true}>
                <div className="div_carousel">
                    <img src={imagens[0].imagem} />
                    
                </div>
                <div className="div_carousel">
                    <img src={imagens[1].imagem}/>
                   
                </div>
                <div className="div_carousel">
                    <img src={imagens[2].imagem} />
                    
                </div>
            </Carousel>
        </section>
        </div>
    )
}