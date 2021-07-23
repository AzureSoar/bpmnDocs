---
prev: /http
# next: /API
---

# 事件

## 监听modeler并绑定事件
很多时候你期望的是在用户在进行不同操作的时候能够监听到他操作的是什么, 从而做想要做的事情.
是进行了shape的新增还是进行了线的新增.
比如如下的一些监听事件:

shape.added 新增一个shape之后触发;shape.move.end 移动完一个shape之后触发;shape.removed 删除一个shape之后触发;
继续在项目案例bpmn-vue-basic的基础上创建一个event.vue文件:
并在success()函数中添加上监听事件的函数:
```vue
// event.vue
<script>
...
success () {
  this.addModelerListener()
},
// 监听 modeler
addModelerListener() {
  const bpmnjs = this.bpmnModeler
  const that = this
  // 这里我是用了一个forEach给modeler上添加要绑定的事件
  const events = ['shape.added', 'shape.move.end', 'shape.removed', 'connect.end', 			'connect.move']
  events.forEach(function(event) {
    that.bpmnModeler.on(event, e => {
      console.log(event, e)
      var elementRegistry = bpmnjs.get('elementRegistry')
      var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
      console.log(shape)
    })
  })
},
...
</script>
```
如图所示, 在这里你就可以获取到相关节点的所有信息了:
![event1](/event1.png)

其实具体有哪些事件我在官网上都没有找到说明, 以上只是我在查找到bpmn.io/diagram.js/…文件之后, 取的一些我项目里有用到的事件.
”
## 监听element并绑定事件
上面介绍的是监听modeler并绑定事件, 可能你也需要监听用户点击图形上的element或者监听某个element改变:

element.click 点击元素;element.changed 当元素发生改变的时候(包括新增、移动、删除元素)
继续在success()上添加监听事件:
```vue
// event.vue
<script>
...
success () {
	...
	this.addEventBusListener()
},
addEventBusListener () {
	let that = this
  const eventBus = this.bpmnModeler.get('eventBus') // 需要使用eventBus
  const eventTypes = ['element.click', 'element.changed'] // 需要监听的事件集合
  eventTypes.forEach(function(eventType) {
    eventBus.on(eventType, function(e) {
      console.log(e)
    })
  })
}
</script>
```

配置好addEventBusListener()函数后, 在进行元素的点击、新增、移动、删除的时候都能监听到了.
但是有一点很不好, 你在点击“画布”的时候, 也就是根元素也可能会触发此事件, 我们一般都不希望此时会触发, 因此我们可以在on回调中添加一些判断, 来避免掉不需要的情况:
```js
eventBus.on(eventType, function(e) {
  if (!e || e.element.type == 'bpmn:Process') return // 这里我的根元素是bpmn:Process
  console.log(e)
})
```
此时我们可以把监听到返回的节点信息打印出来看看:
![event2](/event2.png)

如上图, 它会打印出该节点的Shape信息和DOM信息等, 但我们可能只关注于Shape信息(也就是该节点的id、type等等信息), 此时我们可以使用elementRegistry来获取Shape信息:
```js
eventBus.on(eventType, function(e) {
  if (!e || e.element.type == 'bpmn:Process') return // 这里我的根元素是bpmn:Process
  console.log(e)
  var elementRegistry = this.bpmnModeler.get('elementRegistry')
  var shape = elementRegistry.get(e.element.id) // 传递id进去
  console.log(shape) // {Shape}
  console.log(e.element) // {Shape}
  console.log(JSON.stringify(shape)===JSON.stringify(e.element)) // true
})
```

或者你也可以直接就用e.element获取到Shape的信息, 我比较了一下它们两是一样的. 但是官方是推荐使用elementRegistry的方式.

## 通过监听事件判断操作方式
上面我们已经介绍了modeler和element的监听绑定方式, 在事件应用中, 你更多的需要知道用户要进行什么操作, 好写对应的业务逻辑.
这里我就以我工作中要用到的场景为案例进行讲解.

新增了shape新增了线(connection)删除了shape和connection移动了shape和线
```js
// event.vue
    ...
    success () {
      this.addModelerListener()
      this.addEventBusListener()
    },
    // 添加绑定事件
    addBpmnListener () {
      const that = this
      // 获取a标签dom节点
      const downloadLink = this.$refs.saveDiagram
      const downloadSvgLink = this.$refs.saveSvg
        // 给图绑定事件，当图有发生改变就会触发这个事件
      this.bpmnModeler.on('commandStack.changed', function () {
        that.saveSVG(function(err, svg) {
            that.setEncoded(downloadSvgLink, 'diagram.svg', err ? null : svg)
        })
        that.saveDiagram(function(err, xml) {
            that.setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml)
        })
      })
    },
    addModelerListener() {
      // 监听 modeler
      const bpmnjs = this.bpmnModeler
      const that = this
      // 'shape.removed', 'connect.end', 'connect.move'
      const events = ['shape.added', 'shape.move.end', 'shape.removed']
      events.forEach(function(event) {
        that.bpmnModeler.on(event, e => {
          var elementRegistry = bpmnjs.get('elementRegistry')
          var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
          // console.log(shape)
          if (event === 'shape.added') {
            console.log('新增了shape')
          } else if (event === 'shape.move.end') {
            console.log('移动了shape')
          } else if (event === 'shape.removed') {
            console.log('删除了shape')
          }
        })
      })
    },
    addEventBusListener() {
      // 监听 element
      let that = this
      const eventBus = this.bpmnModeler.get('eventBus')
      const eventTypes = ['element.click', 'element.changed']
      eventTypes.forEach(function(eventType) {
        eventBus.on(eventType, function(e) {
          if (!e || e.element.type == 'bpmn:Process') return
          if (eventType === 'element.changed') {
            that.elementChanged(eventType, e)
          } else if (eventType === 'element.click') {
            console.log('点击了element')
          }
        })
      })
    },
    elementChanged(eventType, e) {
      var shape = this.getShape(e.element.id)
      if (!shape) {
        // 若是shape为null则表示删除, 无论是shape还是connect删除都调用此处
        console.log('无效的shape')
        // 由于上面已经用 shape.removed 检测了shape的删除, 因此这里只判断是否是线
        if (this.isSequenceFlow(shape.type)) {
          console.log('删除了线')
        }
      }
      if (!this.isInvalid(shape.type)) {
        if (this.isSequenceFlow(shape.type)) {
          console.log('改变了线')
        }
      }
    },
    getShape(id) {
      var elementRegistry = this.bpmnModeler.get('elementRegistry')
      return elementRegistry.get(id)
    },
    isInvalid (param) { // 判断是否是无效的值
      return param === null || param === undefined || param === ''
    },
    isSequenceFlow (type) { // 判断是否是线
      return type === 'bpmn:SequenceFlow'
    }
```