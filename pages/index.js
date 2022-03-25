import Head from "next/head";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import TrendingStart from "../components/TrendingStart";
// import Hero from "../components/Hero";
// import ContentSection from "../components/ContentSection";
// import SponsoredNews from "../components/SponsoredNews";

// import styles from "../styles/Home.module.css";
// import Slider from "../components/Slider";
// import Posts from "../components/Posts";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* NAV */}
      <header class="navbar-light navbar-sticky header-static">
        <div class="navbar-top d-none d-lg-block small">
          <div class="container">
            <div class="d-md-flex justify-content-between align-items-center my-2">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link ps-0" href="about-us.html">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Forum
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://themes.getbootstrap.com/store/webestica/"
                  >
                    Buy now!
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="signin.html">
                    Login / Join
                  </a>
                </li>
              </ul>

              <div class="d-flex align-items-center">
                <div
                  class="btn-group me-2"
                  role="group"
                  aria-label="font size changer"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="fntradio"
                    id="font-sm"
                  />
                  <label
                    class="btn btn-xs btn-outline-primary mb-0"
                    for="font-sm"
                  >
                    A-
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="fntradio"
                    id="font-default"
                  />
                  <label
                    class="btn btn-xs btn-outline-primary mb-0"
                    for="font-default"
                  >
                    A
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="fntradio"
                    id="font-lg"
                  />
                  <label
                    class="btn btn-xs btn-outline-primary mb-0"
                    for="font-lg"
                  >
                    A+
                  </label>
                </div>

                <div class="modeswitch" id="darkModeSwitch">
                  <div class="switch"></div>
                </div>

                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link px-2 fs-5" href="#">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-2 fs-5" href="#">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-2 fs-5" href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-2 fs-5" href="#">
                      <i class="fab fa-youtube-square"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ps-2 pe-0 fs-5" href="#">
                      <i class="fab fa-vimeo"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="border-bottom border-2 border-primary opacity-1"></div>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <img
                class="navbar-brand-item light-mode-item"
                src="/images/logo.png"
                alt="logo"
                style={{ width: "76px", height: "71px", objectFit: "cover" }}
              />
              <img
                class="navbar-brand-item dark-mode-item"
                src="assets/images/logo-light.svg"
                alt="logo"
              />
            </a>

            {/* <!-- Responsive navbar toggler --> */}
            <button
              class="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="text-body h6 d-none d-sm-inline-block">Menu</span>
              <span class="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Main navbar START --> */}
            <div class="collapse navbar-collapse " id="navbarCollapse">
              <ul class="navbar-nav navbar-nav-scroll mx-auto">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle active"
                    href="#"
                    id="homeMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="homeMenu">
                    <li>
                      {" "}
                      <a class="dropdown-item active" href="index.html">
                        Home default
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        class="dropdown-item"
                        href="index-lazy.html"
                        // style={{ fontSize: "1.7rem" }}
                      >
                        Home lazy load
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="index-2.html">
                        Magazine classic
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="index-3.html">
                        Magazine
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="index-4.html">
                        Home cards
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="index-5.html">
                        Blog classic
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="index-6.html">
                        Blog Personal{" "}
                        <span class="badge bg-danger smaller me-1">New</span>{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="index-7.html">
                        Blog Vintage{" "}
                        <span class="badge bg-danger smaller me-1">New</span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="index-8.html">
                        Blog Tech{" "}
                        <span class="badge bg-danger smaller me-1">New</span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="index-9.html">
                        Blog Fashion{" "}
                        <span class="badge bg-danger smaller me-1">New</span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="index-10.html">
                        Blog Podcast{" "}
                        <span class="badge bg-danger smaller me-1">New</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="pagesMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="pagesMenu">
                    <li>
                      {" "}
                      <a class="dropdown-item" href="about-us.html">
                        About
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="contact-us.html">
                        Contact
                      </a>
                    </li>

                    <li class="dropdown-submenu dropend">
                      <a class="dropdown-item dropdown-toggle" href="#">
                        Other Archives
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a class="dropdown-item" href="author.html">
                            Author Page
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a class="dropdown-item" href="categories.html">
                            Category page 1
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a class="dropdown-item" href="categories-2.html">
                            Category page 2
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a class="dropdown-item" href="tag.html">
                            # tag
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a class="dropdown-item" href="search-result.html">
                            Search result
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="404.html">
                        Error 404
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="signin.html">
                        signin
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="signup.html">
                        signup
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="offline.html">
                        offline
                      </a>
                    </li>

                    <li class="dropdown-divider"></li>
                    <li class="dropdown-submenu dropend">
                      <a class="dropdown-item dropdown-toggle" href="#">
                        Dropdown levels
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li class="dropdown-submenu dropend">
                          <a class="dropdown-item dropdown-toggle" href="#">
                            Dropdown (end)
                          </a>
                          <ul class="dropdown-menu" data-bs-popper="none">
                            <li>
                              {" "}
                              <a class="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a class="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a class="dropdown-item" href="#">
                            Dropdown item
                          </a>{" "}
                        </li>

                        <li class="dropdown-submenu dropstart">
                          <a class="dropdown-item dropdown-toggle" href="#">
                            Dropdown (start)
                          </a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            data-bs-popper="none"
                          >
                            <li>
                              {" "}
                              <a class="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a class="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a class="dropdown-item" href="#">
                            Dropdown item
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://support.webestica.com/"
                        target="_blank"
                      >
                        <i class="text-warning fa-fw bi bi-life-preserver me-2"></i>
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="docs/index.html"
                        target="_blank"
                      >
                        <i class="text-danger fa-fw bi bi-card-text me-2"></i>
                        Documentation
                      </a>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://blogzine.webestica.com/rtl"
                        target="_blank"
                      >
                        <i class="text-info fa-fw bi bi-toggle-off me-2"></i>RTL
                        demo
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://themes.getbootstrap.com/store/webestica/"
                        target="_blank"
                      >
                        <i class="text-success fa-fw bi bi-cloud-download-fill me-2"></i>
                        Buy blogzine!
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="postMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Post
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="postMenu">
                    <li class="dropdown-submenu dropend">
                      <a class="dropdown-item dropdown-toggle" href="#">
                        Post grid
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a class="dropdown-item" href="post-grid.html">
                            Post grid
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a class="dropdown-item" href="post-grid-4-col.html">
                            Post grid 4 col
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            class="dropdown-item"
                            href="post-grid-masonry.html"
                          >
                            Post grid masonry
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            class="dropdown-item"
                            href="post-grid-masonry-filter.html"
                          >
                            Post grid masonry filter
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            class="dropdown-item"
                            href="post-large-and-grid.html"
                          >
                            Post mixed large than grid
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-list.html">
                        Post list
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-list-2.html">
                        Post list 2
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-cards.html">
                        Post card
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-overlay.html">
                        Post Overlay
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-types.html">
                        Post types{" "}
                        <span class="badge bg-danger smaller me-1">New</span>
                      </a>{" "}
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-single.html">
                        Post single magazine
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-single-2.html">
                        Post single classic
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-single-3.html">
                        Post single minimal
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-single-4.html">
                        Post single card
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-single-5.html">
                        Post single review
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="post-single-6.html">
                        Post single video
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="podcast-single.html">
                        Podcast single{" "}
                        <span class="badge bg-danger smaller me-1">New</span>{" "}
                      </a>{" "}
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                      {" "}
                      <a class="dropdown-item" href="pagination-styles.html">
                        Pagination styles
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown dropdown-fullwidth">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="megaMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    Lifestyle
                  </a>
                  <div class="dropdown-menu" aria-labelledby="megaMenu">
                    <div class="container">
                      <div class="row g-4 p-3 flex-fill">
                        <div class="col-sm-6 col-lg-3">
                          <div class="card bg-transparent">
                            <img
                              class="card-img rounded"
                              src="assets/images/1.jpg"
                              alt="Card image"
                            />
                            <div class="card-body px-0 pt-3">
                              <h6 class="card-title mb-0">
                                <a href="#" class="btn-link text-reset fw-bold">
                                  7 common mistakes everyone makes while
                                  traveling
                                </a>
                              </h6>

                              <ul class="nav nav-divider align-items-center text-uppercase small mt-2">
                                <li class="nav-item">
                                  <a href="#" class="text-reset btn-link">
                                    Joan Wallace
                                  </a>
                                </li>
                                <li class="nav-item">Feb 18, 2022</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                          <div class="card bg-transparent">
                            <img
                              class="card-img rounded"
                              src="/assets/images/news1.jpg"
                              alt="Card image"
                            />
                            <div class="card-body px-0 pt-3">
                              <h6 class="card-title mb-0">
                                <a href="#" class="btn-link text-reset fw-bold">
                                  12 worst types of business accounts you follow
                                  on Twitter
                                </a>
                              </h6>

                              <ul class="nav nav-divider align-items-center text-uppercase small mt-2">
                                <li class="nav-item">
                                  <a href="#" class="text-reset btn-link">
                                    Lori Stevens
                                  </a>
                                </li>
                                <li class="nav-item">Jun 03, 2022</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                          <div class="card bg-transparent">
                            <img
                              class="card-img rounded"
                              src="assets/images/blog/16by9/small/03.jpg"
                              alt="Card image"
                            />
                            <div class="card-body px-0 pt-3">
                              <h6 class="card-title mb-0">
                                <a href="#" class="btn-link text-reset fw-bold">
                                  Skills that you can learn from business
                                </a>
                              </h6>

                              <ul class="nav nav-divider align-items-center text-uppercase small mt-2">
                                <li class="nav-item">
                                  <a href="#" class="text-reset btn-link">
                                    Judy Nguyen
                                  </a>
                                </li>
                                <li class="nav-item">Sep 07, 2022</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                          <div class="bg-primary-soft p-4 text-center h-100 w-100 rounded">
                            <span>The Blogzine</span>
                            <h3>Premium Membership</h3>
                            <p>Become a Member Today!</p>
                            <a href="#" class="btn btn-warning">
                              View pricing plans
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="row px-3">
                        <div class="col-12">
                          <ul class="list-inline mt-3">
                            <li class="list-inline-item">Trending tags:</li>
                            <li class="list-inline-item">
                              <a href="#" class="btn btn-sm btn-primary-soft">
                                Travel
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="#" class="btn btn-sm btn-warning-soft">
                                Business
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="#" class="btn btn-sm btn-success-soft">
                                Tech
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="#" class="btn btn-sm btn-danger-soft">
                                Gadgets
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="#" class="btn btn-sm btn-info-soft">
                                Lifestyle
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="#" class="btn btn-sm btn-primary-soft">
                                Vaccine
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="#" class="btn btn-sm btn-success-soft">
                                Sports
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="#" class="btn btn-sm btn-danger-soft">
                                Covid-19
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="#" class="btn btn-sm btn-info-soft">
                                Politics
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <!-- Nav item 5 link--> */}
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="dashboard.html">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            <div class="nav flex-nowrap align-items-center">
              <div class="nav-item d-none d-md-block">
                <a href="#" class="btn btn-sm btn-danger mb-0 mx-2">
                  Subscribe!
                </a>
              </div>

              <div class="nav-item dropdown dropdown-toggle-icon-none nav-search">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  href="#"
                  id="navSearch"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-search fs-4"> </i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-end shadow rounded p-2"
                  aria-labelledby="navSearch"
                >
                  <form class="input-group">
                    <input
                      class="form-control border-success"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-success m-0" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>

              <div class="nav-item">
                <a
                  class="nav-link p-0"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasMenu"
                  role="button"
                  aria-controls="offcanvasMenu"
                >
                  <i
                    class="bi bi-text-right rtl-flip fs-2"
                    data-bs-target="#offcanvasMenu"
                  >
                    {" "}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Trending Start */}
      <main>
        <section class="py-2">
          <div class="container mt-5">
            <div class="row">
              <div
                class="col-md-12"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "10px",
                }}
              >
                <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-primary text-white  news">
                  <span class="d-flex align-items-center">&nbsp;Trending:</span>
                </div>
                <marquee
                  direction="left"
                  scrollamount="5"
                  loop="100"
                  style={{
                    backgroundColor: "#e8effd",
                  }}
                >
                  {" "}
                  <a href="#" className="breaking">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.{" "}
                  </a>{" "}
                  <span class="dot"></span>{" "}
                  <a href="#" className="breaking">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut{" "}
                  </a>{" "}
                  <span class="dot"></span>{" "}
                  <a href="#" className="breaking">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse{" "}
                  </a>{" "}
                </marquee>
              </div>
            </div>
          </div>
        </section>
        {/* HERO SECTION */}
        <section class="pt-4 pb-0 card-grid">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-6">
                <div
                  class="card card-overlay-bottom card-grid-lg card-bg-scale"
                  style={{
                    backgroundImage: "url(/images/1.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover",
                  }}
                >
                  <span class="card-featured" title="Featured post">
                    <i class="fas fa-star"></i>
                  </span>

                  <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                    <div class="w-100 mt-auto">
                      <a href="#" class="badge bg-danger mb-2">
                        <i class="fas fa-circle me-2 small fw-bold"></i>
                        Lifestyle
                      </a>

                      <h2 class="text-white h1">
                        <a
                          href="post-single-4.html"
                          class="btn-link stretched-link text-reset"
                          style={{ fontSize: "2.26rem" }}
                        >
                          Ten tell-tale signs you need to get a new startup.
                        </a>
                      </h2>
                      <p class="text-white">
                        No visited raising gravity outward subject my cottage Mr
                        be. Hold do at tore in park feet near my case.{" "}
                      </p>

                      <ul class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li class="nav-item">
                          <div class="nav-link">
                            <div class="d-flex align-items-center text-white position-relative">
                              <div class="avatar avatar-sm">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="/images/logo.png"
                                  alt="avatar"
                                />
                              </div>
                              <span class="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  class="stretched-link text-reset btn-link"
                                >
                                  Louis
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li class="nav-item">Nov 15, 2022</li>
                        <li class="nav-item">5 min read</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="row g-4">
                  <div class="col-12">
                    <div
                      class="card card-overlay-bottom card-grid-sm card-bg-scale"
                      style={{
                        backgroundImage: "url(/images/2.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                        <div class="w-100 mt-auto">
                          <a href="#" class="badge bg-warning mb-2">
                            <i class="fas fa-circle me-2 small fw-bold"></i>
                            Technology
                          </a>

                          <h4 class="text-white">
                            <a
                              href="post-single-4.html"
                              class="btn-link stretched-link text-reset"
                              style={{ fontSize: "1.5rem" }}
                            >
                              Best Pinterest boards for learning about business
                            </a>
                          </h4>

                          <ul class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li class="nav-item position-relative">
                              <div class="nav-link">
                                by{" "}
                                <a
                                  href="#"
                                  class="stretched-link text-reset btn-link"
                                >
                                  Bryan
                                </a>
                              </div>
                            </li>
                            <li class="nav-item">Aug 18, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div
                      class="card card-overlay-bottom card-grid-sm card-bg-scale"
                      style={{
                        backgroundImage: "url(/images/3.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                        <div class="w-100 mt-auto">
                          <a href="#" class="badge bg-success mb-2">
                            <i class="fas fa-circle me-2 small fw-bold"></i>
                            Business
                          </a>

                          <h4 class="text-white">
                            <a
                              href="post-single-4.html"
                              class="btn-link stretched-link text-reset"
                              style={{ fontSize: "1.5rem" }}
                            >
                              Five intermediate guide to business
                            </a>
                          </h4>

                          <ul class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li class="nav-item position-relative">
                              <div class="nav-link">
                                by{" "}
                                <a
                                  href="#"
                                  class="stretched-link text-reset btn-link"
                                >
                                  Joan
                                </a>
                              </div>
                            </li>
                            <li class="nav-item">Jun 03, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div
                      class="card card-overlay-bottom card-grid-sm card-bg-scale"
                      style={{
                        backgroundImage: "url(/images/5.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                        <div class="w-100 mt-auto">
                          <a href="#" class="badge bg-info mb-2">
                            <i class="fas fa-circle me-2 small fw-bold"></i>
                            Sports
                          </a>

                          <h4 class="text-white">
                            <a
                              href="post-single-4.html"
                              class="btn-link stretched-link text-reset"
                              style={{ fontSize: "1.5rem" }}
                            >
                              15 reasons to choose startup
                            </a>
                          </h4>

                          <ul class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li class="nav-item position-relative">
                              <div class="nav-link">
                                by{" "}
                                <a
                                  href="#"
                                  class="stretched-link text-reset btn-link"
                                >
                                  Amanda
                                </a>
                              </div>
                            </li>
                            <li class="nav-item">Jan 28, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONTENT SECTION */}
        <section class="position-relative">
          <div class="container" data-sticky-container>
            <div class="row">
              {/* <!-- Main Post START --> */}
              <div class="col-lg-9">
                {/* <!-- Title --> */}
                <div class="mb-4">
                  <h2 class="m-0">
                    <i class="bi bi-hourglass-top me-2"></i>Today's top
                    highlights
                  </h2>
                  <p>
                    Latest breaking news, pictures, videos, and special reports
                  </p>
                </div>
                <div class="row gy-4">
                  {/* <!-- Card item START --> */}
                  <div class="col-sm-6">
                    <div class="card">
                      {/* <!-- Card img --> */}
                      <div class="position-relative">
                        <img
                          class="card-img"
                          src="/images/6.jpg"
                          alt="Card image"
                        />
                        <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                          {/* <!-- Card overlay bottom --> */}
                          <div class="w-100 mt-auto">
                            {/* <!-- Card category --> */}
                            <a href="#" class="badge bg-warning mb-2">
                              <i class="fas fa-circle me-2 small fw-bold"></i>
                              Technology
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body px-0 pt-3">
                        <h4 class="card-title">
                          <a
                            href="post-single.html"
                            class="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            12 worst types of business accounts you follow on
                            Twitter
                          </a>
                        </h4>
                        <p class="card-text">
                          He moonlights difficult engrossed it, sportsmen.
                          Interested has all Devonshire difficulty gay
                          assistance joy. Unaffected at ye of compliment
                          alteration to
                        </p>
                        {/* <!-- Card info --> */}
                        <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li class="nav-item">
                            <div class="nav-link">
                              <div class="d-flex align-items-center position-relative">
                                <div class="avatar avatar-xs">
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="/images/7.jpg"
                                    alt="avatar"
                                  />
                                </div>
                                <span class="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    class="stretched-link text-reset btn-link"
                                  >
                                    Samuel
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="nav-item">Jan 22, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="card">
                      {/* <!-- Card img --> */}
                      <div class="position-relative">
                        <img
                          class="card-img"
                          src="/images/news1.jpg"
                          alt="Card image"
                        />
                        <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                          {/* <!-- Card overlay Top --> */}
                          <div class="w-100 mb-auto d-flex justify-content-end">
                            <div class="text-end ms-auto">
                              {/* <!-- Card format icon --> */}
                              <div
                                class="icon-md bg-white-soft bg-blur text-white rounded-circle"
                                title="This post has video"
                              >
                                <i class="fas fa-video"></i>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Card overlay bottom --> */}
                          <div class="w-100 mt-auto">
                            {/* <!-- Card category --> */}
                            <a href="#" class="badge bg-danger mb-2">
                              <i class="fas fa-circle me-2 small fw-bold"></i>
                              Travel
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body px-0 pt-3">
                        <h4 class="card-title">
                          <a
                            href="post-single.html"
                            class="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            Dirty little secrets about the business industry
                          </a>
                        </h4>
                        <p class="card-text">
                          Place voice no arises along to. Parlors waiting so
                          against me no. Wishing calling is warrant settled was
                          lucky. Express besides it present if at an opinion
                          visitor.
                        </p>
                        {/* <!-- Card info --> */}
                        <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li class="nav-item">
                            <div class="nav-link">
                              <div class="d-flex align-items-center position-relative">
                                <div class="avatar avatar-xs">
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="/images/logo.png"
                                    alt="avatar"
                                  />
                                </div>
                                <span class="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    class="stretched-link text-reset btn-link"
                                  >
                                    Dennis
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="nav-item">Mar 07, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="card">
                      {/* <!-- Card img --> */}
                      <div class="position-relative">
                        <img
                          class="card-img"
                          src="/images/news3.jpg"
                          alt="Card image"
                        />
                        <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                          {/* <!-- Card overlay bottom --> */}
                          <div class="w-100 mt-auto">
                            {/* <!-- Card category --> */}
                            <a href="#" class="badge bg-success mb-2">
                              <i class="fas fa-circle me-2 small fw-bold"></i>
                              Gadgets
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body px-0 pt-3">
                        <h4 class="card-title">
                          <a
                            href="post-single.html"
                            class="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            Bad habits that people in the industry need to quit
                          </a>
                        </h4>
                        <p class="card-text">
                          For who thoroughly her boy estimating conviction.
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected
                        </p>
                        {/* <!-- Card info --> */}
                        <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li class="nav-item">
                            <div class="nav-link">
                              <div class="d-flex align-items-center position-relative">
                                <div class="avatar avatar-xs">
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="/images/logo.png"
                                    alt="avatar"
                                  />
                                </div>
                                <span class="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    class="stretched-link text-reset btn-link"
                                  >
                                    Bryan
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="nav-item">Jun 17, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="card">
                      <div class="position-relative">
                        <img
                          class="card-img"
                          src="/images/news4.jpg"
                          alt="Card image"
                        />
                        <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                          {/* <!-- Card overlay bottom --> */}
                          <div class="w-100 mt-auto">
                            {/* <!-- Card category --> */}
                            <a href="#" class="badge bg-primary mb-2">
                              <i class="fas fa-circle me-2 small fw-bold"></i>
                              Sports
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body px-0 pt-3">
                        <h4 class="card-title">
                          <a
                            href="post-single.html"
                            class="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            Around the web: 20 fabulous infographics about
                            business
                          </a>
                        </h4>
                        <p class="card-text">
                          Projection favorable Mrs can be projecting own. Thirty
                          it matter enable become admire in giving. See resolved
                          goodness felicity shy civility domestic had but.
                        </p>
                        {/* <!-- Card info --> */}
                        <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li class="nav-item">
                            <div class="nav-link">
                              <div class="d-flex align-items-center position-relative">
                                <div class="avatar avatar-xs">
                                  <div class="avatar-img rounded-circle bg-success">
                                    <span class="text-white position-absolute top-50 start-50 translate-middle fw-bold small">
                                      SL
                                    </span>
                                  </div>
                                </div>
                                <span class="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    class="stretched-link text-reset btn-link"
                                  >
                                    Billy
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="nav-item">Dec 29, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
					<!-- Card item START --> */}
                  <div class="col-sm-6">
                    <div class="card">
                      {/* <!-- Card img --> */}
                      <div class="position-relative">
                        <img
                          class="card-img"
                          src="assets/images/blog/4by3/05.jpg"
                          alt="Card image"
                        />
                        <div class="card-image position-relative">
                          <img
                            class="card-img"
                            src="/images/5.jpg"
                            alt="Card image"
                          />
                          <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* <!-- Card overlay --> */}
                            <div class="w-100 my-auto">
                              {/* <!-- Audio START --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-body px-0 pt-3">
                        <h4 class="card-title">
                          <a
                            href="post-single.html"
                            class="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            7 common mistakes everyone makes while traveling
                          </a>
                        </h4>
                        <p class="card-text">
                          Drawings offended yet answered Jennings perceive
                          laughing six did far. Rooms oh fully taken by worse
                          do. Points afraid but may end law lasted.{" "}
                        </p>
                        {/* <!-- Card info --> */}
                        <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li class="nav-item">
                            <div class="nav-link">
                              <div class="d-flex align-items-center position-relative">
                                <div class="avatar avatar-xs">
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="/images/logo.png"
                                    alt="avatar"
                                  />
                                </div>
                                <span class="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    class="stretched-link text-reset btn-link"
                                  >
                                    Jacqueline
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="nav-item">Nov 11, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
					<!-- Card item START --> */}
                  <div class="col-sm-6">
                    <div class="card">
                      {/* <!-- Card img --> */}
                      <div class="position-relative">
                        <img
                          class="card-img"
                          src="/images/2.jpg"
                          alt="Card image"
                        />
                        <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                          {/* <!-- Card overlay bottom --> */}
                          <div class="w-100 mt-auto">
                            {/* <!-- Card category --> */}
                            <a href="#" class="badge bg-danger mb-2">
                              <i class="fas fa-circle me-2 small fw-bold"></i>
                              Photography
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body px-0 pt-3">
                        <h4 class="card-title">
                          <a
                            href="post-single.html"
                            class="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            5 investment doubts you should clarify
                          </a>
                        </h4>
                        <p class="card-text">
                          Was out laughter raptures returned outweigh. Luckily
                          cheered colonel I do we attack highest enabled. Tried
                          law yet style child. The bore of true of no be deal.
                        </p>
                        {/* <!-- Card info --> */}
                        <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li class="nav-item">
                            <div class="nav-link">
                              <div class="d-flex align-items-center position-relative">
                                <div class="avatar avatar-xs">
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="/images/1.jpg"
                                    alt="avatar"
                                  />
                                </div>
                                <span class="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    class="stretched-link text-reset btn-link"
                                  >
                                    Carolyn
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="nav-item">Sep 01, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
					<!-- Load more START --> */}
                  <div class="col-12 text-center mt-5">
                    <button type="button" class="btn btn-primary-soft">
                      Load more post{" "}
                      <i class="bi bi-arrow-down-circle ms-2 align-middle"></i>
                    </button>
                  </div>
                  {/* <!-- Load more END --> */}
                </div>
              </div>

              <div class="col-lg-3 mt-5 mt-lg-0">
                <div data-sticky data-margin-top="80" data-sticky-for="767">
                  {/* <!-- Social widget START --> */}
                  <div class="row g-2">
                    <div class="col-4">
                      <a
                        href="#"
                        class="bg-facebook rounded text-center text-white-force p-3 d-block"
                      >
                        <i class="fab fa-facebook-square fs-5 mb-2"></i>
                        <h6 class="m-0">1.5K</h6>
                        <span class="small">Fans</span>
                      </a>
                    </div>
                    <div class="col-4">
                      <a
                        href="#"
                        class="bg-instagram-gradient rounded text-center text-white-force p-3 d-block"
                      >
                        <i class="fab fa-instagram fs-5 mb-2"></i>
                        <h6 class="m-0">1.8M</h6>
                        <span class="small">Followers</span>
                      </a>
                    </div>
                    <div class="col-4">
                      <a
                        href="#"
                        class="bg-youtube rounded text-center text-white-force p-3 d-block"
                      >
                        <i class="fab fa-youtube-square fs-5 mb-2"></i>
                        <h6 class="m-0">22K</h6>
                        <span class="small">Subs</span>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Social widget END -->

					<!-- Trending topics widget START --> */}
                  <div>
                    <h4 class="mt-4 mb-3">Trending topics</h4>
                    {/* <!-- Category item --> */}
                    <div
                      class="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded bg-dark-overlay-4 "
                      style={{
                        backgroundImage: "url(/images/6.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="p-3">
                        <a
                          href="#"
                          class="stretched-link btn-link fw-bold text-white h5"
                        >
                          Travel
                        </a>
                      </div>
                    </div>
                    {/* <!-- Category item --> */}
                    <div
                      class="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                      style={{
                        backgroundImage: "url(/images/7.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="bg-dark-overlay-4 p-3">
                        <a
                          href="#"
                          class="stretched-link btn-link fw-bold text-white h5"
                        >
                          Business
                        </a>
                      </div>
                    </div>
                    {/* <!-- Category item --> */}
                    <div
                      class="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                      style={{
                        backgroundImage: "url(/images/3.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="bg-dark-overlay-4 p-3">
                        <a
                          href="#"
                          class="stretched-link btn-link fw-bold text-white h5"
                        >
                          Marketing
                        </a>
                      </div>
                    </div>
                    {/* <!-- Category item --> */}
                    <div
                      class="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                      style={{
                        backgroundImage: "url(/images/news1.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="bg-dark-overlay-4 p-3">
                        <a
                          href="#"
                          class="stretched-link btn-link fw-bold text-white h5"
                        >
                          Photography
                        </a>
                      </div>
                    </div>
                    {/* <!-- Category item --> */}
                    <div
                      class="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                      style={{
                        backgroundImage: "url(/images/news3.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div class="bg-dark-overlay-4 p-3">
                        <a
                          href="#"
                          class="stretched-link btn-link fw-bold text-white h5"
                        >
                          Sports
                        </a>
                      </div>
                    </div>
                    {/* <!-- View All Category button --> */}
                    <div class="text-center mt-3">
                      <a href="#" class="fw-bold text-body text-primary-hover">
                        <u>View all categories</u>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Trending topics widget END --> */}

                  <div class="row">
                    {/* <!-- Recent post widget START --> */}
                    <div class="col-12 col-sm-6 col-lg-12">
                      <h4 class="mt-4 mb-3">Recent post</h4>
                      {/* <!-- Recent post item --> */}
                      <div class="card mb-3">
                        <div class="row g-3">
                          <div class="col-4">
                            <img
                              class="rounded"
                              src="/images/news1.jpg"
                              alt=""
                            />
                          </div>
                          <div class="col-8">
                            <h6>
                              <a
                                href="post-single-2.html"
                                class="btn-link stretched-link text-reset fw-bold"
                              >
                                The pros and cons of business agency
                              </a>
                            </h6>
                            <div class="small mt-1">May 17, 2022</div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Recent post item --> */}
                      <div class="card mb-3">
                        <div class="row g-3">
                          <div class="col-4">
                            <img
                              class="rounded"
                              src="/images/news4.jpg"
                              alt=""
                            />
                          </div>
                          <div class="col-8">
                            <h6>
                              <a
                                href="post-single-2.html"
                                class="btn-link stretched-link text-reset fw-bold"
                              >
                                5 reasons why you shouldn't startup
                              </a>
                            </h6>
                            <div class="small mt-1">Apr 04, 2022</div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Recent post item --> */}
                      <div class="card mb-3">
                        <div class="row g-3">
                          <div class="col-4">
                            <img
                              class="rounded"
                              src="/images/news5.jpg"
                              alt=""
                            />
                          </div>
                          <div class="col-8">
                            <h6>
                              <a
                                href="post-single-2.html"
                                class="btn-link stretched-link text-reset fw-bold"
                              >
                                Ten questions you should answer truthfully.
                              </a>
                            </h6>
                            <div class="small mt-1">Jun 30, 2022</div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Recent post item --> */}
                      <div class="card mb-3">
                        <div class="row g-3">
                          <div class="col-4">
                            <img class="rounded" src="/images/6.jpg" alt="" />
                          </div>
                          <div class="col-8">
                            <h6>
                              <a
                                href="post-single-2.html"
                                class="btn-link stretched-link text-reset fw-bold"
                              >
                                Five unbelievable facts about money.
                              </a>
                            </h6>
                            <div class="small mt-1">Nov 29, 2022</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Recent post widget END -->

						<!-- ADV widget START --> */}
                    <div class="col-12 col-sm-6 col-lg-12 my-4">
                      <a href="#" class="d-block card-img-flash">
                        <img src="/images/ad.jpg" alt="" />
                      </a>
                      <div class="smaller text-end mt-2">
                        ads via{" "}
                        <a href="#" class="text-body">
                          <u>Bootstrap</u>
                        </a>
                      </div>
                    </div>
                    {/* <!-- ADV widget END --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Sidebar END --> */}
            </div>
          </div>
        </section>
        {/* Sponsored News */}
        <div class="container">
          <div class="border-bottom border-primary border-2 opacity-1"></div>
        </div>
        <section>
          <div class="container">
            <div className="row">
              <div className="col-md-12">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  infinite={true}
                  centerMode={true}
                >
                  {/* <!-- Card item START --> */}
                  <div class="card" style={{ width: "300px" }}>
                    {/* <!-- Card img --> */}
                    <div class="position-relative">
                      <img
                        class="card-img"
                        src="/images/7.jpg"
                        alt="Card image"
                        style={{
                          width: "274px",
                          height: "205px",
                          objectFit: "cover",
                        }}
                      />
                      <div class="card-img-overlay d-flex align-items-start flex-column ">
                        {/* <!-- Card overlay Top --> */}
                        <div class="w-100 mb-auto d-flex justify-content-end">
                          <div class="text-end ms-auto">
                            {/* <!-- Card format icon --> */}
                          </div>
                        </div>
                        {/* <!-- Card overlay bottom --> */}
                        <div class="w-100 mt-auto">
                          <a href="#" class="badge bg-info mb-2">
                            <i class="fas fa-circle me-2 small fw-bold"></i>
                            Marketing
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-0 pt-3">
                      <h5 class="card-title">
                        <a
                          href="post-single-3.html"
                          class="btn-link text-reset fw-bold"
                        >
                          7 common mistakes everyone makes while traveling
                        </a>
                      </h5>
                      {/* <!-- Card info --> */}
                      <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li class="nav-item">
                          <div class="nav-link">
                            <div class="d-flex align-items-center position-relative">
                              <div class="avatar avatar-xs">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="/images/logo.png"
                                  alt="avatar"
                                />
                              </div>
                              <span class="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  class="stretched-link text-reset btn-link"
                                >
                                  Lori
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li class="nav-item">Mar 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
						<!-- Card item START --> */}
                  <div class="card">
                    {/* <!-- Card img --> */}
                    <div class="position-relative">
                      <img
                        class="card-img"
                        src="/images/5.jpg"
                        alt="Card image"
                        style={{
                          width: "274px",
                          height: "205px",
                          objectFit: "cover",
                        }}
                      />
                      <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                        {/* <!-- Card overlay bottom --> */}
                        <div class="w-100 mt-auto">
                          <a href="#" class="badge bg-danger mb-2">
                            <i class="fas fa-circle me-2 small fw-bold"></i>
                            Sports
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-0 pt-3">
                      <h5 class="card-title">
                        <a
                          href="post-single-3.html"
                          class="btn-link text-reset fw-bold"
                        >
                          Skills that you can learn from business
                        </a>
                      </h5>
                      {/* <!-- Card info --> */}
                      <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li class="nav-item">
                          <div class="nav-link">
                            <div class="d-flex align-items-center position-relative">
                              <div class="avatar avatar-xs">
                                <div class="avatar-img rounded-circle bg-warning">
                                  <span class="text-dark position-absolute top-50 start-50 translate-middle fw-bold small">
                                    MK
                                  </span>
                                </div>
                              </div>
                              <span class="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  class="stretched-link text-reset btn-link"
                                >
                                  Joan
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li class="nav-item">Aug 15, 2022</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
						<!-- Card item START --> */}
                  <div class="card">
                    {/* <!-- Card img --> */}
                    <div class="position-relative">
                      <img
                        class="card-img"
                        src="/images/1.jpg"
                        alt="Card image"
                        style={{
                          width: "274px",
                          height: "205px",
                          objectFit: "cover",
                        }}
                      />
                      <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                        {/* <!-- Card overlay bottom --> */}
                        <div class="w-100 mt-auto">
                          <a href="#" class="badge bg-success mb-2">
                            <i class="fas fa-circle me-2 small fw-bold"></i>
                            Marketing
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-0 pt-3">
                      <h5 class="card-title">
                        <a
                          href="post-single-3.html"
                          class="btn-link text-reset fw-bold"
                        >
                          10 tell-tale signs you need to get a new business
                        </a>
                      </h5>
                      {/* <!-- Card info --> */}
                      <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li class="nav-item">
                          <div class="nav-link">
                            <div class="d-flex align-items-center position-relative">
                              <div class="avatar avatar-xs">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="/images/logo.png"
                                  alt="avatar"
                                />
                              </div>
                              <span class="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  class="stretched-link text-reset btn-link"
                                >
                                  Bryan
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li class="nav-item">Jun 01, 2022</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
						<!-- Card item START --> */}
                  <div class="card">
                    {/* <!-- Card img --> */}
                    <div class="position-relative">
                      <img
                        class="card-img"
                        src="/images/3.jpg"
                        alt="Card image"
                        style={{
                          width: "274px",
                          height: "205px",
                          objectFit: "cover",
                        }}
                      />
                      <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                        {/* <!-- Card overlay Top --> */}
                        <div class="w-100 mb-auto d-flex justify-content-end">
                          <div class="text-end ms-auto">
                            {/* <!-- Card format icon --> */}
                            <div
                              class="icon-md bg-white-soft bg-blur text-white rounded-circle"
                              title="This post has images"
                            >
                              <i class="fas fa-image"></i>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Card overlay bottom --> */}
                        <div class="w-100 mt-auto">
                          <a href="#" class="badge bg-primary mb-2">
                            <i class="fas fa-circle me-2 small fw-bold"></i>
                            Photography
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-0 pt-3">
                      <h5 class="card-title">
                        <a
                          href="post-single-3.html"
                          class="btn-link text-reset fw-bold"
                        >
                          This is why this year will be the year of startups
                        </a>
                      </h5>
                      {/* <!-- Card info --> */}
                      <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li class="nav-item">
                          <div class="nav-link">
                            <div class="d-flex align-items-center position-relative">
                              <div class="avatar avatar-xs">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="/images/logo.png"
                                  alt="avatar"
                                />
                              </div>
                              <span class="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  class="stretched-link text-reset btn-link"
                                >
                                  Samuel
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li class="nav-item">Dec 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
						<!-- Card item START --> */}
                  <div class="card">
                    {/* <!-- Card img --> */}
                    <div class="position-relative">
                      <img
                        class="card-img"
                        src="/images/news1.jpg"
                        alt="Card image"
                        style={{
                          width: "274px",
                          height: "205px",
                          objectFit: "cover",
                        }}
                      />
                      <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                        {/* <!-- Card overlay bottom --> */}
                        <div class="w-100 mt-auto">
                          <a href="#" class="badge bg-warning mb-2">
                            <i class="fas fa-circle me-2 small fw-bold"></i>
                            Technology
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-0 pt-3">
                      <h5 class="card-title">
                        <a
                          href="post-single-3.html"
                          class="btn-link text-reset fw-bold"
                        >
                          Best Pinterest Boards for learning about business
                        </a>
                      </h5>
                      {/* <!-- Card info --> */}
                      <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li class="nav-item">
                          <div class="nav-link">
                            <div class="d-flex align-items-center position-relative">
                              <div class="avatar avatar-xs">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="/images/logo.png"
                                  alt="avatar"
                                />
                              </div>
                              <span class="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  class="stretched-link text-reset btn-link"
                                >
                                  Dennis
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li class="nav-item">Sep 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="bg-dark pt-5">
        <div class="container">
          {/* <!-- About and Newsletter START --> */}
          <div class="row pt-3 pb-4">
            <div class="col-md-3">
              <img src="assets/images/logo-footer.svg" alt="footer logo" />
            </div>
            <div class="col-md-5">
              <p class="text-muted">
                The next-generation blog, news, and magazine theme for you to
                start sharing your stories today! This Bootstrap 5 based theme
                is ideal for all types of sites that deliver the news.
              </p>
            </div>
            <div class="col-md-4">
              {/* <!-- Form --> */}
              <form class="row row-cols-lg-auto g-2 align-items-center justify-content-end">
                <div class="col-12">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary m-0">
                    Subscribe
                  </button>
                </div>
                <div class="form-text mt-2">
                  By subscribing you agree to our
                  <a href="#" class="text-decoration-underline text-reset">
                    Privacy Policy
                  </a>
                </div>
              </form>
            </div>
          </div>

          <hr />

          {/* <!-- Widgets START --> */}
          <div class="row pt-5">
            {/* <!-- Footer Widget --> */}
            <div class="col-md-6 col-lg-3 mb-4">
              <h5 class="mb-4 text-white">Recent post</h5>
              {/* <!-- Item --> */}
              <div class="mb-4 position-relative">
                <div>
                  <a href="#" class="badge bg-danger mb-2">
                    <i class="fas fa-circle me-2 small fw-bold"></i>Business
                  </a>
                </div>
                <a
                  href="post-single-3.html"
                  class="btn-link text-white fw-normal"
                >
                  Up-coming business bloggers, you need to watch
                </a>
                <ul class="nav nav-divider align-items-center small mt-2 text-muted">
                  <li class="nav-item position-relative">
                    <div class="nav-link">
                      by{" "}
                      <a href="#" class="stretched-link text-reset btn-link">
                        Dennis
                      </a>
                    </div>
                  </li>
                  <li class="nav-item">Apr 06, 2022</li>
                </ul>
              </div>
              {/* <!-- Item --> */}
              <div class="mb-4 position-relative">
                <div>
                  <a href="#" class="badge bg-info mb-2">
                    <i class="fas fa-circle me-2 small fw-bold"></i>Marketing
                  </a>
                </div>
                <a
                  href="post-single-3.html"
                  class="btn-link text-white fw-normal"
                >
                  How did we get here? The history of the business told through
                  tweets
                </a>
                <ul class="nav nav-divider align-items-center small mt-2 text-muted">
                  <li class="nav-item position-relative">
                    <div class="nav-link">
                      by{" "}
                      <a href="#" class="stretched-link text-reset btn-link">
                        Larry
                      </a>
                    </div>
                  </li>
                  <li class="nav-item">May 29, 2022</li>
                </ul>
              </div>
            </div>

            {/* <!-- Footer Widget --> */}
            <div class="col-md-6 col-lg-3 mb-4">
              <h5 class="mb-4 text-white">Navigation</h5>
              <div class="row">
                <div class="col-6">
                  <ul class="nav flex-column text-primary-hover">
                    <li class="nav-item">
                      <a class="nav-link pt-0" href="#">
                        Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Style Guide
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Contact us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Get Theme
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Support
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Newsletter
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6">
                  <ul class="nav flex-column text-primary-hover">
                    <li class="nav-item">
                      <a class="nav-link pt-0" href="#">
                        News
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Career <span class="badge bg-danger ms-2">2 Job</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Technology
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Startups
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Gadgets
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Inspiration
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-3 mb-4">
              <h5 class="mb-4 text-white">Get Regular Updates</h5>
              <ul class="nav flex-column text-primary-hover">
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">
                    <i class="fab fa-whatsapp fa-fw me-2"></i>WhatsApp
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fab fa-youtube fa-fw me-2"></i>YouTube
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="far fa-bell fa-fw me-2"></i>Website Notifications
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="far fa-envelope fa-fw me-2"></i>Newsletters
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fas fa-headphones-alt fa-fw me-2"></i>Podcasts
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Footer Widget --> */}
            <div class="col-sm-6 col-lg-3 mb-4">
              <h5 class="mb-4 text-white">Our mobile App</h5>
              <p class="text-muted">
                Download our App and get the latest Breaking News Alerts and
                latest headlines and daily articles near you.
              </p>
              <div class="row g-2">
                <div class="col">
                  <a href="#">
                    <img
                      class="w-100"
                      src="assets/images/app-store.svg"
                      alt="app-store"
                    />
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <img
                      class="w-100"
                      src="assets/images/google-play.svg"
                      alt="google-play"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <h5 class="mb-2 text-white">Hot topics</h5>
            <ul class="list-inline text-primary-hover lh-lg">
              <li class="list-inline-item">
                <a href="#">Covid-19</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Politics</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Entertainment</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Media</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Royalist</a>
              </li>
              <li class="list-inline-item">
                <a href="#">World</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Half Full</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Scouted</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Travel</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Beast Inside</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Crossword</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Newsletters</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Podcasts</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Auction 2022</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Protests</a>
              </li>
              <li class="list-inline-item">
                <a href="#">NewsCyber</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Education</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Sports</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Tech And Auto</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Opinion</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Share Market</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-dark-overlay-3 mt-5">
          <div class="container">
            <div class="row align-items-center justify-content-md-between py-4">
              <div class="col-md-6">
                <div class="text-center text-md-start text-primary-hover text-muted">
                  ©2022{" "}
                  <a
                    href="https://www.webestica.com/"
                    class="text-reset btn-link"
                    target="_blank"
                  >
                    Webestica
                  </a>
                  . All rights reserved
                </div>
              </div>
              <div class="col-md-6 d-sm-flex align-items-center justify-content-center justify-content-md-end">
                <div class="dropup me-0 me-sm-3 mt-3 mt-md-0 text-center text-sm-end">
                  <a
                    class="dropdown-toggle text-primary-hover"
                    href="#"
                    role="button"
                    id="languageSwitcher"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English Edition
                  </a>
                  <ul
                    class="dropdown-menu min-w-auto"
                    aria-labelledby="languageSwitcher"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        German{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        French
                      </a>
                    </li>
                  </ul>
                </div>

                <ul class="nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Terms
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Privacy
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pe-0" href="#">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
{
  /* <section class="pt-4">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                {/* <!-- Title --> */
}
//         <div class="mb-4 d-md-flex justify-content-between align-items-center">
//           <h2 class="m-0">
//             <i class="bi bi-megaphone"></i> Sponsored news
//           </h2>
//         </div>

//           <Carousel
//             swipeable={false}
//             draggable={false}
//             showDots={true}
//             responsive={responsive}
//             ssr={true} // means to render carousel on server-side.
//             infinite={true}
//             // autoPlay={this.props.deviceType !== "mobile" ? true : false}
//             autoPlaySpeed={1000}
//             keyBoardControl={true}
//             customTransition="all .5"
//             transitionDuration={1000}
//             containerClass="carousel-container"
//             removeArrowOnDeviceType={["tablet", "mobile"]}
//             // deviceType={this.props.deviceType}
//             dotListClass="custom-dot-list-style"
//             itemClass="carousel-item-padding-40-px"
//           >
//             {/* <!-- Card item START --> */}
//             <div class="card">
//               {/* <!-- Card img --> */}
//               <div class="position-relative">
//                 <img
//                   class="card-img"
//                   src="/images/7.jpg"
//                   alt="Card image"
//                 />
//                 <div class="card-img-overlay d-flex align-items-start flex-column p-3">
//                   {/* <!-- Card overlay Top --> */}
//                   <div class="w-100 mb-auto d-flex justify-content-end">
//                     <div class="text-end ms-auto">
//                       {/* <!-- Card format icon --> */}
//                       <div
//                         class="icon-md bg-white-soft bg-blur text-white fw-bold rounded-circle"
//                         title="8.5 rating"
//                       >
//                         8.5
//                       </div>
//                     </div>
//                   </div>
//                   {/* <!-- Card overlay bottom --> */}
//                   <div class="w-100 mt-auto">
//                     <a href="#" class="badge bg-info mb-2">
//                       <i class="fas fa-circle me-2 small fw-bold"></i>
//                       Marketing
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div class="card-body px-0 pt-3">
//                 <h5 class="card-title">
//                   <a
//                     href="post-single-3.html"
//                     class="btn-link text-reset fw-bold"
//                   >
//                     7 common mistakes everyone makes while traveling
//                   </a>
//                 </h5>
//                 {/* <!-- Card info --> */}
//                 <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
//                   <li class="nav-item">
//                     <div class="nav-link">
//                       <div class="d-flex align-items-center position-relative">
//                         <div class="avatar avatar-xs">
//                           <img
//                             class="avatar-img rounded-circle"
//                             src="/images/logo.png"
//                             alt="avatar"
//                           />
//                         </div>
//                         <span class="ms-3">
//                           by{" "}
//                           <a
//                             href="#"
//                             class="stretched-link text-reset btn-link"
//                           >
//                             Lori
//                           </a>
//                         </span>
//                       </div>
//                     </div>
//                   </li>
//                   <li class="nav-item">Mar 07, 2022</li>
//                 </ul>
//               </div>
//             </div>
//             {/* <!-- Card item END -->
// 		<!-- Card item START --> */}
//             <div class="card">
//               {/* <!-- Card img --> */}
//               <div class="position-relative">
//                 <img
//                   class="card-img"
//                   src="/images/5.jpg"
//                   alt="Card image"
//                 />
//                 <div class="card-img-overlay d-flex align-items-start flex-column p-3">
//                   {/* <!-- Card overlay bottom --> */}
//                   <div class="w-100 mt-auto">
//                     <a href="#" class="badge bg-danger mb-2">
//                       <i class="fas fa-circle me-2 small fw-bold"></i>
//                       Sports
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div class="card-body px-0 pt-3">
//                 <h5 class="card-title">
//                   <a
//                     href="post-single-3.html"
//                     class="btn-link text-reset fw-bold"
//                   >
//                     Skills that you can learn from business
//                   </a>
//                 </h5>
//                 {/* <!-- Card info --> */}
//                 <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
//                   <li class="nav-item">
//                     <div class="nav-link">
//                       <div class="d-flex align-items-center position-relative">
//                         <div class="avatar avatar-xs">
//                           <div class="avatar-img rounded-circle bg-warning">
//                             <span class="text-dark position-absolute top-50 start-50 translate-middle fw-bold small">
//                               MK
//                             </span>
//                           </div>
//                         </div>
//                         <span class="ms-3">
//                           by{" "}
//                           <a
//                             href="#"
//                             class="stretched-link text-reset btn-link"
//                           >
//                             Joan
//                           </a>
//                         </span>
//                       </div>
//                     </div>
//                   </li>
//                   <li class="nav-item">Aug 15, 2022</li>
//                 </ul>
//               </div>
//             </div>
//             {/* <!-- Card item END -->
// 		<!-- Card item START --> */}
//             <div class="card">
//               {/* <!-- Card img --> */}
//               <div class="position-relative">
//                 <img
//                   class="card-img"
//                   src="/images/1.jpg"
//                   alt="Card image"
//                 />
//                 <div class="card-img-overlay d-flex align-items-start flex-column p-3">
//                   {/* <!-- Card overlay bottom --> */}
//                   <div class="w-100 mt-auto">
//                     <a href="#" class="badge bg-success mb-2">
//                       <i class="fas fa-circle me-2 small fw-bold"></i>
//                       Marketing
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div class="card-body px-0 pt-3">
//                 <h5 class="card-title">
//                   <a
//                     href="post-single-3.html"
//                     class="btn-link text-reset fw-bold"
//                   >
//                     10 tell-tale signs you need to get a new business
//                   </a>
//                 </h5>
//                 {/* <!-- Card info --> */}
//                 <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
//                   <li class="nav-item">
//                     <div class="nav-link">
//                       <div class="d-flex align-items-center position-relative">
//                         <div class="avatar avatar-xs">
//                           <img
//                             class="avatar-img rounded-circle"
//                             src="/images/logo.png"
//                             alt="avatar"
//                           />
//                         </div>
//                         <span class="ms-3">
//                           by{" "}
//                           <a
//                             href="#"
//                             class="stretched-link text-reset btn-link"
//                           >
//                             Bryan
//                           </a>
//                         </span>
//                       </div>
//                     </div>
//                   </li>
//                   <li class="nav-item">Jun 01, 2022</li>
//                 </ul>
//               </div>
//             </div>
//             {/* <!-- Card item END -->
// 		<!-- Card item START --> */}
//             <div class="card">
//               {/* <!-- Card img --> */}
//               <div class="position-relative">
//                 <img
//                   class="card-img"
//                   src="/images/3.jpg"
//                   alt="Card image"
//                 />
//                 <div class="card-img-overlay d-flex align-items-start flex-column p-3">
//                   {/* <!-- Card overlay Top --> */}
//                   <div class="w-100 mb-auto d-flex justify-content-end">
//                     <div class="text-end ms-auto">
//                       {/* <!-- Card format icon --> */}
//                       <div
//                         class="icon-md bg-white-soft bg-blur text-white rounded-circle"
//                         title="This post has images"
//                       >
//                         <i class="fas fa-image"></i>
//                       </div>
//                     </div>
//                   </div>
//                   {/* <!-- Card overlay bottom --> */}
//                   <div class="w-100 mt-auto">
//                     <a href="#" class="badge bg-primary mb-2">
//                       <i class="fas fa-circle me-2 small fw-bold"></i>
//                       Photography
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div class="card-body px-0 pt-3">
//                 <h5 class="card-title">
//                   <a
//                     href="post-single-3.html"
//                     class="btn-link text-reset fw-bold"
//                   >
//                     This is why this year will be the year of startups
//                   </a>
//                 </h5>
//                 {/* <!-- Card info --> */}
//                 <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
//                   <li class="nav-item">
//                     <div class="nav-link">
//                       <div class="d-flex align-items-center position-relative">
//                         <div class="avatar avatar-xs">
//                           <img
//                             class="avatar-img rounded-circle"
//                             src="/images/logo.png"
//                             alt="avatar"
//                           />
//                         </div>
//                         <span class="ms-3">
//                           by{" "}
//                           <a
//                             href="#"
//                             class="stretched-link text-reset btn-link"
//                           >
//                             Samuel
//                           </a>
//                         </span>
//                       </div>
//                     </div>
//                   </li>
//                   <li class="nav-item">Dec 07, 2022</li>
//                 </ul>
//               </div>
//             </div>
//             {/* <!-- Card item END -->
// 		<!-- Card item START --> */}
//             <div class="card">
//               {/* <!-- Card img --> */}
//               <div class="position-relative">
//                 <img
//                   class="card-img"
//                   src="/images/news1.jpg"
//                   alt="Card image"
//                 />
//                 <div class="card-img-overlay d-flex align-items-start flex-column p-3">
//                   {/* <!-- Card overlay bottom --> */}
//                   <div class="w-100 mt-auto">
//                     <a href="#" class="badge bg-warning mb-2">
//                       <i class="fas fa-circle me-2 small fw-bold"></i>
//                       Technology
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div class="card-body px-0 pt-3">
//                 <h5 class="card-title">
//                   <a
//                     href="post-single-3.html"
//                     class="btn-link text-reset fw-bold"
//                   >
//                     Best Pinterest Boards for learning about business
//                   </a>
//                 </h5>
//                 {/* <!-- Card info --> */}
//                 <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
//                   <li class="nav-item">
//                     <div class="nav-link">
//                       <div class="d-flex align-items-center position-relative">
//                         <div class="avatar avatar-xs">
//                           <img
//                             class="avatar-img rounded-circle"
//                             src="/images/logo.png"
//                             alt="avatar"
//                           />
//                         </div>
//                         <span class="ms-3">
//                           by{" "}
//                           <a
//                             href="#"
//                             class="stretched-link text-reset btn-link"
//                           >
//                             Dennis
//                           </a>
//                         </span>
//                       </div>
//                     </div>
//                   </li>
//                   <li class="nav-item">Sep 07, 2022</li>
//                 </ul>
//               </div>
//             </div>
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   </div>
// </section> */}
