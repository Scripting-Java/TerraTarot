import { useState } from "react";
import './sidebar.css'
import Shopbar from "./Shopbar"
import { ChartNoAxesColumn, ShoppingBag } from 'lucide-react'

interface Sidebar{
    show:boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

function Sidebar({setShow}: Sidebar){
    const [tab, setTab] = useState<"stats"|"shop"|"none">("none")
    function toggle(panel:"stats"|"shop"){
        if(tab===panel)
            setTab("none")
        else
            setTab(panel)
    }
    return(
        <div className="sidebar">
            <button className="button" onClick={()=>setShow(prev=>!prev)}><ChartNoAxesColumn size={24}></ChartNoAxesColumn></button>
            <button className="button" onClick ={()=>toggle("shop")}><ShoppingBag size={24}></ShoppingBag></button>
            {tab==="shop"&&<Shopbar onClose={()=>setTab("none")}/>}
        </div>
    )

}
export default Sidebar