const { Transaction } = require('../models/transactionsModel')

export const getAllTransactions = async (req, res) => {
  // console.log('testing');
  const allTransactions = await Transaction.findAll();
  console.log(allTransactions)
  res.json(allTransactions)
}

export const postOneTransaction = async (req, res) => {
  // console.log('testing transaction - POST')
  console.log(req.body)
  try {
    const oneTransaction = await Transaction.create(req.body);
    console.log(oneTransaction)
    res.json(oneTransaction)
  } catch (error) {
    console.log('post one transaction', error)
  }
}

export const findOneTransaction = async (req, res) => {
  // console.log('testing transaction - POST')
  // console.log(req.body)
  try {
    const oneTransaction = await Transaction.findOne({ where: { id: req.body.id } });
    console.log(oneTransaction)
    res.json(oneTransaction)
  } catch (error) {
    console.log('post one transaction', error)
  }
}

export const updateOneTransaction = async (req, res) => {
  // console.log('testing transaction - POST')
  console.log('testing update: ', req.body.id)
  try {
    const oneTransaction = await Transaction.update(
      {
        buyerId: 5
      },
      {
        where:
        {
          id: req.body.id
        },
        returning: true,
        plain: true
      });
    console.log(oneTransaction)
    res.json(oneTransaction)
  } catch (error) {
    console.log('post one transaction', error)
  }
}