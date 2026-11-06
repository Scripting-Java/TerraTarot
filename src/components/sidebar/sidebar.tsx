import { useState } from "react";
import './sidebar.css'
import Statbar from "./Statbar"
import Shopbar from "./Shopbar"
import { ChartNoAxesColumn, ShoppingBag } from 'lucide-react'

function Sidebar(){
    const [tab, setTab] = useState<"stats"|"shop"|"none">("none")
    function toggle(panel:"stats"|"shop"){
        if(tab===panel)
            setTab("none")
        else
            setTab(panel)
    }
    return(
        <div className="sidebar">
            <button className="button" onClick={()=>toggle("stats")}><ChartNoAxesColumn size={24}></ChartNoAxesColumn></button>
            <button className="button" onClick ={()=>toggle("shop")}><ShoppingBag size={24}></ShoppingBag></button>
            {tab==="stats"&&<Statbar />}
            {tab==="shop"&&<Shopbar />}
        </div>
    )

}
export default Sidebar