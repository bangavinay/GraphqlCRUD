import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Render App',()=>{
  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Welcome to Post App/i);
    expect(linkElement).toBeInTheDocument();
  });
});

