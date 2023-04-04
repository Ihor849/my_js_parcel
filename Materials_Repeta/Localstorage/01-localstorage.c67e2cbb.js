!function(){localStorage.setItem("my-data",JSON.stringify({name:"Mango",age:12}));const o=localStorage.getItem("my-data");console.log(o),localStorage.setItem("my-data",JSON.stringify({name:"Mango",age:"12"}));const a=localStorage.getItem("my-data1");console.log(a);const t=JSON.parse(o);console.log(t);const e=JSON.parse(a);console.log(e)}();
//# sourceMappingURL=01-localstorage.c67e2cbb.js.map
