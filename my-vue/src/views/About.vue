<template>
  <div class="about">
    <div class="aheader">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="itemclick(index)">{{item.name}}</li>
      </ul>
      <div class="name">
        {{name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:[],
      name:"",
      list:[{
        name:"tab1",
      },{
        name:"tab2",
      }]
    }
  },
  created(){
    this.getdata()
  },
 methods:{
    getdata(){
      this.$http.get("/list").then(res=>{
        this.data=res.data.list
      })
    },
    itemclick(index){
      this.name=this.data[index].name
    }
  }
}
</script>

<style lang="scss">
.about{
  width: 100%;
  height: 100%;
  display: flex;
    flex-direction: column
}
.aheader{
  width: 100%;
  height: 200px;
  ul{
    width: 100%;
    height: 45px;
    display: flex;
    li{
      flex: 5;
      display: flex;
       justify-content: center;
      align-items: center;
      border: 1px solid black;
      margin: 5px;
      padding: 5px;
    }
  }
  .name{
    width: 100%;
    height: 155px
  }
}
</style>
