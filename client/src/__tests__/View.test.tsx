import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axios from 'axios';

import fetchData from '../utils/fetchData';

jest.mock('axios');

describe('View component', () => {
  it('fetchData', async () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Andrew' },
    ];

    (axios.get as jest.Mock).mockResolvedValue(users);

    const result = await fetchData();
    expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/api/users`);
    expect(result).toEqual(users);
  });

  it('fetchData with query', async () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Mike Johnson' },
    ];

    (axios.get as jest.Mock).mockResolvedValue(users);

    const query = 'john';

    const result = await fetchData(query);
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:3000/api/users/?q=${query}`
    );
    expect(result).toEqual(users);
  });
});
