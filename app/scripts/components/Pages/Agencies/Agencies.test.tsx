import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Agencies from './Agencies';

describe('Agencies page', () => {
  test('renders Agencies page with correct heading', () => {
    render(
      <BrowserRouter>
        <Agencies />
      </BrowserRouter>,
    );

    const headingElement = screen.getByRole('heading', {
      name: /this is the agencies page/i,
    });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
  });
});
