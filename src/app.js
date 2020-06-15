import 'bootstrap';
import "regenerator-runtime";
import "./assets/scss/style.scss";

import "./script/component/header-navigation.js"
import "./script/component/main-menu.js"
import "./script/component/side-menu.js"

import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);