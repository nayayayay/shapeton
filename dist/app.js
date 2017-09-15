(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=2)})([function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(){function a(a){a=a||{},this.x=a.x||0,this.y=a.y||0,this.visible=void 0===a.visible||a.visible,this.updates=[]}return a.prototype.getX=function(){return this.x},a.prototype.setX=function(a){this.x=a},a.prototype.getY=function(){return this.y},a.prototype.setY=function(a){this.y=a},a.prototype.getVisible=function(){return this.visible},a.prototype.setVisible=function(a){this.visible=void 0===a||a},a.prototype.isVisible=function(){return this.visible},a.prototype.update=function(a){this.updates.push(a)},a.prototype._update=function(){for(var a,b=0,c=this.updates;b<c.length;b++)a=c[b],a()},a.prototype._draw=function(){},a}();b.Graphic=c},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(){function a(){}return a.getDeltaTime=function(){return this.deltaTime},a.getTime=function(){return this.time},a._setFrame=function(a){this.deltaTime-a-this.time,this.time=a},a.deltaTime=0,a.time=0,a}();b.Time=c},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(3),e=c(5),f=c(10),g=document.querySelector('canvas');g.width=window.innerWidth,g.height=window.innerHeight;var h=new d.Renderer(g.getContext('2d')),i=new e.Rectangle({x:g.width/2,y:g.height/2,width:500,height:300,radius:40,colour:'#FF00FF',fill:!1,lineWidth:8}),j=new e.Label({x:i.getX(),y:i.getY(),fontFamily:'Roboto',fontSize:82,fontWeight:'lighter',colour:'#222222'});h.addGraphic(i),h.addGraphic(j),h.update(function(){f.Keyboard.keysDown([f.Keys.Enter,f.Keys.Ctrl])?j.setText('Ctrl + Enter'):f.Keyboard.keyDown(f.Keys.Ctrl)?j.setText('Ctrl'):f.Keyboard.keyDown(f.Keys.Enter)?j.setText('Enter'):j.setText('')}),h.start()},function(a,b,c){'use strict';function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}Object.defineProperty(b,'__esModule',{value:!0}),d(c(4)),d(c(1))},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(1),e=function(){function a(a){this.context=a,this.updates=[],this.graphics=[],this.animationFrame=0}return a.prototype.getGraphics=function(){return this.graphics.slice()},a.prototype.update=function(a){this.updates.push(a)},a.prototype.addGraphic=function(a){this.graphics.push(a)},a.prototype.start=function(){var a=this;this.animationFrame||(this.animationFrame=requestAnimationFrame(function(b){a._render(b)}))},a.prototype._render=function(a){var b=this;d.Time._setFrame(a);for(var c,e=0,f=this.updates;e<f.length;e++)c=f[e],c();for(var g,h=0,i=this.graphics;h<i.length;h++)g=i[h],g._update();this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);for(var g,j=0,k=this.graphics;j<k.length;j++)g=k[j],g.isVisible()&&g._draw(this.context);this.animationFrame=requestAnimationFrame(function(a){b._render(a)})},a}();b.Renderer=e},function(a,b,c){'use strict';function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}Object.defineProperty(b,'__esModule',{value:!0}),d(c(6)),d(c(0)),d(c(7)),d(c(8)),d(c(9))},function(a,b,c){'use strict';var d=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(c,d){function b(){this.constructor=c}a(c,d),c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}();Object.defineProperty(b,'__esModule',{value:!0});var e=c(0),f=function(a){function b(b){var c=this;return b=b||{},c=a.call(this,b)||this,c.size=b.size||50,c.fill=void 0===b.fill||b.fill,c.colour=b.colour||'#000000',c.lineWidth=void 0===b.lineWidth?1:b.lineWidth,c}return d(b,a),b.prototype.getSize=function(){return this.size},b.prototype.setSize=function(a){this.size=a},b.prototype.getFill=function(){return this.fill},b.prototype.setFill=function(a){this.fill=void 0===a||a},b.prototype.getColour=function(){return this.colour},b.prototype.setColour=function(a){this.colour=a},b.prototype.getLineWidth=function(){return this.lineWidth},b.prototype.setLineWidth=function(a){this.lineWidth=a},b.prototype._draw=function(a){a.beginPath(),a.arc(this.x,this.y,this.size/2,0,2*Math.PI),this.fill?(a.fillStyle=this.colour,a.fill()):(a.strokeStyle=this.colour,a.lineWidth=this.lineWidth,a.stroke())},b}(e.Graphic);b.Circle=f},function(a,b,c){'use strict';var d=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(c,d){function b(){this.constructor=c}a(c,d),c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}();Object.defineProperty(b,'__esModule',{value:!0});var e=c(0),f=function(a){function b(b){var c=this;return b=b||{},c=a.call(this,b)||this,c.text=b.text||'',c.fontStyle=b.fontStyle||'normal',c.fontVariant=b.fontVariant||'normal',c.fontWeight=b.fontWeight||'normal',c.fontSize=void 0===b.fontSize?12:b.fontSize,c.fontFamily=b.fontFamily||'Arial',c.maxWidth=void 0===b.maxWidth?'auto':b.maxWidth,c.fill=void 0===b.fill||b.fill,c.colour=b.colour||'#000000',c}return d(b,a),b.prototype.getText=function(){return this.text},b.prototype.setText=function(a){this.text=a},b.prototype.getFontStyle=function(){return this.fontStyle},b.prototype.setFontStyle=function(a){this.fontStyle=a},b.prototype.getFontVariant=function(a){this.fontVariant=a},b.prototype.getFontWeight=function(){return this.fontWeight},b.prototype.setFontWeight=function(a){this.fontWeight=a},b.prototype.getFontSize=function(){return this.fontSize},b.prototype.setFontSize=function(a){this.fontSize=a},b.prototype.getFontFamily=function(){return this.fontFamily},b.prototype.setFontFamily=function(a){this.fontFamily=a},b.prototype.getMaxWidth=function(){return this.maxWidth},b.prototype.setMaxWidth=function(){this.maxWidth},b.prototype.getFill=function(){return this.fill},b.prototype.setFill=function(a){this.fill=void 0===a||a},b.prototype.getColour=function(){return this.colour},b.prototype.setColour=function(a){this.colour=a},b.prototype._draw=function(a){var b='auto'===this.maxWidth?void 0:this.maxWidth;a.textAlign='center',a.textBaseline='middle',a.font=this.fontStyle+' '+this.fontVariant+' '+this.fontWeight+' '+this.fontSize+'px '+this.fontFamily,this.fill?(a.fillStyle=this.colour,a.fillText(this.text,this.x,this.y,b)):(a.strokeStyle=this.colour,a.strokeText(this.text,this.x,this.y,b))},b}(e.Graphic);b.Label=f},function(a,b,c){'use strict';var d=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(c,d){function b(){this.constructor=c}a(c,d),c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}();Object.defineProperty(b,'__esModule',{value:!0});var e=c(0),f=function(a){function b(b){var c=this;return b=b||{},c=a.call(this,b)||this,c.width=b.width||200,c.height=b.height||150,c.radius=b.radius||0,c.fill=void 0===b.fill||b.fill,c.colour=b.colour||'#000000',c.lineWidth=void 0===b.lineWidth?1:b.lineWidth,c}return d(b,a),b.prototype.setX=function(a){this.x=a},b.prototype.setY=function(a){this.y=a},b.prototype.getWidth=function(){return this.width},b.prototype.setWidth=function(a){this.width=a},b.prototype.getHeight=function(){return this.height},b.prototype.setHeight=function(a){this.height=a},b.prototype.getRadius=function(){return this.radius},b.prototype.setRadius=function(){return this.radius},b.prototype.getFill=function(){return this.fill},b.prototype.setFill=function(a){this.fill=void 0===a||a},b.prototype.getColour=function(){return this.colour},b.prototype.setColour=function(){return this.colour},b.prototype.getLineWidth=function(){return this.lineWidth},b.prototype.setLineWidth=function(a){this.lineWidth=a},b.prototype.getRelativeX=function(){return this.x-this.width/2},b.prototype.setRelativeX=function(a){this.x=a+this.width/2},b.prototype.getRelativeY=function(){return this.y-this.height/2},b.prototype.setRelativeY=function(a){this.y=a+this.height/2},b.prototype._draw=function(a){0===this.radius?this._drawRect(a):this._drawRoundedRect(a)},b.prototype._drawRect=function(a){this.fill?(a.fillStyle=this.colour,a.fillRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height)):(a.lineWidth=this.lineWidth,a.strokeStyle=this.colour,a.strokeRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height))},b.prototype._drawRoundedRect=function(a){var b={x0:this.x-this.width/2,x1:this.x+this.width/2,y0:this.y-this.height/2,y1:this.y+this.height/2},c=b.x0,d=b.x1,e=b.y0,f=b.y1;a.beginPath(),a.moveTo(c+this.radius,e),a.lineTo(d-this.radius,e),a.arcTo(d,e,d,e+this.radius,this.radius),a.lineTo(d,f-this.radius),a.arcTo(d,f,d-this.radius,f,this.radius),a.lineTo(c+this.radius,f),a.arcTo(c,f,c,f-this.radius,this.radius),a.lineTo(c,e+this.radius),a.arcTo(c,e,c+this.radius,e,this.radius),this.fill?(a.fillStyle=this.colour,a.fill()):(a.lineWidth=this.lineWidth,a.strokeStyle=this.colour,a.stroke())},b}(e.Graphic);b.Rectangle=f},function(a,b,c){'use strict';var d=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(c,d){function b(){this.constructor=c}a(c,d),c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}();Object.defineProperty(b,'__esModule',{value:!0});var e=c(0),f=function(a){function b(b){var c=this;return b=b||{},c=a.call(this,b)||this,c.width=b.width||200,c.height=b.height||150,c.radius=b.radius||0,c.fill=void 0===b.fill||b.fill,c.colour=b.colour||'#000000',c.lineWidth=void 0===b.lineWidth?1:b.lineWidth,c}return d(b,a),b.prototype.setX=function(a){this.x=a},b.prototype.setY=function(a){this.y=a},b.prototype.getWidth=function(){return this.width},b.prototype.setWidth=function(a){this.width=a},b.prototype.getHeight=function(){return this.height},b.prototype.setHeight=function(a){this.height=a},b.prototype.getRadius=function(){return this.radius},b.prototype.setRadius=function(){return this.radius},b.prototype.getFill=function(){return this.fill},b.prototype.setFill=function(a){this.fill=void 0===a||a},b.prototype.getColour=function(){return this.colour},b.prototype.setColour=function(){return this.colour},b.prototype.getLineWidth=function(){return this.lineWidth},b.prototype.setLineWidth=function(a){this.lineWidth=a},b.prototype.getRelativeX=function(){return this.x-this.width/2},b.prototype.setRelativeX=function(a){this.x=a+this.width/2},b.prototype.getRelativeY=function(){return this.y-this.height/2},b.prototype.setRelativeY=function(a){this.y=a+this.height/2},b.prototype._draw=function(a){var b={rx:this.x,ry:this.y,x0:this.x+this.width/4,y0:this.y,x1:this.x,y1:this.y+this.height/2,x2:this.x-this.width/4,y2:this.y},c=b.rx,d=b.ry,e=b.x0,f=b.y0,g=b.x1,h=b.y1,i=b.x2,j=b.y2;a.beginPath(),a.moveTo(e,f),a.arcTo(c+this.width/2,d+this.height/2,g,h,this.radius),a.arcTo(c-this.width/2,d+this.height/2,i,j,this.radius),a.arcTo(c,d-this.height/2,e,f,this.radius),a.closePath(),this.fill?(a.fillStyle=this.colour,a.fill()):(a.lineWidth=this.lineWidth,a.strokeStyle=this.colour,a.stroke())},b}(e.Graphic);b.Triangle=f},function(a,b,c){'use strict';function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}Object.defineProperty(b,'__esModule',{value:!0}),d(c(11)),d(c(14)),d(c(15))},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(12),e=function(){function a(){}return a._init=function(){var a=this;this.keys=new d.Map,window.addEventListener('keydown',function(b){a.keys.set(b.keyCode,!0);for(var c,d=0,e=a.preventDefaults;d<e.length;d++)c=e[d],c===b.keyCode&&b.preventDefault()}),window.addEventListener('keyup',function(b){a.keys.set(b.keyCode,!1);for(var c,d=0,e=a.preventDefaults;d<e.length;d++)c=e[d],c===b.keyCode&&b.preventDefault()}),window.addEventListener('blur',function(){for(var b,c=0,d=a.keys.getKeys();c<d.length;c++)b=d[c],a.keys.set(b,!1)})},a.preventDefault=function(a){if('string'==typeof a)this.preventDefaults.push(a);else for(var b,c=0,d=a;c<d.length;c++)b=d[c],this.preventDefaults.push(b)},a.getKey=function(a){return this.keys.get(a)||!1},a.keyDown=function(a){return!0===this.getKey(a)},a.keyUp=function(a){return!1===this.getKey(a)},a.keysDown=function(a){for(var b,c=0,d=a;c<d.length;c++)if(b=d[c],!0!==this.keys.get(b))return!1;return!0},a.keysUp=function(a){for(var b,c=0,d=a;c<d.length;c++)if(b=d[c],!0===this.keys.get(b))return!1;return!0},a}();b.Keyboard=e,e._init()},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),function(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}(c(13))},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.getKeys=function(){return this.keys.slice()},a.prototype.getValues=function(){return this.values.slice()},a.prototype.get=function(a){var b=this.keys.indexOf(a);return-1===b?null:this.values[b]},a.prototype.set=function(a,b){var c=this.keys.indexOf(a);-1===c?(this.keys.push(a),this.values.push(b)):this.values[c]=b},a.prototype.delete=function(a){var b=this.keys.indexOf(a);return-1!==a&&(this.keys.splice(b,1),this.values.splice(b,1),!0)},a.prototype.hasKey=function(a){return-1!==this.keys.indexOf(a)},a.prototype.hasValue=function(a){return-1!==this.values.indexOf(a)},a}();b.Map=c},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c;(function(a){a[a.Ctrl=17]='Ctrl',a[a.Alt=18]='Alt',a[a.MetaLeft=91]='MetaLeft',a[a.MetaRight=92]='MetaRight',a[a.Shift=16]='Shift',a[a.CapsLock=20]='CapsLock',a[a.Tab=9]='Tab',a[a.Backspace=8]='Backspace',a[a.Enter=13]='Enter',a[a.UpArrow=38]='UpArrow',a[a.DownArrow=40]='DownArrow',a[a.LeftArrow=37]='LeftArrow',a[a.RightArrow=39]='RightArrow',a[a.Space=32]='Space',a[a.Key0=48]='Key0',a[a.Key1=49]='Key1',a[a.Key2=50]='Key2',a[a.Key3=51]='Key3',a[a.Key4=52]='Key4',a[a.Key5=53]='Key5',a[a.Key6=54]='Key6',a[a.Key7=55]='Key7',a[a.Key8=56]='Key8',a[a.KayA=65]='KayA',a[a.KeyB=66]='KeyB',a[a.KeyC=67]='KeyC',a[a.KeyD=68]='KeyD',a[a.KeyE=69]='KeyE',a[a.KeyF=70]='KeyF',a[a.KeyG=71]='KeyG',a[a.KeyH=72]='KeyH',a[a.KeyI=73]='KeyI',a[a.KeyJ=74]='KeyJ',a[a.KeyK=75]='KeyK',a[a.KeyL=76]='KeyL',a[a.KeyM=77]='KeyM',a[a.KeyN=78]='KeyN',a[a.KeyO=79]='KeyO',a[a.KeyP=80]='KeyP',a[a.KeyQ=81]='KeyQ',a[a.KeyR=82]='KeyR',a[a.KeyS=83]='KeyS',a[a.KeyT=84]='KeyT',a[a.KeyU=85]='KeyU',a[a.KeyV=86]='KeyV',a[a.KeyW=87]='KeyW',a[a.KeyX=88]='KeyX',a[a.KeyY=89]='KeyY',a[a.KeyZ=90]='KeyZ',a[a.Tilde=192]='Tilde',a[a.Dash=189]='Dash',a[a.EqualSign=187]='EqualSign',a[a.OpenBracket=219]='OpenBracket',a[a.CloseBracket=221]='CloseBracket',a[a.SingleQuote=222]='SingleQuote',a[a.BackSlash=220]='BackSlash',a[a.Comma=188]='Comma',a[a.Period=190]='Period',a[a.ForwardSlash=191]='ForwardSlash',a[a.AngleBracket=226]='AngleBracket',a[a.NumLock=144]='NumLock',a[a.Divide=111]='Divide',a[a.Multiply=106]='Multiply',a[a.Subtract=109]='Subtract',a[a.Add=107]='Add',a[a.DecimalPoint=110]='DecimalPoint',a[a.Num0=96]='Num0',a[a.Num1=97]='Num1',a[a.Num2=98]='Num2',a[a.Num3=99]='Num3',a[a.Num4=100]='Num4',a[a.Num5=101]='Num5',a[a.Num6=102]='Num6',a[a.Num7=103]='Num7',a[a.Num8=104]='Num8',a[a.Num9=105]='Num9',a[a.f1=112]='f1',a[a.f2=113]='f2',a[a.f3=114]='f3',a[a.f4=115]='f4',a[a.f5=116]='f5',a[a.f6=117]='f6',a[a.f7=118]='f7',a[a.f8=119]='f8',a[a.f9=120]='f9',a[a.f10=121]='f10',a[a.f11=122]='f11',a[a.f12=123]='f12',a[a.Escape=27]='Escape',a[a.Insert=45]='Insert',a[a.Delete=46]='Delete',a[a.Start=36]='Start',a[a.End=35]='End',a[a.PageUp=33]='PageUp',a[a.PageDown=34]='PageDown'})(c=b.Keys||(b.Keys={}))},function(a,b){'use strict';var c=this&&this.__assign||Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a};Object.defineProperty(b,'__esModule',{value:!0});var d=function(){function a(){}return a._init=function(){var a=this;this.cursor={x:window.innerWidth/2,y:window.innerHeight/2},this._buttonDown=!1,window.addEventListener('mousemove',function(b){a.cursor.x=b.clientX,a.cursor.y=b.clientY}),window.addEventListener('mousedown',function(b){a._buttonDown=0===b.button}),window.addEventListener('mouseup',function(b){a._buttonDown=0===b.button}),window.addEventListener('touchstart',function(){a._buttonDown=!0}),window.addEventListener('touchmove',function(a){a.preventDefault()}),window.addEventListener('touchend',function(){a._buttonDown=!1})},a.getCursor=function(){return c({},this.cursor)},a.getX=function(){return this.cursor.x},a.getY=function(){return this.cursor.y},a.buttonDown=function(){return this._buttonDown},a}();b.Mouse=d,d._init()}]);
//# sourceMappingURL=app.js.map