import axios from 'axios';

export default async function fetchData(query?: string) {
  if (query) {
    const result = await axios
      .get(`http://localhost:3000/api/users/?q=${query}`)
      .then((res) => {
        return res;
      })
      .catch((err) => err);

    return result;
  } else {
    const result = await axios
      .get('http://localhost:3000/api/users')
      .then((res) => {
        return res;
      })
      .catch((err) => err);

    return result;
  }
}
