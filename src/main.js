// import "./style.css";
import { setupCounter } from "./counter.js";


document.querySelector("#app").innerHTML = /*html*/ `
  <div class="head1">
    <h1 class="headline1"> Heading </h1>
  </div>
  <div class="main">
    <div id="sidebar" class="sidebar">
      Sidebar
    </div>
    <div class="content">
      <div class="top">
        <button id="side" class="side_button"><img src="/src/images/sidebar.svg" class="icon"></button>
        <div class="menu">
          <span>|</span>
          <a class="menu_element" href="/src/html_pages/form.html"> place 1 </a>
          <span>| |</span>
          <a class="menu_element" href="/src/html_pages/form-css.html"> place 2 </a>
          <span>| |</span>
          <a class="menu_element" href="https://google.com"> place 3 </a>
          <span>|</span>
        </div>
      </div>
      <div class="main_content">
        Content
      </div>
      <div class="bottom_nav">
        Navigate
      </div>
    </div>
  </div>

`;

const but = document.querySelector("#side");
const sde = document.querySelector("#sidebar");
but.onclick = function() {
  sde.classList.toggle("is-hidden");
}


setupCounter(document.querySelector("#counter"));
