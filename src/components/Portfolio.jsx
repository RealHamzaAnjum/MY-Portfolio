import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="container">
        <h3>PORTFOLIO</h3>
        <h1>Each project is a unique piece of development</h1>

        <div className="all-projects">
          <div className="project">
            <div className="project-img">
              <a
                href="https://sam-store-tpnj.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="assets/ecommerce_dashboard.png"
                  alt="ecommerce and dashboard"
                />
              </a>
            </div>
            <div className="project-text">
              <h3>ECOMMERCE - ADMIN DASHBOARD</h3>
              <p className="project-desc">
                Ecommerce store allows users to create account, search, add to
                wishlist, add to cart, checkout with Stripe, and view order
                history. Dashboard allows admins to create & manage products,
                track orders, and view sales report.
              </p>
              <div className="project-stack">
                <p>Next JS</p>
                <p>React</p>
                <p>Clerk Auth</p>
                <p>MongoDB</p>
                <p>Stripe</p>
                <p>Tailwind CSS</p>
                <p>RESTful API</p>
              </div>
              <div className="project-links multi-links">
                <a
                  href="https://github.com/RealHamzaAnjum/sam"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Admin
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://github.com/RealHamzaAnjum/sam_store"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Store
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://sam-store-tpnj.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-reverse">
            <div className="project-text">
              <h3>AIRBNB - HOTEL BOOKING APP</h3>
              <p className="project-desc">
              StayBnB is a dynamic online platform designed to replicate the 
success of Airbnb, offering a seamless booking experience for travelers 
and property owners alike.
              </p>
              <div className="project-stack">
                <p>Next JS</p>
                <p>React</p>
                <p>Next Auth</p>
                <p>MongoDB</p>
                <p>Tailwind CSS</p>               
                <p>Cloudinary</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/RealHamzaAnjum/AIRBNB-PROJECT"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://staybnb-jet.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a
                href="https://staybnb-jet.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="assets/stay.png" alt="chat app" />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <a
                href="https://sam-flix-one.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="assets/flix.png" alt="movie website" />
              </a>
            </div>
            <div className="project-text">
              <h3>SAM FLIX - MOVIE WEBSITE</h3>
              <p className="project-desc">
                SAM FLIX allows user to create account, watch or search trending
                movies with various genres. User can see all detailed
                information of movies and add to their favorite list.
              </p>
              <div className="project-stack">
                <p>Next JS</p>
                <p>React</p>
                <p>Next Auth</p>
                <p>MongoDB</p>
                <p>Tailwind CSS</p>
                <p>RESTful API</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/RealHamzaAnjum/SamFlix"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://sam-flix-one.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-reverse">
            <div className="project-text">
              <h3>CAR HUB- Informative App </h3>
              <p className="project-desc">
                A real world Application which features almost every cars specifications and related data. An informative website covering all cars spec.
                 
              </p>
              <div className="project-stack">
                <p>Next JS</p>
                <p>Typecript</p>
                <p>React</p>
                <p>Rapid Api</p>
                <p>Tailwind css</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/RealHamzaAnjum/CARHUB"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://carhub-three-plum.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a
                href="https://carhub-three-plum.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="assets/car.png" alt="art-marketplace" />
              </a>
            </div>
          </div>

          <div className="project-reverse">
            <div className="project-text">
              <h3>FITFINITY GYM CENTER</h3>
              <p className="project-desc">
                A gym website is a comprehensive resource for fitness
                information, class schedules, membership options, and tools to
                help users achieve their fitness goals.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/RealHamzaAnjum/fitfinity"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://fitfinity-sigma.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="project-img">
              <a
                href="https://fitfinity-sigma.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="assets/gym.png" alt="fitfinity-gym-center" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
