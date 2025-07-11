console.log("start");

setTimeout(() => console.log("timeOut"), 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("middle");

long();

for (let i = 0; i < 10000; i++) {}

console.log("end");

async function long() {
  console.log("start of function");
  await Promise.resolve().then(() => {
    console.log("middle of function");
  });
  console.log("end of function");
}
