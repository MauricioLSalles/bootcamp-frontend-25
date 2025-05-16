let promise = new Promise(() => {
  setTimeout(() => {
    console.log(2);
}, 5000);
})

setTimeout(()=>console.log(3));

console.log(1)
