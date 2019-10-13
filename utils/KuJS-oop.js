!function(){
    var ku = function(els){
        return new ku.fn.init(els); //返回dom元素数组
    };
    ku.fn = ku.prototype = {
        init: init,
        css: function css(key, value){
            if("length" in this.els){
                this.els[0].style[key] = value;
            }
            else{
                this.els.style[key] = value
            }
            return this;
        },
        html: function html(content){
            var el = null;
            if("length" in this.els){
                el = this.els[0];
            } else{
                el = this.els;
            }
            if(arguments.length > 0){
                el.innerHTML = content;
                return this;
            } else{
                return el.innerHTML;
            }
        },
        text: function text(content){
            var el = null;
            if("length" in this.els){
                el = this.els[0];
            } else{
                el = this.els;
            }
            if(arguments.length > 0){
                el.innerText = content;
                return this;
            } else{
                return el.innerText;
            }
        }
    };
    function init(id){ //constructor
        if(/^#/.test(id)){
            this.els=document.getElementById(id.substring(1));
        } else if(/\./.test(id)){
            this.els=document.getElementsByClassName(id.substring(1));
        }
        else {
            this.els=document.getElementsByTagName(id);
        }
    }
    init.prototype=ku.fn;
    window.ku = ku; //将全局中的ku变量作为库选择符
}()