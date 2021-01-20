// 驼峰转连字符
export const camalCase2SnakeCase = (str) =>
    str.replace(/([A-Z])/g, (input, match) => {
        return "_" + match.toLocaleLowerCase();
    });

// 添加单位，默认单位px
export const unit = (value, cell = "px") => `${value}${cell}`;
