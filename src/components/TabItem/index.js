// Write your code here
import './index.css'

const TabItem = props => {
  const {tabListDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabListDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const isActiveItem = isActive ? 'active-tab-btn' : ''
  return (
    <li className="list-1">
      <button
        onClick={onClickTabItem}
        className={`button ${isActiveItem}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
