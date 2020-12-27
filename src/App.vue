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
    <van-collapse v-model="plugins_list['plugins_type_id']" accordion="true">
      <van-collapse-item  v-for="(plugin,index) in plugins_list['plugins_list']" 
                          :key="plugin['id']" 
                          center
                          :name=index 
                          :disabled="plugin['plugin_state'] == '禁用' ? true:false"
                          >
                          <!-- @click="scrollTo(plugin['plugin_name'])" -->
                          
        <template #title>
          <div :id="plugin['plugin_name']">{{plugin["plugin_name"]}}
            <van-tag plain type="danger" v-if="plugin['plugin_state']">{{plugin['plugin_state']}}</van-tag>
          </div>
        </template>
        <template #value>
          <div>{{plugin["plugin_service_name"]}}</div>
        </template>

        <van-cell-group border="true" style="border:1px solid pink;">
          <van-cell title="指令" 
                    center
                    value="功能" 
                    icon="question-o"
                    @click="doShowNotice()"
                    />
          <van-popup  v-model:show="showNotice" 
                      position="bottom" 
                      :style="{ height: '45%' }" 
                      >
            <div style="margin:25px;">
              <van-row>
              <van-col span="3">指令：</van-col>
              <van-col span="15">用于与bot进行对话</van-col>
            </van-row>
            <van-row>
              <van-col span="3"></van-col>
              <van-col span="15">指令中'尖括号'为必填项</van-col>
            </van-row>
            <van-row>
              <van-col span="3"></van-col>
              <van-col span="19">指令中'方括号'为选填项</van-col>
            </van-row>
            <van-row>
              <van-col span="3">功能：</van-col>
              <van-col span="19">该条指令对应的功能</van-col>
            </van-row>
            <van-row>
              <van-col span="3">Tips：</van-col>
              <van-col span="19">点击对应指令即可完成复制</van-col>
            </van-row >
            <van-row v-if="plugin['plugin_notice']">
              <van-col span="3">注意：</van-col>
              <van-col span="19">{{plugin['plugin_notice']}}</van-col>
            </van-row>
            </div>
            
          </van-popup>
          
          <van-cell v-for="command in plugin['plugin_commands']" 
                    :key="command.id"
                    center
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
        <van-cell center value="功能">
          <template #title>
            <van-tag plain type="primary" >插件名称</van-tag>
            <div>
              指令
            </div>
          </template>
          <!-- <template #value>
            <div>
              功能
            </div>
          </template>  -->
        </van-cell>

        <van-cell v-for="command in res_list.data" 
                  :key="command.id"
                  center
                  :value="command.description"
                  @click="doCopy(command.command)"
        >
          <template #title >
            <van-tag plain type="primary" >{{command.plugin_name}}</van-tag>
            <div>
              {{command.command}}
            </div>

          </template>

        </van-cell>
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

    function search(data,val,plugin_name,command,description,data_list) {
      let res_list = data_list
      if (data) {
        if (typeof data === "object") {
          for (let data2 in data) {
            if (data2 === "plugin_name") {
              plugin_name = data[data2]
            }
            if (data2 === "command") {
              command = data[data2]
            }
            if (data2 === "description") {
              description = data[data2]
            }
            if (data[data2]) {
              // console.log(command, description,typeof data);
              search(data[data2], val, plugin_name, command, description, res_list);
            }
          }
          return res_list
        } else if (typeof data === "string" && command && description
            && command.indexOf(val) > -1||description.indexOf(val) > -1) {
          console.log(command, description,typeof data)
          let res_data = {
            "plugin_name": plugin_name,
            "command": command,
            "description": description
          }
          res_list.push(res_data)
          return res_list
        } else {
          return res_list
        }
      }
    }
    function onSearch(val) {
      if (val) {
        isRes.value=false
        res_list.data=search(plugins_data, val, "", "","", []);
        // val.value=""
        console.log(res_list);
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
    function doShowNotice(){
      showNotice.value=true
    }
    
    let isRes=ref(true)
    let res_list=reactive({data:""})
    let value=ref("")
    let showNotice=ref(false)
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
      showNotice,
      doShowNotice,
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
    },
    scrollTo(id){
      setTimeout(function (){
        document.getElementById(id).scrollIntoView();
        }, 1000);
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
