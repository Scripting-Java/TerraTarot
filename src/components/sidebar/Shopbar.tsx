import './shopbar.css'
import { X } from 'lucide-react'
import pumpkin from "./../../assets/pumpkin.png"
import pumpkinPie from "./../../assets/ShopIcons/PumpkinPie.png"
import trick from "./../../assets/ShopIcons/TrickOrTreatBasket.png"
import reset from "./../../assets/ShopIcons/ResetRoll.png"
interface ShopBar {
    onClose: () => void,
}

function Shopbar({ onClose }: ShopBar) {
    return (
        <div className='shop'>
            <div className='topBar'>
                <button onClick={onClose}>
                    <X size={32}></X>
                </button>
                <h1>Shop</h1>
            </div>
            <div className="items">
                <div className='item'>
                    <details>
                        <summary className='itemName'>
                            <h2>Pumpkin Pie</h2>
                            <img className='iconImg' src={pumpkinPie}></img>
                        </summary>
                        <p>10% Extra Pumpkins</p>
                        <div className='cost'>
                            <p>Cost: 1500</p>
                            <img src={pumpkin}></img>
                        </div>
                    </details>
                    <button>Buy</button>
                </div>
                <div className="item">
                    <details>
                        <summary className='itemName'>
                            <h2>Trick or Treat Basket</h2>
                            <img className='iconImg' src={trick}></img>
                        </summary>
                        <p>15% Extra Pumpkins</p>
                        <div className='cost'>
                            <p>Cost: 2000</p>
                            <img src={pumpkin}></img>
                        </div>
                    </details>
                    <button>Buy</button>
                </div>
                <div className="item">
                    <details>
                        <summary className='itemName'>
                            <h2>Roll Reset</h2>
                            <img className='iconImg' src={reset}></img>
                        </summary>
                        <p>Reset your lifetime rolls</p>
                        <p>(Makes all rolls cheaper)</p>
                        <div className='cost'>
                            <p>Cost: 2500</p>
                            <img src={pumpkin}></img>
                        </div>
                    </details>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}
export default Shopbar