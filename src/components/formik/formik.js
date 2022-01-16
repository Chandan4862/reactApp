import React from 'react';
import { useField } from 'formik';

function MyOtherComponent(props) {
  // This isn't an input, so instead of using the values in 'field' directly,
  // we'll use 'meta' and 'helpers'.
  const [field, meta, helpers] = useField(props.name);

  const { value } = meta;
  const { setValue } = helpers;

  const isSelected = v => (v === value ? 'selected' : '');

  return (
    <div className="itemsPerPage">
      <button onClick={() => setValue(5)} className={isSelected(5)}>
        5
      </button>
      <button onClick={() => setValue(10)} className={isSelected(10)}>
        10
      </button>
      <button onClick={() => setValue(25)} className={isSelected(25)}>
        25
      </button>
    </div>
  );
}

export default MyOtherComponent;