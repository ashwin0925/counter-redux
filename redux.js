let h1 = document.querySelector('h1');
let increment = document.querySelector('.increment')
let decrement = document.querySelector('.decrement')
let reset = document.querySelector('.reset')

function counter(state = 0, action) {
  switch (action.type) {
    case 'inc':
      return state + 1
    case 'dec':
      return state - 1
    case 'reset':
      return 0;
    default:
      return state
  }
}

let count = Redux.createStore(counter);
count.subscribe(() => h1.textContent = count.getState());

function incrementCount() {
  count.dispatch({ type: "inc" });
  // h1.textContent = count.getState();
}

function decrementCount() {
  count.dispatch({ type: "dec" });
  // h1.textContent = count.getState();
}

function resetCount() {
  count.dispatch({ type: "reset" });
  // h1.textContent = count.getState();
}

increment.addEventListener('click', incrementCount);
decrement.addEventListener('click', decrementCount);
reset.addEventListener('click', resetCount);


// h1.textContent = count.getState()