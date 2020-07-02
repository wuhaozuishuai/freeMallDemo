<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{name}}</p>
    <button @click="update">更新数据</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      name:"welcome vue"
    }

  },
    beforeCreate(){
        //生命周期一：创建前，初始化(初始化一些事件，生命周期)
    },
    //在两者之间（创建事件，绑定事件，监听data等）

    created(){
//生命周期一：创建（）
    },
    //检测是否存在挂载对象
    beforeMount(){
      //渲染前()

    },
    //
    mounted(){

    },
    beforeUpdate(){
//update只有在数据发生变化时才会执行
    },
    updated(){

    },
    beforeDestroy(){

    },
    destroyed(){
        //销毁
    }
    ,methods:{//事件
    update(){
      this.name = "鑫鑫鑫"
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
