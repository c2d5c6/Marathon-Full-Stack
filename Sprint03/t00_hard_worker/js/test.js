/*
  Task name: Hard worker
*/

worker = new HardWorker;

worker.name = 'Bruce';
console.log(worker.name);

worker.age = 50;
worker.salary = 1500;
console.log(worker.toObject());

worker.name = 'Linda';
worker.age = 140;
console.log(worker.toObject());