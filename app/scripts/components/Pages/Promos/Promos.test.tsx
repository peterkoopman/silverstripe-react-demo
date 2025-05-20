import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Promos from './Promos';

describe('Agencies page', () => {
  test('renders Agencies page with correct heading', () => {
    render(
      <BrowserRouter>
        <Promos />
      </BrowserRouter>,
    );

    const headingElement = screen.getByRole('heading', {
      name: /this is the promos page/i,
    });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
  });
});
