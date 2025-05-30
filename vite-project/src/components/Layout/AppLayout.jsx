import { Headers } from "../UI/Headers";
import { Footers } from "../UI/Footer";
import { Outlet } from "react-router-dom";

export const Applayout =()=>{
    return (
<>
<Headers />
   <Outlet /> 
<Footers />
</>
    )
};
