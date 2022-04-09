
function convert(){
    let c= document.getElementById('data').value;
    var f=(c*1.8)+32;
 
    document.getElementById('res').value = f;
}
function setfocus(){
    document.getElementById('res').value="";
    document.getElementById('data').value="";
}