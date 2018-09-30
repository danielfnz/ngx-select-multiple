# ngx-select-multiple ([demo](https://danielfnz.github.io/ngx-select-multiple/))

`ngx-select-multiple` A angular(6+) search and multi-select dropdown component for angular

## Features

* multi select dropdown
* search dropdown list

## Usage

1. Install **ngx-select-multiple** through [npm](https://www.npmjs.com/package/ngx-select-multiple) package manager using the following command:

    ```bash
    npm i ngx-select-multiple --save
    ```

2. Add NgxSelectMultipleModule into your AppModule class. app.module.ts would look like this:

    ```typescript
    import {NgModule} from '@angular/core';
    import {BrowserModule} from '@angular/platform-browser';
    import {AppComponent} from './app.component';
    import { NgxSelectMultipleModule } from 'ngx-select-ex';

    @NgModule({
      imports: [BrowserModule, NgxSelectMultipleModule],
      declarations: [AppComponent],
      bootstrap: [AppComponent],
    })
    export class AppModule {
    }
    ```
3. Add the tag `<ngx-select-multiple>` into some html

    ```html
    <ngx-select-multiple [items]="items" [(ngModel)]="itemId"></ngx-select-multiple>
    ```
## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/danielfnz/ngx-select-multiple/issues) here on GitHub.

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
