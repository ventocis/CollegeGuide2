import React from 'react';

function offerSorter({ curOffFilt, updateCurOffFilt }) {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-between'>
        <div className='col-md-3 pb-4'>
          <h5>Bathrooms</h5>
          <select
            className='form-control'
            id='minBathsFilt'
            onChange={event => updateCurOffFilt('numBaths', event.target.value)}
          >
            <option value='' defaultValue>
              All
            </option>
            <option value='1'>1+</option>
            <option value='2'>2+</option>
            <option value='3'>3+</option>
            <option value='4'>4+</option>
            <option value='4.5'>4.5+</option>
          </select>
        </div>
        <div className='col-md-3 pb-4'>
          <h5>Bedrooms</h5>
          <select
            className='form-control'
            id='numBedsFilt'
            onChange={event => updateCurOffFilt('numBeds', event.target.value)}
          >
            <option value='' defaultValue>
              All
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
        <div className='col-md-3 pb-4'>
          <h5>Sort</h5>
          <select
            className='form-control'
            id='sort'
            onChange={event => updateCurOffFilt('sort', event.target.value)}
          >
            <option selected value=''>
              Not Sorted
            </option>
            <option value='rate+'>Rent: Increasing</option>
            <option value='rate-'>Rent: Decreasing</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default offerSorter;
