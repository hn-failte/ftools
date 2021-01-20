import { isArray } from "./type";

// 根据数据的Key合并数据，addableList会覆盖currentList的重复数据
export const customConcatByKey = (currentList, addableList, key) => {
    if (!isArray(currentList) && !isArray(addableList)) {
        throw new Error("currentList or addableList is not an array");
    }
    addableList.forEach((item) => {
        const findIndex = currentList.findIndex(
            (_item) => _item[key] === item[key]
        );
        if (findIndex > -1) currentList.splice(findIndex, 1, item);
        else {
            currentList.push(item);
        }
    });
    return currentList;
};
