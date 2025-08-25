import { BrowserRouter } from 'react-router';
import { getByTestId, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('renders Button component with correct props', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Button route="test-route" name="Test Button" active={true} />
      </BrowserRouter>,
    );

    const buttonElement: HTMLElement = screen.getByTestId(/button/i);
    const linkElement: HTMLElement = getByText(/test button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('LI');
    expect(buttonElement.className).toContain('active');
    expect(linkElement.tagName).toBe('A');
    expect(linkElement.getAttribute('href')).toBe('/products/test-route');
  });

  test('renders Button component without active class', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Button route="test-route" name="Test Button" />
      </BrowserRouter>,
    );

    const buttonElement: HTMLElement = screen.getByTestId(/button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.className).not.toContain('active');
  });
});
