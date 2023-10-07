import {
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./canvas";
import { lazy } from "react";

const Hero = lazy(() => import("./Hero"));
const Navbar = lazy(() => import("./Navbar"));
const About = lazy(() => import("./About"));
const Tech = lazy(() => import("./Tech"));
const Experience = lazy(() => import("./Experience"));
const Works = lazy(() => import("./Works"));
const Feedbacks = lazy(() => import("./Feedbacks"));
const Contact = lazy(() => import("./Contact"));
export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
};
