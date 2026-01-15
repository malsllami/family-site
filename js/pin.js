function copyPin(id){
  const input = document.getElementById(id);
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("تم نسخ الرمز");
}
