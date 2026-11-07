import './shopbar.css'
import { X } from 'lucide-react'
import pumpkin from "./../../assets/pumpkin.png"
import pumpkinPie from "./../../assets/ShopIcons/PumpkinPie.png"
interface ShopBar {
    onClose: () => void,
}

function Shopbar({ onClose }: ShopBar) {
    return (
        <div className='shop'>
            <button onClick={onClose}>
                <X size={32}></X>
            </button>

            <h1>Shop</h1>
            <div className="items">
                <div className='item'>
                    <details>
                        <summary className='itemName'>
                            <h2>Pumpkin Pie</h2>
                            <img className='iconImg' src={pumpkinPie}></img>
                        </summary>
                        <p>10% extra pumpkin production</p>
                        <div className='cost'>
                            <p>Cost: 1500</p>
                            <img src={pumpkin}></img>
                        </div>
                    </details>
                </div>
                <div className="item">
                    <details>
                        <summary className='itemName'>
                            <h2>Trick or Treat Basket</h2>
                        </summary>
                        <p>+15% Pumpkin Production</p>
                        <div className='cost'>
                            <p>Cost: 2000</p>
                            <img src={pumpkin}></img>
                        </div>
                    </details>
                </div>
                <div className="item">
                    <details>
                        <summary className='itemName'>
                            <h2>Roll Reset</h2>
                        </summary>
                        <p>Reset your lifetime rolls (Makes all rolls cheaper)</p>
                        <div className='cost'>
                            <p>Cost: 2500</p>
                            <img src={pumpkin}></img>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}
export default Shopbar