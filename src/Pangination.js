import React from 'react';

const Pangination = ({ data, PageNumbers }) => {
  const page = [];
  for (let i = 1; i < data.length / 5 + 1; i++) {
    page.push(i);
  }

  return (
    <>
      {page.map((ele) => {
        return (
          <button
            onClick={() => {
              PageNumbers(ele);
            }}
          >
            {' '}
            {ele}{' '}
          </button>
        );
      })}
    </>
  );
};

export default Pangination;
