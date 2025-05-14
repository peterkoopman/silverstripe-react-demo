import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

describe('Breadcrumbs component', () => {
  test('renders breadcrumbs', () => {
    render(<Breadcrumbs />);
    const breadcrumbs = screen.getByTestId('breadcrumbs');
    expect(breadcrumbs).toBeInTheDocument();
  });
});
