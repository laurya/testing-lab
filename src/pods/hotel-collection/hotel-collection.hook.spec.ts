import { renderHook, act } from "@testing-library/react-hooks";
import { useHotelCollection } from "./hotel-collection.hook";
import * as api from './hotel-collection.api';
import { HotelEntityApi } from "./hotel-collection.api";

describe("hook specs", () => {
  it("we have should return empty", () => {
    //Act
    const { result } = renderHook(() => useHotelCollection());
    //Assert
    expect(result.current.hotelCollection).toEqual([]);
  });

  it("should be able to act on it", () => {
    //Arrange
    const hotels: HotelEntityApi[] = [
      {
        id: "idLaura",
        thumbNailUrl: 'test-laura-url',
        name: "laura",
        address1: "adressLaura"
      } as HotelEntityApi
    ];

   const getCollection = jest
    .spyOn(api, 'getHotelCollection').
    mockResolvedValue(hotels);

    //Act
    const { result } = renderHook(() => useHotelCollection());
    act(() => {
      result.current.loadHotelCollection();
    });
    //Assert
    expect(result.current.hotelCollection).toEqual([]);
    expect(getCollection).toHaveBeenCalled();
  });
});