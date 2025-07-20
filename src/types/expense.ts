// types/expense.ts
export interface Expense {
  id: string;
  amount: number;
  description: string;
  categoryId: string;
  date: string;
  timestamp: Date;
}

export interface ExpenseFormData {
  amount: string;
  description: string;
  categoryId: string;
  date: string;
}

export type CreateExpenseRequest = Omit<Expense, 'id' | 'timestamp'>;
export type UpdateExpenseRequest = Partial<CreateExpenseRequest> & { id: string };