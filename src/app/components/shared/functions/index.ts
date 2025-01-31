import axios from "axios";

export const getWalletDetails = async () => {
    try {
      const request = await axios.get("/api/ordered-wallet-types");
      return request;
    } catch (err) {
      throw err;
    }
  };