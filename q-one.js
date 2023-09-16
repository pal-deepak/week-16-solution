function reverse(input)
{
   return input.split("").reverse().join("")
}
let input="Deepak"

function deleay()
{
    setTimeout(()=>
    {
        let reversed=reverse(input);
        console.log(reversed);
    },2000)
}
deleay();