import { render, screen } from '@testing-library/react';
import Families from './Families';
import { vi, Mock } from 'vitest';
import { BrowserRouter } from 'react-router';
import * as apiService from '../../../services/apiService';

const mockFamilies = [
  { Slug: 'family1', Title: 'Family 1' },
  { Slug: 'family2', Title: 'Second Family' },
];

describe('Families component', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Families />);
    const familiesSection = getByTestId('families');
    expect(familiesSection).toBeInTheDocument();
  });

  test('it fetches and displays families on load', async () => {
    vi.spyOn(apiService, 'fetchFamilies').mockResolvedValue(mockFamilies);

    render(
      <BrowserRouter>
        <Families />
      </BrowserRouter>,
    );
    const familiesSection = screen.getByTestId('families');

    expect(familiesSection).toBeInTheDocument();

    const buttons = await screen.findAllByTestId('button');
    expect(buttons).toHaveLength(mockFamilies.length);
    expect(buttons[0]).toHaveTextContent(mockFamilies[0].Title);
    expect(buttons[1]).toHaveTextContent(mockFamilies[1].Title);
    expect(apiService.fetchFamilies).toHaveBeenCalledTimes(1);
  });
});
