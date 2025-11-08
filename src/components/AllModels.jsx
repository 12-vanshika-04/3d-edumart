import Modelheart from "../models/Heart";
import Section from "./Section";
import Gallery from "./Gallery";
import { Route } from "react-router-dom";
import Brain from "../models/Brain";
import SkyFromEarth from "../models/Earth";
import AdultEarModel from "../models/Ear";
import EyeAnatomy from "../models/Eye";
import LeafCrossSection from "../models/Leaf";
import PlantCell from "../models/Plantcell";
import WormholeBlackhole from "../models/Blackhole";
import InternalRootStructure from "../models/Root";
import SolarSystemAnimation from "../models/SolarSystem";

export const AllRoutes = (
    <>
  <Route path= "gallery" element={ < Gallery/> }/>,
  <Route path= "heart" element= {<Modelheart /> }/>,
  <Route path= "brain" element= {<Brain /> }/>,
  <Route path= "earth" element= {<SkyFromEarth /> }/>,
  <Route path= "ear" element= {<AdultEarModel/> }/>,
  <Route path= "eye" element= {<EyeAnatomy/> }/>,
  <Route path= "leaf" element= {<LeafCrossSection/> }/>,
  <Route path= "plantcell" element= {<PlantCell/> }/>,
  <Route path= "blackhole" element= {<WormholeBlackhole/> }/>,
  <Route path= "roots" element= {<InternalRootStructure/> }/>,
  <Route path= "solarsystem" element= {<SolarSystemAnimation/> }/>,


  {/* // add routes for other models here */}
  </>
);
