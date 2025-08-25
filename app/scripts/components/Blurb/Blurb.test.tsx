import Blurb from './Blurb';
import React from 'react';
import { render, screen } from '@testing-library/react';

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
