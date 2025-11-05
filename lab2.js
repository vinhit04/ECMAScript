// var function scoped
function varExample() {
  if (true) {
    const x = 10;
  }
  console.log(x);
}
varExample();