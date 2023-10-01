import React, { useState } from 'react';
import axios from 'axios';
import View from './View';

function Upload() {
  const [file, setFile] = useState();
  const [fetchDataSwitch, setFetchDataSwitch] = useState(false);

  const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('http://localhost:3000/api/files', formData)
      .then((res) => {
        setFetchDataSwitch(true);
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    if (file) {
      await uploadFile(file);
    }
  };

  return (
    <div className='wrapper'>
      <section className='main' style={{ textAlign: 'center' }}>
        <div className='landing-text'>
          <h1 data-testid='u-1'>Seamless CSV Import</h1>
          <p data-testid='u-2'>
            Say goodbye to the hassle of manual data entry. Our CSV import
            feature allows you to effortlessly upload your data with just a few
            clicks. Simply import your CSV file, and we'll take care of the
            rest.
          </p>
        </div>
        <form className='submit-file-form'>
          <input
            type={'file'}
            id={'csvFileInput'}
            accept={'.csv'}
            onChange={handleOnChange}
            hidden
          />
          <label data-testid='u-3' className='csv-label' htmlFor='csvFileInput'>
            Choose File
          </label>

          <button
            data-testid='u-4'
            className='import-btn'
            onClick={(e) => {
              handleOnSubmit(e);
            }}
          >
            Import CSV
          </button>
        </form>
      </section>

      <section className='aside'>
        <View fetchDataSwitch={fetchDataSwitch} />
      </section>
    </div>
  );
}

export default Upload;
