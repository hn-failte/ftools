/**
 * @function $
 * @description get selector
 * @param {*} arg
 * @returns {Element}
 */
export function $(arg) {
    var selector;
    if (arg.search(/\#/g) > -1) {
        selector = document.querySelector(arg);
    } else {
        selector = document.querySelectorAll(arg);
    }
    if (selector == null || selector.length == 0)
        throw new Error("Selector can not be Null");
    return selector;
}

/**
 * @function rmLSpace
 * @description remove left space
 * @param {String} str
 * @returns {String}
 */
export function rmLSpace(str) {
    return str.replace(/(^\s*)/g, "");
}

/**
 * @function rmRSpace
 * @description remove right space
 * @param {String} str
 * @returns {String}
 */
export function rmRSpace(str) {
    return str.replace(/(\s*$)/g, "");
}

/**
 * @function rmASpace
 * @description remove all space
 * @param {String} str
 * @returns {String}
 */
export function rmASpace(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * @function getElementsByClassName
 * @description getElementsByClassName in IE8
 * @param {String} className
 * @returns {Element}
 */
export function getElementsByClassName(className) {
    var allNodeList = document.getElementsByTagName("*");
    var elNodeList = new Array();
    for (var allIndex = 0; allIndex < allNodeList.length; allIndex++)
        if (allNodeList[allIndex].className == className)
            elNodeList.push(allNodeList[allIndex]);
    return elNodeList;
}

/**
 * @function insertAfter
 * @description insertAfter in IE8
 * @param {Element} insert
 * @param {Element} target
 */
export function insertAfter(insert, target) {
    insert.parent.lastElementChild === insert ?
        insert.parentElement.appendChild(target) :
        insert.parentElement.insertBefore(target, insert.nextElementSibling);
}

/**
 * @function firstElementChild
 * @description firstElementChild in IE8
 * @param {*} parent
 * @returns {Element}
 */
export function firstElementChild(parent) {
    if (parent.childNodes[0].nodeType != 3) return parent.childNodes[0];
    else return parent.childNodes[1];
}

/**
 * @function lastElementChild
 * @description lastElementChild in IE8
 * @param {Element} parent
 * @returns {Element}
 */
export function lastElementChild(parent) {
    if (parent.childNodes[parent.childNodes.length - 1].nodeType != 3) {
        return parent.childNodes[parent.childNodes.length - 1];
    } else {
        return parent.childNodes[parent.childNodes.length - 2];
    }
}

/**
 * @function remove
 * @description remove in IE
 * @param {Element} parent
 * @param {Element} target
 */
export function remove(parent, target) {
    parent.removeChild(target);
}

/**
 * @function getDocument
 * @description get document object both in IE8 and high level browser
 * @returns {Element}
 */
export function getDocument() {
    return document.documentElement ? document.documentElement : document.body;
}

/**
 * @function getEvent
 * @description get event object both in IE8 and high level browser
 * @param {Event} event
 * @returns {Event}
 */
export function getEvent(event) {
    return event ? event : window.event;
}

/**
 * @function getKeyCode
 * @description get keyboard keyCode in IE8、FireFox and high level browser
 * @param {Element} el
 * @param {String} attr
 * @returns {Number}
 */
export function getKeyCode(event) {
    return event.keyCode ?
        event.keyCode :
        event.which ?
        event.which :
        event.charCode;
}

/**
 * @function getButton
 * @description make mouse event button right both in IE8 and high level browser
 * @param {Element} el
 * @param {String} attr
 * @returns {Number}
 */
export function getButton(event) {
    if (!event)
        switch (window.event.button) {
            case 1:
                return 0;
            case 4:
                return 1;
            case 2:
                return 2;
        }
    else return event.button;
}

/**
 * @function stopBubble
 * @description make event stopBubble both in IE8 and high level browser
 * @param {*} event
 */
export function stopBubble(event) {
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
}

/**
 * @function getTarget
 * @description make event stopDefault both in IE8 and high level browser, like return false
 * @param {*} event
 */
export function stopDefault(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
}

/**
 * @function getTarget
 * @description get event target both in IE8 and high level browser
 * @param {Event} event
 * @returns {Element}
 */
export function getTarget(event) {
    return event.target ? event.target : event.srcElement;
}

/**
 * @function noSelection
 * @description make noSelection both in IE8 and high level browser
 */
export function noSelection() {
    window.getSelection ?
        window.getSelection().removeAllRanges() :
        document.selection.empty();
}

/**
 * @function getStyle
 * @description get the computed styles both in IE8 and high level browser
 * @param {*} el
 * @param {*} attr
 * @returns {Style}
 */
export function getStyle(el, attr) {
    return window.getComputedStyle ?
        window.getComputedStyle(el)[attr] :
        el.currentStyle[attr];
}

/**
 * @function animated_uniform
 * @description animated uniform
 * @param {Element} el
 * @param {Number} target
 * @param {String} attr
 */
export function animated_uniform(el, target, attr) {
    clearInterval(el.timer);
    var step = 5;
    var origin = target - el.offsetLeft > 0 ? step : 0 - step;
    el.timer = setInterval(() => {
        if (Math.abs(target - el.offsetLeft) < step) {
            el.style[attr] = target;
            clearInterval(el.timer);
        } else {
            el.style[attr] = el.offsetLeft + origin + "px";
        }
    }, 10);
}

/**
 * @function animated_variable
 * @description animated variable
 * @param {Element} el
 * @param {Number} target
 * @param {String} attr
 */
export function animated_variable(el, target, attr) {
    clearInterval(el.timer);
    var step;
    el.timer = setInterval(() => {
        if (target == el.offsetLeft) {
            el.style[attr] = target;
            clearInterval(el.timer);
        } else {
            step =
                target - el.offsetLeft < 0 ?
                Math.floor((target - el.offsetLeft) / 10) :
                Math.ceil((target - el.offsetLeft) / 10);
            el.style[attr] = el.offsetLeft + step + "px";
        }
    }, 10);
}

/**
 * @function animated_objects
 * @description animated objects
 * @param {Element} el
 * @param {Number} target
 * @param {String} attr
 */
export function animated_objects(el, target, attr) {
    clearInterval(el.timer);
    var step;
    el.timer = setInterval(() => {
        //定时器私有化，实现多个物体共享同一个包装函数进行运动
        if (target == parseInt(getStyle(el, attr))) {
            //不需要边框、内边距时使用style.width，需要时使用offsetWidth、clientWidth
            el.style[attr] = target + "px";
            clearInterval(el.timer);
        } else {
            step =
                target - parseInt(getStyle(el, attr)) < 0 ?
                Math.floor((target - parseInt(getStyle(el, attr))) / 10) :
                Math.ceil((target - parseInt(getStyle(el, attr))) / 10);
            el.style[attr] = parseInt(getStyle(el, attr)) + step + "px";
        }
    }, 10);
}

/**
 * @function animated_attr
 * @description animated attribution
 * @param {Element} el
 * @param {Number} target
 * @param {String} attr
 */
export function animated_attr(el, target, attr) {
    clearInterval(el.timer);
    var step;
    el.timer = setInterval(() => {
        //定时器私有化，实现多个物体共享同一个包装函数进行运动
        if (attr == "opacity") {
            //透明度范围0-100，将透明度乘以100，避免数字太小时的四舍五入
            if (target == parseInt(getStyle(el, attr) * 100)) {
                el.style[attr] = target / 100;
                clearInterval(el.timer);
            } else {
                step =
                    target - parseInt(getStyle(el, attr) * 100) < 0 ?
                    Math.floor((target - parseInt(getStyle(el, attr) * 100)) / 10) :
                    Math.ceil((target - parseInt(getStyle(el, attr) * 100)) / 10);
                el.style[attr] = (parseInt(getStyle(el, attr) * 100) + step) / 100;
            }
        } else if (attr == "zIndex") {
            el.style[attr] = target;
        } else {
            if (target == parseInt(getStyle(el, attr))) {
                //边框、内边距：style.width、offsetWidth、clientWidth区别
                el.style[attr] = target + "px";
                clearInterval(el.timer);
            } else {
                step =
                    target - parseInt(getStyle(el, attr)) < 0 ?
                    Math.floor((target - parseInt(getStyle(el, attr))) / 10) :
                    Math.ceil((target - parseInt(getStyle(el, attr))) / 10);
                el.style[attr] = parseInt(getStyle(el, attr)) + step + "px";
            }
        }
    }, 10);
}

/**
 * @function animated_mutiattr
 * @description animated muti-attribution
 * @param {Element} el
 * @param {*} target
 */
export function animated_mutiattr(el, target) {
    clearInterval(el.timer);
    var step;
    var flag;
    el.timer = setInterval(() => {
        //定时器私有化，实现多个物体共享同一个包装函数进行运动
        for (var item in target) {
            flag = true;
            if (item == "opacity") {
                //透明度范围0-100，将透明度乘以100，避免数字太小时的四舍五入
                if (target[item] == parseInt(getStyle(el, item) * 100)) {
                    el.style[item] = target[item] / 100;
                } else {
                    step =
                        target[item] - parseInt(getStyle(el, item) * 100) < 0 ?
                        Math.floor(
                            (target[item] - parseInt(getStyle(el, item) * 100)) / 10
                        ) :
                        Math.ceil(
                            (target[item] - parseInt(getStyle(el, item) * 100)) / 10
                        );
                    el.style[item] = (parseInt(getStyle(el, item) * 100) + step) / 100;
                    flag = false;
                }
            } else if (item == "zIndex") {
                el.style[item] = target[item];
                flag = false;
            } else {
                if (target[item] == parseInt(getStyle(el, item))) {
                    //边框、内边距：style.width、offsetWidth、clientWidth区别
                    el.style[item] = target[item] + "px";
                } else {
                    step =
                        target[item] - parseInt(getStyle(el, item)) < 0 ?
                        Math.floor((target[item] - parseInt(getStyle(el, item))) / 10) :
                        Math.ceil((target[item] - parseInt(getStyle(el, item))) / 10);
                    el.style[item] = parseInt(getStyle(el, item)) + step + "px";
                    flag = false;
                }
            }
        }
        if (flag) clearInterval(el.timer);
    }, 10);
}

/**
 * @function animated_chain
 * @description animated chain
 * @param {Element} el
 * @param {Object} target
 * @param {Callback} callback
 */
export function animated_chain(el, target, callback) {
    clearInterval(el.timer);
    var step;
    var flag;
    var step_0;
    el.timer = setInterval(() => {
        //定时器私有化，实现多个物体共享同一个包装函数进行运动
        for (var item in target) {
            flag = true;
            if (item == "opacity") {
                //透明度范围0-100，将透明度乘以100，避免数字太小时的四舍五入
                if (target[item] == getStyle(el, item) * 100) {
                    el.style[item] = target[item] / 100;
                } else {
                    step_0 = target[item] - getStyle(el, item) * 100;
                    step = step_0 < 0 ? Math.floor(step_0 / 10) : Math.ceil(step_0 / 10);
                    el.style[item] = (getStyle(el, item) * 100 + step) / 100;
                    flag = false;
                }
            } else if (item == "zIndex") {
                el.style[item] = target[item];
                flag = false;
            } else {
                if (target[item] == parseInt(getStyle(el, item))) {
                    //边框、内边距：style.width、offsetWidth、clientWidth区别
                    el.style[item] = target[item] + "px";
                } else {
                    step_0 = target[item] - parseInt(getStyle(el, item));
                    step = step_0 < 0 ? Math.floor(step_0 / 10) : Math.ceil(step_0 / 10);
                    el.style[item] = parseInt(getStyle(el, item)) + step + "px";
                    flag = false;
                }
            }
        }
        if (flag) {
            clearInterval(el.timer);
            if (callback) {
                callback();
            }
        }
    }, 10);
}

/**
 * @function DragableBox
 * @description create a dragable box
 * @param {String} [type="div"]
 * @param {Number} [width=100]
 * @param {Number} [height=100]
 */
export function DragableBox(type = "div", width = 100, height = 100) {
    this.offsetX = 0;
    this.offsetY = 0;
    this.el = (function () {
        var el = document.createElement(type);
        el.style.position = "absolute";
        el.style.background = "orange";
        el.style.width = width + "px";
        el.style.height = height + "px";
        getDocument().appendChild(el);
        return el;
    })();
    this.listen = function () {
        this.el.onmousedown = this.mouseDown;
    };
    this.mouseDown = function (event) {
        var e = getEvent(event);
        document.onmousemove = this.mouseMove;
        document.onmouseup = this.mouseUp;
        this.offsetX = e.offsetX;
        this.offsetY = e.offsetY;
    }.bind(this);
    this.mouseMove = function (event) {
        var e = getEvent(event);
        var winX = getDocument().clientWidth;
        var winY = getDocument().clientHeight;
        var l = e.clientX - this.offsetX;
        var t = e.clientY - this.offsetY;
        l =
            l < 0 ?
            0 :
            l > winX - this.el.offsetWidth ?
            winX - this.el.offsetWidth :
            l;
        t =
            t < 0 ?
            0 :
            t > winY - this.el.offsetHeight ?
            winY - this.el.offsetHeight :
            t;
        this.el.style.left = l + "px";
        this.el.style.top = t + "px";
    }.bind(this);
    this.mouseUp = function () {
        document.onmousemove = null;
    };
}
