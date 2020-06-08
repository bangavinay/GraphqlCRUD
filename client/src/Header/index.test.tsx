import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Render Header', () => {
    test('renders learn react link', () => {
        const { getByText } = render(<Router><Header /></Router>);
        const linkElement = getByText(/Welcome to Post App/i);
        expect(linkElement).toBeInTheDocument();
    });
});
