import Blurb from './Blurb';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

describe('Blurb component', () => {
  test('renders heading', () => {
    render(<Blurb />);
    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
  });

  test('renders summary', () => {
    render(<Blurb />);
    const summary = screen.getByTestId('summary');
    const paragraph = summary.querySelector('p');
    expect(summary).toBeInTheDocument();
    expect(summary).toContainElement(paragraph);
  });
});
