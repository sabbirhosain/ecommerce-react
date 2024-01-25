import { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import "./SelectDropdown.css"

const SelectDropdown = ({ data, placeholder }) => {

  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [selectItem, setSelectItem] = useState(placeholder)
  const [selectIndex, setSelectIndex] = useState(0);

  const openDropdown = () => { setOpenDropdown(!isOpenDropdown) };

  const closeDropdown = (index, categoryName) => {
    setSelectIndex(index);
    setOpenDropdown(false);
    setSelectItem(categoryName);
  };




  return (
    <div className="category_dropdown">
      <button onClick={openDropdown} className="dropdown_select_btn">{selectItem}<IoMdArrowDropdown className="category_icon" /></button>

      {
        isOpenDropdown === true &&
        <div div className="dropdown_box">
          <input type="search" className="dropdown_search_fild" placeholder="Search hear..." />
          <ul className="dropdown_item_list">
            {
              data.map((item, id) => {
                return (
                  <li onClick={() => closeDropdown(id, item)} className={`${selectIndex === id ? "active " : ""}dropwown_list`}>{item}</li>
                )
              })
            }
          </ul>
        </div>
      }
    </div >
  )
}

export default SelectDropdown