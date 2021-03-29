import axios from 'axios';
class Glitch {
  _apiBase = 'https://js-band-store-api.glitch.me';

  login = async (username) => {
    try {
      const result = await axios.post(`${this._apiBase}/signin`, {
        username: username,
      });
      if (result.status !== 200) {
        throw new Error(`Unable to login. Status code ${result.status}`);
      }
      return result.data;
    } catch (err) {
      throw new Error(`Unable to login. Status code ${err.response.status}`);
    }
  };

  getAllBooks = async (token) => {
    try {
      const result = await axios.get(`${this._apiBase}/books`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (result.status !== 200) {
        throw new Error(
          `Unable to load all books. Status code ${result.status}`
        );
      }
      return result.data;
    } catch (err) {
      throw new Error(
        `Unable to load all book. Status code ${err.response.status}`
      );
    }
  };

  loadBook = async (token, id) => {
    try {
      const result = await axios.get(`${this._apiBase}/books/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (result.status !== 200) {
        throw new Error(
          `Unable to load book details. Status code ${result.status}`
        );
      }
      return result.data;
    } catch (err) {
      throw new Error(
        `Unable to load book details. Status code ${err.response.status}`
      );
    }
  };

  postPurchase = async (token, books) => {
    try {
      const result = await axios.post(
        `${this._apiBase}/purchase`,
        {
          books: books,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (result.status !== 200) {
        throw new Error(
          `Unable to place an order. Status code ${result.status}`
        );
      }
      return result.data;
    } catch (err) {
      throw new Error(
        `Unable to place an order. Status code ${err.response.status}`
      );
    }
  };
}

const glitch = new Glitch();

export default glitch;
