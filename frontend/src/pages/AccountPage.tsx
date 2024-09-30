import React, { useEffect, useState } from 'react';
import { getPrivateAccount } from '../services/accountService';

const AccountPage: React.FC = () => {
  const [account, setAccount] = useState<any>(null);

  useEffect(() => {
    getPrivateAccount('1001').then(data => setAccount(data));
  }, []);

  return (
    <div>
      {account ? (
        <div>
          <h1>{account.account_name}</h1>
          <p>Balance: {account.balance} {account.currency}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AccountPage;
