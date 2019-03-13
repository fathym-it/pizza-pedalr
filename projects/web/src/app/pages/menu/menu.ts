import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocationsService, Location } from '../../svc/locations';
import { MenusService, MenuItem, Price } from '../../svc/menus';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html'
})
export class MenuComponent implements OnDestroy, OnInit {
  // 	Fields
  public appetizers: MenuItem[] = [];

  public byoPizzaPrices: Price[] = [];

  public get location(): Location {
    const loc = this.locations.find((val, i) => {
      const lName = val.Name.toLowerCase().replace(' ', '');

      return this.locationKey === lName;
    });

    return loc;
  }

  public locationKey: string;

  public locations: Location[] = [];

  public pizzas: MenuItem[] = [];

  public pizzaPrices: Price[] = [];

  public showOnlyBikes: boolean;

  public showTempBikes: boolean;

  public subs: any[] = [];

  public toppingPrices: Price[] = [];

  // 	Properties

  // 	Constructors
  constructor(
    protected route: ActivatedRoute,
    protected locSvc: LocationsService,
    protected menuSvc: MenusService,
    protected title: Title
  ) {}

  // 	Life Cycle
  public ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }

  public ngOnInit() {
    this.locations = this.locSvc.ListLocations();

    this.showOnlyBikes = new Date(Date.now()).getDate() === 30 && new Date(Date.now()).getMonth() === 6;

    this.showTempBikes = this.showOnlyBikes || new Date(Date.now()) < new Date(2017, 7, 1);

    this.subs.push(
      this.route.params.subscribe(params => {
        this.locationKey = params.location;

        this.title.setTitle(
          ['Best Pizza in', this.location.Name, '- Best Happy Hour', this.location.Name, "- The Pizza Pedal'r"].join(' ')
        );
      })
    );

    this.menuSvc.ListBuildYourOwnPizzaPrices().subscribe(
      (data: any) => {
        this.byoPizzaPrices = data;
      },
      (err: any) => {
        console.log(err);
      },
      () => {}
    );

    this.menuSvc.ListBuildYourOwnToppingPrices().subscribe(
      (data: any) => {
        this.toppingPrices = data;
      },
      (err: any) => {
        console.log(err);
      },
      () => {}
    );

    this.menuSvc.ListPizzaPrices().subscribe(
      (data: any) => {
        this.pizzaPrices = data;
      },
      (err: any) => {
        console.log(err);
      },
      () => {}
    );

    this.menuSvc.ListPizzas().subscribe(
      (data: any) => {
        this.pizzas = data;
      },
      (err: any) => {
        console.log(err);
      },
      () => {}
    );

    this.menuSvc.ListAppetizers().subscribe(
      (data: any) => {
        this.appetizers = data;
      },
      (err: any) => {
        console.log(err);
      },
      () => {}
    );
  }

  // 	API Methods

  // 	Helpers
}
