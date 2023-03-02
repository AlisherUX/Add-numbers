let son = prompt("5 + 5 =");
let bolish = prompt("10 / 2 =");
let kopaytirish =prompt("5 * 2 =");
const small = function (a, b, c) {
  if (a == 10) {
    alert("true 5 + 5 = 10");
  } else if (a == 0) {
    alert("Qatorni to'ldiring!");
  }else if(a <= 9 && a >= 10){
    alert("false 5 + 5 = 10");
  }else if (b == 5) {
    alert("true 10 / 2 = 5");
  } else if (b == 0) {
    alert("Qatorni to'ldiring!");
  }else if(b <= 4 && b >= 6){
    alert("false 10 / 2 = 5");
  }else if(c == 10){
    alert("true 5 * 2 = 10")
  }else if(c == 0){
    alert("Qatorni to'ldiring!")
  }else{
    alert("false 5 * 2 = 10")
  }
};
alert(small(son));
alert(small(bolish));
alert(small(kopaytirish));