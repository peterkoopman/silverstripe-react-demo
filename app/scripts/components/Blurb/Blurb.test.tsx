import { expect, test } from 'vitest';
import Blurb from './Blurb';

test('adds 1 + 2 to equal 3', () => {
  expect(<Blurb />).toContain('Blurb');
});
