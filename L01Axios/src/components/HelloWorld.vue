<template>
  <div>
    <ul>
      <li v-for="(list,index) in msg">{{list}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: []
    };
  },
  created() {
    

    //（1）get不带参数
    this.$axios
      .get(
        "https://www.easy-mock.com/mock/5c468fcd3ea95957a403a95c/KRYL/queryGroupData"
      )
      .then(res => {
        console.log(res.data.data);
        this.msg = res.data.data;
      });
    //（2）get带参数
    // this.$axios.get("https://www.easy-mock.com/mock/5c468fcd3ea95957a403a95c/KRYL/queryGroupData",{
    //   parmse:{ //这是参数
    //     coust:10
    //   }
    // }).then(res=>{
    //   console.log(res.data.data);
    // })

//post请求
 this.$axios.post('https://www.easy-mock.com/mock/5bbab3f329a4d80bbccbcb81/example/login',{username:"user1"})
  .then((response)=>{
          console.log(`post`,response.data.data);
  })
  }


   

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
