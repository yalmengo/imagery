import { render } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../../src/screens/HomeScreen';

describe('HomeScreen Component', () => {
  test('should render welcome message', () => {
    const { getByText } = render(<HomeScreen />);
    const error = getByText('Welcome!');
    expect(error).toBeTruthy();
  });
});
