import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Quality from './Quality';

describe('Quality page', () => {
  test('renders Agencies page with correct heading', () => {
    render(
      <BrowserRouter>
        <Quality />
      </BrowserRouter>,
    );

    const headingElement = screen.getByRole('heading', {
      name: /this is the quality page/i,
    });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
  });
});
