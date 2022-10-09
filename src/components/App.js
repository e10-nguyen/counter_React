// This file contains the logic for rendering your primary components.
// Rendering a subcomponent of a component A should be done in the logic of A.js, not here.

import * as React from 'react';
import Counter from "./counter/Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
