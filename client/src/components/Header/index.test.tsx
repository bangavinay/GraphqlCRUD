import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { IHeader } from '../../types/IHeader';


describe('Render Header', () => {
    const dummyHeaderProps : IHeader = {
        headerText : 'Welcome to Post App',
        addPostText : 'Add Post',
        listPostText : 'List Post'
      }
    test('renders learn react link', () => {
        const { getByText } = render(<Router><Header {...dummyHeaderProps} /></Router>);
        const linkElement = getByText(/Welcome to Post App/i);
        expect(linkElement).toBeInTheDocument();
    });
});
