/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];
  for (let i = 0; i < transactions.length; i++) {
    let k = 0;
    for (let j = 0; j < output.length; j++) {
      if (output[j]["category"] === transactions[i]["category"]) {
        k = 1;
        if(transactions[i]["totalSpent"] != undefined){
          output[j]["totalSpent"] += transactions[i]["totalSpent"];
        }
        else{
          output[j]["totalSpent"] += 0;
        }
        break;
      }
    }
    if (k == 0) {
      if(transactions[i]["totalSpent"] != undefined){
        output.push({
          category: transactions[i]["category"],
          totalSpent: transactions[i]["totalSpent"],
        });
      }
      else{
        output.push({
          category: transactions[i]["category"],
          totalSpent: 0,
        });
      }
    }
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
