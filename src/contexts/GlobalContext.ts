import {createContext} from "react";
import { IGlobalContext } from "./types";

const GlobalContext = createContext({} as IGlobalContext);

export default GlobalContext;