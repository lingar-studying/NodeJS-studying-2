const { getEntity, updateEntity } = require("./dao");


module.exports = async function buyStocks(traderId, amount, stockId) {

    console.log("buy stocks ");
    
    //calculate the price
    const stock = await getEntity("stocks", stockId);

    const trader = await getEntity("traders", traderId);

    const price = stock.price * amount;

    // if(trader.balance - price < -50000){
    //     throw("Error cannot exceeds -50000");
    // }

    trader.balance -= price;
    const newPosition = {
        stock: stockId,
        amount: amount
    } 
    trader.position.push(newPosition);

   return updateEntity(trader, "traders" );
    
    
}

module.exports = function sellStocks(amount, stockId) {

    console.log("sell stocks");
    
}