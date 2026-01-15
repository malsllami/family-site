function copyPin(id){
  const i=document.getElementById(id)
  i.select()
  document.execCommand('copy')
  alert('تم نسخ الرمز')
}
