function Robot (name) {
  this.name = name;
}
function add (op1, op2) {
  this.name = this.name || 'Human';
  console.log(this.name + ' can count to ' + (op1 + op2));
}

const voltron = new Robot('Voltron');
// 'Human can count to 1' //0 + 1
// 'Voltron can count to 3' //1 + 2
// 'Voltron can count to 50' //20 + 3

add.call(name, 0, 1)
add.call(voltron, 1, 2);
add.call(voltron, 20, 3)