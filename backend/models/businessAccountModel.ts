import mongoose from 'mongoose';

const businessAccountSchema = new mongoose.Schema({
  account_id: String,
  business_id: String,
  business_name: String,
  account_type: String,
  balance: Number,
  currency: String,
  transactions: [
    {
      transaction_id: String,
      date: String,
      description: String,
      amount: Number,
      category: String,
    }
  ],
  invoices: [
    {
      invoice_id: String,
      issued_date: String,
      due_date: String,
      amount: Number,
      status: String,
    }
  ],
  payroll_management: {
    employees: [
      {
        employee_id: String,
        name: String,
        salary: Number,
        last_payment_date: String,
      }
    ]
  },
  security: {
    twoFA_enabled: Boolean,
    trusted_devices: [String],
    session_timeout: Number,
  },
});

export default mongoose.model('BusinessAccount', businessAccountSchema);
