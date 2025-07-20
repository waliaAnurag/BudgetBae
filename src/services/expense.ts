// services/api/expenses.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Expense } from '../types/expense';

class ExpenseService {
  private storageKey = '@expenses';

  async getAll(): Promise<Expense[]> {
    try {
      const data = await AsyncStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      throw new Error('Failed to fetch expenses');
    }
  }

  async create(expense: Omit<Expense, 'id'>): Promise<Expense> {
    try {
      const expenses = await this.getAll();
      const newExpense = {
        ...expense,
        id: Date.now().toString(),
      };
      
      await AsyncStorage.setItem(
        this.storageKey,
        JSON.stringify([newExpense, ...expenses])
      );
      
      return newExpense;
    } catch (error) {
      throw new Error('Failed to create expense');
    }
  }
}

export const expenseService = new ExpenseService();