/**
 * @function $
 * @description get selector
 * @param {*} arg
 * @returns {Element}
 */
function $(arg) {
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
 * @function fromXtoY
 * @description make X Binary number to Y Binary number
 * @param {*} num
 * @param {*} [X]
 * @param {*} [Y]
 * @returns {String}
 */
function fromXtoY(num, X, Y) {
    if (X > 36 || Y > 36 || X < 2 || Y < 2)
        throw new Error("X and Y must between 2-36");
    if (arguments.length > 3 || arguments.length < 1)
        throw new Error("Arguments number must between 1-3");
    if (typeof num == "number")
        throw new Error("Type of arg1 can not be a number");
    switch (arguments.length) {
        case 1:
            if (num.search(/^0x/i) >= 0) return parseInt(num, 16);
            else if (num.search(/^0/i) >= 0) return parseInt(num, 8);
            else return parseInt(num, 10);
            break;
        case 2:
            return parseInt(num, X);
            break;
        case 3:
            return parseInt(num, X).toString(Y);
            break;
        default:
            return;
    }
}

/**
 * @function getIEVersion
 * @description get the IE version
 * @returns {Number}
 */
function getIEVersion() {
    var userAgent = navigator.userAgent;
    var isIE =
        userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    var IEListener =
        userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;
        }
    } else if (isEdge) {
        return "edge";
    } else if (IEListener) {
        return 11;
    } else {
        return -1;
    }
}

/**
 * @function isPC
 * @description judge the client is phone or pc
 * @returns {Boolean}
 */
function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

/**
 * @function charcoding
 * @description make String to ASCII
 * @param {String} str
 * @param {String} separator
 * @returns {String}
 */
function charcoding(str, separator) {
    var string = "";
    for (var i = 0; i < str.length; i++) {
        string += str.charCodeAt(i) + separator;
    }
    return string;
}

/**
 * @function uncharcoding
 * @description make ASCII to String
 * @param {String} str
 * @param {String} separator
 * @returns {String}
 */
function uncharcoding(str, separator) {
    var string = "";
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != separator) temp += str[i];
        else {
            string += String.fromCharCode(parseInt(temp));
            temp = "";
        }
    }
    return string;
}

/**
 * @function rmLSpace
 * @description remove left space
 * @param {String} str
 * @returns {String}
 */
function rmLSpace(str) {
    return str.replace(/(^\s*)/g, "");
}

/**
 * @function rmRSpace
 * @description remove right space
 * @param {String} str
 * @returns {String}
 */
function rmRSpace(str) {
    return str.replace(/(\s*$)/g, "");
}

/**
 * @function rmASpace
 * @description remove all space
 * @param {String} str
 * @returns {String}
 */
function rmASpace(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * @function getElInfo
 * @description get properties of element
 * @param {Element} element
 * @returns {Map}
 */
function getElInfo(element) {
    var map = new Map();
    map.set("height", element.offsetHeight);
    map.set("width", element.offsetWidth);
    map.set("scrollHeight", element.scrollHeight);
    map.set("scrollWidth", element.scrollWidth);
    map.set("scrollTop", element.scrollTop);
    map.set("scrollLeft", element.scrollLeft);
    map.set(
        "heightRelationship",
        "scrollHeight = height(offsetHeight) + scrollTop"
    );
    map.set("widthRelationship", "scrollWidth = width(offsetWidth) + scrollLeft");
    return map;
}

/**
 * @function setElInfo
 * @description set properties of element
 * @param {Element} element
 * @param {Number} width
 * @param {Number} height
 * @returns
 */
function setElInfo(element, width, height) {
    var k = 0;
    if (arguments.length > 1) {
        element.style.height = height + "px";
        k++;
    }
    if (arguments.length > 2) {
        element.style.width = width + "px";
        k++;
    }
    return k == arguments.length - 1;
}

/**
 * @function checkcode
 * @description create checkcode in canvas
 * @param {Element} canvas
 * @param {Number} charnum
 * @param {Number} line
 * @param {Number} size
 */
function checkcode(canvas, charnum, line, size) {
    if (
        typeof charnum != "number" ||
        typeof line != "number" ||
        typeof size != "number"
    )
        throw new Error("charnum,line,size should be a Number");
    if (charnum > 10 || charnum < 0)
        throw new Error("charnum should in range 0-10");
    if (line > 10 || line < 0) throw new Error("line should in range 0-10");
    if (size < 0) throw new Error("size should over 0");
    var context = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;
    var r = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)) / 2;
    var sgradient = context.createLinearGradient(0, 0, w, h);
    var fgradient = context.createRadialGradient(0, 0, r, w, h, r);

    sgradient.addColorStop("0", "magenta");
    sgradient.addColorStop("0.15", "purple");
    sgradient.addColorStop("0.3", "blue");
    sgradient.addColorStop("0.45", "teal");
    sgradient.addColorStop("0.6", "green");
    sgradient.addColorStop("0.75", "yellow");
    sgradient.addColorStop("0.9", "orange");
    sgradient.addColorStop("1.0", "red");
    context.strokeStyle = sgradient;
    context.lineWidth = 2;
    context.strokeRect(0, 0, w, h);

    fgradient.addColorStop("0", "magenta");
    fgradient.addColorStop("0.15", "purple");
    fgradient.addColorStop("0.3", "blue");
    fgradient.addColorStop("0.45", "teal");
    fgradient.addColorStop("0.6", "green");
    fgradient.addColorStop("0.75", "yellow");
    fgradient.addColorStop("0.9", "orange");
    fgradient.addColorStop("1.0", "red");
    context.fillStyle = fgradient;
    context.font = size + "px 坎文行楷";
    var m = "";
    for (var i1 = 0; i1 < charnum; i1++) {
        if (Math.round(Math.random() * 2) < 1) {
            m += String.fromCharCode(48 + Math.round(Math.random() * 9)) + " ";
        } else {
            m += String.fromCharCode(65 + Math.round(Math.random() * 25)) + " ";
        }
    }

    context.fillText(m, 10, 30);

    var num = 1;
    var arr = new Array();
    for (var i2 = 0; i2 < 6; i2++) {
        arr[i2] = new Array();
    }

    for (var i3 = 0; i3 < 6; i3 = i3 + 2) {
        arr[i3][0] = Math.round(Math.random() * 119);
        arr[i3 + 1][0] = Math.round(Math.random() * 49);
    }

    for (num; num < line; num++) {
        if (Math.round(Math.random() * 2) > 1) {
            for (var i4 = 0; i4 < 6; i4 = i4 + 2) {
                arr[i4][num] = Math.round(Math.random() * 119);
                arr[i4 + 1][num] = Math.round(Math.random() * 49);
            }
        }
    }

    for (var z = 0; z < num; z++) {
        context.moveTo(arr[0][z], arr[1][z]);
        context.quadraticCurveTo(arr[2][z], arr[3][z], arr[4][z], arr[5][z]);
    }
    context.stroke();
}

