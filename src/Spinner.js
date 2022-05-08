import React, { useEffect } from 'react';
import './App.less';
import './Spinner.less';
import { getTitle, store } from './store';

function Spinner() {
  useEffect(() => {
    store.dispatch(getTitle());
  });

  return (
    <div className="atom-spinner">
      <div className="spinner-inner">
        <div className="spinner-line" />
        <div className="spinner-line" />
        <div className="spinner-line" />
        <div className="spinner-circle">&#9679;</div>
      </div>
    </div>
  );
}
export default Spinner;
