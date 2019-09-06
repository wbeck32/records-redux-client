import req from 'superagent';
require('dotenv').config();
const API_URL = process.env.REACT_APP_API_URL;

export default {
  getRecords: async () => {
    const records = await req
      .get(`${API_URL}/api/records`);
    if (records.body.length > 0) return records.body;
    return null;
  }
};