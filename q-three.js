let items=[
    {
        name:"i phone 15",
        product:"Mobile",
        priceUSD:100,
       
    },
    {
        name:"mack book",
        product:"laptop",
        priceUSD:1000, 
       
    },
    {
        name:"apple watch",
        product:"Watch",
        priceUSD:10,  
    }
];

let exchangeINR=80;
function change(priceUSD)
{
    return priceUSD*exchangeINR;
}
const itemsInINR = items.map((item) => ({
    ...item,
    priceINR: change(item.priceUSD),
}));
console.log(itemsInINR);