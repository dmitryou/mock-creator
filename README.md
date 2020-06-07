# mock-creator

Mock creator is npm package to create local mocks data fast and simple.
It creates Array/Object/Value by passed configuration.
Great for huge array mocks. Without copy/pasting data yourself.

## Installation

Use npm/ yarn to install mock-creator.

```bash
npm install mock-creator --save

yarn add mock-creator
```

## Usage

```javascript
var { 
    generators,
    types,
 } = require('../mock-creator');


const arrayConfig = {
    length: 5,
    fields: {
        id: {
            type: types.valueTypes.NUMBER,
            generatorType: types.generatorTypes.UNIQ,
        },
        age: {
            type: types.valueTypes.NUMBER,
            generatorType: types.generatorTypes.RANGE,
            range: [20, 30],
        },
        luckyNumber: {
            type: types.valueTypes.NUMBER,
            generatorType: types.generatorTypes.RANDOM,
        },
        staticName: {
            type: types.valueTypes.STRING,
            generatorType: types.generatorTypes.STATIC,
            value: 'Your Name',
        },
        randomString: {
            type: types.valueTypes.STRING,
            generatorType: types.generatorTypes.RANDOM,
        },
        uniqString: {
            type: types.valueTypes.STRING,
            generatorType: types.generatorTypes.UNIQ,
        },
        randomDate: {
            type: types.valueTypes.DATE,
            generatorType: types.generatorTypes.RANDOM,
        },
        dateInRange: {
            type: types.valueTypes.DATE,
            generatorType: types.generatorTypes.RANGE,
            range: [new Date(), new Date(2022, 10, 8)],
        }
    }
}

const results = generators.generateArray(arrayConfig);

console.log('results', results);

/**
OUTPUT WILL BE
results [
  {
    id: 0,
    age: 22,
    luckyNumber: 50629,
    staticName: 'Your Name',
    randomString: 'ANtr1lZ2m1HPIXd',
    uniqString: '0',
    randomDate: 2018-05-26T18:38:31.023Z,
    dateInRange: 2021-12-24T14:51:21.983Z
  },
  {
    id: 1,
    age: 29,
    luckyNumber: 1254,
    staticName: 'Your Name',
    randomString: 'YiXKFFuuXxtmmTk',
    uniqString: '1',
    randomDate: 2012-06-02T13:15:13.993Z,
    dateInRange: 2021-04-19T12:21:51.014Z
  },
  {
    id: 2,
    age: 26,
    luckyNumber: 72941,
    staticName: 'Your Name',
    randomString: 'UOkMqud7RnUJJeB',
    uniqString: '2',
    randomDate: 2018-03-31T11:35:37.485Z,
    dateInRange: 2021-04-11T21:29:20.458Z
  },
  {
    id: 3,
    age: 21,
    luckyNumber: 36390,
    staticName: 'Your Name',
    randomString: '25qB7QtWDz03gkx',
    uniqString: '3',
    randomDate: 2017-09-30T12:02:21.984Z,
    dateInRange: 2021-11-28T07:01:23.613Z
  },
  {
    id: 4,
    age: 21,
    luckyNumber: 75664,
    staticName: 'Your Name',
    randomString: 'dVQgm1UyE7vpCtD',
    uniqString: '4',
    randomDate: 2012-08-12T12:14:34.354Z,
    dateInRange: 2022-09-16T20:45:00.645Z
  }
]
**/

```

## Methods
| Method             | Type      | parameters    | Description
|--------------------|-----------|---------------|-------------------------------
| generateArray      | function  | configObject  | Generates array of objects.
| generateObject     | function  | configObject  | Generates object.
| generateValue      | function  | configObject  | Generates value.


## Constants
| Method             | Type      | Valid Values                             | Description
|--------------------|-----------|------------------------------------------|-------------------------------
| valueTypes         | string    | [ 'number', 'string', 'date' ]           | Generates array of objects.
| generatorTypes     | string    | [ 'uniq', 'static', 'random', 'range' ]  | Could be imported from generatorTypes.

## License
[MIT](https://choosealicense.com/licenses/mit/)