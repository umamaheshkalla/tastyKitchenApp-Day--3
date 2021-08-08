import {Component} from 'react'
import {CgArrowLeftO, CgArrowRightO} from 'react-icons/cg'

import Cookies from 'js-cookie'
import RestaurantItem from '../RestaurantItem'
import RestaurantsHeader from '../RestaurantsHeader'

import './index.css'

const sortbyOptions = [
  {
    optionId: 'Medium',
    displayText: '',
  },
  {
    optionId: 'Highest',
    displayText: 'Highest',
  },
  {
    optionId: 'Lowest',
    displayText: 'Lowest',
  },
]

class AllRestaurants extends Component {
  state = {
    restaurantsData: [],
    activeOptionId: sortbyOptions[0].optionId,
    activePage: 1,
  }

  componentDidMount() {
    this.getAllRestaurants()
  }

  getAllRestaurants = async () => {
    const {activeOptionId} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const {activePage} = this.state
    const limit = 9
    const offset = (activePage - 1) * limit
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${activeOptionId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.restaurants.map(eachItem => ({
      costForTwo: eachItem.cost_for_two,
      cuisine: eachItem.cuisine,
      groupByTime: eachItem.group_by_time,
      hasOnlineDelivery: eachItem.has_online_delivery,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      isDeliveringNow: eachItem.is_delivering_now,
      location: eachItem.location,
      menuType: eachItem.menu_type,
      name: eachItem.name,
      opensAt: eachItem.opens_at,
      rating: eachItem.user_rating.rating,
      ratingColor: eachItem.user_rating.rating_color,
      ratingText: eachItem.user_rating.rating_text,
      totalReviews: eachItem.user_rating.total_reviews,
    }))
    console.log(updatedData)
    this.setState({restaurantsData: updatedData})
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getAllRestaurants)
  }

  onIncrement = () => {
    const {activePage} = this.state
    if (activePage < 20) {
      this.setState(
        prevState => ({activePage: prevState.activePage + 1}),
        this.getAllRestaurants,
      )
    }
  }

  onDecrement = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({activePage: prevState.activePage - 1}),
        this.getAllRestaurants,
      )
    }
  }

  render() {
    const {restaurantsData, activeOptionId, activePage} = this.state

    return (
      <>
        <RestaurantsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <div className="all-restaurants-container">
          {restaurantsData.map(eachRestaurant => (
            <RestaurantItem
              restaurantItem={eachRestaurant}
              key={eachRestaurant.id}
            />
          ))}
        </div>
        <div className="active-page-block">
          <button
            className="page-buttons"
            type="button"
            onClick={this.onDecrement}
          >
            <CgArrowLeftO />
          </button>
          <p className="active-page">{activePage} of 20</p>
          <button
            onClick={this.onIncrement}
            className="page-buttons"
            type="button"
          >
            <CgArrowRightO />
          </button>
        </div>
      </>
    )
  }
}

export default AllRestaurants
