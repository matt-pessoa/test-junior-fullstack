import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Upload from '../components/Upload';

describe('Upload component', () => {
  it('Check title', async () => {
    render(<Upload />);

    const title = screen.getByTestId('u-1').textContent;
    expect(title).toBe('Seamless CSV Import');
  });

  it('Check subtitle', async () => {
    render(<Upload />);

    const subtitle = screen.getByTestId('u-2').textContent;
    expect(subtitle).toBe(
      `Say goodbye to the hassle of manual data entry. Our CSV import feature allows you to effortlessly upload your data with just a few clicks. Simply import your CSV file, and we'll take care of the rest.`
    );
  });

  it('displays the "Choose File" label', () => {
    render(<Upload />);
    const chooseFileLabel = screen.getByTestId('u-3');
    expect(chooseFileLabel.textContent).toBe('Choose File');
  });
});
