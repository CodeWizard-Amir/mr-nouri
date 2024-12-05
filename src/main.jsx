import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import allRoutes from "./routes";
import "./assets/css/global-style.css";
import './assets/css/animate.min.css'
import './assets/css/backToTop.css'
import './assets/css/bootstrap.min.css'
import './assets/css/flaticon_gerold.css'
import './assets/css/font-awesome-pro.min.css'
import './assets/css/global-style.css'
import './assets/css/light-mode.css'
import './assets/css/magnific-popup.css'
import './assets/css/main.css'
import './assets/css/nice-select.css'
import './assets/css/odometer-theme-default.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/responsive.css'
import './assets/css/swiper.min.css'
createRoot(document.getElementById("root")).render(
<StrictMode> 
<RouterProvider router={allRoutes} />
</StrictMode>

);
