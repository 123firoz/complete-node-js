function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b; 
}

// module.exports = {addFn:add, subFn:sub}
module.exports = {add,sub};


// ya aise bhi likh sakte hai  
// exports.add =(a,b)=> a+b;
// exports.myDateTime = function(){
//     return Date();
// }