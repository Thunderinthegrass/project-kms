import styles from "./Arrays.module.scss";
import React, { useState } from 'react';
import { methodSplice } from './splice';
import { methodSlice } from './slice';
import { methodConcat } from './concat';
import { methodForEach } from "./forEach";



const Arrays = () => {

  const arrays = [
    {id: 1, name: "splice", info: "splice - сращивание. Изменяет исходный массив, и возвращает массив с удаленными элементами.", method: methodSplice, translate: "сращивание"},
    {id: 2, name: "slice", info: "Возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end). start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.", method: methodSlice, translate: "кусочек"},
    {id: 3, name: "concat", info: "Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения. Синтаксис: arr.concat(arg1, arg2...) Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями. В результате – новый массив, включающий в себя элементы из arr, затем arg1, arg2 и так далее. Если аргумент argN – массив, то копируются все его элементы. Иначе копируется сам аргумент.", method: methodConcat, translate: "от слова concatinate - объединение"},
    {id: 4, name: "forEach", info: "Метод arr.forEach позволяет запускать функцию для каждого элемента массива.", method: methodForEach, translate: "для каждого"},
  ];

  const [info, setInfo] = useState('Здесь будет информация');

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const [activeTooltipIndex, setActiveTooltipIndex] = useState(null);

  const tooltipHandler = (index) => {
    setActiveTooltipIndex(index === activeTooltipIndex ? null : index);
  }

  const methodHandler = (array, index) => {
    array.method();
    setInfo(array.info);

    setActiveButtonIndex(index === activeButtonIndex ? null : index);
  }

  const tooltipLeaveHandler = () => {
    setActiveTooltipIndex(null)
  }
    
  return (
    <div className={styles.arraysWrapper}>
      <h2>
        Arrays
      </h2>
      <div className={styles.buttonsContainer}>
        {arrays.map((array, index) => <button 
                                      key={index} 
                                      onClick={() => methodHandler(array, index)}
                                      onMouseEnter={() => tooltipHandler(index)}
                                      onMouseLeave={() => tooltipLeaveHandler(index)}
                                      className={activeButtonIndex === index ? styles.active : ''}
                                    >
                                      {array.name}
                                      {<span className={activeTooltipIndex === index ? `${styles.tooltip} ${styles.tooltipActive}` : styles.tooltip}>
                                        {activeTooltipIndex === index ? array.translate : ''}
                                      </span>}
                                    </button>)}
      </div>
      <p className={styles.info}>
        {info}
      </p>
    </div>
  )
}

export default Arrays;
