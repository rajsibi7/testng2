import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import {Component} from '@angular/core';

@Component({
  selector : 'observeVspromise',
  templateUrl : 'obserPromise.html'
})

export class ObservePromise {


ngOnInit(){
  //#region Example 1
  let promise = new Promise(resolve => {
    setTimeout(() => {
      resolve('promise timeout');
    }, 2000);
  });

  promise.then(value => console.log(value));

  let stream1$ = new Observable(observer => {
    console.log('1111 - time');
    let timeout = setInterval(() => {
      console.log('1111 ');
      observer.next('observable timeout');
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  });

    let disposable = stream1$.subscribe(value => console.log(value));
  setTimeout(() => {
    disposable.unsubscribe();
  }, 1000);
}
}
