import * as React from 'react';
import { render } from '@testing-library/react';
import { TextField } from './text-field';

describe(' test text field component specs', () => {
  it('should display text field with given props', () => {
    //Arrange
    const props = {
      input: {
        name: 'Laura',
        onChange: jest.fn(),
        onBlur: jest.fn(),
        onFocus: jest.fn(),
        value: 'valueTestTextField',
      },
      meta: '',
      'data-testid': 'testTextField',
    };

    //Act
    const { getByTestId } = render(<TextField {...props} />);
    const element = getByTestId('testTextField') as HTMLInputElement;
    //Assert
    expect(element.textContent).toEqual('');
    expect(element.textContent).not.toBeNull();
    expect(element.hasAttribute('name')).toBeTruthy;
    expect(element.name).toEqual('Laura');
    expect(element.hasAttribute('value')).toBeTruthy();
    expect(element.value).toEqual('valueTestTextField');
 
  });
});