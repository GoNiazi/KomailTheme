import React from "react";
import Image from "next/image";
// import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <>
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
                src="assets/images/logo.png"
                alt="logo"
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
    </>
  );
};

export default Nav;