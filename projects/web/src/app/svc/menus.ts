import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class MenuItem {
  public Name: string;

  public Description: string;

  public highlight: boolean;

  public image: string;

  public locationName: string;

  public order = 100;

  public price: any;

  public variations: MenuItem[];
}

export class Price {
  public Name: string;

  public Description: string;

  public price: number | { [id: string]: number } = 0;
}

@Injectable()
export class MenusService {
  //  Fields

  //  Properties

  //  Constructors
  constructor() {}

  //  API Methods
  public ListAppetizers() {
    const appetizers: MenuItem[] = [
      {
        Name: 'Garlic Bread',
        Description: 'Six Slices',
        image: '', // 'http://www.trbimg.com/img-54186e6f/turbine/la-dd-olive-garden-unlimited-breadsticks-20140916',
        order: 1,
        price: {
          Denver: 4.5
        },
        highlight: false,
        locationName: 'Denver',
        variations: []
      },
      {
        Name: 'Cheesy Garlic Bread',
        Description: 'Six Slices',
        image: '', // 'http://www.trbimg.com/img-54186e6f/turbine/la-dd-olive-garden-unlimited-breadsticks-20140916',
        order: 1,
        price: {
          Denver: 7.5
        },
        highlight: false,
        locationName: 'Denver',
        variations: []
      },
      {
        Name: 'Spokes',
        Description:
          'Thick Pizza Dough Shaped into a 12" Pie Loaded with Garlic-Infused Olive Oil, Mozzarella Cheese, Cheddar Cheese, Cut into Thin Strips and Served with Side of Marinara',
        image: '',
        order: 1,
        price: {
          Denver: 11
        },
        highlight: true,
        locationName: 'Denver',
        variations: []
      },
      {
        Name: 'Spokes',
        Description:
          'Thick Pizza Dough Shaped into a 15" Pie Loaded with Garlic-Infused Olive Oil, Mozzarella Cheese, Cheddar Cheese, Cut into Thin Strips and Served with Side of Marinara',
        image: '',
        order: 1,
        price: {
          'Winter Park': 12
        },
        highlight: true,
        locationName: 'Winter Park',
        variations: []
      },
      {
        Name: 'Small Spokes',
        Description:
          'Thick Pizza Dough Shaped into a 10" Pie Loaded with Garlic-Infused Olive Oil, Mozzarella Cheese, Cheddar Cheese, Cut into Thin Strips and Served with Side of Marinara',
        image: '',
        order: 1,
        price: {
          'Winter Park': 6
        },
        highlight: true,
        locationName: 'Winter Park',
        variations: []
      },
      {
        Name: 'Sriracha Chicken Rounds',
        Description: '10 Spicy White Chicken Breast Bites Served with Ranch or Sweet Thai Chili Sauce',
        image: '',
        order: 1,
        price: 8,
        highlight: true,
        locationName: 'Denver',
        variations: []
      },
      {
        Name: 'Chicken Wings (8)',
        Description: 'Spicy, BBQ, Sweet Chili Thai, or Plain',
        image: '',
        order: 1,
        price: 11,
        highlight: false,
        locationName: 'Winter Park',
        variations: []
      },
      {
        Name: 'Chicken Tenders',
        Description: 'Choice of Ranch, Sweet Chili Thai, BBQ, or Spicy Hot Sauce',
        image: '',
        order: 1,
        price: 8.5,
        highlight: false,
        locationName: 'Denver',
        variations: []
      },
      {
        Name: 'Side of Fries',
        Description: '',
        image: '',
        order: 1,
        price: 4.0,
        highlight: true,
        locationName: 'Denver',
        variations: []
      },
      {
        Name: 'Fry Pile',
        Description: 'Pile O’ Fries topped with Cheddar Cheese and your Choice of 3 Toppings',
        image: '',
        order: 1,
        price: 8.0,
        highlight: true,
        locationName: 'Denver',
        variations: []
      },
      {
        Name: 'Barrel Rolls',
        Description: 'Garlic Infused Olive Oil Base with Toppings Rolled Up in Our Pizza Dough, Cut and Served with Side of Marinara',
        image: '',
        order: 1,
        price: {
          Denver: 10.5,
          'Winter Park': 12
        },
        highlight: false,
        locationName: '',
        variations: [
          {
            Name: 'Epic Barrel Roll',
            Description: 'Mozzarella, Cream Cheese, Pepperoni, Jalapeno',
            image: '',
            order: 1,
            price: 9,
            highlight: false,
            locationName: '',
            variations: []
          },
          {
            Name: 'Hub Barrel Roll',
            Description: 'Mozzarella, Chicken, Feta, Spinach',
            image: '',
            order: 1,
            price: 9,
            highlight: true,
            locationName: '',
            variations: []
          },
          {
            Name: 'Moab Barrel Roll',
            Description: 'Fresh Basil, Fresh Mozzarella, Feta, Provolone',
            image: '',
            order: 1,
            price: 9,
            highlight: false,
            locationName: '',
            variations: []
          },
          {
            Name: 'Axle Barrel Roll',
            Description: 'Mozzarella, Buffalo Chicken, Bleu Cheese Crumbles, Bacon, Onion',
            image: '',
            order: 1,
            price: 9,
            highlight: false,
            locationName: '',
            variations: []
          }
        ]
      }
    ];

    return Observable.create(function(o: any) {
      o.next(appetizers);
      o.complete();
    });

    // return this.http.get('/api/enterprises/workflow/v1/assets/pizza?page=1&pageSize=10000', {
    //        headers: new Headers({
    //            'Content-Type': 'application/json'
    //        })
    //    })
    //    .map(res => res.json());
  }

