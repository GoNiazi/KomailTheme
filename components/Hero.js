import React from "react";

const Hero = () => {
  return (
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
                    <i class="fas fa-circle me-2 small fw-bold"></i>Lifestyle
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
                    No visited raising gravity outward subject my cottage Mr be.
                    Hold do at tore in park feet near my case.{" "}
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
                        <i class="fas fa-circle me-2 small fw-bold"></i>Business
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
                        <i class="fas fa-circle me-2 small fw-bold"></i>Sports
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
  );
};

export default Hero;
