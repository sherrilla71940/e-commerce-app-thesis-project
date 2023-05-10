const { Transaction } = require('../models/transactionsModel')

export const getAllTransactions = async (req, res) => {
  // console.log('testing');
  const allTransactions = await Transaction.findAll();
  console.log(allTransactions)
  res.json(allTransactions)
}

export const postOneTransaction = async (req, res) => {
  // console.log('testing transaction - POST')
  try {
    const oneTransaction = await Transaction.create(req.body);
    console.log(oneTransaction)
    res.json(oneTransaction)
  } catch (error) {
    console.log('post one transaction', error)
  }

}