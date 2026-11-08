import './shopbar.css'
import { X } from 'lucide-react'
import pumpkinImg from "./../../assets/pumpkin.png"
import pumpkinPie from "./../../assets/ShopIcons/PumpkinPie.png"
import trick from "./../../assets/ShopIcons/TrickOrTreatBasket.png"
import resetImg from "./../../assets/ShopIcons/ResetRoll.png"
import formatMoney from '../../utils/moneyFormatter'
interface ShopBar {
    onClose: () => void,
    pumpkin: number,
    pie: boolean,
    basket: boolean,
    buyPie: () => void,
    buyBasket: () => void,
    reset: () => void,
}

function Shopbar({ onClose, pumpkin, pie, basket, buyPie, buyBasket, reset }: ShopBar) {
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
                            <img src={pumpkinImg}></img>
                        </div>
                    </details>
                    <button onClick={buyPie} disabled={pumpkin<1500||pie}>{pie? "Purchased":"Buy"}</button>
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
                            <img src={pumpkinImg}></img>
                        </div>
                    </details>
                    <button onClick={buyBasket} disabled={pumpkin<2000||basket}>{basket?"Purchased":"Buy"}</button>
                </div>
                <div className="item">
                    <details>
                        <summary className='itemName'>
                            <h2>Roll Reset</h2>
                            <img className='iconImg' src={resetImg}></img>
                        </summary>
                        <p>Reset your lifetime rolls</p>
                        <p>(Makes all rolls cheaper)</p>
                        <div className='cost'>
                            <p>Cost: 2500</p>
                            <img src={pumpkinImg}></img>
                        </div>
                    </details>
                    <button onClick={reset} disabled={pumpkin<2500}>{pumpkin<2500 ? `You need ${formatMoney(2500-pumpkin)} more pumpkins` : "Buy"}</button>
                </div>
            </div>
        </div>
    )
}
export default Shopbar