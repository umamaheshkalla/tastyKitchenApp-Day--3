import {FcFilledFilter} from 'react-icons/fc'

import './index.css'

const RestaurantsHeader = props => {
  const onChangeSortby = event => {
    const {changeSortby} = props
    changeSortby(event.target.value)
  }
  const {sortbyOptions, activeOptionId} = props

  return (
    <div>
      <div className="restaurants-container">
        <h1 className="restaurants-heading">Popular Restaurants</h1>
        <div className="sort-by-description">
          <p className="sub-heading">
            Select your favorite restaurant special dish and make your day
            happy.....
          </p>
          <div className="sort-by-container">
            <FcFilledFilter />
            <p className="sort-by">Sort by</p>
            <select
              className="sort-by-select"
              value={activeOptionId}
              onChange={onChangeSortby}
            >
              {sortbyOptions.map(eachOption => (
                <option
                  key={eachOption.optionId}
                  value={eachOption.optionId}
                  className="select-option"
                >
                  {eachOption.displayText}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default RestaurantsHeader
