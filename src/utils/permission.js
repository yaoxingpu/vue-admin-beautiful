import store from "@/store";

/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 检查权限
 * @param value
 * @returns {boolean}
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = store.getters["user/permissions"];
    const permissionPermissions = value;

    // every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。every从迭代开始，一旦有一个不符合条件，则不会继续迭代下去
    // some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。some一直在找符合条件的值，一旦找到，则不会继续迭代下去
    return permissions.some((role) => {
      // includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false
      return permissionPermissions.includes(role);
    });
  } else {
    return false;
  }
}
