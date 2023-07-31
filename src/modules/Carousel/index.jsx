import "./Carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imagens from '../Galeria/Images.json'


export default function CarouselComponent(){
    return(
        <div className="centralizar">
        <section class="section_carousel">
            <h2>Projetos de destaque:</h2>
            <div className="tamanhoCarousel">
                <Carousel autoPlay={true} infiniteLoop={true} interval={3000} >
                    <div className="div_carousel">
                        <img src={imagens[0].imagem}/>
                        
                    </div>
                    <div className="div_carousel">
                        <img src={imagens[3].imagem}/>
                        
                    </div>
                    <div className="div_carousel">
                        <img src={imagens[4].imagem} />
                        
                    </div>
                </Carousel>
            </div>
        </section>
        </div>
    )
}