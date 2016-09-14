var names = ['Gedas', 'Tomas', 'Edgaras'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

var person = {
  name: 'Dalius',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();
