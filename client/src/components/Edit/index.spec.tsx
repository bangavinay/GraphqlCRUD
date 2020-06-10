import React from 'react';
import { render, wait, getByText } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Edit from '.';
import { GET_POST } from '../../queries';

describe('Render Edit', () => {
    const postMock = {
        request: {
          query: GET_POST,
          variables: { id : 1 },
        },
        result: {
            data: {
              post: { id: 1, title: 'facebook', description: 'social media', active: true },
            },
          },
      };

      const props = {
          match:{
              params:{
                  id:1
              }
          }
      }
    test('Loaded State of Edit Form', async () => {
        const  { getByText } = render(
            <MockedProvider mocks={[postMock]} addTypename={false}>
                <Edit {...props} />
            </MockedProvider>);
        await wait();

        const test =await getByText(/Update /i)
        expect(test).toBeInTheDocument();
    });
});
