/**
 * react-js-cookie created in 2023
 * @constructor
 */
function Cookie() {
    this.data = {}
}

/**
 * @param key
 * @returns {string}
 */
Cookie.get = function (key) {
    let name = key + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * @param key
 * @param value
 * @param exdays
 */
Cookie.set = function (key, value, exdays = 1) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

/**
 * @param key
 * @returns {boolean}
 */
Cookie.contains = function (key) {
    let value = this.get(key);
    return value != "";
}

/**
 * @param key
 */
Cookie.delete = function (key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export default Cookie;
