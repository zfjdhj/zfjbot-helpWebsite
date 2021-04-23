<template>
  <div
    v-for="plugins_list in plugins_data.data"
    :key="plugins_list.id"
    v-show="isRes"
  >
    <!-- {{ plugins_list }} -->
    {{ plugins_list.plugins_type_name }}
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";

export default {
  name: "zfjbot_plugin",
  setup() {
    let isRes = ref(true);
    let res_list = reactive({ data: "" });
    let plugins_data = reactive({ data: "" });
    axios
      .get("/data.json")
      .then(function (res) {
        plugins_data.data = res.data;
        console.log(plugins_data);
      })
      .catch(function (err) {
        console.log(err);
      });
    return {
      plugins_data,
      isRes,
      res_list,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
