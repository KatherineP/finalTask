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

    // if (res.data === null) {
    //   return [];
    // } else {
    //   return res.data.map(this._transformEvents);
    // }
  };

  // putEvent = async (eventId, eventObj) => {
  //   const result = await axios.put(
  //     `${this._apiBase}/${eventId}`,
  //     this._createDataObj(eventObj)
  //   );
  //   return this._transformEvent(result);
  // };
}

const glitch = new Glitch();

export default glitch;
