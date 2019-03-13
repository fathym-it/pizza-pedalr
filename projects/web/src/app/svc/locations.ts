import { Injectable } from '@angular/core';

export class Address {
  public City: string;

  public Country: string;

  public State: string;

  public Street1: string;

  public Street2: string;

  public Unit: string;

  public Zip: string;
}

export class GeoLocation {
  public Latitude: number;

  public Longitude: number;
}

export class Location {
  public Address: Address;

  public Description: string;

  public Email: string;

  public FacebookName: string;

  public HappyHourDescription: string;

  public HappyHourEnd: string;

  public HappyHourStart: string;

  public HappyHourTitle: string;

  public HappyHourPrice: number;

  public Key: string;

  public Geo: GeoLocation;

  public Name: string;

  public PhoneNumber: string;
}

@Injectable()
export class LocationsService {
  //  Fields

  //  Properties

  //  Constructors
  constructor() {}

  //  API Methods
  public ListLocations(): Location[] {
    return [
      {
        Name: 'Denver',
        Key: 'denver',
        Geo: {
          Latitude: 39.7585905,
          Longitude: -104.9975609
        },
        Email: 'pizza@pizzapedalr.com',
        FacebookName: 'pizza.pedalr.denver',
        PhoneNumber: '7203288742',
        Address: {
          City: 'Denver',
          Country: 'USA',
          State: 'CO',
          Street1: '2907 Huron St.',
          Street2: '',
          Unit: '',
          Zip: '80202'
        },
        HappyHourStart: 'Opens at 11am, noon on Sun',
        HappyHourEnd: '',
        HappyHourTitle: 'Happy Hour from 4pm to 7',
        HappyHourDescription: '1 Beer, 1 Shot, and a 1 Topping MegaSlice',
        HappyHourPrice: 8,
        Description:
          'Made to order and specialty combination pizzas.  also choose from a selection of appetizers, salads, sandwiches and pasta.'
      },
      {
        Name: 'Winter Park',
        Key: 'winterPark',
        Geo: {
          Latitude: 39.8847134,
          Longitude: -105.7625044
        },
        Email: 'pizza@pizzapedalr.com',
        FacebookName: 'Pizza-Pedalr-185378334813634',
        PhoneNumber: '9707265944',
        Address: {
          City: 'Winter Park',
          Country: 'USA',
          State: 'CO',
          Street1: '125 Parry Way',
          Street2: '',
          Unit: '',
          Zip: '80482'
        },
        HappyHourStart: 'Opens at 11am   ',
        HappyHourEnd: 'Closing Varies, Call for specific hours',
        HappyHourTitle: 'Happy Hour from 3pm to 5',
        HappyHourDescription: '1 PBR, and a Cheese MegaSlice',
        HappyHourPrice: 6.5,
        Description:
          'Made to order and specialty combination pizzas.  also choose from a selection of appetizers, salads, sandwiches and pasta.'
      }
    ];
  }

  //  Helpers
}
