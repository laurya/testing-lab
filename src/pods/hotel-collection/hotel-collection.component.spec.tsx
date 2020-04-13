import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCollectionComponent } from './hotel-collection.component';

describe('Hotel-Collection.Component specs', () => {
  it('should show a list with LauraHotel-1', () => {
    // Arrange
    const hotelCollection = [
      {
        id: 'idHotel-1',
        picture: 'picture-hall',
        name: 'LauraHotel-1',
        description: 'its a beautiful place',
        rating: 1,
        address: 'first-address-hotel-1',
      },
    ];

    // Act
    const { getByText } = render(
      <HotelCollectionComponent hotelCollection={hotelCollection} />
    );
    const element = getByText('LauraHotel-1');

    // Assert
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
  });
});