import GeoContext from "../contexts/GeoContext";
import { useContext } from "react";

const useGeo = () => useContext(GeoContext);
export default useGeo;
