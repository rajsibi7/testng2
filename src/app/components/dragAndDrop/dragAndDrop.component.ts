import {Component} from '@angular/core';

@Component({
  selector: 'app-drag-drop-component',
  templateUrl: 'dragaAndDrop.component.html',
  styleUrls: ['dragAndDrop.component.less']
})
export class DragAndDropComponent {


  fakeobj: any;
  tempDeletedFakeObj : any;
  tempIndex : number = -1;
  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
  listRecycled: Array<string> = [];

  listBoxers:Array<string> = ['Sugar Ray Robinson','Muhammad Ali','George Foreman','Joe Frazier','Jake LaMotta','Joe Louis','Jack Dempsey','Rocky Marciano','Mike Tyson','Oscar De La Hoya'];
  listTeamOne:Array<string> = [];
  listTeamTwo:Array<string> = [];

  box1Integer: number = 3;
  box2Integer: number = 10;

  myarryLen: number = 1;

  box1Items: string[] = [];
  box2Items: string[] = [];
  selectedProcessStep : number = 10;
  allProcessStepsArray : any;

  droppedFruits : any;

  dynamicArrName : string = "dragDropArr";

  allowDropFunction(baseInteger: number): any {

    return (dragData: any) => dragData % baseInteger === 0;
  }

  allowDropFunction1(myarryLen: number): any {
    var countOfArr = this.listTeamOne.length == 0?true:false;
    console.log("countOfArr",countOfArr);
    return (dragData: any) => countOfArr;
  }

  allowDropFunction2(myarryLen: number): any {
    var countOfArr = this.listTeamTwo.length == 0?true:false;
    console.log("countOfArr2",countOfArr);
    return (dragData: any) => countOfArr;
  }

  addTobox1Items($event: any) {
    this.listTeamOne.push($event.dragData);
  }

  addTobox2Items($event: any) {
    this.listTeamTwo.push($event.dragData);
  }

