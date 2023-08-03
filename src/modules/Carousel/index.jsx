import "./Carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import preview from '../Galeria/preview.json'


export default function CarouselComponent(){
    return(
        <div className="centralizar">
        <section className="section_carousel">
            <h2>Featured projects:</h2>
            <div className="tamanhoCarousel">
                <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showStatus={false} showThumbs={false} renderIndicator={false}>
                    <div className="div_carousel">
                        <img src={preview[90].imgCompleta}/>
    
                    </div>
                    <div className="div_carousel">
                        <img src={preview[89].imgCompleta}/>
                    </div>
                    <div className="div_carousel">
                        <img src={preview[79].imgCompleta} />
                    </div>
                    <div className="div_carousel">
                        <img src={preview[74].imgCompleta} />
                    </div>
                    <div className="div_carousel">
                        <img src={preview[91].imgCompleta} />
                    </div>
                    <div className="div_carousel">
                        <img src={preview[88].imgCompleta} />
                    </div>
                </Carousel>
            </div>
        </section>
        </div>
    )
}