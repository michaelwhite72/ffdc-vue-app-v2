<template>
  <div id="app">
    <!-- header -->
    <header>
      <div class="container">
        <!-- nav -->
        <nav class="py-3 d-lg-flex">
          <div id="logo">
            <h1>
              <a href="index.html"
                ><span class="fa fa-university"></span> Faster Pay
              </a>
            </h1>
          </div>
          <label for="drop" class="toggle"
            ><span class="fa fa-bars"></span
          ></label>
          <input type="checkbox" id="drop" />
          <ul class="menu ml-auto mt-1">
            <li class=""><router-link to="/">Home</router-link></li>
            <li class="active"><router-link to="/About">About</router-link></li>
            <li class="active"><router-link to="/Services">Services</router-link></li>
            <li class="active"><router-link to="/Blog">Blog</router-link></li>
            <li class="active"><router-link to="/Contact">Contact</router-link></li>           
            <li class="last-grid"><router-link to="/Contact">Call Now</router-link></li>
          </ul>
        </nav>
        <!-- //nav -->
      </div>
    </header>
    <!-- //header -->

    <!-- inner-banner -->
    <section class="inner-banner" id="home">
      <div class="inner-layer">
        <div class="container"></div>
      </div>
    </section>
    <!-- //inner-banner -->
    
    <router-view />

    <!-- footer -->
    <footer class="footer py-5">
      <div class="container pt-lg-4">
        <div class="row">
          <div class="col-lg-3 col-sm-6 footer-top">
            <h4 class="mb-4 w3f_title">Contact Info</h4>
            <ul class="list-w3">
              <li>
                <span class="fa mr-1 fa-map-marker"></span>2130 Fulton Street,
                San Diego, CA 94117-1080 USA
              </li>
              <li class="my-2">
                <span class="fa mr-1 fa-phone"></span>1-600-1234-567
              </li>
              <li class="my-2">
                <span class="fa mr-1 fa-phone"></span>1-600-1234-567
              </li>
              <li class="">
                <span class="fa mr-1 fa-envelope"></span
                ><a href="mailto:info@example.com">info@example.com</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-6 footv3-left mt-sm-0 mt-4">
            <h4 class="mb-4 w3f_title">Share Holders</h4>
            <ul class="list-w3">
              <li class="my-2">
                <a href="#">
                  Shareholders Information
                </a>
              </li>
              <li class="mb-2">
                <a href="#">
                  Stock Information
                </a>
              </li>
              <li class="my-2">
                <a href="#">
                  Financial Results
                </a>
              </li>
              <li class="my-2">
                <a href="#">
                  Investors faq's
                </a>
              </li>
              <li>
                <a href="#">
                  Regulatory Section
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-4 mt-lg-0 mt-sm-5 mt-4">
            <h4 class="mb-4 w3f_title">Media Center</h4>
            <ul class="list-w3">
              <li class="my-2">
                <a href="#">
                  Press Release
                </a>
              </li>
              <li class="mb-2">
                <a href="#">
                  Vision & Values
                </a>
              </li>
              <li class="my-2">
                <a href="#">
                  Winning Awards
                </a>
              </li>
              <li class="my-2">
                <a href="#">
                  Banking
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-sm-4 mt-lg-0 mt-sm-5 mt-4">
            <h4 class="mb-4 w3f_title">Resources</h4>
            <ul class="list-w3">
              <li class="my-2">
                <a href="#">
                  24/7 Help Line
                </a>
              </li>
              <li class="mb-2">
                <a href="#">
                  Nearest Branch
                </a>
              </li>
              <li class="my-2">
                <a href="#">
                  Guidance
                </a>
              </li>
              <li class="my-2">
                <a href="#">
                  Download
                </a>
              </li>
              <li>
                <a href="#">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-sm-4 mt-lg-0 mt-sm-5 mt-4">
            <h4 class="mb-4 w3f_title">Other Links</h4>
            <ul class="list-w3">
              <li class="my-2">
                <a href="#">
                  Careers
                </a>
              </li>
              <li class="mb-2">
                <a href="#">
                  All faq's
                </a>
              </li>
              <li class="my-2">
                <a href="#">
                  Bank Group
                </a>
              </li>
              <li class="my-2">
                <a href="#">
                  Credit Cards
                </a>
              </li>
              <li class="my-2">
                <a href="#">
                  Loans
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- //footer bottom -->
    </footer>
    <!-- //footer -->

    <!-- middle -->
    <section class="middle py-4">
      <div class="container">
        <p>
          <strong class="mr-2">Our Offerings & Calculators:</strong> Transaction
          Banking, Cash Management and much more.
        </p>
        <p><strong class="mr-2">Bank Smart:</strong> Cardless transactions.</p>
      </div>
    </section>
    <!-- //middle -->

    <!-- copyright -->
    <section class="copy-right py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <p class="">
              © 2020 Faster Pay. All rights reserved | Design by
              <a href="#"> Guruprasad Wakhure.</a>
            </p>
          </div>
          <div class="col-lg-5 mt-lg-0 mt-3">
            <ul class="list-w3 d-sm-flex">
              <li>
                <a href="#">
                  Privicy Policy
                </a>
              </li>
              <li class="mx-sm-4 mx-3">
                <a href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#">
                  Disclaimer.
                </a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- //copyright -->

    <!-- move top -->
    <div class="move-top text-right">
      <a href="#home" class="move-top">
        <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span>
      </a>
    </div>
    <!-- move top -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
};
</script>
