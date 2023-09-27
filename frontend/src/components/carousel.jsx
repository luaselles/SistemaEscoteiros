import Carousel from 'react-bootstrap/Carousel';
import robo from '../imagens/robo.png';
import fundo from '../imagens/fundo.png';
import cabana from '../imagens/cabana.png';
import '../estilos/carousel.css'


export function UncontrolledExample() {
    return (
        <div className="carousel">

            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={robo}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={fundo}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cabana}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default UncontrolledExample;