import * as flsFunctions from "./modules/functions.js";
import * as Mobile from "./modules/mobile.js";
import * as DynAda from "./dynamicAdapt/dynamicAdapt.js";
import * as Swiper from "./modules/slider/swiper.js";
import * as Particles from "./modules/particles.min.js";

flsFunctions.isWebp();
Mobile.isMobile();
DynAda.arrayDataDa();
Swiper.swiper();
Particles.count_particles();