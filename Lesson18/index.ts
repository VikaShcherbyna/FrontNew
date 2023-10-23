//дженерики

function getFirstElelment<T>(arr:T[]):T{
    return arr[0];
}

console.log(getFirstElelment<string>(['Earth','Mars','saturn']));
console.log(getFirstElelment<number>([1,88,99]));

function consoleName<T>(name:T):void{
    console.log(name);
}
consoleName('Peter');