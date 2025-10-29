import styles from "./Arrays.module.scss";
import React, { useState } from 'react';
import { methodSplice } from './splice';
import { methodSlice } from './slice';
import { methodConcat } from './concat';



const Arrays = () => {

  const arrays = [
    {id: 1, name: "splice", info: "splice - сращивание. Изменяет исходный массив, и возвращает массив с удаленными элементами.", method: methodSplice},
    {id: 2, name: "slice", info: "Возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end). start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.", method: methodSlice},
    {id: 3, name: "concat", info: "Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения. Синтаксис: arr.concat(arg1, arg2...) Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями. В результате – новый массив, включающий в себя элементы из arr, затем arg1, arg2 и так далее. Если аргумент argN – массив, то копируются все его элементы. Иначе копируется сам аргумент.", method: methodConcat},
  ];

  const [info, setInfo] = useState('Здесь будет информация');

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  // const methodSpliceHandler = (e) => {
  //   methodSplice();
  //   setInfo('splice - сращивание. Изменяет исходный массив, и возвращает массив с удаленными элементами.')
  // }
  // const methodSliceHandler = (e) => {
  //   methodSlice();
  //   setInfo('Возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end). start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.')
  // }
  // const methodConcatHandler = (e) => {
  //   methodConcat();
  //   setInfo('Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения. Синтаксис: arr.concat(arg1, arg2...) Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями. В результате – новый массив, включающий в себя элементы из arr, затем arg1, arg2 и так далее. Если аргумент argN – массив, то копируются все его элементы. Иначе копируется сам аргумент.')
  // }

  const methodHandler = (array, index) => {
    array.method();
    setInfo(array.info);

    setActiveButtonIndex(index === activeButtonIndex ? null : index);
  }
    
  return (
    <div>
      <h2>
        Arrays
      </h2>
      {/* <button onClick={() => methodSpliceHandler()}>splice</button>
      <button onClick={() => methodSliceHandler()}>slice</button>
      <button onClick={() => methodConcatHandler()}>concat</button> */}
      {arrays.map((array, index) => <button 
                                      key={index} 
                                      onClick={() => methodHandler(array, index)}
                                      className={activeButtonIndex === index ? styles.active : ''}
                                    >
                                      {array.name}
                                    </button>)}
      <p className={styles.info}>
        {info}
      </p>
    </div>
  )
}

export default Arrays;
