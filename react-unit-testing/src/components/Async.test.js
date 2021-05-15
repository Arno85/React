import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('render posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [
                {
                    id: 1,
                    title: 'Post 1'
                }
            ]
        });

        render(<Async />);

        const listItemEls = await screen.findAllByRole('listitem');
        expect(listItemEls).not.toHaveLength(0);
    });
});