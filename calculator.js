function buttonclick(val){
    document.getElementById("body").value+=val
}
function cleardisplay(){
    document.getElementById("body").value=""
}
function equalclick(){
    var text=document.getElementById("body").value
    var result=eval(text)
    document.getElementById('body').value=result

}