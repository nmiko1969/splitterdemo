# SplitterDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

<nm-splittertab>:
    create new splitted pane.
    Inputs:
        [splitHoriz]: boolean, if true, then horizontal splitted pane (column). If false, then vertical (row)
        [moveable]: boolean, if false then <nm-tab>s aren't resizeable
<nm-tab>:
    it's necessary the <ng-template></ng-template>
    for example:
        <nm-tab>
            <ng-template>
                <your-component></your-component>
            </ng-template>
        </nm-tab>
    adding new tab to splitted pane.
    Inputs:
        [fixed]: boolean, if true, then size of this pane does'nt resizeable.
        [rateSize]: number, the rate of this component. Sum of <nm-tab>'s rateSize is 100%
            if [fixed]=true, then:
                if [rateSize]=0 then this pane is with necessary size. Otherwise, this value is in px.
        [minSize]: number, if it's resizeabe (not fixed), then this value is minimum size in px.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
