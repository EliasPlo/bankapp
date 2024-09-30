import { Request, Response } from 'express';
import PrivateAccount from '../models/privateAccountModel';
import BusinessAccount from '../models/businessAccountModel';

export const getPrivateAccount = async (req: Request, res: Response) => {
  try {
    const account = await PrivateAccount.findById(req.params.id);
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching private account' });
  }
};

export const getBusinessAccount = async (req: Request, res: Response) => {
  try {
    const account = await BusinessAccount.findById(req.params.id);
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business account' });
  }
};
