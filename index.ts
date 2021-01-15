import { of } from "rxjs";
import { pairwise } from "rxjs/operators";

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
const operatorName = "pairwise";

/**
 * What does the operator do?
 */
const blurb =
  "Pairwise groups pairs of consecutive emissions together and emits them as an array of two values. The observable only emits after the base observable emits twice or more. You can use startWith in conjunction with pairwise to have a default beginning value so the first emission of the base observable makes it through";

const source$ = of(1, 2, 3).pipe(pairwise());

console.log("OPERATOR:", operatorName);
console.log("Description:", blurb);
console.log(`1. What effect does multiple subscribers have on 'pairwise'? \n\n
  Answer: Multiple subscribers doesn't have any effect on this operator. It will emit values the same regardless of the number of subscribers`);

console.log(`2. What effect does the subscription completing have on 'pairwise'? \n\n
  Answer: The subscription completing is actually caused by pairwise, so it doesn't have any effect on it. If you unsubscribe any other way from the source observable, then pairwise won't do anything else or care.`);

console.log(`3. Is the 'pairwise' operator affected differently by hot/cold observables? \n\n
  Answer: It isn't affected differently. When 'pairwise' is in the pipeline, and data runs through it, it will act`);

console.log(`4. In a chain of operators, how does placement of this operator matter? \n\n
  Answer: `);

console.log("OUTPUT:");
source$.subscribe(x => console.log(x));
