import * as React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { HotelCollectionContainer } from './hotel-collection.container';
import * as hook from './hotel-collection.hook';

describe("HotelCollectionContainer specs", () => {
    it("should render the hotel with name when given prop hotel with name", async () => {
      //Arrange
      const hotelCollection = [
        {
            id: 'idHotel-1',
            picture: 'picture-hall',
            name: 'hotel-1',
            description: 'hotel-description1',
            rating: 1,
            address: 'first-address-hotel-1',
        }
      ];
  
      const result = {
        hotelCollection,
        loadHotelCollection: jest.fn()
      };
  
      const getStub = jest
        .spyOn(hook, "useHotelCollection")
        .mockReturnValue(result);
  
      //Act
      const { getByText } = render(<HotelCollectionContainer />);
      const element = await waitForElement(() => getByText("hotel-1"));
      //Assert
      expect(getStub).toHaveBeenCalled();
      expect(element.textContent).toEqual("hotel-1");
      expect(element).not.toBeNull();
      expect(element.hasAttribute('id')).toBeTruthy;
    });
  });