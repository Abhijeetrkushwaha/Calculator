function back() {
  var a = document.getElementById("answer").value;
  var b = a.substr(0, a.length - 1);
  document.getElementById("answer").value = b;
}
function z() {
  document.getElementById("answer").value = eval(answer.value);
}