  public ListPizzas() {
    const pizzas: MenuItem[] = [
      {
        Name: 'Granny Gear',
        Description: 'Red Sauce, Pepperoni, Sausage, Onion, Mushroom, Black Olive',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 1,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Wild Pigs',
        Description: 'Red Sauce, Canadian Bacon, Pepperoni, Sausage, Bacon',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 2,
        highlight: true,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Berm',
        Description: 'Red Sauce, Fresh Basil, Sundried Tomato, Artichoke, Chicken, Feta Cheese',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 3,
        highlight: false,
        locationName: 'Denver',
        price: null,
        variations: []
      },
      {
        Name: 'Berm',
        Description: 'Red Sauce, Sundried Tomato, Artichoke, Chicken, Feta Cheese',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 3,
        highlight: false,
        locationName: 'Winter Park',
        price: null,
        variations: []
      },
      {
        Name: 'Boulder Garden',
        Description: 'Red Sauce, Broccoli, Mushroom, Black Olive, Onion, Fresh Tomato',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 4,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Hardtail',
        Description: 'Red Sauce, Pepperoni, Jalapeno, Pineapple, Cream Cheese',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 5,
        highlight: true,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Apex',
        Description: 'Red Sauce, Canadian Bacon, Pineapple, Green Pepper',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 6,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Ratchet',
        Description: 'Red Sauce, Chicken, Roasted Red Peppers, Onion, Cream Cheese, Green Chilies',
        image: '',
        order: 7,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Mo',
        Description: 'Garlic-Infused Olive Oil, Fresh Basil, Fresh Tomato, Fresh Mozzarella',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 8,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Gnarl',
        Description: 'Garlic-Infused Olive Oil, BBQ Chicken, Pineapple, Fresh Tomato, Feta Cheese',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 9,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Gonzo',
        Description: 'Garlic-Infused Olive Oil, Black Olives, Capers, Onion, Fresh Tomato, Feta Cheese',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 10,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Kicker',
        Description: 'Garlic-Infused Olive Oil, Buffalo Chicken, Jalapenos, Fresh Tomato',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 11,
        highlight: true,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Shred',
        Description: 'Pesto Sauce, Fresh Mozzarella, Provolone, Feta, Parmesan',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 12,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Grinder',
        Description: 'Pesto Sauce, Sundried Tomatoes, White Meat Chicken, Onion, Roasted Red Pepper, Feta Cheese',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 13,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Chrome',
        Description: 'Ricotta White Sauce, Chicken, Mushroom, Spinach, Feta',
        image: '',
        order: 14,
        highlight: false,
        locationName: 'Denver',
        price: null,
        variations: []
      },
      {
        Name: 'White Knuckle',
        Description: 'Ricotta White Sauce, Bacon, Sausage, Fresh Tomato, Jalapeno',
        image: '',
        order: 15,
        highlight: false,
        locationName: 'Denver',
        price: null,
        variations: []
      },
      {
        Name: 'Chrome',
        Description: 'Alfredo Sauce, Chicken, Mushroom, Spinach, Feta',
        image: '',
        order: 14,
        highlight: false,
        locationName: 'Winter Park',
        price: null,
        variations: []
      },
      {
        Name: 'White Knuckle',
        Description: 'Alfredo Sauce, Bacon, Sausage, Fresh Tomato, Jalapeno',
        image: '',
        order: 15,
        highlight: false,
        locationName: 'Winter Park',
        price: null,
        variations: []
      },
      {
        Name: 'Endo',
        Description: 'Alfredo Base, Parmesan, Blackened Chicken, Broccoli, Onion',
        image: '',
        order: 15.5,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Snowmine',
        Description: 'Sweet Chili Thai Sauce, Thai Chicken, Broccoli, Roasted Red Pepper, Pineapple, Cheddar Sprinkle',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 16,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Yardsale',
        Description: 'Ranch Dressing, Buffalo Chicken, Bacon, Onion, Sweet Potato Fries',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 17,
        highlight: true,
        locationName: '',
        price: null,
        variations: []
      },
      {
        Name: 'Bunnyhop',
        Description: 'BBQ Sauce, White Meat Chicken, Mushroom, Onion, Roasted Red Pepper, Cheddar Sprinkle',
        image: '', // 'http://previews.123rf.com/images/brebca/brebca1209/brebca120900044/15313969-Tradition-Mexican-pizza-with-chili-salami-and-onion-Stock-Photo.jpg',
        order: 18,
        highlight: false,
        locationName: '',
        price: null,
        variations: []
      }
    ];

    return Observable.create(function(o: any) {
      o.next(pizzas);
      o.complete();
    });

    // return this.http.get('/api/enterprises/workflow/v1/assets/pizza?page=1&pageSize=10000', {
    //        headers: new Headers({
    //            'Content-Type': 'application/json'
    //        })
    //    })
    //    .map(res => res.json());
  }

