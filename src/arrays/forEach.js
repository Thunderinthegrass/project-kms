export const methodForEach = () => {
  let arr = ["Раз", "Два", "Три", "Четыре", "Пять"];

  arr.forEach((item, index, array) => {
    console.log(`${index}' элемент массива [${array}] - "${item}"`);
  })
}