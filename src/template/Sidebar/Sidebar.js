import React from 'react'
import { 
  MdArrowForwardIos,
  MdArrowBackIos,
  MdOutlineLocalDining,
  MdOutlineHotel,
  MdOutlineLocalBar,
  MdOutlineLocalCafe,
} from 'react-icons/md'
import './Sidebar.css'

let menuItems = [
  {icon: MdOutlineHotel, text: "Hotels"},
  {icon: MdOutlineLocalDining, text: "Dining"},
  {icon: MdOutlineLocalBar, text: "Bars"},
  {icon: MdOutlineLocalCafe, text: "Cafes"},
]

function Sidebar() {
  function SidebarMenuItem({icon, text, key}) {
    const Icon = icon
    return (
      <div className="sidebar_item" key={key}>
        <Icon className="sidebar_icon"/>
        {isOpen && <span className="sidebar_item_text">{text}</span>}
      </div>
    )
  }
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="sidebar_logo" onClick={toggleOpen}>
        {isOpen ? SidebarMenuItem({icon: MdArrowBackIos, text: "Marlin"}) : SidebarMenuItem({icon: MdArrowForwardIos})}
      </div>
      <hr/>
      <div className="sidebar_menu">
        {menuItems.map((item, index) => SidebarMenuItem({icon: item.icon, text: item.text, key: index}))}
      </div>
    </div>
  )
}

export default Sidebar