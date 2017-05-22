import {Component} from '@angular/core';

@Component({
  selector : 'dashboard',
  templateUrl : 'dashboard.html',
  styles: [`
    div.scroll-list {
      overflow: auto;
      max-height: 70vh;
    }

    .drag-over {
      border: #ff525b dashed 2px;
    }

    .drag-hint {
      border: #ffc100 dashed 2px;
    }

    .drag-target-border {
      border: #00bfff dashed 2px;
    }

    .drag-target-border-green {
      border: #3c763d dashed 2px;
    }
  `
  ]
})

export class DashboardComponent {
    myvalue: string = 'one';

    myobj: any;

    ngOnInit(){
      this.myobj = {
        over : {
          one : "one",
          two : "two",
          three : "three",
          four : "four",
        }
      };
    }


  setcrash (){
      delete this.myobj.over;
  }
  vegetables = [
    {name: 'Carrot', type: 'vegetable'},
    {name: 'Onion', type: 'vegetable'},
    {name: 'Potato', type: 'vegetable'},
    {name: 'Capsicum', type: 'vegetable'}];

  fruits = [
    {name: 'Apple', type: 'fruit'},
    {name: 'Orange', type: 'fruit'},
    {name: 'Mango', type: 'fruit'},
    {name: 'Banana', type: 'fruit'}];

  droppedFruits = [];
  droppedVegetables = [];
  droppedItems = [];
  fruitDropEnabled = true;
  dragEnabled = true;

  onFruitDrop(e: any) {
    this.droppedFruits.push(e.dragData);
    this.removeItem(e.dragData, this.fruits);
  }

  onVegetableDrop(e: any) {
    this.droppedVegetables.push(e.dragData);
    this.removeItem(e.dragData, this.vegetables);
  }

  onAnyDrop(e: any) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type === 'vegetable') {
      this.removeItem(e.dragData, this.vegetables);
    } else {
      this.removeItem(e.dragData, this.fruits);
    }
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  // // dragggggg..
  // listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
  // listRecycled: Array<string> = [];
  // listRecycled2: Array<string> = [];
  //
  // allowDropFunction1(myarryLen: number): any {
  //   var countOfArr = this.listRecycled.length == 0?true:false;
  //   console.log("countOfArr",countOfArr, this.listRecycled.length);
  //   return (dragData: any) => countOfArr;
  // }
  //
  // addTobox1Items($event: any) {
  //   if(this.listRecycled.length ==0 ){
  //     this.listRecycled.push($event.dragData);
  //   }
  //
  // }
  //
  // allowDropFunction2(myarryLen: number): any {
  //   var countOfArr = this.listRecycled2.length == 0?true:false;
  //   console.log("countOfArr",countOfArr, this.listRecycled2.length);
  //   return (dragData: any) => countOfArr;
  // }
  //
  // addTobox2Items($event: any) {
  //   if(this.listRecycled2.length == 0 ){
  //     this.listRecycled2.push($event.dragData);
  //   }
  //
  // }
}

