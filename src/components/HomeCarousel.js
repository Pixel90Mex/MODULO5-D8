import Carousel from 'react-bootstrap/Carousel';
import { carouselItems } from '../data/carouselData'
import "../style/MyCarousel.css"

function HomeCarousel() {
    return (
        <Carousel fade>
            {
                carouselItems.map((item) => {
                    return (
                        /**
                         * key serve ad inserire l'id di ogni oggetto
                         * ad ogni giro prenderà gli attributi di ogni oggetto e li renderizzerà
                         */
                        <Carousel.Item key={item.id}>
                            <img
                                className="d-block w-100 object-fit-cover"
                                src={item.img}//scorrerà ad ogni ciclo
                                alt={item.title}
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

export default HomeCarousel;