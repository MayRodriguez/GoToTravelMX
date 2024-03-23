import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/banner-1.png";
import banner2 from "../../assets/banner-2.png";
import banner3 from "../../assets/banner-3.png";


function CarouselHeader() {
  return (
    <Carousel className='image-carousel-custom'>
      <Carousel.Item>
        <img src={banner1} className='image-carousel-custom'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner2} className='image-carousel-custom'/>
        <Carousel.Caption> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner3} className='image-carousel-custom'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;