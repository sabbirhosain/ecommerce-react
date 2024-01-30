// import "./HorizontalProductCard.css"
import image from "../../../assets/product_img1.jpg"

const HorizontalProductCard = () => {
  return (
    <>
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <div>
              <img src={image} class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem expedita labore nesciunt assumenda provident voluptatibus voluptatum, excepturi eveniet. Error optio quae nihil nulla voluptatem repellendus beatae a veniam corrupti.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default HorizontalProductCard