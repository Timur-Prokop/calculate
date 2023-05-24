function display(num){
    document.getElementById('result').value += num;
    return num
    
}
function clean(){
    document.getElementById('result').value = ''
}

function solve(){
    let x = document.getElementById('result').value
    let numbers = eval(x);
    document.getElementById('result').value = numbers
    return numbers
}