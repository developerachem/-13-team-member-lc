function locaDatalUP(key, data) {
    let localData = JSON.stringify(data);
    localStorage.setItem(key, localData);
}


function localDataDown(key) {
    let localDataGet = localStorage.getItem(key)
    return JSON.parse(localDataGet)
}

