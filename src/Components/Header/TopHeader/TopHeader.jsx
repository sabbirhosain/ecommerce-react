import "./TopHeader.css"
import logo from "../../../assets/logo.svg"
import { IoSearchOutline } from "react-icons/io5";
import SelectDropdown from "./SelectDropdown/SelectDropdown";
import { useEffect, useState } from "react";
import axios from "axios";


const TopHeader = () => {
  // get category
  const [category, setCategory] = useState([
    "All Category", "Milks and Dairies", "Clothing & beauty", "Pet Foods & Toy", "Baking material", "Fresh Fruit", "Wines & Drinks", "Fresh Seafood", "Fast food", "Vegetables", "Bread and Juice"
  ]);

  // get country
  const countryList = [];
  const getCountry = async () => {
    try {
      const result = await axios.get("https://countriesnow.space/api/v0.1/countries");
      result.data.data.map((item, index) => {
        countryList.push(item.country)
      })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div className="top_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-2">
            <div className="logo"><img src={logo} alt="e-commerce logo" className="img-fluid" /></div>
          </div>

          <div className="col-md-6">
            <div className="search_box">
              <SelectDropdown data={category} placeholder={"All Category"} />
              <div className="search">
                <input type="search" className="search_fild" placeholder="Search Product..." />
                <IoSearchOutline className="search_icon" />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="acton_box">
              <SelectDropdown data={countryList} placeholder={"Select Country"} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopHeader