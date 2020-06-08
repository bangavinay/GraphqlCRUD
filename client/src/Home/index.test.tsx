import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Home from '../Home';

describe('Render Home', () => {
    test('renders form for creating post', () => {
        const { getByText } = render(
        <MockedProvider mocks={[]}>
            <Home /> 
        </MockedProvider>);
        const linkElement = getByText(/Title/i);
        expect(linkElement).toBeInTheDocument();
    });
});
