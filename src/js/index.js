// Write your code here...
const multiplicand = document.querySelector("input[name=multiplicand]");
const multiplierLimit = document.querySelector("input[name=multiplierLimit]");
const controls = document.querySelector(".controls");
const createBtn = document.querySelector("#createBtn");
const stepBtn = document.querySelector("#stepThrough");
const entireTableBtn = document.querySelector("#entireTable");
const table = document.querySelector(".table");
const tableDetails = document.querySelector(".table-details");
const delayMS = document.querySelector("input[name=delay]");

const Row = (str) => `<div class="row">${str}</div>`;
const setupUI = () => {
  // Unhide (if initially hidden) controls
  controls.style.visibility = "visible";
  // Empty out the table
  table.innerHTML = "";
  // Unhide (if initially hidden) table
  table.style.visibility = "visible";
  // Enable 'Entire Table' button
  entireTableBtn.removeAttribute("disabled");
  // If playback delay is > 0ms, then disable the step button
  // else enable it
  if (Number(delayMS.value) !== 0) {
    stepBtn.setAttribute("disabled", true);
  } else {
    stepBtn.removeAttribute("disabled");
  }

  // Populate table details
  tableDetails.innerText = `Table of ${multiplicand.value} (1 - ${multiplierLimit.value})`;
  // Display table details
  tableDetails.style.visibility = "visible";
};

let tableIterator;
const delayExec = (delay = 1000) =>
  new Promise((resolve) => setTimeout(() => resolve(), delay));

const tableFn = async function* (mpc, mlimit = 10, delay) {
  let step = 1;
  while (step <= mlimit) {
    await delayExec(delay);
    yield `${mpc} x ${step} = ${mpc * step}`;
    step++;
  }
};

createBtn.addEventListener("click", () => {
  setupUI();
  tableIterator = tableFn(
    Number(multiplicand.value),
    Number(multiplierLimit.value),
    Number(delayMS.value)
  );
});

stepBtn.addEventListener("click", async () => {
  entireTableBtn.setAttribute("disabled", true);
  let { value, done } = await tableIterator.next();
  if (!done) {
    table.innerHTML += Row(value);
  }
});

entireTableBtn.addEventListener("click", async () => {
  table.innerHTML = "";
  stepBtn.setAttribute("disabled", true);
  // let elems = [
  //   ...tableFn(Number(multiplicand.value), Number(multiplierLimit.value)),
  // ];
  //table.innerHTML = elems.map((e) => Row(e)).join("");
  for await (let elem of tableIterator) {
    table.innerHTML += Row(elem);
  }
});