/**
 * @function sort
 * @description sort the Array
 * @param {Array} arr
 * @param {String} direction
 * @returns {Array}
 */
function sort(arr, direction) {
    if (direction != ">" && direction != "<")
        throw new Error("The direction is not right");
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i; j <= arr.length; j++) {
            if (direction == ">" ? arr[i] < arr[j] : arr[i] > arr[j]) {
                arr[i] = arr[i] + arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] = arr[i] - arr[j];
            }
        }
    }
    return arr;
}

/**
 * @function getElementsByClassName
 * @description getElementsByClassName in IE8
 * @param {String} className
 * @returns {Element}
 */
function getElementsByClassName(className) {
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
function insertAfter(insert, target) {
    parent.lastElementChild === insert ?
        insert.parentElement.appendChild(target) :
        insert.parentElement.insertBefore(target, insert.nextElementSibling);
}

/**
 * @function firstElementChild
 * @description firstElementChild in IE8
 * @param {*} parent
 * @returns {Element}
 */
function firstElementChild(parent) {
    if (parent.childNodes[0].nodeType != 3) return parent.childNodes[0];
    else return parent.childNodes[1];
}

/**
 * @function lastElementChild
 * @description lastElementChild in IE8
 * @param {Element} parent
 * @returns {Element}
 */
function lastElementChild(parent) {
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
function remove(parent, target) {
    parent.removeChild(target);
}

/**
 * @function randomColor
 * @description Get Random Color
 * @returns {Color}
 */
function randomColor() {
    var colorString = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++)
        color += colorString[Math.floor(Math.random() * 16)];
    return color;
}

/**
 * @function getRandom
 * @description get random number
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function getRandom(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

/**
 * @function getDocument
 * @description get document object both in IE8 and high level browser
 * @returns {Element}
 */
function getDocument() {
    return document.documentElement ? document.documentElement : document.body;
}

/**
 * @function getEvent
 * @description get event object both in IE8 and high level browser
 * @param {Event} event
 * @returns {Event}
 */
function getEvent(event) {
    return event ? event : window.event;
}

/**
 * @function getKeyCode
 * @description get keyboard keyCode in IE8、FireFox and high level browser
 * @param {Element} el
 * @param {String} attr
 * @returns {Number}
 */
function getKeyCode(event) {
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
function getButton(event) {
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
function stopBubble(event) {
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
}

/**
 * @function getTarget
 * @description make event stopDefault both in IE8 and high level browser, like return false
 * @param {*} event
 */
function stopDefault(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
}

/**
 * @function getTarget
 * @description get event target both in IE8 and high level browser
 * @param {Event} event
 * @returns {Element}
 */
function getTarget(event) {
    return event.target ? event.target : event.srcElement;
}

/**
 * @function noSelection
 * @description make noSelection both in IE8 and high level browser
 */
function noSelection() {
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
function getStyle(el, attr) {
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
function animated_uniform(el, target, attr) {
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
function animated_variable(el, target, attr) {
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
function animated_objects(el, target, attr) {
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
function animated_attr(el, target, attr) {
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
function animated_mutiattr(el, target) {
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
function animated_chain(el, target, callback) {
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
function DragableBox(type = "div", width = 100, height = 100) {
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

/**
 * @function log
 * @description print colorful logs in colsole
 * @param {*} data
 * @param {String} css
 */
function log(data, css) {
    console.log(typeof data);
    if (
        typeof data != "object" &&
        typeof data != "function" &&
        typeof data != "symbol"
    ) {
        css ? console.log("%c%s", css, data) : console.log("%s", data);
    } else console.log("%O", data);
}