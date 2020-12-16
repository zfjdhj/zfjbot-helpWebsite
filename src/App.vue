<template>
  <van-nav-bar title="猫猫食用手册">
    <template #left>
      <img src="http://resource.zfjdhj.cn/images/ico/pcr.zfjdhj.cn.png" style="width: 40px;height: 40px;">
    </template>
  </van-nav-bar>
  <!-- link 模式，在右侧显示链接箭头 -->
  <van-notice-bar mode="link" left-icon="info-o"
    @click="noticeBarClick">
    当前适配移动端，点此访问PC端
  </van-notice-bar>
  <van-sticky>
    <form action="/">
      <van-search
          v-model="value"
          shape="round"
          background="#FFBB77"
          placeholder="请输入搜索关键词"
          @search="onSearch(value)"
          @cancel="onCancel"
      />
    </form>
  </van-sticky>
  <div v-for="plugins_list in plugins_data.data" :key="plugins_list.id" v-show="isRes">
    <van-button type="primary" block>{{plugins_list.plugins_type_name}}</van-button>
    <van-collapse v-model="plugins_list['plugins_type_id']" accordion="true" border="false">
      <van-collapse-item v-for="(plugin,index) in plugins_list['plugins_list']" :key="plugin['id']" :name=index>
        <template #title>
          <div>{{plugin["plugin_name"]}}</div>
        </template>
        <template #value>
          <div>{{plugin["plugin_service_name"]}}</div>
        </template>
        <van-cell-group border="false">
          <van-cell title="指令" value="功能"/>
          <van-cell v-for="command in plugin['plugin_commands']" :key="command.id"
                    :title="command.command" :value="command.description"
                    @click="doCopy(command.command)"
          />
        </van-cell-group>
      </van-collapse-item>
    </van-collapse>
  </div>
  <div v-show="!isRes">
    <van-button icon="arrow-left" icon-position="left"
                type="primary" block @click="onCancel">搜索结果</van-button>
      <van-cell-group>
        <van-cell title="指令" value="功能"/>
      <van-cell v-for="command in res_list.data" :key="command.id"
                :title="command.command" :value="command.description"
                @click="doCopy(command.command)"
                />
      </van-cell-group>
  </div>
</template>


<script>
import {reactive,ref} from "vue"
import {Toast} from "vant";
// import plugins_data_json from "../public/data.json"
import axios from "axios"

export default {
  name: 'App',
  setup(){
    let plugins_data=reactive({data:""})
    axios.get("data.json").then(function (res) {
      plugins_data.data=res.data
      console.log(plugins_data);
    }).catch(function (err) {
      console.log(err);
    })

    function search(data,val,plugin_name,command,data_list){
      let res_list=data_list
      if (data){
        if(typeof data === "object"){
          for ( let data2 in data){
            if(data2==="plugin_name"){
              plugin_name=data[data2]
            }
            if(data2==="command"){
              command=data[data2]
            }
            if (data[data2]){
              search(data[data2], val, plugin_name,command, res_list);
            }
          }
          return res_list
        }else if(typeof data === "string" && command && command !== data && data.indexOf(val) > -1){
            let res_data={
              "plugin_name":plugin_name,
              "command":command,
              "description":data,
            }
            res_list.push(res_data)
            return res_list
        }else{
          return res_list
        }
      }
    }
    function onSearch(val) {
      if (val) {
        isRes.value=false
        res_list.data=search(plugins_data, val, "", "", []);
        // val.value=""
        return res_list
      } else{
        isRes.value=true
      }
    }
    function onCancel(){
      isRes.value=true
      value.value=""
    }
    function noticeBarClick(){
      window.location="yobot/help"
    }
    let isRes=ref(true)
    let res_list=reactive({data:""})
    let value=ref("")
    console.log(plugins_data);
    return {
      plugins_data,
      onSearch,
      onCancel,
      noticeBarClick,
      search,
      isRes,
      res_list,
      value,
    }
  },
  data() {
    return {
      activeName: '1',
      message: 'Copy These Text',
      show:true
    };
  },
  methods:{
    dataProcessing (val) {
      this.message = this.message + ' ' + val
    },
    doCopy: function (val) {
        let _input = document.createElement("input");   // 直接构建input
        _input.value = val;  // 设置内容
        document.body.appendChild(_input);    // 添加临时实例
        _input.select();   // 选择实例内容
        if (document.execCommand("Copy",true)){
          Toast("复制成功")
        }
        document.body.removeChild(_input); // 删除临时实例
    }
  },
  components: {
  }
}

</script>

<style lang="less">
.van-button__content{
  justify-content: left !important;
};
</style>
