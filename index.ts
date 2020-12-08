import { of } from 'rxjs'; 
import { /* your operator here */ } from 'rxjs/operators';

/**
 * Choose one or more operators from the RxJS Api: https://rxjs-dev.firebaseapp.com/Api
 * Create an example using those operators. Make it useful. Try to teach us something.
 *  
 * Add a comment or console log that includes the following:
 *  - The name of the operator
 *  - A description of how the operator works
 *  - Answers to the following questions about the operator:
 *    1. What effect does multiple subscribers have on this operator? 
 *    (eg invoked several times, multicast, etc)
 *    2. What effect does the subscription completing have on the operator?
 *    3. Is this operator affected differently by hot/cold observables?
 *    4. In a chain of operators, how does placement of this operator matter?
 *
 * Feel free to change the source or the subscription to best present you operator.
 */

console.clear();

/**
 * Which operator are you demonstrating?
 */
const operatorName = ""

/**
 * What does the operator do?
 */
const blurb = ""

const source$ = of(1,2,3).pipe(
  /* your operator here */
);


console.log("OPERATOR:", operatorName);
console.log("Description:", blurb);
console.log("OUTPUT:");
source$.subscribe(x => console.log(x));