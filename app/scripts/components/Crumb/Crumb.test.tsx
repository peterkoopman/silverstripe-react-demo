import Crumb from './Crumb';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Crumb component', () => {
  test('renders Crumb with correct URL and name', () => {
    const url = '/test-url';
    const name = 'Test Name';

    render(
      <BrowserRouter>
        <Crumb url={url} name={name} />
      </BrowserRouter>,
    );

    const crumbElement = screen.getByText(name);
    expect(crumbElement).toBeInTheDocument();
    expect(crumbElement.closest('a')).toHaveAttribute('href', url);
  });
});
