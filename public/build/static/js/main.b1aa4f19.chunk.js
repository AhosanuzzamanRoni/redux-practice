(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(t,e,r){"use strict";r.r(e);var c=r(0),n=r.n(c),a=r(4),d=r.n(a),i=r(2),o="ADD_TO_CART",s="REMOVE_FROM_CART",u=r(1),j={removeFromCart:function(t){return{type:s,cartId:t}}},p=Object(i.b)((function(t){return{cart:t.cart}}),j)((function(t){var e=t.cart,r=t.removeFromCart;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"This is cart"}),Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsxs)("li",{children:[" ",t.name,Object(u.jsx)("button",{onClick:function(){return r(t.cartId)},children:"X"})," "]},t.cartId)}))})]})})),b=function(t){var e=t.addToCart,r=t.product;return Object(u.jsxs)("div",{style:{border:"1px solid green"},children:[Object(u.jsx)("h5",{children:r.name}),Object(u.jsx)("button",{onClick:function(){return e(r.id,r.name)},type:"",children:"Add to Cart"})]})},l={addToCart:function(t,e){return{type:o,id:t,name:e}}},O=Object(i.b)((function(t){return{products:t.products}}),l)((function(t){var e=t.products,r=t.addToCart;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:" This is shop"}),e.map((function(t){return Object(u.jsx)(b,{product:t,addToCart:r},t.id)}))]})}));function h(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(p,{}),Object(u.jsx)(O,{})]})}var m=r(9),x=r(3),f=r(8),v={cart:[],products:[{name:"lenevo Laptop",id:1},{name:"Asus Laptop",id:2},{name:"Dell laptop",id:3},{name:"Hp laptop",id:4},{name:"Toshiba Laptop",id:5}]},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:var r={productId:e.id,name:e.name,cartId:t.cart.length+1},c=[].concat(Object(f.a)(t.cart),[r]);return Object(x.a)(Object(x.a)({},t),{},{cart:c});case s:var n=e.cartId,a=t.cart.filter((function(t){return t.cartId!==n}));return Object(x.a)(Object(x.a)({},t),{},{cart:a});default:return t}},T=Object(m.a)(C);d.a.render(Object(u.jsx)(i.a,{store:T,children:Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(h,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b1aa4f19.chunk.js.map