  public ListBuildYourOwnPizzaPrices() {
    const prices: Price[] = [
      {
        Name: 'MegaSlice',
        Description: 'We\'ll make any MegaSlice to order',
        price: {
          Denver: 4.95,
          'Winter Park': 5.25
        }
      },
      {
        Name: 'Small (10")',
        Description: 'Enjoy a small, just the right size for you',
        price: 10
      },
      {
        Name: 'Medium (15")',
        Description: 'Enjoy a medium, perfect for the two of you',
        price: 15
      },
      {
        Name: 'Large (17")',
        Description: 'Enjoy a large or 2 for the family',
        price: 17
      },
      {
        Name: 'Gluten-Free (12")*',
        Description: 'Gluten free crust is prepared in common kitchen',
        price: {
          Denver: 15,
          'Winter Park': 14
        }
      }
    ];

    return Observable.create(function(o: any) {
      o.next(prices);
      o.complete();
    });
  }

  public ListBuildYourOwnToppingPrices() {
    const prices: Price[] = [
      {
        Name: 'MegaSlice',
        Description: 'We\'ll make any MegaSlice to order',
        price: 0.8
      },
      {
        Name: 'Small',
        Description: 'Enjoy a small, just the right size for you',
        price: 0.8
      },
      {
        Name: 'Medium',
        Description: 'Enjoy a medium, perfect for the two of you',
        price: 1.8
      },
      {
        Name: 'Large',
        Description: 'Enjoy a large or 2 for the family',
        price: 2.8
      },
      {
        Name: 'Gluten-Free*',
        Description: 'Gluten free crust is prepared in common kitchen',
        price: 0.8
      }
    ];

    return Observable.create(function(o: any) {
      o.next(prices);
      o.complete();
    });
  }

  public ListPizzaPrices() {
    const prices: Price[] = [
      {
        Name: 'MegaSlice',
        Description: 'We\'ll make any MegaSlice to order',
        price: {
          Denver: 6.95,
          'Winter Park': 7.25
        }
      },
      {
        Name: 'Small',
        Description: 'Enjoy a small, just the right size for you',
        price: {
          Denver: 11,
          'Winter Park': 11.95
        }
      },
      {
        Name: 'Medium',
        Description: 'Enjoy a medium, perfect for the two of you',
        price: {
          Denver: 17.95,
          'Winter Park': 19.95
        }
      },
      {
        Name: 'Large',
        Description: 'Enjoy a large or 2 for the family',
        price: {
          Denver: 21.95,
          'Winter Park': 23.95
        }
      },
      {
        Name: 'Gluten-Free*',
        Description: 'Gluten free crust is prepared in common kitchen',
        price: 17.0
      }
    ];

    return Observable.create(function(o: any) {
      o.next(prices);
      o.complete();
    });
  }
}
