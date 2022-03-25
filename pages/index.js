import Head from "next/head";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      <header className="navbar-light navbar-sticky header-static">
        <div className="navbar-top d-none d-lg-block small">
          <div className="container">
            <div className="d-md-flex justify-content-between align-items-center my-2">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link ps-0" href="about-us.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Forum
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://themes.getbootstrap.com/store/webestica/"
                  >
                    Buy now!
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="signin.html">
                    Login / Join
                  </a>
                </li>
              </ul>

              <div className="d-flex align-items-center">
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="font size changer"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="fntradio"
                    id="font-sm"
                  />
                  <label
                    className="btn btn-xs btn-outline-primary mb-0"
                    htmlFor="font-sm"
                  >
                    A-
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="fntradio"
                    id="font-default"
                  />
                  <label
                    className="btn btn-xs btn-outline-primary mb-0"
                    htmlFor="font-default"
                  >
                    A
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="fntradio"
                    id="font-lg"
                  />
                  <label
                    className="btn btn-xs btn-outline-primary mb-0"
                    htmlFor="font-lg"
                  >
                    A+
                  </label>
                </div>

                <div className="modeswitch" id="darkModeSwitch">
                  <div className="switch"></div>
                </div>

                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link px-2 fs-5" href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-2 fs-5" href="#">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-2 fs-5" href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-2 fs-5" href="#">
                      <i className="fab fa-youtube-square"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-2 pe-0 fs-5" href="#">
                      <i className="fab fa-vimeo"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-bottom border-2 border-primary opacity-1"></div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img
                className="navbar-brand-item light-mode-item"
                src="/images/logo.png"
                alt="logo"
                style={{ width: "76px", height: "71px", objectFit: "cover" }}
              />
              <img
                className="navbar-brand-item dark-mode-item"
                src="assets/images/logo-light.svg"
                alt="logo"
              />
            </a>

            {/* <!-- Responsive navbar toggler --> */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-body h6 d-none d-sm-inline-block">
                Menu
              </span>
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Main navbar START --> */}
            <div className="collapse navbar-collapse " id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll mx-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#"
                    id="homeMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="homeMenu">
                    <li>
                      {" "}
                      <a className="dropdown-item active" href="index.html">
                        Home default
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="index-lazy.html"
                        // style={{ fontSize: "1.7rem" }}
                      >
                        Home lazy load
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-2.html">
                        Magazine classNameic
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-3.html">
                        Magazine
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-4.html">
                        Home cards
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-5.html">
                        Blog classNameic
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-6.html">
                        Blog Personal{" "}
                        <span className="badge bg-danger smaller me-1">
                          New
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-7.html">
                        Blog Vintage{" "}
                        <span className="badge bg-danger smaller me-1">
                          New
                        </span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-8.html">
                        Blog Tech{" "}
                        <span className="badge bg-danger smaller me-1">
                          New
                        </span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-9.html">
                        Blog Fashion{" "}
                        <span className="badge bg-danger smaller me-1">
                          New
                        </span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="index-10.html">
                        Blog Podcast{" "}
                        <span className="badge bg-danger smaller me-1">
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="pagesMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    <li>
                      {" "}
                      <a className="dropdown-item" href="about-us.html">
                        About
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="contact-us.html">
                        Contact
                      </a>
                    </li>

                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Other Archives
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a className="dropdown-item" href="author.html">
                            Author Page
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="categories.html">
                            Category page 1
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="categories-2.html">
                            Category page 2
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="tag.html">
                            # tag
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="search-result.html"
                          >
                            Search result
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="404.html">
                        Error 404
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="signin.html">
                        signin
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="signup.html">
                        signup
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="offline.html">
                        offline
                      </a>
                    </li>

                    <li className="dropdown-divider"></li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Dropdown levels
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li className="dropdown-submenu dropend">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Dropdown (end)
                          </a>
                          <ul className="dropdown-menu" data-bs-popper="none">
                            <li>
                              {" "}
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Dropdown item
                          </a>{" "}
                        </li>

                        <li className="dropdown-submenu dropstart">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Dropdown (start)
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            data-bs-popper="none"
                          >
                            <li>
                              {" "}
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="#">
                            Dropdown item
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://support.webestica.com/"
                      >
                        <i className="text-warning fa-fw bi bi-life-preserver me-2"></i>
                        Support
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="docs/index.html">
                        <i className="text-danger fa-fw bi bi-card-text me-2"></i>
                        Documentation
                      </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://blogzine.webestica.com/rtl"
                      >
                        <i className="text-info fa-fw bi bi-toggle-off me-2"></i>
                        RTL demo
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://themes.getbootstrap.com/store/webestica/"
                      >
                        <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>
                        Buy blogzine!
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="postMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Post
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="postMenu">
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Post grid
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li>
                          {" "}
                          <a className="dropdown-item" href="post-grid.html">
                            Post grid
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="post-grid-4-col.html"
                          >
                            Post grid 4 col
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="post-grid-masonry.html"
                          >
                            Post grid masonry
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="post-grid-masonry-filter.html"
                          >
                            Post grid masonry filter
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="post-large-and-grid.html"
                          >
                            Post mixed large than grid
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-list.html">
                        Post list
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-list-2.html">
                        Post list 2
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-cards.html">
                        Post card
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-overlay.html">
                        Post Overlay
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-types.html">
                        Post types{" "}
                        <span className="badge bg-danger smaller me-1">
                          New
                        </span>
                      </a>{" "}
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-single.html">
                        Post single magazine
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-single-2.html">
                        Post single classNameic
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-single-3.html">
                        Post single minimal
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-single-4.html">
                        Post single card
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-single-5.html">
                        Post single review
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="post-single-6.html">
                        Post single video
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="podcast-single.html">
                        Podcast single{" "}
                        <span className="badge bg-danger smaller me-1">
                          New
                        </span>{" "}
                      </a>{" "}
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="pagination-styles.html"
                      >
                        Pagination styles
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown dropdown-fullwidth">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="megaMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    Lifestyle
                  </a>
                  <div className="dropdown-menu" aria-labelledby="megaMenu">
                    <div className="container">
                      <div className="row g-4 p-3 flex-fill">
                        <div className="col-sm-6 col-lg-3">
                          <div className="card bg-transparent">
                            <img
                              className="card-img rounded"
                              src="assets/images/1.jpg"
                              alt="Card image"
                            />
                            <div className="card-body px-0 pt-3">
                              <h6 className="card-title mb-0">
                                <a
                                  href="#"
                                  className="btn-link text-reset fw-bold"
                                >
                                  7 common mistakes everyone makes while
                                  traveling
                                </a>
                              </h6>

                              <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                                <li className="nav-item">
                                  <a href="#" className="text-reset btn-link">
                                    Joan Wallace
                                  </a>
                                </li>
                                <li className="nav-item">Feb 18, 2022</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                          <div className="card bg-transparent">
                            <img
                              className="card-img rounded"
                              src="/assets/images/news1.jpg"
                              alt="Card image"
                            />
                            <div className="card-body px-0 pt-3">
                              <h6 className="card-title mb-0">
                                <a
                                  href="#"
                                  className="btn-link text-reset fw-bold"
                                >
                                  12 worst types of business accounts you follow
                                  on Twitter
                                </a>
                              </h6>

                              <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                                <li className="nav-item">
                                  <a href="#" className="text-reset btn-link">
                                    Lori Stevens
                                  </a>
                                </li>
                                <li className="nav-item">Jun 03, 2022</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                          <div className="card bg-transparent">
                            <img
                              className="card-img rounded"
                              src="assets/images/blog/16by9/small/03.jpg"
                              alt="Card image"
                            />
                            <div className="card-body px-0 pt-3">
                              <h6 className="card-title mb-0">
                                <a
                                  href="#"
                                  className="btn-link text-reset fw-bold"
                                >
                                  Skills that you can learn from business
                                </a>
                              </h6>

                              <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                                <li className="nav-item">
                                  <a href="#" className="text-reset btn-link">
                                    Judy Nguyen
                                  </a>
                                </li>
                                <li className="nav-item">Sep 07, 2022</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                          <div className="bg-primary-soft p-4 text-center h-100 w-100 rounded">
                            <span>The Blogzine</span>
                            <h3>Premium Membership</h3>
                            <p>Become a Member Today!</p>
                            <a href="#" className="btn btn-warning">
                              View pricing plans
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="row px-3">
                        <div className="col-12">
                          <ul className="list-inline mt-3">
                            <li className="list-inline-item">Trending tags:</li>
                            <li className="list-inline-item">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary-soft"
                              >
                                Travel
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="#"
                                className="btn btn-sm btn-warning-soft"
                              >
                                Business
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="#"
                                className="btn btn-sm btn-success-soft"
                              >
                                Tech
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="#"
                                className="btn btn-sm btn-danger-soft"
                              >
                                Gadgets
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="btn btn-sm btn-info-soft">
                                Lifestyle
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary-soft"
                              >
                                Vaccine
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="#"
                                className="btn btn-sm btn-success-soft"
                              >
                                Sports
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="#"
                                className="btn btn-sm btn-danger-soft"
                              >
                                Covid-19
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="btn btn-sm btn-info-soft">
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
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="dashboard.html">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav flex-nowrap align-items-center">
              <div className="nav-item d-none d-md-block">
                <a href="#" className="btn btn-sm btn-danger mb-0 mx-2">
                  Subscribe!
                </a>
              </div>

              <div className="nav-item dropdown dropdown-toggle-icon-none nav-search">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  href="#"
                  id="navSearch"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-search fs-4"> </i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end shadow rounded p-2"
                  aria-labelledby="navSearch"
                >
                  <form className="input-group">
                    <input
                      className="form-control border-success"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-success m-0" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>

              <div className="nav-item">
                <a
                  className="nav-link p-0"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasMenu"
                  role="button"
                  aria-controls="offcanvasMenu"
                >
                  <i
                    className="bi bi-text-right rtl-flip fs-2"
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
        <section className="py-2">
          <div className="container mt-5">
            <div className="row">
              <div
                className="col-md-12"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "10px",
                }}
              >
                <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-primary text-white  news">
                  <span className="d-flex align-items-center">
                    &nbsp;Trending:
                  </span>
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
                  <a href="#" classNameName="breaking">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.{" "}
                  </a>{" "}
                  <span className="dot"></span>{" "}
                  <a href="#" classNameName="breaking">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut{" "}
                  </a>{" "}
                  <span className="dot"></span>{" "}
                  <a href="#" classNameName="breaking">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse{" "}
                  </a>{" "}
                </marquee>
              </div>
            </div>
          </div>
        </section>
        {/* HERO SECTION */}
        <section className="pt-4 pb-0 card-grid">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div
                  className="card card-overlay-bottom card-grid-lg card-bg-scale"
                  style={{
                    backgroundImage: "url(/images/1.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover",
                  }}
                >
                  <span className="card-featured" title="Featured post">
                    <i className="fas fa-star"></i>
                  </span>

                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                    <div className="w-100 mt-auto">
                      <a href="#" className="badge bg-danger mb-2">
                        <i className="fas fa-circle me-2 small fw-bold"></i>
                        Lifestyle
                      </a>

                      <h2 className="text-white h1">
                        <a
                          href="post-single-4.html"
                          className="btn-link stretched-link text-reset"
                          style={{ fontSize: "2.26rem" }}
                        >
                          Ten tell-tale signs you need to get a new startup.
                        </a>
                      </h2>
                      <p className="text-white">
                        No visited raising gravity outward subject my cottage Mr
                        be. Hold do at tore in park feet near my case.{" "}
                      </p>

                      <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center text-white position-relative">
                              <div className="avatar avatar-sm">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/images/logo.png"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Louis
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Nov 15, 2022</li>
                        <li className="nav-item">5 min read</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div
                      className="card card-overlay-bottom card-grid-sm card-bg-scale"
                      style={{
                        backgroundImage: "url(/images/2.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                        <div className="w-100 mt-auto">
                          <a href="#" className="badge bg-warning mb-2">
                            <i className="fas fa-circle me-2 small fw-bold"></i>
                            Technology
                          </a>

                          <h4 className="text-white">
                            <a
                              href="post-single-4.html"
                              className="btn-link stretched-link text-reset"
                              style={{ fontSize: "1.5rem" }}
                            >
                              Best Pinterest boards for learning about business
                            </a>
                          </h4>

                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item position-relative">
                              <div className="nav-link">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Bryan
                                </a>
                              </div>
                            </li>
                            <li className="nav-item">Aug 18, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className="card card-overlay-bottom card-grid-sm card-bg-scale"
                      style={{
                        backgroundImage: "url(/images/3.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                        <div className="w-100 mt-auto">
                          <a href="#" className="badge bg-success mb-2">
                            <i className="fas fa-circle me-2 small fw-bold"></i>
                            Business
                          </a>

                          <h4 className="text-white">
                            <a
                              href="post-single-4.html"
                              className="btn-link stretched-link text-reset"
                              style={{ fontSize: "1.5rem" }}
                            >
                              Five intermediate guide to business
                            </a>
                          </h4>

                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item position-relative">
                              <div className="nav-link">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Joan
                                </a>
                              </div>
                            </li>
                            <li className="nav-item">Jun 03, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className="card card-overlay-bottom card-grid-sm card-bg-scale"
                      style={{
                        backgroundImage: "url(/images/5.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                        <div className="w-100 mt-auto">
                          <a href="#" className="badge bg-info mb-2">
                            <i className="fas fa-circle me-2 small fw-bold"></i>
                            Sports
                          </a>

                          <h4 className="text-white">
                            <a
                              href="post-single-4.html"
                              className="btn-link stretched-link text-reset"
                              style={{ fontSize: "1.5rem" }}
                            >
                              15 reasons to choose startup
                            </a>
                          </h4>

                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item position-relative">
                              <div className="nav-link">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Amanda
                                </a>
                              </div>
                            </li>
                            <li className="nav-item">Jan 28, 2022</li>
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
        <section className="position-relative">
          <div className="container" data-sticky-container>
            <div className="row">
              {/* <!-- Main Post START --> */}
              <div className="col-lg-9">
                {/* <!-- Title --> */}
                <div className="mb-4">
                  <h2 className="m-0">
                    <i className="bi bi-hourglass-top me-2"></i>Todays top
                    highlights
                  </h2>
                  <p>
                    Latest breaking news, pictures, videos, and special reports
                  </p>
                </div>
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="position-relative">
                        <img
                          className="card-img"
                          src="/images/6.jpg"
                          alt="Card image"
                        />
                        <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                          <div className="w-100 mt-auto">
                            <a href="#" className="badge bg-warning mb-2">
                              <i className="fas fa-circle me-2 small fw-bold"></i>
                              Technology
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body px-0 pt-3">
                        <h4 className="card-title">
                          <a
                            href="post-single.html"
                            className="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            12 worst types of business accounts you follow on
                            Twitter
                          </a>
                        </h4>
                        <p className="card-text">
                          He moonlights difficult engrossed it, sportsmen.
                          Interested has all Devonshire difficulty gay
                          assistance joy. Unaffected at ye of compliment
                          alteration to
                        </p>
                        {/* <!-- Card info --> */}
                        <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center position-relative">
                                <div className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="/images/7.jpg"
                                    alt="avatar"
                                  />
                                </div>
                                <span className="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    className="stretched-link text-reset btn-link"
                                  >
                                    Samuel
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">Jan 22, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card">
                      {/* <!-- Card img --> */}
                      <div className="position-relative">
                        <img
                          className="card-img"
                          src="/images/news1.jpg"
                          alt="Card image"
                        />
                        <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                          {/* <!-- Card overlay Top --> */}
                          <div className="w-100 mb-auto d-flex justify-content-end">
                            <div className="text-end ms-auto">
                              {/* <!-- Card htmlFormat icon --> */}
                              <div
                                className="icon-md bg-white-soft bg-blur text-white rounded-circle"
                                title="This post has video"
                              >
                                <i className="fas fa-video"></i>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Card overlay bottom --> */}
                          <div className="w-100 mt-auto">
                            {/* <!-- Card category --> */}
                            <a href="#" className="badge bg-danger mb-2">
                              <i className="fas fa-circle me-2 small fw-bold"></i>
                              Travel
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body px-0 pt-3">
                        <h4 className="card-title">
                          <a
                            href="post-single.html"
                            className="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            Dirty little secrets about the business industry
                          </a>
                        </h4>
                        <p className="card-text">
                          Place voice no arises along to. Parlors waiting so
                          against me no. Wishing calling is warrant settled was
                          lucky. Express besides it present if at an opinion
                          visitor.
                        </p>
                        {/* <!-- Card info --> */}
                        <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center position-relative">
                                <div className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="/images/logo.png"
                                    alt="avatar"
                                  />
                                </div>
                                <span className="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    className="stretched-link text-reset btn-link"
                                  >
                                    Dennis
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">Mar 07, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card">
                      {/* <!-- Card img --> */}
                      <div className="position-relative">
                        <img
                          className="card-img"
                          src="/images/news3.jpg"
                          alt="Card image"
                        />
                        <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                          {/* <!-- Card overlay bottom --> */}
                          <div className="w-100 mt-auto">
                            {/* <!-- Card category --> */}
                            <a href="#" className="badge bg-success mb-2">
                              <i className="fas fa-circle me-2 small fw-bold"></i>
                              Gadgets
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body px-0 pt-3">
                        <h4 className="card-title">
                          <a
                            href="post-single.html"
                            className="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            Bad habits that people in the industry need to quit
                          </a>
                        </h4>
                        <p className="card-text">
                          For who thoroughly her boy estimating conviction.
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected
                        </p>
                        {/* <!-- Card info --> */}
                        <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center position-relative">
                                <div className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="/images/logo.png"
                                    alt="avatar"
                                  />
                                </div>
                                <span className="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    className="stretched-link text-reset btn-link"
                                  >
                                    Bryan
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">Jun 17, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card">
                      <div className="position-relative">
                        <img
                          className="card-img"
                          src="/images/news4.jpg"
                          alt="Card image"
                        />
                        <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                          {/* <!-- Card overlay bottom --> */}
                          <div className="w-100 mt-auto">
                            {/* <!-- Card category --> */}
                            <a href="#" className="badge bg-primary mb-2">
                              <i className="fas fa-circle me-2 small fw-bold"></i>
                              Sports
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body px-0 pt-3">
                        <h4 className="card-title">
                          <a
                            href="post-single.html"
                            className="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            Around the web: 20 fabulous infographics about
                            business
                          </a>
                        </h4>
                        <p className="card-text">
                          Projection favorable Mrs can be projecting own. Thirty
                          it matter enable become admire in giving. See resolved
                          goodness felicity shy civility domestic had but.
                        </p>
                        {/* <!-- Card info --> */}
                        <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center position-relative">
                                <div className="avatar avatar-xs">
                                  <div className="avatar-img rounded-circle bg-success">
                                    <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold small">
                                      SL
                                    </span>
                                  </div>
                                </div>
                                <span className="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    className="stretched-link text-reset btn-link"
                                  >
                                    Billy
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">Dec 29, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
					<!-- Card item START --> */}
                  <div className="col-sm-6">
                    <div className="card">
                      {/* <!-- Card img --> */}
                      <div className="position-relative">
                        <img
                          className="card-img"
                          src="assets/images/blog/4by3/05.jpg"
                          alt="Card image"
                        />
                        <div className="card-image position-relative">
                          <img
                            className="card-img"
                            src="/images/5.jpg"
                            alt="Card image"
                          />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* <!-- Card overlay --> */}
                            <div className="w-100 my-auto">
                              {/* <!-- Audio START --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body px-0 pt-3">
                        <h4 className="card-title">
                          <a
                            href="post-single.html"
                            className="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            7 common mistakes everyone makes while traveling
                          </a>
                        </h4>
                        <p className="card-text">
                          Drawings offended yet answered Jennings perceive
                          laughing six did far. Rooms oh fully taken by worse
                          do. Points afraid but may end law lasted.{" "}
                        </p>
                        {/* <!-- Card info --> */}
                        <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center position-relative">
                                <div className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="/images/logo.png"
                                    alt="avatar"
                                  />
                                </div>
                                <span className="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    className="stretched-link text-reset btn-link"
                                  >
                                    Jacqueline
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">Nov 11, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
					<!-- Card item START --> */}
                  <div className="col-sm-6">
                    <div className="card">
                      {/* <!-- Card img --> */}
                      <div className="position-relative">
                        <img
                          className="card-img"
                          src="/images/2.jpg"
                          alt="Card image"
                        />
                        <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                          {/* <!-- Card overlay bottom --> */}
                          <div className="w-100 mt-auto">
                            {/* <!-- Card category --> */}
                            <a href="#" className="badge bg-danger mb-2">
                              <i className="fas fa-circle me-2 small fw-bold"></i>
                              Photography
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body px-0 pt-3">
                        <h4 className="card-title">
                          <a
                            href="post-single.html"
                            className="btn-link text-reset fw-bold"
                            style={{ fontSize: "1.5rem" }}
                          >
                            5 investment doubts you should clarify
                          </a>
                        </h4>
                        <p className="card-text">
                          Was out laughter raptures returned outweigh. Luckily
                          cheered colonel I do we attack highest enabled. Tried
                          law yet style child. The bore of true of no be deal.
                        </p>
                        {/* <!-- Card info --> */}
                        <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center position-relative">
                                <div className="avatar avatar-xs">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="/images/1.jpg"
                                    alt="avatar"
                                  />
                                </div>
                                <span className="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    className="stretched-link text-reset btn-link"
                                  >
                                    Carolyn
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">Sep 01, 2022</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
					<!-- Load more START --> */}
                  <div className="col-12 text-center mt-5">
                    <button type="button" className="btn btn-primary-soft">
                      Load more post{" "}
                      <i className="bi bi-arrow-down-circle ms-2 align-middle"></i>
                    </button>
                  </div>
                  {/* <!-- Load more END --> */}
                </div>
              </div>

              <div className="col-lg-3 mt-5 mt-lg-0">
                <div data-sticky data-margin-top="80" data-sticky-for="767">
                  {/* <!-- Social widget START --> */}
                  <div className="row g-2">
                    <div className="col-4">
                      <a
                        href="#"
                        className="bg-facebook rounded text-center text-white-force p-3 d-block"
                      >
                        <i className="fab fa-facebook-square fs-5 mb-2"></i>
                        <h6 className="m-0">1.5K</h6>
                        <span className="small">Fans</span>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        href="#"
                        className="bg-instagram-gradient rounded text-center text-white-force p-3 d-block"
                      >
                        <i className="fab fa-instagram fs-5 mb-2"></i>
                        <h6 className="m-0">1.8M</h6>
                        <span className="small">Followers</span>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        href="#"
                        className="bg-youtube rounded text-center text-white-force p-3 d-block"
                      >
                        <i className="fab fa-youtube-square fs-5 mb-2"></i>
                        <h6 className="m-0">22K</h6>
                        <span className="small">Subs</span>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Social widget END -->

					<!-- Trending topics widget START --> */}
                  <div>
                    <h4 className="mt-4 mb-3">Trending topics</h4>
                    {/* <!-- Category item --> */}
                    <div
                      className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded bg-dark-overlay-4 "
                      style={{
                        backgroundImage: "url(/images/6.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="p-3">
                        <a
                          href="#"
                          className="stretched-link btn-link fw-bold text-white h5"
                        >
                          Travel
                        </a>
                      </div>
                    </div>
                    {/* <!-- Category item --> */}
                    <div
                      className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                      style={{
                        backgroundImage: "url(/images/7.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="bg-dark-overlay-4 p-3">
                        <a
                          href="#"
                          className="stretched-link btn-link fw-bold text-white h5"
                        >
                          Business
                        </a>
                      </div>
                    </div>
                    {/* <!-- Category item --> */}
                    <div
                      className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                      style={{
                        backgroundImage: "url(/images/3.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="bg-dark-overlay-4 p-3">
                        <a
                          href="#"
                          className="stretched-link btn-link fw-bold text-white h5"
                        >
                          Marketing
                        </a>
                      </div>
                    </div>
                    {/* <!-- Category item --> */}
                    <div
                      className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                      style={{
                        backgroundImage: "url(/images/news1.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="bg-dark-overlay-4 p-3">
                        <a
                          href="#"
                          className="stretched-link btn-link fw-bold text-white h5"
                        >
                          Photography
                        </a>
                      </div>
                    </div>
                    {/* <!-- Category item --> */}
                    <div
                      className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                      style={{
                        backgroundImage: "url(/images/news3.jpg)",
                        backgroundPosition: "center left",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="bg-dark-overlay-4 p-3">
                        <a
                          href="#"
                          className="stretched-link btn-link fw-bold text-white h5"
                        >
                          Sports
                        </a>
                      </div>
                    </div>
                    {/* <!-- View All Category button --> */}
                    <div className="text-center mt-3">
                      <a
                        href="#"
                        className="fw-bold text-body text-primary-hover"
                      >
                        <u>View all categories</u>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Trending topics widget END --> */}

                  <div className="row">
                    {/* <!-- Recent post widget START --> */}
                    <div className="col-12 col-sm-6 col-lg-12">
                      <h4 className="mt-4 mb-3">Recent post</h4>
                      {/* <!-- Recent post item --> */}
                      <div className="card mb-3">
                        <div className="row g-3">
                          <div className="col-4">
                            <img
                              className="rounded"
                              src="/images/news1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="col-8">
                            <h6>
                              <a
                                href="post-single-2.html"
                                className="btn-link stretched-link text-reset fw-bold"
                              >
                                The pros and cons of business agency
                              </a>
                            </h6>
                            <div className="small mt-1">May 17, 2022</div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Recent post item --> */}
                      <div className="card mb-3">
                        <div className="row g-3">
                          <div className="col-4">
                            <img
                              className="rounded"
                              src="/images/news4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="col-8">
                            <h6>
                              <a
                                href="#"
                                className="btn-link stretched-link text-reset fw-bold"
                              >
                                5 reasons why you shouldnt startup
                              </a>
                            </h6>
                            <div className="small mt-1">Apr 04, 2022</div>
                          </div>
                        </div>
                      </div>

                      <div className="card mb-3">
                        <div className="row g-3">
                          <div className="col-4">
                            <img
                              className="rounded"
                              src="/images/news5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="col-8">
                            <h6>
                              <a
                                href="post-single-2.html"
                                className="btn-link stretched-link text-reset fw-bold"
                              >
                                Ten questions you should answer truthfully.
                              </a>
                            </h6>
                            <div className="small mt-1">Jun 30, 2022</div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Recent post item --> */}
                      <div className="card mb-3">
                        <div className="row g-3">
                          <div className="col-4">
                            <img
                              className="rounded"
                              src="/images/6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="col-8">
                            <h6>
                              <a
                                href="post-single-2.html"
                                className="btn-link stretched-link text-reset fw-bold"
                              >
                                Five unbelievable facts about money.
                              </a>
                            </h6>
                            <div className="small mt-1">Nov 29, 2022</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Recent post widget END -->

						<!-- ADV widget START --> */}
                    <div className="col-12 col-sm-6 col-lg-12 my-4">
                      <a href="#" className="d-block card-img-flash">
                        <img src="/images/ad.jpg" alt="" />
                      </a>
                      <div className="smaller text-end mt-2">
                        ads via{" "}
                        <a href="#" className="text-body">
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
        <div className="container">
          <div className="border-bottom border-primary border-2 opacity-1"></div>
        </div>
        <section>
          <div className="container">
            <div classNameName="row">
              <div classNameName="col-md-12">
                <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  infinite={true}
                  centerMode={true}
                >
                  {/* <!-- Card item START --> */}
                  <div className="card" style={{ width: "300px" }}>
                    {/* <!-- Card img --> */}
                    <div className="position-relative">
                      <img
                        className="card-img"
                        src="/images/7.jpg"
                        alt="Card image"
                        style={{
                          width: "274px",
                          height: "205px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-img-overlay d-flex align-items-start flex-column ">
                        {/* <!-- Card overlay Top --> */}
                        <div className="w-100 mb-auto d-flex justify-content-end">
                          <div className="text-end ms-auto">
                            {/* <!-- Card htmlFormat icon --> */}
                          </div>
                        </div>
                        {/* <!-- Card overlay bottom --> */}
                        <div className="w-100 mt-auto">
                          <a href="#" className="badge bg-info mb-2">
                            <i className="fas fa-circle me-2 small fw-bold"></i>
                            Marketing
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title">
                        <a
                          href="post-single-3.html"
                          className="btn-link text-reset fw-bold"
                        >
                          7 common mistakes everyone makes while traveling
                        </a>
                      </h5>
                      {/* <!-- Card info --> */}
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/images/logo.png"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Lori
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Mar 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
						<!-- Card item START --> */}
                  <div className="card">
                    {/* <!-- Card img --> */}
                    <div className="position-relative">
                      <img
                        className="card-img"
                        src="/images/5.jpg"
                        alt="Card image"
                        style={{
                          width: "274px",
                          height: "205px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        {/* <!-- Card overlay bottom --> */}
                        <div className="w-100 mt-auto">
                          <a href="#" className="badge bg-danger mb-2">
                            <i className="fas fa-circle me-2 small fw-bold"></i>
                            Sports
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title">
                        <a
                          href="post-single-3.html"
                          className="btn-link text-reset fw-bold"
                        >
                          Skills that you can learn from business
                        </a>
                      </h5>
                      {/* <!-- Card info --> */}
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-warning">
                                  <span className="text-dark position-absolute top-50 start-50 translate-middle fw-bold small">
                                    MK
                                  </span>
                                </div>
                              </div>
                              <span className="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Joan
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Aug 15, 2022</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
						<!-- Card item START --> */}
                  <div className="card">
                    {/* <!-- Card img --> */}
                    <div className="position-relative">
                      <img
                        className="card-img"
                        src="/images/1.jpg"
                        alt="Card image"
                        style={{
                          width: "274px",
                          height: "205px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        {/* <!-- Card overlay bottom --> */}
                        <div className="w-100 mt-auto">
                          <a href="#" className="badge bg-success mb-2">
                            <i className="fas fa-circle me-2 small fw-bold"></i>
                            Marketing
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title">
                        <a
                          href="post-single-3.html"
                          className="btn-link text-reset fw-bold"
                        >
                          10 tell-tale signs you need to get a new business
                        </a>
                      </h5>
                      {/* <!-- Card info --> */}
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/images/logo.png"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Bryan
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Jun 01, 2022</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
						<!-- Card item START --> */}
                  <div className="card">
                    {/* <!-- Card img --> */}
                    <div className="position-relative">
                      <img
                        className="card-img"
                        src="/images/3.jpg"
                        alt="Card image"
                        style={{
                          width: "274px",
                          height: "205px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        {/* <!-- Card overlay Top --> */}
                        <div className="w-100 mb-auto d-flex justify-content-end">
                          <div className="text-end ms-auto">
                            {/* <!-- Card htmlFormat icon --> */}
                            <div
                              className="icon-md bg-white-soft bg-blur text-white rounded-circle"
                              title="This post has images"
                            >
                              <i className="fas fa-image"></i>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Card overlay bottom --> */}
                        <div className="w-100 mt-auto">
                          <a href="#" className="badge bg-primary mb-2">
                            <i className="fas fa-circle me-2 small fw-bold"></i>
                            Photography
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title">
                        <a
                          href="post-single-3.html"
                          className="btn-link text-reset fw-bold"
                        >
                          This is why this year will be the year of startups
                        </a>
                      </h5>
                      {/* <!-- Card info --> */}
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/images/logo.png"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Samuel
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Dec 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Card item END -->
						<!-- Card item START --> */}
                  <div className="card">
                    {/* <!-- Card img --> */}
                    <div className="position-relative">
                      <img
                        className="card-img"
                        src="/images/news1.jpg"
                        alt="Card image"
                        style={{
                          width: "274px",
                          height: "205px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        {/* <!-- Card overlay bottom --> */}
                        <div className="w-100 mt-auto">
                          <a href="#" className="badge bg-warning mb-2">
                            <i className="fas fa-circle me-2 small fw-bold"></i>
                            Technology
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title">
                        <a
                          href="post-single-3.html"
                          className="btn-link text-reset fw-bold"
                        >
                          Best Pinterest Boards htmlFor learning about business
                        </a>
                      </h5>
                      {/* <!-- Card info --> */}
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/images/logo.png"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Dennis
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Sep 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-dark pt-5">
        <div className="container">
          {/* <!-- About and Newsletter START --> */}
          <div className="row pt-3 pb-4">
            <div className="col-md-3">
              <img src="assets/images/logo-footer.svg" alt="footer logo" />
            </div>
            <div className="col-md-5">
              <p className="text-muted">
                The next-generation blog, news, and magazine theme For you to
                start sharing your stories today! This Bootstrap 5 based theme
                is ideal For all types of sites that deliver the news.
              </p>
            </div>
            <div className="col-md-4">
              {/* <!-- htmlForm --> */}
              <form className="row row-cols-lg-auto g-2 align-items-center justify-content-end">
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary m-0">
                    Subscribe
                  </button>
                </div>
                <div className="form-text mt-2">
                  By subscribing you agree to our
                  <a href="#" className="text-decoration-underline text-reset">
                    Privacy Policy
                  </a>
                </div>
              </form>
            </div>
          </div>

          <hr />

          {/* <!-- Widgets START --> */}
          <div className="row pt-5">
            {/* <!-- Footer Widget --> */}
            <div className="col-md-6 col-lg-3 mb-4">
              <h5 className="mb-4 text-white">Recent post</h5>
              {/* <!-- Item --> */}
              <div className="mb-4 position-relative">
                <div>
                  <a href="#" className="badge bg-danger mb-2">
                    <i className="fas fa-circle me-2 small fw-bold"></i>Business
                  </a>
                </div>
                <a
                  href="post-single-3.html"
                  className="btn-link text-white fw-normal"
                >
                  Up-coming business bloggers, you need to watch
                </a>
                <ul className="nav nav-divider align-items-center small mt-2 text-muted">
                  <li className="nav-item position-relative">
                    <div className="nav-link">
                      by{" "}
                      <a
                        href="#"
                        className="stretched-link text-reset btn-link"
                      >
                        Dennis
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">Apr 06, 2022</li>
                </ul>
              </div>
              {/* <!-- Item --> */}
              <div className="mb-4 position-relative">
                <div>
                  <a href="#" className="badge bg-info mb-2">
                    <i className="fas fa-circle me-2 small fw-bold"></i>
                    Marketing
                  </a>
                </div>
                <a
                  href="post-single-3.html"
                  className="btn-link text-white fw-normal"
                >
                  How did we get here? The history of the business told through
                  tweets
                </a>
                <ul className="nav nav-divider align-items-center small mt-2 text-muted">
                  <li className="nav-item position-relative">
                    <div className="nav-link">
                      by{" "}
                      <a
                        href="#"
                        className="stretched-link text-reset btn-link"
                      >
                        Larry
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">May 29, 2022</li>
                </ul>
              </div>
            </div>

            {/* <!-- Footer Widget --> */}
            <div className="col-md-6 col-lg-3 mb-4">
              <h5 className="mb-4 text-white">Navigation</h5>
              <div className="row">
                <div className="col-6">
                  <ul className="nav flex-column text-primary-hover">
                    <li className="nav-item">
                      <a className="nav-link pt-0" href="#">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Style Guide
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Get Theme
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Support
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Newsletter
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="nav flex-column text-primary-hover">
                    <li className="nav-item">
                      <a className="nav-link pt-0" href="#">
                        News
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Career{" "}
                        <span className="badge bg-danger ms-2">2 Job</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Technology
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Startups
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Gadgets
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Inspiration
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 mb-4">
              <h5 className="mb-4 text-white">Get Regular Updates</h5>
              <ul className="nav flex-column text-primary-hover">
                <li className="nav-item">
                  <a className="nav-link pt-0" href="#">
                    <i className="fab fa-whatsapp fa-fw me-2"></i>WhatsApp
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fab fa-youtube fa-fw me-2"></i>YouTube
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="far fa-bell fa-fw me-2"></i>Website
                    Notifications
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="far fa-envelope fa-fw me-2"></i>Newsletters
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-headphones-alt fa-fw me-2"></i>Podcasts
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Footer Widget --> */}
            <div className="col-sm-6 col-lg-3 mb-4">
              <h5 className="mb-4 text-white">Our mobile App</h5>
              <p className="text-muted">
                Download our App and get the latest Breaking News Alerts and
                latest headlines and daily articles near you.
              </p>
              <div className="row g-2">
                <div className="col">
                  <a href="#">
                    <img
                      className="w-100"
                      src="assets/images/app-store.svg"
                      alt="app-store"
                    />
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <img
                      className="w-100"
                      src="assets/images/google-play.svg"
                      alt="google-play"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h5 className="mb-2 text-white">Hot topics</h5>
            <ul className="list-inline text-primary-hover lh-lg">
              <li className="list-inline-item">
                <a href="#">Covid-19</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Politics</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Entertainment</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Media</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Royalist</a>
              </li>
              <li className="list-inline-item">
                <a href="#">World</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Half Full</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Scouted</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Travel</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Beast Inside</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Crossword</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Newsletters</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Podcasts</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Auction 2022</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Protests</a>
              </li>
              <li className="list-inline-item">
                <a href="#">NewsCyber</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Education</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Sports</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Tech And Auto</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Opinion</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Share Market</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-dark-overlay-3 mt-5">
          <div className="container">
            <div className="row align-items-center justify-content-md-between py-4">
              <div className="col-md-6">
                <div className="text-center text-md-start text-primary-hover text-muted">
                  ©2022{" "}
                  <a
                    href="https://www.webestica.com/"
                    className="text-reset btn-link"
                  >
                    Webestica
                  </a>
                  . All rights reserved
                </div>
              </div>
              <div className="col-md-6 d-sm-flex align-items-center justify-content-center justify-content-md-end">
                <div className="dropup me-0 me-sm-3 mt-3 mt-md-0 text-center text-sm-end">
                  <a
                    className="dropdown-toggle text-primary-hover"
                    href="#"
                    role="button"
                    id="languageSwitcher"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English Edition
                  </a>
                  <ul
                    className="dropdown-menu min-w-auto"
                    aria-labelledby="languageSwitcher"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        German{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        French
                      </a>
                    </li>
                  </ul>
                </div>

                <ul className="nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Terms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Privacy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pe-0" href="#">
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
