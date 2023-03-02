let son = prompt("5 + 5 =");
let bolish = prompt("10 / 2 =");
let kopaytirish =prompt("5 * 2 =");
const small = function (a, b, c) {
  if (a == 10) {
    alert("true");
  } else if (a == 0) {
    alert("Qatorni to'ldiring!");
  }else if(a <= 9 && a >= 10){
    alert("false");
  }
  else if (b == 5) {
    alert("true");
  } else if (b == 0) {
    alert("Qatorni to'ldiring!");
  }else if(b <= 4 && b >= 6){
    alert("false");
  }
  else if(c == 10){
    alert("true")
  }else if(c == 0){
    alert("Qatorni to'ldiring!")
  }else{
    alert("false")
  }
};
alert(small(son));
alert(small(bolish));
alert(small(kopaytirish));