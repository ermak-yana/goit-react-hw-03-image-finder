(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(3),r=n.n(c),o=(n(12),n(4)),s=n(5),u=n(7),h=n(6),d=(n(13),n(1)),p=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={images:null},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://pixabay.com/api/?q=banan&page=1&key=23265358-c42edc99dfdc4b7aade5bc218&image_type=photo&orientation=horizontal&per_page=12").then((function(t){return t.json()})).then((function(e){return t.setState({images:e})}))}},{key:"render",value:function(){return Object(d.jsx)("div",{children:this.state.images&&Object(d.jsx)("div",{children:this.state.images.id})})}}]),n}(a.Component);r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.77e19cc4.chunk.js.map