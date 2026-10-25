function spinalCase(str) {
    //方法一:正向前瞻断言，正向后顾断言
      const pattern = /(?:(?<=^|[_-]|\s+)[a-zA-Z]|(?<=[a-z])[A-Z])[a-z]*(?=[A-Z]|[_-]|\s+|$)/g;
      return str.match(pattern).map(m=>m.toLowerCase()).join("-");

    //方法二:反向引用与替换
    // return str
    //     // 1. 在小写字母/数字与大写字母之间插入连字符（处理驼峰）
    //     .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    //     // 2. 将所有空格、下划线或连续的非字母字符统一替换为单连字符
    //     .replace(/[\s_]+/g, '-')
    //     // 3. 转为小写
    //     .toLowerCase()
    //     // 4. 清理首尾可能残留的连字符（防止原字符串首尾有空格或特殊字符）
    //     .replace(/^-+|-+$/g, '');
}
console.log(spinalCase("  ___   Teletubbies say Eh-oh"))
