import axios from "axios";

const url = "http://localhost:3001/api/articles";
const responseType = { responseType: "json" };

export default {
  articles: {
    find: async () => {
      try {
        const { data } = await axios.get(`${url}`, responseType);
        return data;
      } catch (error) {
        throw error;
      }
    },
    remove: async id => {
      try {
        const _remove = await axios.delete(`${url}/${id}`, responseType);
        return _remove;
      } catch (error) {
        throw error;
      }
    }
  }
};
