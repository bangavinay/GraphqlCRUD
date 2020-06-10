import React from 'react';
import { render, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import List from '.';

import { GET_POSTS } from '../../queries';


describe('Render Edit', () => {
    const postMock1 = [{
        request: {
          query: GET_POSTS,
          variables: { },
        },
        result: {
            data: {
              posts: [
                { 
                  id: 1, 
                  title: "Buck", 
                  description: "bulldog", 
                  active:true 
                },
                { 
                  id: 2,
                  title: "hh",
                  description: "bulldog",
                  active: true 
                }
              ],
            },
            refetch: jest.fn(),
          },
      }];
      
    test('Loading State of List ', async () => {
        const  component =render(
            <MockedProvider mocks={postMock1} addTypename={false}>
                <List  />
            </MockedProvider>);

        await wait();
        expect(component).toMatchSnapshot()
    });
});
