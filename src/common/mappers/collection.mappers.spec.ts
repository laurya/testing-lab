import * as viewModel from '../../pods/hotel-collection/hotel-collection.vm';
import * as mapper from './collection.mapper';

describe('collection mapper specs', () => {
  it('should return empty array when it feeds undefined', () => {
    //Arrange
    const hotels: viewModel.HotelEntityVm[] = undefined;
    //Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(
      hotels,
      () => null
    );
    //Assert
    expect(result).toEqual([]);
  });

  it('should return empty array when it feeds null', () => {
    //Arrange
    const hotels: viewModel.HotelEntityVm[] = null;
    //Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(
      hotels,
      () => null
    );
    //Assert
    expect(result).toEqual([]);
  });

  it('should return empty array when it feeds empty array', () => {
    const hotels: viewModel.HotelEntityVm[] = [];
    //Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(
      hotels,
      () => null
    );
    //Assert
    expect(result).toEqual([]);
  });

  it('should return array one mapped item when it feed array with one item', () => {
    //Arrange
    const hotel: viewModel.HotelEntityVm = {
      id: 'idHotel-1',
      picture: 'picture-hall',
      name: 'hotel-1',
      description: 'hotel-description1',
      rating: 1,
      address: 'first-address-hotel-1',
    };

    const hotels: viewModel.HotelEntityVm[] = [hotel];
    //Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(
      hotels,
      () => hotel
    );
    //Assert
    const expectedResult: viewModel.HotelEntityVm[] = [
      {
        id: 'idHotel-1',
        picture: 'picture-hall',
        name: 'hotel-1',
        description: 'hotel-description1',
        rating: 1,
        address: 'first-address-hotel-1',
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});