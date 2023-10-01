import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [file, setFile] = useState();

  const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('http://localhost:3000/api/files', formData)
      .then((res) => {
        console.log(res);
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
    <div style={{ textAlign: 'center' }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <form>
        <input
          type={'file'}
          id={'csvFileInput'}
          accept={'.csv'}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>
    </div>
  );
}

export default Upload;
