/// <reference types="vitest" />
import Breadcrumbs from './Breadcrumbs';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { BrowserRouter, useLocation } from 'react-router-dom';

// Mock the useLocation hook
vi.mock(import('react-router-dom'), async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation: vi.fn(),
  };
});

describe('Breadcrumbs component', () => {
  test('renders breadcrumbs', () => {
    vi.mocked(useLocation).mockReturnValue({
      pathname: '/test/path',
      search: '',
      hash: '',
      state: null,
      key: 'testKey',
    });
    render(
      <BrowserRouter>
        <Breadcrumbs />
      </BrowserRouter>,
    );
    const breadcrumbs = screen.getByTestId('breadcrumbs');
    expect(breadcrumbs).toBeInTheDocument();
  });

  test('renders breadcrumbs with custom path', () => {
    vi.mocked(useLocation).mockReturnValue({
      pathname: '/custom/path',
      search: '',
      hash: '',
      state: null,
      key: 'testKey',
    });
    render(
      <BrowserRouter>
        <Breadcrumbs />
      </BrowserRouter>,
    );
    const breadcrumbs = screen.getByTestId('breadcrumbs');
    expect(breadcrumbs).toBeInTheDocument();
    expect(breadcrumbs).toHaveTextContent('Custom');
    expect(breadcrumbs).toHaveTextContent('Path');
  });
});
