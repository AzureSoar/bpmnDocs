---
next: '/http'
---

# 快速上手

## 安装相关依赖
`npm i bpmn-js --save-D`

## 编写HTML代码
```vue
// basic.vue
<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
  </div>
</template>
```

## 编写JS代码
```vue
// basic.vue
<script>
  // 引入相关的依赖
  import BpmnModeler from 'bpmn-js/lib/Modeler'
  import {
    xmlStr
  } from '../mock/xmlStr' // 这里是直接引用了xml字符串
  export default {
    name: '',
    components: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
    mounted() {
      this.init()
    },
    data() {
      return {
        // bpmn建模器
        bpmnModeler: null,
        container: null,
        canvas: null
      }
    },
    methods: {
      init() {
        // 获取到属性ref为“canvas”的dom节点
        const canvas = this.$refs.canvas
        // 建模
        this.bpmnModeler = new BpmnModeler({
          container: canvas
        })
        this.createNewDiagram()
      },
      createNewDiagram() {
        // 将字符串转换成图显示出来
        this.bpmnModeler.importXML(xmlStr, (err) => {
          if (err) {
            // console.error(err)
          } else {
            // 这里是成功之后的回调, 可以在这里做一系列事情
            this.success()
          }
        })
      },
      success() {
        // console.log('创建成功!')
      }
    }
  }
</script>
```
## 编写CSS
```css
// basic.vue
<style scoped>
.containers{
	position: absolute;
	background-color: #ffffff;
	width: 100%;
	height: 100%;
}
.canvas{
	width: 100%;
	height: 100%;
}
.panel{
	position: absolute;
	right: 0;
	top: 0;
	width: 300px;
}
</style>
```
使用命令npm run start启动项目, 打开可以看到:
![startview](/startview.png)

## vue中使用bpmn.js-左侧工具栏
左侧工具栏作用: 给图形添加新的节点

要想使用左侧工具栏, 只需要在项目中引用相应的样式就可以了:
在main.js中引用css:

```js
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
// 以下为bpmn工作流绘图工具的样式
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
```

provider.vue的其他代码片段都和basic.vue 相同.
此时打开页面就发现多了左侧的工具栏, 且可以添加节点.
![leftpanel](/leftpanel.png)


## vue中使用bpmn.js-右侧属性栏
属性栏的作用: 用户在点击图上的节点的时候, 能获取到该节点的属性信息
想要使用右侧的属性栏就得安装上一个名为bpmn-js-properties-panel的插件了.

### 安装插件
```
npm i bpmn-js-properties-panel --save-D
```

### 在main.js中引入相应样式
```js
// main.js
import Vue from 'vue'
...
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css' // 右边工具栏样式
...
```


### 在页面中引入module
```vue
<script>
// panel.vue
...
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda'
...
methods: {
  init() {
    // 获取到属性ref为“canvas”的dom节点
    const canvas = this.$refs.canvas
    // 建模
    this.bpmnModeler = new BpmnModeler({
      container: canvas,
      //添加控制板
      propertiesPanel: {
        parent: '#js-properties-panel'
      },
      additionalModules: [
        // 右边的属性栏
        propertiesProviderModule,
        propertiesPanelModule
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor
      }
    })
    this.createNewDiagram()
  }
}
</script>
```
![rightpanel](/rightpanel.png)
