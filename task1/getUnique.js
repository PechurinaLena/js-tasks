function getUnique(testArray)
{
  let res = testArray[0];
  for (let i = 0; i <= testArray.length; i++)
    res = res ^ testArray[i];

  return res;
}


const testArray = [1,1,1,2,2,3,4,4,5,5,5,5]
const uniqueElement = getUnique(testArray)

console.log(uniqueElement)
