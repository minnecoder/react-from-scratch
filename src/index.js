import { add, subtract } from './module';

if (module.hot) {
    module.hot.accept();
  }
const resultA = add(2, 3);
const resultB = subtract(5, 1);
console.log(resultA, resultB);