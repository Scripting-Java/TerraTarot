import './sidebar.css'
import { ChartNoAxesColumn, ShoppingBag } from 'lucide-react'

interface Sidebar {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    setShop: React.Dispatch<React.SetStateAction<boolean>>,
}

function Sidebar({ setShow, setShop }: Sidebar) {
    return (
        <div className="sidebar">
            <button className="button" onClick={() => setShow(prev => !prev)}>
                <ChartNoAxesColumn size={24}></ChartNoAxesColumn>
            </button>
            <button className="button" onClick={() => setShop(prev=>!prev)}>
                <ShoppingBag size={24}></ShoppingBag>
            </button>
        </div>
    )

}
export default Sidebar