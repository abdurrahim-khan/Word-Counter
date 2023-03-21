var textarea = document.getElementById("textarea");

textarea.addEventListener('input', function (){
    let str = this.value;
    let arr = str.split(" ");
    let arr2 = [];
    for(let i =0; i < arr.length; i++)
    {
        if(arr[i] != "")
        {
            arr2.push(arr[i]);
        }
    }
    document.getElementById("word").textContent = arr2.length;
    document.getElementById("char").textContent = str.length;

});