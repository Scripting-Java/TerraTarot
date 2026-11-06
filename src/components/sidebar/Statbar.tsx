import './statbar.css'
function Statbar(){
    return(
        <div className='statbar'>
            <table>
                <thead>
                    <tr>
                    <th>Rarity</th>
                    <th>Chance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='common'><td>Common</td><td>65%</td></tr>
                    <tr className='uncommon'><td>Uncommon</td><td>25%</td></tr>
                    <tr className='rare'><td>Rare</td><td>8%</td></tr>
                    <tr className='epic'><td>Epic</td><td>1.5%</td></tr>
                    <tr className='legendary'><td>Legendary</td><td>0.5%</td></tr>
                </tbody>
            </table>
        </div>
    )
}
export default Statbar