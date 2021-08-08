import {IoMdStar} from 'react-icons/io'

import './index.css'

const RestaurantItem = props => {
  const {restaurantItem} = props
  return (
    <div className="restaurant-card">
      <img
        alt={restaurantItem.id}
        className="restaurant-image"
        src={restaurantItem.imageUrl}
      />
      <ul className="restaurant-content">
        <li className="restaurant-name">{restaurantItem.name}</li>
        <li className="restaurant-cuisine">{restaurantItem.cuisine}</li>
        <div className="rating-block">
          <IoMdStar className="rating-icon" />
          <li className="restaurant-ratings">{restaurantItem.rating}</li>
          <li className="restaurant-total-ratings">
            ({restaurantItem.totalReviews} rating)
          </li>
        </div>
      </ul>
    </div>
  )
}

export default RestaurantItem
