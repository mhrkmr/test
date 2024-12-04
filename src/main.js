import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = /*html*/ `
  <div class="sidebar">
   sidebar
  </div>
  <div class="main">
    <div class="head1">
      head
    </div>
    <div class="parts">
      parts
    </div>
    <div class="mid">
      mid
    </div>
    <div class="bottom_nav">
      navigate
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
