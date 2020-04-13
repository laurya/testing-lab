import * as hotelCollectionMapper from "./hotel-collection.mapper";
import * as apiModel from './hotel-collection.api';
import * as viewModel from './hotel-collection.vm';
import { basePicturesUrl } from 'core';
import * as mapper from './hotel-collection.mapper';

describe('hotel collection mapper specs', () => {
  it('should return a HotelEntityViewModel when give an HotelEntity from api', () => {
    // Arrange
    const lauraHotel: apiModel.HotelEntityApi = {
      id: 'LauraId-10',
      type: 'hola',
      name: 'Laura',
      created: new Date(),
      modified: new Date(),
      address1: 'address-hotel1',
      airportCode: 'airportCode-1',
      amenityMask: 1,
      city: 'Alicante',
      confidenceRating: 1,
      countryCode: 'meloInven',
      deepLink: 'link-inven',
      highRate: 1,
      hotelId: 1,
      hotelInDestination: true,
      hotelRating: 1,
      location: {
        latitude: 1,
        longitude: 1,
      },
      locationDescription: 'isABeautifulPlace',
      lowRate: 0,
      metadata: {
        path: 'ok',
      },
      postalCode: 1,
      propertyCategory: 1,
      proximityDistance: 1,
      proximityUnit: 'proximityNice',
      rateCurrencyCode: 'rateCurrencyWai',
      shortDescription: 'okNiceDescriotion',
      stateProvinceCode: 'AlicantesCode',
      thumbNailUrl: 'thumbNailUrl',
      tripAdvisorRating: 1,
      tripAdvisorRatingUrl: 'tripAdvisorRatingUrl',
    };
    //Act
    const result = hotelCollectionMapper.mapFromApiToVm(lauraHotel);
    //Assert
    const expectedResult: viewModel.HotelEntityVm = {
      id: 'LauraId-10',
      picture: `${basePicturesUrl}thumbNailUrl`,
      name: 'Laura',
      description: 'okNiceDescriotion',
      rating: 1,
      address: 'address-hotel1'
    };
    expect(result).toEqual(expectedResult);
  })
});