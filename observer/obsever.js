const store = {};

export const on = (eventName, callback) => {
    if(store[eventName]) store[eventName].push(callback)
    else store[eventName] = [callback]
}

export const emit = eventName => {
    if(eventName in store) {
        store[eventName].forEach(item => {
            item();
        })
    }
    
}

export const off = eventName => {
    if(eventName in store) {
        store[eventName] = undefined;
        delete store[eventName]
    }
}

export default {
    on,
    emit,
    off
}