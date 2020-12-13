// 判断数据类型
export const getType = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()

// 判断数据是否是对象
export const isPlainObject = (obj) => getType(obj) === 'object'

// 判断数据是否是数组
export const isArray = (obj) => getType(obj) === 'array'

// 判断数据是否是数组参数对象
export const isArguments = (obj) => getType(obj) === 'arguments'

// 判断数据是否是函数
export const isFunction = (obj) => getType(obj) === 'function'

// 判断数据是否是字符串
export const isString = (obj) => getType(obj) === 'string'

// 判断数据是否是数字
export const isNumber = (obj) => getType(obj) === 'number'

// 判断数据是否是字符串或数字
export const isStringOrNumber = (obj) => isString(obj) || isNumber(obj)

// 获取随机正整数
export const getRandomInt = (start = 0, end = 1) => {
  return Math.floor(Math.random() * (end - start) + start)
}

// 获取随机字母
export const getRandomCap = () => {
  const val = getRandomInt(0, 52)
  return String.fromCharCode(val >= 26 ? val - 26 + 65 : val + 97)
}

// 获取随机字符串
export const getRandomString = () => Math.random().toString(36).slice(2)

// 获取随机颜色
export const getRandomColor = () => {
  const colorString = '0123456789abcdef'
  const color = '#'
  for (let i = 0; i < 6; i++) color += colorString[getRandomInt(0, 16)]
  return color
}

// 获取数据的键值数组
export const getKeys = (obj) =>
  isPlainObject(obj) || isArray(obj) ? Object.getOwnPropertyNames(obj) : []

// 获取数据的键值数量
export const getLength = (obj) =>
  isPlainObject(obj)
    ? getKeys(obj).length
    : isArray(obj)
    ? obj.length
      ? isString(obj)
      : obj.length
      ? isNumber(obj)
      : (obj + '').length
    : 0

// 根据数据的Key合并数据，addableList会覆盖currentList的重复数据
export const customConcatByKey = (currentList, addableList, key) => {
  if (!isArray(currentList) && !isArray(addableList)) {
    console.error('currentList or addableList is not an array')
    return []
  }
  addableList.forEach((item) => {
    const findIndex = currentList.findIndex((_item) => _item[key] === item[key])
    if (findIndex > -1) currentList.splice(findIndex, 1, item)
    else {
      currentList.push(item)
    }
  })
  return currentList
}
