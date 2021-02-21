let Random = () =>{
    let get_value = document.getElementById('User_Value').value;
    let value = [];
    let upper=0,lower=2,num=1,sym=3;
    for(let i = 0 ; i < 5 ; i++)
    {  
        let uppercase = String.fromCharCode(Math.floor(Math.random()*26)+65);
        value[upper] = uppercase;
        let number = String.fromCharCode(Math.floor(Math.random()*9)+48);
        value[num]  = number;
        let lowercase = String.fromCharCode(Math.floor(Math.random()*26)+97);
        value[lower] = lowercase;
        let symbol = String.fromCharCode(Math.floor(Math.random()*14)+33);
        value[sym] = symbol;
        upper+=16;
        lower+=16;
        num+=16;
        sym+=16;
    }
    let result = value.join('');
    console.log(result.length)
     result = result.substr(0,get_value)
     console.log(result.length)
   
    document.getElementById('demo').innerHTML = result;
    
 };
// Random()