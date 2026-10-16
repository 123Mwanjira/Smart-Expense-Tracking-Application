const express = require('express');
const router = express.Router();

// Mock persistence layer containing template dataset
let transactionsDatabase = [
  { id: 1, text: 'Monthly Salary', amount: 3500, category: 'Income', type: 'income', date: '2026-10-01' },
  { id: 2, text: 'Grocery Shopping', amount: 150, category: 'Food', type: 'expense', date: '2026-10-05' },
  { id: 3, text: 'Electric Bill', amount: 85, category: 'Utilities', type: 'expense', date: '2026-10-08' },
  { id: 4, text: 'Freelance Design', amount: 600, category: 'Income', type: 'income', date: '2026-10-12' },
  { id: 5, text: 'Movie Tickets', amount: 30, category: 'Entertainment', type: 'expense', date: '2026-10-14' },
];

// @route   GET /api/transactions
// @desc    Retrieve core financial transaction logs
router.get('/', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: transactionsDatabase.length,
      data: transactionsDatabase
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Database query execution failure'
    });
  }
});

module.exports = router;
