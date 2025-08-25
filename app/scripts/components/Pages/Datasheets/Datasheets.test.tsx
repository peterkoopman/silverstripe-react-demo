import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Datasheets from './Datasheets';

describe('Datasheets page', () => {
  test('renders Agencies page with correct heading', () => {
    render(
      <BrowserRouter>
        <Datasheets />
      </BrowserRouter>,
    );

    const headingElement = screen.getByRole('heading', {
      name: /this is the datasheets page/i,
    });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
  });
});
