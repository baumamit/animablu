import React from 'react';
import ExampleComponent from "./components/ExampleComponent"; // Importing a sample component

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My React + TypeScript App</h1>
      <ExampleComponent message="Hello from MyComponent!" />
    </div>
  );
};

export default App;