  ngOnInit() {

    this.fakeobj = [{
      "isMandatory": false,
      "masterId": "PST00001",
      "processStepId": "PST00021",
      "processStepName": "Finding Us",
      "processStepType": "FINDING_US",
      "questionList": [{
        "activityMasterId": "ACT00006",
        "activityName": "Purchase New Vehicle",
        "activityType": "PURCHASE_NEW_VEHICLE",
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "SJgK-whpJW",
          "choiceText": "150 metres",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "r1ZKWv36kW",
          "choiceText": "180 metres",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SJ7YbD3Tyb",
          "choiceText": "120 metres",
          "displaySeqNum": 4,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00004",
        "kpiMasterId": "KPI00004",
        "kpiName": "Accessability",
        "kpiType": "ACCESSABILITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "productName": "Vitara SUV",
        "questionId": "ByYWwnakb",
        "questionText": "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }, {
        "activityMasterId": "ACT00006",
        "activityName": "Purchase New Vehicle",
        "activityType": "PURCHASE_NEW_VEHICLE",
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "BJHFZD2pJb",
          "choiceText": "50 km/hr",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "HkIFbwhp1-",
          "choiceText": "45 km/hr",
          "displaySeqNum": 2,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "HJwFbvhpyW",
          "choiceText": "54 km/hr",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00004",
        "kpiMasterId": "KPI00004",
        "kpiName": "Accessability",
        "kpiType": "ACCESSABILITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "productName": "Vitara SUV",
        "questionId": "SyNKZw36y-",
        "questionText": "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 3
      }, {
        "activityMasterId": "ACT00006",
        "activityName": "Purchase New Vehicle",
        "activityType": "PURCHASE_NEW_VEHICLE",
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "SJ9YWPnTJ-",
          "choiceText": "245 m",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "SyotZDhpkZ",
          "choiceText": "225 m",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "S12KZwhTJb",
          "choiceText": "200 m",
          "displaySeqNum": 3,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00004",
        "kpiMasterId": "KPI00004",
        "kpiName": "Accessability",
        "kpiType": "ACCESSABILITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "productName": "Vitara SUV",
        "questionId": "ByKKbwnaJ-",
        "questionText": "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 1
      }, {
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "H1lvG3aAyZ",
          "choiceText": "Zero",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "rJ-DGnaC1Z",
          "choiceText": "One",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "rJMDz3TCyb",
          "choiceText": "Two",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "HJmPGnTCJb",
          "choiceText": "Three",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00004",
        "kpiMasterId": "KPI00004",
        "kpiName": "Accessability",
        "kpiScore": 0,
        "kpiType": "ACCESSABILITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "BkDznaAJb",
        "questionText": "A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 3,
        "ratingScaleChartTypeName": "Graded Scale",
        "status": "ACTIVE"
      }],
      "seqNo": 1,
      "innerPainArr": [{
        "activityMasterId": "ACT00006",
        "activityName": "Purchase New Vehicle",
        "activityType": "PURCHASE_NEW_VEHICLE",
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "SJ9YWPnTJ-",
          "choiceText": "245 m",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "SyotZDhpkZ",
          "choiceText": "225 m",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "S12KZwhTJb",
          "choiceText": "200 m",
          "displaySeqNum": 3,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00004",
        "kpiMasterId": "KPI00004",
        "kpiName": "Accessability",
        "kpiType": "ACCESSABILITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "productName": "Vitara SUV",
        "questionId": "ByKKbwnaJ-",
        "questionText": "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 1
      }],
      "innerAverageArr": [{
        "activityMasterId": "ACT00006",
        "activityName": "Purchase New Vehicle",
        "activityType": "PURCHASE_NEW_VEHICLE",
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "BJHFZD2pJb",
          "choiceText": "50 km/hr",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "HkIFbwhp1-",
          "choiceText": "45 km/hr",
          "displaySeqNum": 2,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "HJwFbvhpyW",
          "choiceText": "54 km/hr",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00004",
        "kpiMasterId": "KPI00004",
        "kpiName": "Accessability",
        "kpiType": "ACCESSABILITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "productName": "Vitara SUV",
        "questionId": "SyNKZw36y-",
        "questionText": "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 3
      }],
      "innerDelightArr": [{
        "activityMasterId": "ACT00006",
        "activityName": "Purchase New Vehicle",
        "activityType": "PURCHASE_NEW_VEHICLE",
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "SJgK-whpJW",
          "choiceText": "150 metres",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "r1ZKWv36kW",
          "choiceText": "180 metres",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SJ7YbD3Tyb",
          "choiceText": "120 metres",
          "displaySeqNum": 4,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00004",
        "kpiMasterId": "KPI00004",
        "kpiName": "Accessability",
        "kpiType": "ACCESSABILITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "productName": "Vitara SUV",
        "questionId": "ByYWwnakb",
        "questionText": "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }],
      "innerKPIScoreArr": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "H1lvG3aAyZ",
          "choiceText": "Zero",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "rJ-DGnaC1Z",
          "choiceText": "One",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "rJMDz3TCyb",
          "choiceText": "Two",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "HJmPGnTCJb",
          "choiceText": "Three",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00004",
        "kpiMasterId": "KPI00004",
        "kpiName": "Accessability",
        "kpiScore": 0,
        "kpiType": "ACCESSABILITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "BkDznaAJb",
        "questionText": "A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 3,
        "ratingScaleChartTypeName": "Graded Scale",
        "status": "ACTIVE"
      }]
    }, {
      "isMandatory": false,
      "masterId": "PST00010",
      "processStepId": "PST00033",
      "processStepName": "Showroom",
      "processStepType": "SHOWROOM",
      "questionList": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "B1e1r-0T1W",
          "choiceText": "7.2",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "S1-JSZAaJZ",
          "choiceText": "10",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SkM1SW0TJ-",
          "choiceText": "8.4",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00001",
        "kpiMasterId": "KPI00001",
        "kpiName": "Product Quality",
        "kpiType": "PRODUCT_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "ry1SZAayW",
        "questionText": "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour ?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "B1HkrZCpkW",
          "choiceText": "720 Kmph",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "ByUyHbR61Z",
          "choiceText": "360 Kmph",
          "displaySeqNum": 2,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "By_1SW0TkZ",
          "choiceText": "300 Kmph",
          "displaySeqNum": 4,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00001",
        "kpiMasterId": "KPI00001",
        "kpiName": "Product Quality",
        "kpiType": "PRODUCT_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "HJNJSWCaJ-",
        "questionText": "An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 hours, it must travel at a speed of:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 3
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "BkBDM3pAyb",
          "choiceText": "500",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "SkLvMhTAkZ",
          "choiceText": "550",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "HJvDG2TCJ-",
          "choiceText": "600",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "BydPfhaA1-",
          "choiceText": "700",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00001",
        "kpiMasterId": "KPI00001",
        "kpiName": "Product Quality",
        "kpiScore": 2,
        "kpiType": "PRODUCT_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "BJ4vG2pRJb",
        "questionText": "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 3,
        "ratingScaleChartTypeName": "Graded Scale",
        "status": "ACTIVE"
      }, {
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "B19wz3p0kW",
          "choiceText": "4",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "H1jPGhaAkb",
          "choiceText": "8",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "rJnwM2TC1Z",
          "choiceText": "12",
          "displaySeqNum": 3,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00001",
        "kpiMasterId": "KPI00001",
        "kpiName": "Product Quality",
        "kpiType": "PRODUCT_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "rJFwM3aA1W",
        "questionText": "If 20% of a = b, then b% of 20 is the same as:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 0
      }],
      "seqNo": 2,
      "innerPainArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "BkBDM3pAyb",
          "choiceText": "500",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "SkLvMhTAkZ",
          "choiceText": "550",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "HJvDG2TCJ-",
          "choiceText": "600",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "BydPfhaA1-",
          "choiceText": "700",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00001",
        "kpiMasterId": "KPI00001",
        "kpiName": "Product Quality",
        "kpiScore": 2,
        "kpiType": "PRODUCT_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "BJ4vG2pRJb",
        "questionText": "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 3,
        "ratingScaleChartTypeName": "Graded Scale",
        "status": "ACTIVE"
      }],
      "innerAverageArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "B1HkrZCpkW",
          "choiceText": "720 Kmph",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "ByUyHbR61Z",
          "choiceText": "360 Kmph",
          "displaySeqNum": 2,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "By_1SW0TkZ",
          "choiceText": "300 Kmph",
          "displaySeqNum": 4,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00001",
        "kpiMasterId": "KPI00001",
        "kpiName": "Product Quality",
        "kpiType": "PRODUCT_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "HJNJSWCaJ-",
        "questionText": "An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 hours, it must travel at a speed of:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 3
      }],
      "innerDelightArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "B1e1r-0T1W",
          "choiceText": "7.2",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "S1-JSZAaJZ",
          "choiceText": "10",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SkM1SW0TJ-",
          "choiceText": "8.4",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00001",
        "kpiMasterId": "KPI00001",
        "kpiName": "Product Quality",
        "kpiType": "PRODUCT_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "ry1SZAayW",
        "questionText": "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour ?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }],
      "innerKPIScoreArr": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "B19wz3p0kW",
          "choiceText": "4",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "H1jPGhaAkb",
          "choiceText": "8",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "rJnwM2TC1Z",
          "choiceText": "12",
          "displaySeqNum": 3,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00001",
        "kpiMasterId": "KPI00001",
        "kpiName": "Product Quality",
        "kpiType": "PRODUCT_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "rJFwM3aA1W",
        "questionText": "If 20% of a = b, then b% of 20 is the same as:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 0
      }]
    }, {
      "isMandatory": false,
      "masterId": "PST00009",
      "processStepId": "PST00029",
      "processStepName": "Test Drive",
      "processStepType": "TEST_DRIVE",
      "questionList": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "HkqyBZATkW",
          "choiceText": "50",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "HJ21BWC6kZ",
          "choiceText": "70",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SkTkB-Rp1Z",
          "choiceText": "80",
          "displaySeqNum": 4,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "r1Y1Bb06J-",
        "questionText": "\t If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "BJgPiBaR1b",
          "choiceText": "260",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "r1bDsrTR1Z",
          "choiceText": "272",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 4
        }, {
          "choiceId": "ByzPiBaCJb",
          "choiceText": "271",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SJmDiHp01-",
          "choiceText": "270",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "SyNDjSpAyb",
          "choiceText": "273",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiScore": 3,
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "Syvsr601b",
        "questionText": "Two ships are sailing in the sea on the two sides of a lighthouse. The angle of elevation of the top of the lighthouse is observed from the ships are 30° and 45° respectively. If the lighthouse is 100 m high, the distance between the two ships is:",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 3,
        "ratingScaleChartTypeName": "Graded Scale",
        "status": "ACTIVE"
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "rypPf2pAkW",
          "choiceText": "120",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "BJADM36AJZ",
          "choiceText": "90",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "H1JgPG2TA1W",
          "choiceText": "30",
          "displaySeqNum": 3,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiScore": 1,
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "HJHPor6RkW",
        "questionText": "The angle of elevation of a ladder leaning against a wall is 60º and the foot of the ladder is 4.6 m away from the wall. The length of the ladder is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "ratingScaleChartTypeId": 3,
        "status": "ACTIVE"
      }, {
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "HJWlwznTCJb",
          "choiceText": "9",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "BkGgPz26Cyb",
          "choiceText": "10",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "HJmxwfhpAk-",
          "choiceText": "12",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "r1eePGnaC1W",
        "questionText": "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 0
      }],
      "seqNo": 3,
      "innerPainArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "rypPf2pAkW",
          "choiceText": "120",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "BJADM36AJZ",
          "choiceText": "90",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "H1JgPG2TA1W",
          "choiceText": "30",
          "displaySeqNum": 3,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiScore": 1,
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "HJHPor6RkW",
        "questionText": "The angle of elevation of a ladder leaning against a wall is 60º and the foot of the ladder is 4.6 m away from the wall. The length of the ladder is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "ratingScaleChartTypeId": 3,
        "status": "ACTIVE"
      }],
      "innerAverageArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "BJgPiBaR1b",
          "choiceText": "260",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "r1bDsrTR1Z",
          "choiceText": "272",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 4
        }, {
          "choiceId": "ByzPiBaCJb",
          "choiceText": "271",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SJmDiHp01-",
          "choiceText": "270",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "SyNDjSpAyb",
          "choiceText": "273",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiScore": 3,
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "Syvsr601b",
        "questionText": "Two ships are sailing in the sea on the two sides of a lighthouse. The angle of elevation of the top of the lighthouse is observed from the ships are 30° and 45° respectively. If the lighthouse is 100 m high, the distance between the two ships is:",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 3,
        "ratingScaleChartTypeName": "Graded Scale",
        "status": "ACTIVE"
      }],
      "innerDelightArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "HkqyBZATkW",
          "choiceText": "50",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "HJ21BWC6kZ",
          "choiceText": "70",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SkTkB-Rp1Z",
          "choiceText": "80",
          "displaySeqNum": 4,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "r1Y1Bb06J-",
        "questionText": "\t If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }],
      "innerKPIScoreArr": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "HJWlwznTCJb",
          "choiceText": "9",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "BkGgPz26Cyb",
          "choiceText": "10",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "HJmxwfhpAk-",
          "choiceText": "12",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "r1eePGnaC1W",
        "questionText": "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 0
      }]
    }, {
      "isMandatory": false,
      "masterId": "PST00003",
      "processStepId": "PST00023",
      "processStepName": "Sales Staff",
      "processStepType": "SALES_STAFF",
      "questionList": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "rkjwjrTCyZ",
          "choiceText": "42, 33",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "Sy2vjSaAkZ",
          "choiceText": "44, 34",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SkaDsBT0y-",
          "choiceText": "45, 36",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00008",
        "kpiMasterId": "KPI00008",
        "kpiName": "Service Quality",
        "kpiType": "SERVICE_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "Hk9DsBaCkW",
        "questionText": "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "SkygwjBaRJZ",
          "choiceText": "1",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "SJggDjSaRJ-",
          "choiceText": "14",
          "displaySeqNum": 2,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "HJZxviHTAkZ",
          "choiceText": "20",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00008",
        "kpiMasterId": "KPI00008",
        "kpiName": "Service Quality",
        "kpiType": "SERVICE_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "SJRvjHpA1b",
        "questionText": "What percentage of numbers from 1 to 70 have 1 or 9 in the unit's digit?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 3
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "ryFO8p60Jb",
          "choiceText": "90",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "S19OIaT0kb",
          "choiceText": "100",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "S1jO8aa0Jb",
          "choiceText": "110",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "rkn_IT6Ayb",
          "choiceText": "120",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00008",
        "kpiMasterId": "KPI00008",
        "kpiName": "Service Quality",
        "kpiScore": 5,
        "kpiType": "SERVICE_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "Hyuu8ppCy-",
        "questionText": "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 2,
        "ratingScaleChartTypeName": "Chain",
        "status": "ACTIVE"
      }, {
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "SyCO8apA1Z",
          "choiceText": "87.5",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "ry1luITpCJW",
          "choiceText": "84",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "HkgedU6pRJ-",
          "choiceText": "80",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00008",
        "kpiMasterId": "KPI00008",
        "kpiName": "Service Quality",
        "kpiType": "SERVICE_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "rJ6dIppAJ-",
        "questionText": "The ratio between the speeds of two trains is 7 : 8. If the second train runs 400 km in 4 hours, then the speed of the first train is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 0
      }],
      "seqNo": 4,
      "innerPainArr": [],
      "innerAverageArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "SkygwjBaRJZ",
          "choiceText": "1",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "SJggDjSaRJ-",
          "choiceText": "14",
          "displaySeqNum": 2,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "HJZxviHTAkZ",
          "choiceText": "20",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00008",
        "kpiMasterId": "KPI00008",
        "kpiName": "Service Quality",
        "kpiType": "SERVICE_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "SJRvjHpA1b",
        "questionText": "What percentage of numbers from 1 to 70 have 1 or 9 in the unit's digit?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 3
      }],
      "innerDelightArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "rkjwjrTCyZ",
          "choiceText": "42, 33",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "Sy2vjSaAkZ",
          "choiceText": "44, 34",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SkaDsBT0y-",
          "choiceText": "45, 36",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00008",
        "kpiMasterId": "KPI00008",
        "kpiName": "Service Quality",
        "kpiType": "SERVICE_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "Hk9DsBaCkW",
        "questionText": "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "ryFO8p60Jb",
          "choiceText": "90",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "S19OIaT0kb",
          "choiceText": "100",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "S1jO8aa0Jb",
          "choiceText": "110",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "rkn_IT6Ayb",
          "choiceText": "120",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00008",
        "kpiMasterId": "KPI00008",
        "kpiName": "Service Quality",
        "kpiScore": 5,
        "kpiType": "SERVICE_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "Hyuu8ppCy-",
        "questionText": "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 2,
        "ratingScaleChartTypeName": "Chain",
        "status": "ACTIVE"
      }],
      "innerKPIScoreArr": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "SyCO8apA1Z",
          "choiceText": "87.5",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "ry1luITpCJW",
          "choiceText": "84",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "HkgedU6pRJ-",
          "choiceText": "80",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00008",
        "kpiMasterId": "KPI00008",
        "kpiName": "Service Quality",
        "kpiType": "SERVICE_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "rJ6dIppAJ-",
        "questionText": "The ratio between the speeds of two trains is 7 : 8. If the second train runs 400 km in 4 hours, then the speed of the first train is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 0
      }]
    }, {
      "isMandatory": true,
      "masterId": "PST00004",
      "processStepId": "PST00024",
      "processStepName": "Product Value",
      "processStepType": "PRODUCT_VALUE",
      "questionList": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "Syvk_UQ1De",
          "choiceText": "Brand",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "H1d1dLX1Dg",
          "choiceText": "Vehicle Feature",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "HyFy_UQkwx",
          "choiceText": "Price",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "By9ydLXJwe",
          "choiceText": "Utility Value",
          "displaySeqNum": 4,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "S1jk_8QJPe",
          "displaySeqNum": 5,
          "isAnswer": false,
          "isOtherChoice": true,
          "isPicture": false
        }],
        "isMandatory": true,
        "isPicture": false,
        "kpiId": "KPI00002",
        "kpiMasterId": "KPI00002",
        "kpiName": "Product Value",
        "kpiType": "PRODUCT_VALUE",
        "mandatoryType": "PRODUCT_VALUE",
        "otherChoiceIncluded": true,
        "processStepMandatory": true,
        "questionId": "ryke_C1Hh1gfds",
        "questionText": "What were the main reasons you purchased this vehicle ?",
        "questionType": "Multi Select",
        "status": "ACTIVE",
        "kpiScore": 0
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "rklOU6pRkZ",
          "choiceText": "5",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "BJWdUa60yW",
          "choiceText": "6",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "ByG_UaTA1Z",
          "choiceText": "7",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00002",
        "kpiMasterId": "KPI00002",
        "kpiName": "Product Value",
        "kpiType": "PRODUCT_VALUE",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "B1_U6aRyb",
        "questionText": "In covering a distance of 30 km, Abhay takes 2 hours more than Sameer. If Abhay doubles his speed, then he would take 1 hour less than Sameer. Abhay's speed is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "HkNd8Ta0yb",
          "choiceText": "10",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "SySO8paRk-",
          "choiceText": "11",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "r1LdL66CyW",
          "choiceText": "14",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "HyD_8a6RyZ",
          "choiceText": "12",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00002",
        "kpiMasterId": "KPI00002",
        "kpiName": "Product Value",
        "kpiScore": 3,
        "kpiType": "PRODUCT_VALUE",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "HyXOUaTRJb",
        "questionText": "\t Robert is travelling on his cycle and has calculated to reach point A at 2 P.M. if he travels at 10 kmph, he will reach there at 12 noon if he travels at 15 kmph. At what speed must he travel to reach A at 1 P.M.?",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 4,
        "ratingScaleChartTypeName": "Bubble",
        "status": "ACTIVE"
      }, {
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "rklMJY1klb",
          "choiceText": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\n\n",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "fieldSizeNumChars": 2,
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00005",
        "kpiMasterId": "KPI00005",
        "kpiName": "Customer Pain Story",
        "kpiType": "CUSTOMER_PAIN",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "SyG1YyJe-",
        "questionText": "Share your pain stories about our products to improve our service ",
        "questionType": "Free Text",
        "questionTypeId": 4,
        "status": "ACTIVE",
        "kpiScore": 0,
        "processStepNameTemp": "Product Value"
      }],
      "seqNo": 5,
      "innerPainArr": [],
      "innerAverageArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "HkNd8Ta0yb",
          "choiceText": "10",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "SySO8paRk-",
          "choiceText": "11",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "r1LdL66CyW",
          "choiceText": "14",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "HyD_8a6RyZ",
          "choiceText": "12",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00002",
        "kpiMasterId": "KPI00002",
        "kpiName": "Product Value",
        "kpiScore": 3,
        "kpiType": "PRODUCT_VALUE",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "HyXOUaTRJb",
        "questionText": "\t Robert is travelling on his cycle and has calculated to reach point A at 2 P.M. if he travels at 10 kmph, he will reach there at 12 noon if he travels at 15 kmph. At what speed must he travel to reach A at 1 P.M.?",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 4,
        "ratingScaleChartTypeName": "Bubble",
        "status": "ACTIVE"
      }],
      "innerDelightArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "rklOU6pRkZ",
          "choiceText": "5",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "BJWdUa60yW",
          "choiceText": "6",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "ByG_UaTA1Z",
          "choiceText": "7",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00002",
        "kpiMasterId": "KPI00002",
        "kpiName": "Product Value",
        "kpiType": "PRODUCT_VALUE",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "B1_U6aRyb",
        "questionText": "In covering a distance of 30 km, Abhay takes 2 hours more than Sameer. If Abhay doubles his speed, then he would take 1 hour less than Sameer. Abhay's speed is:",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }],
      "innerKPIScoreArr": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "Syvk_UQ1De",
          "choiceText": "Brand",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "H1d1dLX1Dg",
          "choiceText": "Vehicle Feature",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "HyFy_UQkwx",
          "choiceText": "Price",
          "displaySeqNum": 3,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "By9ydLXJwe",
          "choiceText": "Utility Value",
          "displaySeqNum": 4,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "S1jk_8QJPe",
          "displaySeqNum": 5,
          "isAnswer": false,
          "isOtherChoice": true,
          "isPicture": false
        }],
        "isMandatory": true,
        "isPicture": false,
        "kpiId": "KPI00002",
        "kpiMasterId": "KPI00002",
        "kpiName": "Product Value",
        "kpiType": "PRODUCT_VALUE",
        "mandatoryType": "PRODUCT_VALUE",
        "otherChoiceIncluded": true,
        "processStepMandatory": true,
        "questionId": "ryke_C1Hh1gfds",
        "questionText": "What were the main reasons you purchased this vehicle ?",
        "questionType": "Multi Select",
        "status": "ACTIVE",
        "kpiScore": 0
      }, {
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "rklMJY1klb",
          "choiceText": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\n\n",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "fieldSizeNumChars": 2,
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00005",
        "kpiMasterId": "KPI00005",
        "kpiName": "Customer Pain Story",
        "kpiType": "CUSTOMER_PAIN",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "SyG1YyJe-",
        "questionText": "Share your pain stories about our products to improve our service ",
        "questionType": "Free Text",
        "questionTypeId": 4,
        "status": "ACTIVE",
        "kpiScore": 0,
        "processStepNameTemp": "Product Value"
      }]
    }, {
      "isMandatory": false,
      "masterId": "PST00002",
      "processStepId": "PST00022",
      "processStepName": "Financing",
      "processStepType": "FINANCING",
      "questionList": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "rJxGV4k1gZ",
          "choiceText": "which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "fieldSizeNumChars": 2,
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00005",
        "kpiMasterId": "KPI00005",
        "kpiName": "Customer Pain Story",
        "kpiType": "CUSTOMER_PAIN",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "HyGVVJyxb",
        "questionText": "Please share your pain stories on finance",
        "questionType": "Free Text",
        "questionTypeId": 4,
        "status": "ACTIVE",
        "kpiScore": 0,
        "processStepNameTemp": "Financing"
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "H1lTzHUOxW",
          "choiceText": "Very Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "Hy-6MHLOxb",
          "choiceText": "Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "B1fazHL_x-",
          "choiceText": "Average",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "HJQ6fSLOxZ",
          "choiceText": "Good",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 4
        }, {
          "choiceId": "rkEpfrIuxW",
          "choiceText": "Excellent",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00010",
        "kpiMasterId": "KPI00009",
        "kpiName": "Personalized Attention",
        "kpiScore": 5,
        "kpiType": "PERSONALIZED_ATTENTION",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "B1pzB8ugZ",
        "questionText": "Did the finance plan meet your needs?",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 3,
        "ratingScaleChartTypeName": "Graded Scale",
        "status": "ACTIVE"
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "ry86fS8dx-",
          "choiceText": "Excellent",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "BJP6MrLdlb",
          "choiceText": "Good",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 4
        }, {
          "choiceId": "BJdTMrUulZ",
          "choiceText": "Average",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SyFpMHUOl-",
          "choiceText": "Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "Hy9pMrIdlZ",
          "choiceText": "Very Poor",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiScore": 1,
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "SkrpMHUdg-",
        "questionText": "Was the Paper work fast & efficient? ",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 2,
        "ratingScaleChartTypeName": "Chain",
        "status": "ACTIVE"
      }],
      "seqNo": 6,
      "innerPainArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "ry86fS8dx-",
          "choiceText": "Excellent",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "BJP6MrLdlb",
          "choiceText": "Good",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 4
        }, {
          "choiceId": "BJdTMrUulZ",
          "choiceText": "Average",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SyFpMHUOl-",
          "choiceText": "Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "Hy9pMrIdlZ",
          "choiceText": "Very Poor",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiScore": 1,
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "SkrpMHUdg-",
        "questionText": "Was the Paper work fast & efficient? ",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 2,
        "ratingScaleChartTypeName": "Chain",
        "status": "ACTIVE"
      }],
      "innerAverageArr": [],
      "innerDelightArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "H1lTzHUOxW",
          "choiceText": "Very Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "Hy-6MHLOxb",
          "choiceText": "Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "B1fazHL_x-",
          "choiceText": "Average",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "HJQ6fSLOxZ",
          "choiceText": "Good",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 4
        }, {
          "choiceId": "rkEpfrIuxW",
          "choiceText": "Excellent",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00010",
        "kpiMasterId": "KPI00009",
        "kpiName": "Personalized Attention",
        "kpiScore": 5,
        "kpiType": "PERSONALIZED_ATTENTION",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "B1pzB8ugZ",
        "questionText": "Did the finance plan meet your needs?",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 3,
        "ratingScaleChartTypeName": "Graded Scale",
        "status": "ACTIVE"
      }],
      "innerKPIScoreArr": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "rJxGV4k1gZ",
          "choiceText": "which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "fieldSizeNumChars": 2,
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00005",
        "kpiMasterId": "KPI00005",
        "kpiName": "Customer Pain Story",
        "kpiType": "CUSTOMER_PAIN",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "HyGVVJyxb",
        "questionText": "Please share your pain stories on finance",
        "questionType": "Free Text",
        "questionTypeId": 4,
        "status": "ACTIVE",
        "kpiScore": 0,
        "processStepNameTemp": "Financing"
      }]
    }, {
      "isMandatory": false,
      "masterId": "PST00007",
      "processStepId": "PST00027",
      "processStepName": "Vehicle Registration",
      "processStepType": "VEHICLE_REGISTRATION",
      "questionList": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "SyGGVN1yeZ",
          "choiceText": "which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "fieldSizeNumChars": 2,
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00005",
        "kpiMasterId": "KPI00005",
        "kpiName": "Customer Pain Story",
        "kpiType": "CUSTOMER_PAIN",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "BJbzNEkJgb",
        "questionText": "Share your pain Stories on Vehicle Registration",
        "questionType": "Free Text",
        "questionTypeId": 4,
        "status": "ACTIVE",
        "kpiScore": 0,
        "processStepNameTemp": "Vehicle Registration"
      }],
      "seqNo": 7,
      "innerPainArr": [],
      "innerAverageArr": [],
      "innerDelightArr": [],
      "innerKPIScoreArr": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "SyGGVN1yeZ",
          "choiceText": "which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "fieldSizeNumChars": 2,
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00005",
        "kpiMasterId": "KPI00005",
        "kpiName": "Customer Pain Story",
        "kpiType": "CUSTOMER_PAIN",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "BJbzNEkJgb",
        "questionText": "Share your pain Stories on Vehicle Registration",
        "questionType": "Free Text",
        "questionTypeId": 4,
        "status": "ACTIVE",
        "kpiScore": 0,
        "processStepNameTemp": "Vehicle Registration"
      }]
    }, {
      "isMandatory": false,
      "masterId": "PST00005",
      "processStepId": "PST00025",
      "processStepName": "Insurance",
      "processStepType": "INSURANCE",
      "questionList": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "r1Ef4EJ1eW",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "fieldSizeNumChars": 2,
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00003",
        "kpiMasterId": "KPI00003",
        "kpiName": "Customer Delight Story",
        "kpiType": "CUSTOMER_DELIGHT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "rkQG4Vk1lW",
        "questionText": "Share your delight stories on Insurance",
        "questionType": "Free Text",
        "questionTypeId": 4,
        "status": "ACTIVE",
        "kpiScore": 0
      }, {
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "H1IGEVkyeb",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "fieldSizeNumChars": 2,
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00005",
        "kpiMasterId": "KPI00005",
        "kpiName": "Customer Pain Story",
        "kpiType": "CUSTOMER_PAIN",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "ByrfNNJ1eZ",
        "questionText": "Share your Pain stories on Insurance ",
        "questionType": "Free Text",
        "questionTypeId": 4,
        "status": "ACTIVE",
        "kpiScore": 0,
        "processStepNameTemp": "Insurance"
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "Syn6zSIdxb",
          "choiceText": "Very Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "Hy6aMHUueb",
          "choiceText": "Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "HyAaMrUuxW",
          "choiceText": "Average",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SJJepzr8dxb",
          "choiceText": "Good",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 4
        }, {
          "choiceId": "BkggTGrLuxZ",
          "choiceText": "Excellent",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00010",
        "kpiMasterId": "KPI00009",
        "kpiName": "Personalized Attention",
        "kpiScore": 5,
        "kpiType": "PERSONALIZED_ATTENTION",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "r1oaGB8uxb",
        "questionText": "Did the Insurance plan meet your needs?",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 3,
        "ratingScaleChartTypeName": "Graded Scale",
        "status": "ACTIVE"
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "SkfeTzHIdlb",
          "choiceText": "Excellent",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "ByQlpGr8OxZ",
          "choiceText": "Good",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 4
        }, {
          "choiceId": "H1VlTzrLOeb",
          "choiceText": "Average",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "r1rgaMrU_lW",
          "choiceText": "Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "r1Ul6zSIOeZ",
          "choiceText": "Very Poor",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiScore": 1,
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "SyZgTGrIdgZ",
        "questionText": "Was the Paper work fast and efficient",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 2,
        "ratingScaleChartTypeName": "Chain",
        "status": "ACTIVE"
      }],
      "seqNo": 7,
      "innerPainArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "SkfeTzHIdlb",
          "choiceText": "Excellent",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "ByQlpGr8OxZ",
          "choiceText": "Good",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 4
        }, {
          "choiceId": "H1VlTzrLOeb",
          "choiceText": "Average",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "r1rgaMrU_lW",
          "choiceText": "Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "r1Ul6zSIOeZ",
          "choiceText": "Very Poor",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00006",
        "kpiMasterId": "KPI00006",
        "kpiName": "Time & Effort",
        "kpiScore": 1,
        "kpiType": "TIME_EFFORT",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "SyZgTGrIdgZ",
        "questionText": "Was the Paper work fast and efficient",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 2,
        "ratingScaleChartTypeName": "Chain",
        "status": "ACTIVE"
      }],
      "innerAverageArr": [],
      "innerDelightArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "Syn6zSIdxb",
          "choiceText": "Very Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }, {
          "choiceId": "Hy6aMHUueb",
          "choiceText": "Poor",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 2
        }, {
          "choiceId": "HyAaMrUuxW",
          "choiceText": "Average",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 3
        }, {
          "choiceId": "SJJepzr8dxb",
          "choiceText": "Good",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 4
        }, {
          "choiceId": "BkggTGrLuxZ",
          "choiceText": "Excellent",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00010",
        "kpiMasterId": "KPI00009",
        "kpiName": "Personalized Attention",
        "kpiScore": 5,
        "kpiType": "PERSONALIZED_ATTENTION",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "r1oaGB8uxb",
        "questionText": "Did the Insurance plan meet your needs?",
        "questionType": "Rating Scale",
        "questionTypeId": 3,
        "ratingScaleChartTypeId": 3,
        "ratingScaleChartTypeName": "Graded Scale",
        "status": "ACTIVE"
      }],
      "innerKPIScoreArr": []
    }, {
      "isMandatory": false,
      "masterId": "PST00008",
      "processStepId": "PST00028",
      "processStepName": "Vehicle Delivery",
      "processStepType": "VEHICLE_DELIVERY",
      "questionList": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "BJxonc8de-",
          "choiceText": "Yes",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "B1bjn5UOeZ",
          "choiceText": "No",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00010",
        "kpiMasterId": "KPI00009",
        "kpiName": "Personalized Attention",
        "kpiType": "PERSONALIZED_ATTENTION",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "H1o2qLOgb",
        "questionText": "Were all your questions answered at the time of delivery ?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "r1mi258dlb",
          "choiceText": "Yes",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "HyNohqIOlW",
          "choiceText": "No",
          "displaySeqNum": 2,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00010",
        "kpiMasterId": "KPI00009",
        "kpiName": "Personalized Attention",
        "kpiType": "PERSONALIZED_ATTENTION",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "ByGjn5UdeZ",
        "questionText": "Was enough time spent with you at the delivery time ?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 1
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "H18i2cIOeb",
          "choiceText": "Yes",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "Hkwin5IOxb",
          "choiceText": "No",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00011",
        "kpiMasterId": "KPI00010",
        "kpiName": "Interaction Experience",
        "kpiType": "INTERACTION_EXPERIENCE",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "HySs39Uul-",
        "questionText": "Was the delivery of your vehicle a pleasant experience ?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }, {
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "H1tj3cIdx-",
          "choiceText": "Yes",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "H15sn5Iue-",
          "choiceText": "No",
          "displaySeqNum": 2,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00008",
        "kpiMasterId": "KPI00008",
        "kpiName": "Service Quality",
        "kpiType": "SERVICE_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "Skdi2q8Oxb",
        "questionText": "Was the exterior clean and undameged",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 0
      }],
      "seqNo": 9,
      "innerPainArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "r1mi258dlb",
          "choiceText": "Yes",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "HyNohqIOlW",
          "choiceText": "No",
          "displaySeqNum": 2,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00010",
        "kpiMasterId": "KPI00009",
        "kpiName": "Personalized Attention",
        "kpiType": "PERSONALIZED_ATTENTION",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "ByGjn5UdeZ",
        "questionText": "Was enough time spent with you at the delivery time ?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 1
      }],
      "innerAverageArr": [],
      "innerDelightArr": [{
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "BJxonc8de-",
          "choiceText": "Yes",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "B1bjn5UOeZ",
          "choiceText": "No",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00010",
        "kpiMasterId": "KPI00009",
        "kpiName": "Personalized Attention",
        "kpiType": "PERSONALIZED_ATTENTION",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "H1o2qLOgb",
        "questionText": "Were all your questions answered at the time of delivery ?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "H18i2cIOeb",
          "choiceText": "Yes",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 5
        }, {
          "choiceId": "Hkwin5IOxb",
          "choiceText": "No",
          "displaySeqNum": 2,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false,
          "kpiScore": 1
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00011",
        "kpiMasterId": "KPI00010",
        "kpiName": "Interaction Experience",
        "kpiType": "INTERACTION_EXPERIENCE",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "HySs39Uul-",
        "questionText": "Was the delivery of your vehicle a pleasant experience ?",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 5
      }],
      "innerKPIScoreArr": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "H1tj3cIdx-",
          "choiceText": "Yes",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "H15sn5Iue-",
          "choiceText": "No",
          "displaySeqNum": 2,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": false,
        "isPicture": false,
        "kpiId": "KPI00008",
        "kpiMasterId": "KPI00008",
        "kpiName": "Service Quality",
        "kpiType": "SERVICE_QUALITY",
        "mandatoryType": "NONE",
        "otherChoiceIncluded": false,
        "processStepMandatory": false,
        "questionId": "Skdi2q8Oxb",
        "questionText": "Was the exterior clean and undameged",
        "questionType": "Single Select",
        "questionTypeId": 1,
        "status": "ACTIVE",
        "kpiScore": 0
      }]
    }, {
      "isMandatory": true,
      "masterId": "PST00006",
      "processStepId": "PST00026",
      "processStepName": "Your Overall Experience",
      "processStepType": "OVERALL_EXP_TEXT",
      "questionList": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "Sk8c1_j4gfhgmg",
          "choiceText": "0",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk8c1fg1g",
          "choiceText": "1",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk2c1fg1g",
          "choiceText": "2",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk3c1fg1g",
          "choiceText": "3",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk4c1fg1g",
          "choiceText": "4",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk5c1fg1g",
          "choiceText": "5",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk6c1fg1g",
          "choiceText": "6",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk7c1fg1g",
          "choiceText": "7",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk0c1og1g",
          "choiceText": "8",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk9c1fg1g",
          "choiceText": "9",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk10v1Ik1g",
          "choiceText": "10",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": true,
        "isPicture": false,
        "kpiId": "KPI00008_BE20",
        "kpiMasterId": "KPI00013",
        "kpiName": "Net Promoter Score",
        "kpiType": "NPS_SCORE",
        "mandatoryType": "NPS_SCORE",
        "otherChoiceIncluded": false,
        "processStepMandatory": true,
        "questionId": "ryke_C1Hh1g",
        "questionText": "Based on this experience you had with us, how likely are you to recommend us to your family and friends?",
        "questionType": "Rating Scale",
        "ratingScaleChartTypeName": "Odometer",
        "status": "ACTIVE",
        "kpiScore": 0
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "dsasdryT9C15h7l",
          "choiceText": "which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": true,
        "isPicture": false,
        "kpiId": "KPI00005",
        "kpiMasterId": "KPI00005",
        "kpiName": "Customer Pain Story",
        "kpiType": "CUSTOMER_PAIN",
        "mandatoryType": "OVERALL_EXP_TEXT",
        "otherChoiceIncluded": false,
        "processStepMandatory": true,
        "questionId": "rykeqC1chmg",
        "questionText": "(If rated less than 9) If your experience purchasing this vehicle from us was not good, please tell us why you felt this way.",
        "questionType": "Free Text",
        "status": "ACTIVE",
        "kpiScore": 0
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "dsasdryT9C15h7l",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": true,
        "isPicture": false,
        "kpiId": "KPI00003",
        "kpiMasterId": "KPI00003",
        "kpiName": "Customer Delight Story",
        "kpiType": "CUSTOMER_DELIGHT",
        "mandatoryType": "OVERALL_EXP_TEXT",
        "otherChoiceIncluded": false,
        "processStepMandatory": true,
        "questionId": "BkrcCJ52Qx",
        "questionText": "(If rated 9 or 10) We are delighted to hear your feedback. Would you like to say a few words about which aspects of your experience with us stand out?",
        "questionType": "Free Text",
        "status": "ACTIVE",
        "kpiScore": 0
      }],
      "seqNo": 10,
      "innerPainArr": [],
      "innerAverageArr": [],
      "innerDelightArr": [],
      "innerKPIScoreArr": [{
        "addKpiScoreFlag": false,
        "choiceList": [{
          "choiceId": "Sk8c1_j4gfhgmg",
          "choiceText": "0",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk8c1fg1g",
          "choiceText": "1",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk2c1fg1g",
          "choiceText": "2",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk3c1fg1g",
          "choiceText": "3",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk4c1fg1g",
          "choiceText": "4",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk5c1fg1g",
          "choiceText": "5",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk6c1fg1g",
          "choiceText": "6",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk7c1fg1g",
          "choiceText": "7",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk0c1og1g",
          "choiceText": "8",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk9c1fg1g",
          "choiceText": "9",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }, {
          "choiceId": "Sk10v1Ik1g",
          "choiceText": "10",
          "displaySeqNum": 1,
          "isAnswer": false,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": true,
        "isPicture": false,
        "kpiId": "KPI00008_BE20",
        "kpiMasterId": "KPI00013",
        "kpiName": "Net Promoter Score",
        "kpiType": "NPS_SCORE",
        "mandatoryType": "NPS_SCORE",
        "otherChoiceIncluded": false,
        "processStepMandatory": true,
        "questionId": "ryke_C1Hh1g",
        "questionText": "Based on this experience you had with us, how likely are you to recommend us to your family and friends?",
        "questionType": "Rating Scale",
        "ratingScaleChartTypeName": "Odometer",
        "status": "ACTIVE",
        "kpiScore": 0
      }, {
        "addKpiScoreFlag": true,
        "choiceList": [{
          "choiceId": "dsasdryT9C15h7l",
          "choiceText": "which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces",
          "displaySeqNum": 1,
          "isAnswer": true,
          "isOtherChoice": false,
          "isPicture": false
        }],
        "isMandatory": true,
        "isPicture": false,
        "kpiId": "KPI00005",
        "kpiMasterId": "KPI00005",
        "kpiName": "Customer Pain Story",
        "kpiType": "CUSTOMER_PAIN",
        "mandatoryType": "OVERALL_EXP_TEXT",
        "otherChoiceIncluded": false,
        "processStepMandatory": true,
        "questionId": "rykeqC1chmg",
        "questionText": "(If rated less than 9) If your "
      }]
    }];
    setTimeout(() => {
      this.setProcessStepcircle();
    }, 5);
    this.droppedFruits = [];
    this.allProcessStepsArray = [];
    this.tempDeletedFakeObj = [];
    for (var i = 0; i < this.selectedProcessStep; i++) {
      var dynamicArrName = this.dynamicArrName + i;
      this.allProcessStepsArray.push({
        [dynamicArrName] : []
      })
    }
    console.log(this.allProcessStepsArray);
  }

  setIcon(proccess) {
    if (proccess == "Finding Us") {
      return "icon-find-us";
    } else if (proccess == "Vehicle Registration") {
      return "icon-registration";
    } else if (proccess == "Your Overall Experience") {
      return "icon-overall-exp";
    } else if (proccess == "Financing") {
      return "icon-finance";
    } else if (proccess == "Insurance") {
      return "icon-insurance";
    } else if (proccess == "Product Value") {
      return "icon-product";
    } else if (proccess == "Showroom") {
      return "icon-showroom";
    } else if (proccess == "Test Drive") {
      return "icon-test-drive";
    } else if (proccess == "Sales Staff") {
      return "icon-sales-staff";
    } else if (proccess == "Vehicle Delivery") {
      return "icon-delivery";
    }
  }

  setProcessStepcircle() {
    var items = document.querySelectorAll('.circle .card');
    for (var i = 0, l = items.length; i < l; i++) {
      items[i]['style'].left = (48 - 50 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
      items[i]['style'].top = (48 + 50 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
    }
  }

  //draggggg.....

  dropOnBall(e: any, arrIndex) {
    console.log(e.dragData);
    console.log(this.dynamicArrName + arrIndex);
    console.log(this.allProcessStepsArray);
    console.log(this.allProcessStepsArray[arrIndex][this.dynamicArrName + arrIndex]);
    if(typeof this.allProcessStepsArray[arrIndex][this.dynamicArrName + arrIndex] === 'undefined' || this.allProcessStepsArray[arrIndex][this.dynamicArrName + arrIndex].length == 0){
      var matchIndex = this.fakeobj.indexOf(e.dragData);
      console.log('my indexxxxx is', matchIndex);
      if(matchIndex == -1){
        if(this.tempIndex != -1){
          console.log('log -1 indexx', e.dragData , this.tempIndex,this.dynamicArrName + this.tempIndex, e.dragData[this.dynamicArrName + this.tempIndex]);
          this.allProcessStepsArray[arrIndex][this.dynamicArrName + arrIndex] = e.dragData[this.dynamicArrName + this.tempIndex];
          delete this.allProcessStepsArray[this.tempIndex][this.dynamicArrName + this.tempIndex];
        }
      }
      else {
        this.allProcessStepsArray[arrIndex][this.dynamicArrName + arrIndex] = e.dragData;
        this.tempDeletedFakeObj.push(this.fakeobj[matchIndex]);
        this.fakeobj.splice(matchIndex,1);
      }

    }
    else {
      alert('already avail');
    }

    console.log(this.allProcessStepsArray[arrIndex]);

  }

  onreverseDrop(e: any){
    console.log(e.dragData);
    if(typeof this.tempIndex != 'undefined' || this.tempIndex || this.tempIndex != -1){
      this.fakeobj.push(e.dragData[this.dynamicArrName + this.tempIndex]);
      delete this.allProcessStepsArray[this.tempIndex][this.dynamicArrName + this.tempIndex];
    }

    this.tempIndex = -1;
  }

  startDragFromBall(e: any,  strtDragIndex){
    console.log(this.allProcessStepsArray[strtDragIndex]);
    this.tempIndex = strtDragIndex;
    console.log(strtDragIndex);
  }
  startDragFromList(e: any,  strtDragIndex){
    this.tempIndex = -1;
    console.log(this.tempIndex);
  }

  endDragFromBall(e: any,  endDragIndex){
    console.log(endDragIndex);
  }



}
