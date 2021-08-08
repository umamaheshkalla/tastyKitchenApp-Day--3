import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import './index.css'

class CarouselImagesBlog extends Component {
  render() {
    const {images} = this.props
    return (
      <div style={{display: 'block', width: 800, padding: 30}}>
        <Carousel>
          {images.map(eachItem => (
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={eachItem.imageUrl}
                key={eachItem.id}
                alt={eachItem.id}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default CarouselImagesBlog
