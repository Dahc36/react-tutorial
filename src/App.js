import React, { Fragment } from 'react';

import Counter from 'components/Counter';

const App = function() {
  return (
    <Fragment>
      <h1>App component</h1>
      <hr />
      <Counter />
    </Fragment>
  );
};

export default App;
