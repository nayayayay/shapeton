(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(2),e=c(4),f=document.querySelector('canvas');f.width=window.innerWidth,f.height=window.innerHeight;var g=new d.Renderer(f.getContext('2d')),h=new e.Rectangle({x:f.width/2,y:f.height/2,width:400,height:200,fill:!1,lineWidth:8,colour:'#FF00FF',radius:15}),i=new e.Rectangle({width:50,height:50});i.setRelativeX(20),i.setRelativeY(20),g.addGraphic(h),g.addGraphic(i),g.start()},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(){function a(){}return a.getDeltaTime=function(){return this.deltaTime},a.getTime=function(){return this.time},a._setFrame=function(a){this.deltaTime-a-this.time,this.time=a},a.deltaTime=0,a.time=0,a}();b.Time=c},function(a,b,c){'use strict';function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}Object.defineProperty(b,'__esModule',{value:!0}),d(c(3)),d(c(1))},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(1),e=function(){function a(a){this.context=a,this.updates=[],this.graphics=[],this.animationFrame=0}return a.prototype.getGraphics=function(){return this.graphics.slice()},a.prototype.update=function(a){this.updates.push(a)},a.prototype.addGraphic=function(a){this.graphics.push(a)},a.prototype.start=function(){var a=this;this.animationFrame||(this.animationFrame=requestAnimationFrame(function(b){a._render(b)}))},a.prototype._render=function(a){var b=this;d.Time._setFrame(a);for(var c,e=0,f=this.updates;e<f.length;e++)c=f[e],c();for(var g,h=0,i=this.graphics;h<i.length;h++)g=i[h],g._update();this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);for(var g,j=0,k=this.graphics;j<k.length;j++)g=k[j],g.isVisible()&&g._draw(this.context);this.animationFrame=requestAnimationFrame(function(a){b._render(a)})},a}();b.Renderer=e},function(a,b,c){'use strict';function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}Object.defineProperty(b,'__esModule',{value:!0}),d(c(5)),d(c(6)),d(c(7))},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(){function a(a){a=a||{},this.x=a.x||0,this.y=a.y||0,this.visible=void 0===a.visible||a.visible,this.updates=[]}return a.prototype.getX=function(){return this.x},a.prototype.setX=function(a){this.x=a},a.prototype.getY=function(){return this.y},a.prototype.setY=function(a){this.y=a},a.prototype.getVisible=function(){return this.visible},a.prototype.setVisible=function(a){this.visible=void 0===a||a},a.prototype.isVisible=function(){return this.visible},a.prototype.update=function(a){this.updates.push(a)},a.prototype._update=function(){for(var a,b=0,c=this.updates;b<c.length;b++)a=c[b],a()},a.prototype._draw=function(){},a}();b.Graphic=c},function(a,b,c){'use strict';var d=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(c,d){function b(){this.constructor=c}a(c,d),c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}();Object.defineProperty(b,'__esModule',{value:!0});var e=c(5),f=function(a){function b(b){var c=this;return b=b||{},c=a.call(this,b)||this,c.width=b.width||200,c.height=b.height||150,c.radius=b.radius||0,c.fill=void 0===b.fill||b.fill,c.colour=b.colour||'#000000',c.lineWidth=void 0===b.lineWidth?1:b.lineWidth,c}return d(b,a),b.prototype.setX=function(a){this.x=a},b.prototype.setY=function(a){this.y=a},b.prototype.getWidth=function(){return this.width},b.prototype.setWidth=function(a){this.width=a},b.prototype.getHeight=function(){return this.height},b.prototype.setHeight=function(a){this.height=a},b.prototype.getRadius=function(){return this.radius},b.prototype.setRadius=function(){return this.radius},b.prototype.getFill=function(){return this.fill},b.prototype.setFill=function(a){this.fill=void 0===a||a},b.prototype.getColour=function(){return this.colour},b.prototype.setColour=function(){return this.colour},b.prototype.getLineWidth=function(){return this.lineWidth},b.prototype.setLineWidth=function(a){this.lineWidth=a},b.prototype.getRelativeX=function(){return this.x-this.width/2},b.prototype.setRelativeX=function(a){this.x=a+this.width/2},b.prototype.getRelativeY=function(){return this.y-this.height/2},b.prototype.setRelativeY=function(a){this.y=a+this.height/2},b.prototype._draw=function(a){0===this.radius?this._drawRect(a):this._drawRoundedRect(a)},b.prototype._drawRect=function(a){this.fill?(a.fillStyle=this.colour,a.fillRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height)):(a.lineWidth=this.lineWidth,a.strokeStyle=this.colour,a.strokeRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height))},b.prototype._drawRoundedRect=function(a){var b={x0:this.x-this.width/2,x1:this.x+this.width/2,y0:this.y-this.height/2,y1:this.y+this.height/2},c=b.x0,d=b.x1,e=b.y0,f=b.y1;a.beginPath(),a.moveTo(c+this.radius,e),a.lineTo(d-this.radius,e),a.arcTo(d,e,d,e+this.radius,this.radius),a.lineTo(d,f-this.radius),a.arcTo(d,f,d-this.radius,f,this.radius),a.lineTo(c+this.radius,f),a.arcTo(c,f,c,f-this.radius,this.radius),a.lineTo(c,e+this.radius),a.arcTo(c,e,c+this.radius,e,this.radius),this.fill?(a.fillStyle=this.colour,a.fill()):(a.lineWidth=this.lineWidth,a.strokeStyle=this.colour,a.stroke())},b}(e.Graphic);b.Rectangle=f},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(){return function(){}}();b.Triangle=c}]);
//# sourceMappingURL=app.js.map