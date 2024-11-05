// src/components/ExampleComponent.tsx
import React from 'react';

interface ExampleComponentProps {
  message: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ message }) => {
  return <h1>{message}</h1>;
};

export default ExampleComponent;