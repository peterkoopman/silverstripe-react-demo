import { render, screen } from '@testing-library/react';
import Families from './Families';
import { vi, Mock } from 'vitest';
import { BrowserRouter } from 'react-router';

describe('Families component', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Families />);
    const familiesSection = getByTestId('families');
    expect(familiesSection).toBeInTheDocument();
  });

  test('fetches and displays families', async () => {
    const mockFamilies = [
      { Slug: 'family1', Title: 'Family 1' },
      { Slug: 'family2', Title: 'Family 2' },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockFamilies),
      }),
    ) as Mock;

    render(
      <BrowserRouter>
        <Families />
      </BrowserRouter>,
    );
    const familiesSection = screen.getByTestId('families');
    const data = await getFamilies();

    expect(familiesSection).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:8000/api/products/categories',
    );
  });
});
