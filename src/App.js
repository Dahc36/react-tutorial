import React, { Fragment } from 'react';

import Counter from 'components/Counter/containers/Counter';
import Timer from 'components/Counter/containers/Timer';

const App = function() {
  return (
    <Fragment>
      <h1>App component</h1>
      <hr />
      <Counter />
      <Timer />
    </Fragment>
  );
};

export default App;
