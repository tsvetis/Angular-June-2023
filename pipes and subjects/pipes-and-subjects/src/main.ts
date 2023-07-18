import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import {
//   AsyncSubject,
//   BehaviorSubject,
//   Observable,
//   ReplaySubject,
//   Subject,
//   map,
// } from 'rxjs';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Promise Demo
// const p = new Promise((resolve) => {
//   resolve(100);
// });
// p.then(console.log);

// const o$ = new Observable<number>((obs) => {
//   obs.next(1000);
//   obs.next(2000);
//   obs.next(3000);

//   obs.error(new Error('bad error right here!'));

//   return () => {
//     // cleanup
//   };
// });

// o$.pipe(map((num: number) => num + 1)).subscribe({
//   next: console.log,
//   error: (err) => console.error(`Error: ${err}`),
//   complete: () => console.log('Obs completed!'),
// });

// function interval(delay: number, count?: number) {
//   let counter = 0;
//   return new Observable((obs) => {
//     if (counter === count) {
//       obs.complete();
//       return;
//     }

//     const i = setInterval(() => {
//       obs.next(counter++);
//     }, delay);

//     return () => {
//       debugger;
//       clearInterval(i);
//     };
//   });
// }

// const subscription = interval(1000, 8).subscribe({
//   next: console.log,
//   error: (err) => console.error(`Error: ${err}`),
//   complete: () => console.log('Obs completed!'),
// });

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 3000);

// SUBJECTS
// const subj$$ = new Subject();
// subj$$.subscribe(console.log); // A
// subj$$.next(123); // A

// subj$$.subscribe(console.log); // B
// subj$$.subscribe(console.log); // C
// subj$$.next(400); // A, B, C

// setTimeout(() => {
//   subj$$.subscribe(console.log); // D
//   subj$$.next(100); // A, B, C, D

//   setTimeout(() => {
//     subj$$.subscribe(console.log); // E
//     subj$$.next(1001); // A, B, C, D, E
//   }, 2000);
// }, 2000);

// BEHAVIOR SUBJECTS
// const bSubj$$ = new BehaviorSubject(100);
// bSubj$$.subscribe((data) => console.log('Subscription 1: ', data));

// setTimeout(() => {
//   bSubj$$.next(200);
//   bSubj$$.next(210);
//   bSubj$$.next(220);
//   bSubj$$.next(230);
//   bSubj$$.subscribe((data) => console.log('Subscription 2: ', data));

//   setTimeout(() => {
//     bSubj$$.next(300);
//     bSubj$$.subscribe((data) => console.log('Subscription 3: ', data));
//   }, 2000);
// }, 2000);

// REPLAY SUBJECTS
// const rSubj$$ = new ReplaySubject(10);
// rSubj$$.next(1000);
// rSubj$$.subscribe((d) => console.log('Subscribe 1: ', d));

// for (let i = 1; i <= 30; i++) {
//   rSubj$$.next(i);
// }

// console.log('---------');
// rSubj$$.subscribe((d) => console.log('Subscribe 2: ', d));

// ASYNC SUBJECTS
// const aSubj$$ = new AsyncSubject();
// aSubj$$.next(1);
// aSubj$$.next(2);
// aSubj$$.next(3);
// aSubj$$.subscribe((d) => console.log('Subscribe 1: ', d));
// aSubj$$.next(5);
// aSubj$$.subscribe((d) => console.log('Subscribe 2: ', d));
// aSubj$$.complete();
