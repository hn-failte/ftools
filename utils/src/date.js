export const getTimeStamp = (type) => {
    let time = new Date().getTime();
    let res = 0;
    switch(type) {
        case 'seconds': res = parseInt(time / 1e3); break;
        case 'minutes': res = parseInt(time / 6e5); break;
        case 'hours': res = parseInt(time / 3.6e6); break;
        case 'day': res = parseInt(time / 8.64e7); break;
        default: res = time;
    }
    return res;
}
