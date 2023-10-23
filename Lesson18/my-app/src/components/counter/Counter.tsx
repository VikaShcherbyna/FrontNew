import { useState } from "react";

// первый вариант объявления фкнеции
// const Counter: FC=()=>(
//     <div>
//         <h1>
//             Counter
//         </h1>
//     </div>
// )
// export default Counter

//второй вариант
function Counter(): JSX.Element {
    //эт хук*хук-это название для стандартных методов работы в Реакт
    //этот хук работает с состоянием - каким-то значением, чаще ищменяемым
    //внутри хука есть переменная - хранилизе значений и фкнцуия, которое значение изменяет
    //назвается как мы хотим но принято называть фкнцуию со слова set
    //например setName или setvalue
    //хуки имеют названия которые мы не изменяем  они установлены в Реакт
    //и нужно не забывать их импортировать
    //названия хуков начинаются со слова use
    
    const[counter,setCounter]=useState(100) //counter переменная ,setCounter - функция которая ее изменяет . sueState(0) присваиваем первой значение по умолчанию ноль
    const[city,setCity]=useState('Berlin')

    //функция счетчик, она использует фцнкуию изменения состояния
    //принимает старое состояние и меняет на новое, прибавляя один
    function handlePlus(): void{
        setCounter(counter+1)
    }
    function handleMin(): void{
        setCounter(counter-1)
    }
    function ChangeToParis(): void{
        setCity('Paris')
    }

  return (
    <div className="App">
      <p> Counter </p> 
  
      <span>{counter} </span>
      <button onClick={handlePlus}>Прибавить</button>
      <button onClick={handleMin}>Отнять</button>
      <button onClick={ChangeToParis}>Go to Paris</button>
    </div>
  );
}
export default Counter