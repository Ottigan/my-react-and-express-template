import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Test from './Test';

describe('Test component', () => {
  it('should render', () => {
    render(<Test />);

    expect(screen.getByTestId('test')).toHaveTextContent('Test');
  });
});
