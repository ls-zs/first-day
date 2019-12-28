const Mock =require("mockjs")
let arr=[];

for(let i=0;i<=1;i++){
  arr.push({
      name:Mock.Random.cname(),
      index:0
  })
}

module.exports = arr