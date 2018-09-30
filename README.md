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
