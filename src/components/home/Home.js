import React from "react";
import { useLocation } from "react-router-dom";
import image from "./About.jpg";
import "./home.css";

const Home = () => {
  const location = useLocation();
  return (
    <div>
      {/* Hello {location.state.id} */}

      <div
        id="carouselExample"
        class="carousel slide"
        style={{
          marginTop: "1.5%",
          marginLeft: "20.5%",
          height: "500px",
          width: "950px",
        }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={image}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              }}
              class="d-block w-100"
              alt="HEH"
            />
          </div>
          <div class="carousel-item">
            <img
              //src="https://w0.peakpx.com/wallpaper/475/650/HD-wallpaper-3d-car-parts-car-repair-concepts-car-parts-sales-3d-generator-oil-filter-brake-pads-battery-shock-absorbers.jpg"
              src="https://w0.peakpx.com/wallpaper/782/289/HD-wallpaper-car-got-breakdown-artist-artwork-digital-art-deviantart.jpg"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              }}
              class="d-block w-100"
              alt="NO image"
            />
          </div>
          <div class="carousel-item">
            <img
              // src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              src="https://w0.peakpx.com/wallpaper/676/21/HD-wallpaper-car-repair-cars-tools-artwork-toolbox-mechanic.jpg"
              style={{
                marginLeft: "5%",
                maxHeight: "100%",
                maxWidth: "90%",
                objectFit: "cover",
              }}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://w0.peakpx.com/wallpaper/445/465/HD-wallpaper-car-repair.jpg"
              style={{
                marginLeft: "15%",
                maxHeight: "95%",
                maxWidth: "70%",
                objectFit: "cover",
              }}
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
