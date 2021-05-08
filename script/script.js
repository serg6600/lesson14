'use strict';

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElem = function(){
    if (this.selector[0] === '.'){
        let div = document.createElement('div');
        div.className = this.selector.slice(1);
        div.style.cssText=`
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        `;
        div.textContent = `Приветики! Это div с классом ${this.selector.slice(1)}`;
        document.body.prepend(div);
    } else if (this.selector[0] === '#'){
        let p = document.createElement('p');
        p.id = this.selector.slice(1);
        p.style.cssText=`
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        `;
        p.textContent = `Приветики! Это параграф c ID ${this.selector.slice(1)}`;
        document.body.prepend(p);
    }
};

let domElement1 = new DomElement('#block', '200px', '500px', 'green', '20px');
domElement1.createElem();
