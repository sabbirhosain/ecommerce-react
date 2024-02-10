import VerticalProductCard from "../ProductCard/Vertical/VerticalProductCard"
import "./ProductFilter.css"


const ProductFilter = () => {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center justify-content-md-between pb-5'>
        <div className="d-none d-sm-block">Hello World</div>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">

          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">New Arrival</button>

          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Best Sellers</button>

          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Featured</button>

          <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Special Offer</button>
        </div>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
          </div>
        </div>

        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
          </div>
        </div>

        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
          </div>
        </div>

        <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><VerticalProductCard /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductFilter