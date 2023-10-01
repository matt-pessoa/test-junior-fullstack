import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ViewProps {
  fetchDataSwitch: boolean;
}

interface DataInterface {
  id: Number;
  name: String;
  city: String;
  country: String;
  favorite_sport: String;
}

function View(props: ViewProps) {
  const [fetchSwitch, setFetchSwitch] = useState(props.fetchDataSwitch);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, [props.fetchDataSwitch]);

  const fetchData = async (query?: string) => {
    if (query) {
      await axios
        .get(`http://localhost:3000/api/users/?q=${query}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.error(err));
    } else {
      await axios
        .get('http://localhost:3000/api/users')
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.error(err));
    }
  };

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    await fetchData(message);
  };

  return (
    <div className='data-display'>
      <form className='search-form'>
        <input
          id='message'
          name='message'
          onChange={handleChange}
          value={message}
          className='search-box'
          disabled={data.length === 0}
        />

        <button
          disabled={data.length === 0}
          onClick={(e) => {
            handleOnSubmit(e);
          }}
          className='search-btn'
        >
          SEARCH
        </button>
      </form>

      <section id='cards'>
        {data.map((info: any) => (
          <div className='card'>
            <h1>{info.name}</h1>
            <h2>
              {info.city}, {info.country}
            </h2>
            <p>{info.favorite_sport}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default View;
