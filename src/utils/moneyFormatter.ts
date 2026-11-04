function formatMoney(num:number): string{
    return new Intl.NumberFormat('en-US', {
        notation:'compact',
        maximumFractionDigits:2,
        minimumFractionDigits:2
    }).format(num)
}
export default formatMoney