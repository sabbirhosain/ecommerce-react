import { TbLayoutGridAdd } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import "./Categories.css"

const Categories = () => {
  const categories = ["Computer", "Dasktop", "Laptop", "iPad", "Mobile"];

  return (
    <>
      <div className="categories_box">

        <div class="btn-group">
          <button type="button" class="dropdown-toggle categories_btn" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">All Categories &emsp;&emsp;&emsp; <TbLayoutGridAdd /></button>
          <ul class="dropdown-menu categories_dropdown shadow">
            {
              categories.map((item, index) => (
                <li key={index}>
                  <a class="dropdown-item categories_list" href="#"><FaComputer />&ensp;{item}</a>
                </li>
              ))
            }
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item categories_list d-flex align-items-center justify-content-between" href="#">Show More <span>+</span></a></li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Categories