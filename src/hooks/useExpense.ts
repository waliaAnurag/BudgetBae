// hooks/useExpenses.ts
import { useState } from 'react';
import { expenseService } from '../services/expense';
import type { Expense } from '../types/expense';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addExpense = async (expense: Omit<Expense, 'id'>) => {
    try {
      setLoading(true);
      const newExpense = await expenseService.create(expense);
      setExpenses(prev => [newExpense, ...prev]);
    } catch (err) {
      setError('Failed to add expense');
    } finally {
      setLoading(false);
    }
  };

  return {
    expenses,
    loading,
    error,
    addExpense,
    // ... other methods
  };
};