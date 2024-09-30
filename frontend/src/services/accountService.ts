import axios from 'axios';

export const getPrivateAccount = async (id: string) => {
  try {
    const response = await axios.get(`/api/accounts/private/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching private account', error);
  }
};
