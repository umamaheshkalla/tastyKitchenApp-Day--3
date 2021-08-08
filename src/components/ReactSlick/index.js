import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

export default class ReactSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {images} = this.props
    return (
      <div className="container">
        <Slider {...settings}>
          {images.map(eachImage => (
            <div>
              <img
                alt={eachImage.id}
                className="carousel-images"
                src={eachImage.imageUrl}
              />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
