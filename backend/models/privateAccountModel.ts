import mongoose from 'mongoose';

const privateAccountSchema = new mongoose.Schema({
  account_id: String,
  user_id: String,
  account_type: String,
  account_name: String,
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
  recurring_payments: [
    {
      name: String,
      amount: Number,
      frequency: String,
      next_payment_date: String,
    }
  ],
  security: {
    twoFA_enabled: Boolean,
    trusted_devices: [String],
    session_timeout: Number,
  },
});

export default mongoose.model('PrivateAccount', privateAccountSchema);
