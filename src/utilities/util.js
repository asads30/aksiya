const saveStorage = function (key, data) {
  localStorage.setItem(key, JSON.stringify(data));
};

const getStorage = function (key, item) {
  if (localStorage.getItem(key) && item) {
    const data = JSON.parse(localStorage.getItem(key));
    return data[item];
  } else if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  }
};

const clearStorage = function (key = "false") {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
};

const getCookie = function (name = null) {
  let arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return arr[2];
  else return null;
};

// const getIMGPath = function (img) {
//   return img ? require('@/assets/images/team_members/' + img) : '';
// };

export { getStorage, saveStorage, clearStorage, getCookie };
