---
prev: /http
next:
---
# API说明文档

## 公共信息
### 报文规范
#### 请求报文
<table>
<tr>
  <th>请求</th>
  <th colspan='3'>数据项名称</th>
  <th>是否必须</th>
  <th>描述</th>
</tr>
<tr>
  <th rowspan="10">请求协议头</th>
  <td colspan='3'>C-Timestamp</td>
  <td>是</td>
  <td>请求时间戳，表示毫秒数的时间，是一个整数，表示从CUT（Coordinated Universal Time）时间1970年1月1日00:00:00（这个时间也称为UNIX Epoch/POSIX time）开始到当前时刻的毫秒数</td>
</tr>
<tr>
  <td colspan='3'>C-Env-Type</td>
  <td>否</td>
  <td>请求应用的环境类型
    tr-生产环境
    rd-灰度环境
    </td>
</tr>
<tr>
  <td colspan='3'>C-Signature</td>
  <td>否</td>
  <td>签名信息</td>
</tr>
<tr>
  <td colspan='3'>C-Nonce</td>
  <td>否</td>
  <td>签名唯一随机数。用于防止网络重放攻击，建议您在不同请求使用不同的随机数</td>
</tr>
<tr>
  <td colspan='3'>C-Version</td>
  <td>否</td>
  <td>访问的目标接口版本号，用于某一环境类型之下的多版本部署支持
如V00，V01，V02</td>
</tr>
<tr>
  <td colspan='3'>C-Business-Id</td>
  <td>否</td>
  <td>请求唯一标识</td>
</tr>
<tr>
  <td colspan='3'>C-App-Id</td>
  <td>是</td>
  <td>调用方AppId,用以表明服务调用方身份信息</td>
</tr>
<tr>
  <td colspan='3'>C-Tenancy-Id</td>
  <td>是</td>
  <td>服务提供方租户Id，由门户统一分配</td>
</tr>
<tr>
  <td colspan='3'>C-Custom-Header</td>
  <td>否</td>
  <td>自定义请求头，可以存储自定义json格式的map对象</td>
</tr>
<tr>
  <td colspan='3'>C-Dynamic-Password</td>
  <td>否</td>
  <td>动态口令，用于AppId校验通过以后，针对某个应用请求方的token</td>
</tr>

<tr>
  <th rowspan="11">请求体</th>
  <td rowspan='11'>C-Request-Body
（请求体实体域）</td>
  <td rowspan='8'>PubCommon
（公共信息）</td>
  <td>txnIttChnlId</td>
  <td>否</td>
  <td>交易发起渠道编号</td>
</tr>
<tr>
  <td>txnIttChnlCgyCode</td>
  <td>否</td>
  <td>交易发起渠道类别</td>
</tr>
<tr>
  <td>instId</td>
  <td>否</td>
  <td>交易机构编号</td>
</tr>
<tr>
  <td>instNm</td>
  <td>否</td>
  <td>机构名称</td>
</tr>
<tr>
  <td>ins_chn_fullnm</td>
  <td>否</td>
  <td>所属机构全称</td>
</tr>
<tr>
  <td>ins_chn_shrtnm</td>
  <td>否</td>
  <td>所属机构简称</td>
</tr>
<tr>
  <td>lng_id</td>
  <td>否</td>
  <td>语言标识</td>
</tr>
<tr>
  <td>menuId</td>
  <td>否</td>
  <td>菜单ID</td>
</tr>
<tr>
<td rowspan='2'>PageCommon
（分页信息）</td>
  <td>tRecInPage</td>
  <td>否</td>
  <td>分页查询每页笔数</td>
</tr>
<tr>
  <td>tPageJump</td>
  <td>否</td>
  <td>分页查询跳转页码</td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td>否</td>
  <td>定义具体请求要素</td>
</tr>
</table>

#### 响应报文
<table>
<tr>
  <th>请求</th>
  <th colspan='3'>数据项名称</th>
  <th>是否必须</th>
  <th>描述</th>
</tr>
<tr>
  <th rowspan="2">响应协议头</th>
  <td colspan='3'>C-Business-Id </td>
  <td>否</td>
  <td>请求的唯一标识，客户端可以跟踪此流水号查询接口调用状态等信息。</td>
</tr>
<tr>
  <td colspan='3'>C-Error-Message</td>
  <td>否</td>
  <td>网关调用或服务产生其他错误时返回的错误描述信息。</td>
</tr>

<tr>
  <th rowspan="11">响应体</th>
  <td colspan='3'>C-API-Status</td>
  <td >否</td>
  <td>接口调用状态，00-成功，01-失败，02-不确定</td>
</tr>
<tr>
  <td colspan='3'>C-Response-Code</td>
  <td >否</td>
  <td>接口响应码，被调用接口返回的执行结果代码。</td>
</tr>
<tr>
  <td colspan='3'>C-Response-Desc</td>
  <td >否</td>
  <td>接口响应描述</td>
</tr>
<tr>
  <td colspan='3'>C-Receive-Time</td>
  <td >否</td>
  <td>接口接收时间</td>
</tr>
<tr>
  <td colspan='3'>C-Response-Time</td>
  <td >否</td>
  <td>接口响应时间</td>
</tr>

<tr>
<td rowspan='5'>C-Response-Body
（响应体实体域）</td>
<td rowspan='4'>PageCommon
（分页信息）</td>
  <td>totalPage</td>
  <td>否</td>
  <td>分页查询总页数</td>
</tr>
<tr>
  <td>totalRec</td>
  <td>否</td>
  <td>分页查询总笔数</td>
</tr>
<tr>
  <td>tCurrTotalPage</td>
  <td>否</td>
  <td>分页查询当前页数</td>
</tr>
<tr>
  <td>tCurrTotalRec</td>
  <td>否</td>
  <td>分页查询当前笔数</td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td>定义具体响应要素</td>
</tr>
</table>

#### 识别结果报文定义
##### 身份证
<table>
<tr>
  <th>响应</th>
  <th>数据项名称</th>
  <th>是否必须</th>
  <th>描述</th>
</tr>
<tr>
  <th rowspan="8">响应体</th>
  <td >name</td>
  <td >是</td>
  <td>姓名</td>
</tr>
<tr>
  <td >sex</td>
  <td >是</td>
  <td>性别</td>
</tr>
<tr>
  <td >birthday</td>
  <td >是</td>
  <td>生日</td>
</tr>
<tr>
  <td >address</td>
  <td >是</td>
  <td>地址</td>
</tr>
<tr>
  <td >cardNo</td>
  <td >是</td>
  <td>卡号</td>
</tr>
<tr>
  <td >authority</td>
  <td >是</td>
  <td>国籍</td>
</tr>
<tr>
  <td >duraOfVali</td>
  <td >是</td>
  <td>有效期</td>
</tr>
<tr>
  <td >nation</td>
  <td >是</td>
  <td>民族</td>
</tr>
</table>

##### 银行卡
<table>
<tr>
  <th>响应</th>
  <th>数据项名称</th>
  <th>是否必须</th>
  <th>描述</th>
</tr>
<tr>
  <th rowspan="8">响应体</th>
  <td >cardNo</td>
  <td >是</td>
  <td>卡号</td>
</tr>
<tr>
  <td >valiDate</td>
  <td >是</td>
  <td>有效期</td>
</tr>
<tr>
  <td >cardType</td>
  <td >是</td>
  <td>类型</td>
</tr>
</table>

##### 票据
<table>
<tr>
  <th>响应</th>
  <th>数据项名称</th>
  <th>是否必须</th>
  <th>描述</th>
</tr>
<tr>
  <th rowspan="20">响应体</th>
  <td >invoiceType</td>
  <td >是</td>
  <td>发票种类</td>
</tr>
<tr>
  <td >invoiceTypeOrg</td>
  <td >是</td>
  <td>发票名称</td>
</tr>
<tr>
  <td >invoiceCode</td>
  <td >是</td>
  <td>发票代码</td>
</tr>
<tr>
  <td >invoiceNum</td>
  <td >是</td>
  <td>发票号码</td>
</tr>
<tr>
  <td >invoiceDate</td>
  <td >是</td>
  <td>开票日期</td>
</tr>
<tr>
  <td >payee</td>
  <td >是</td>
  <td>收款人</td>
</tr>
<tr>
  <td >checker</td>
  <td >是</td>
  <td>复核</td>
</tr>
<tr>
  <td >noteDrawer</td>
  <td >是</td>
  <td>开票人</td>
</tr>
<tr>
  <td >purchaserName</td>
  <td >是</td>
  <td>购方名称</td>
</tr>
<tr>
  <td >purchaserRegisterNum</td>
  <td >是</td>
  <td>购方纳税人识别号</td>
</tr>
<tr>
  <td >purchaserAddress</td>
  <td >是</td>
  <td>购方地址及电话</td>
</tr>
<tr>
  <td >purchaserBank</td>
  <td >是</td>
  <td>购方开户行及账号</td>
</tr>
<tr>
  <td >sellerName</td>
  <td >是</td>
  <td>销售方名称</td>
</tr>
<tr>
  <td >sellerRegisterNum</td>
  <td >是</td>
  <td>销售方纳税人识别号</td>
</tr>
<tr>
  <td >sellerAddress</td>
  <td >是</td>
  <td>销售方开户行及账号</td>
</tr>
<tr>
  <td >totalAmount</td>
  <td >是</td>
  <td>合计金额</td>
</tr>
<tr>
  <td >totalTax</td>
  <td >是</td>
  <td>合计税额</td>
</tr>
<tr>
  <td >amountInWords</td>
  <td >是</td>
  <td>价税合计(大写)</td>
</tr>
<tr>
  <td >amountInFiguers</td>
  <td >是</td>
  <td>价税合计(小写)</td>
</tr>
</table>

##### 驾驶证
<table>
<tr>
  <th>响应</th>
  <th>数据项名称</th>
  <th>是否必须</th>
  <th>描述</th>
</tr>
<tr>
  <th rowspan="10">响应体</th>
  <td >cardNo</td>
  <td >是</td>
  <td>驾驶证号</td>
</tr>
<tr>
  <td >name</td>
  <td >是</td>
  <td>姓名</td>
</tr>
<tr>
  <td >sex</td>
  <td >是</td>
  <td>性别</td>
</tr>
<tr>
  <td >nationality</td>
  <td >是</td>
  <td>国籍</td>
</tr>
<tr>
  <td >addr</td>
  <td >是</td>
  <td>地址</td>
</tr>
<tr>
  <td >birthday</td>
  <td >是</td>
  <td>生日</td>
</tr>
<tr>
  <td >classOfVehiPerm</td>
  <td >是</td>
  <td>准驾类型</td>
</tr>
<tr>
  <td >validFrom</td>
  <td >是</td>
  <td>有效期始</td>
</tr>
<tr>
  <td >validFor</td>
  <td >是</td>
  <td>有效期止</td>
</tr>
<tr>
  <td >fileNo</td>
  <td >是</td>
  <td>档案编号</td>
</tr>
</table>

##### 行驶证
<table>
<tr>
  <th>响应</th>
  <th>数据项名称</th>
  <th>是否必须</th>
  <th>描述</th>
</tr>
<tr>
  <th rowspan="19">响应体</th>
  <td >plateNo</td>
  <td >是</td>
  <td>号牌号码</td>
</tr>
<tr>
  <td >vehicleType</td>
  <td >是</td>
  <td>机动车类型</td>
</tr>
<tr>
  <td >Owner</td>
  <td >是</td>
  <td>机动车所有人</td>
</tr>
<tr>
  <td >addr</td>
  <td >是</td>
  <td>地址</td>
</tr>
<tr>
  <td >useCharacter</td>
  <td >是</td>
  <td>使用性质</td>
</tr>
<tr>
  <td >model</td>
  <td >是</td>
  <td>品牌型号</td>
</tr>
<tr>
  <td >vin</td>
  <td >是</td>
  <td>车辆识别代号</td>
</tr>
<tr>
  <td >registerDate</td>
  <td >是</td>
  <td>注册日期</td>
</tr>
<tr>
  <td >issueDate</td>
  <td >是</td>
  <td>发证日期</td>
</tr>
<tr>
  <td >fileNo</td>
  <td >是</td>
  <td>档案编号</td>
</tr>
<tr>
  <td >approPassCapac</td>
  <td >是</td>
  <td>核定载人数</td>
</tr>
<tr>
  <td >grossMass</td>
  <td >是</td>
  <td>总质量</td>
</tr>
<tr>
  <td >unladenMass</td>
  <td >是</td>
  <td>整备质量</td>
</tr>
<tr>
  <td >approLoad</td>
  <td >是</td>
  <td>核定载质量</td>
</tr>
<tr>
  <td >overDimen</td>
  <td >是</td>
  <td>外廓尺寸</td>
</tr>
<tr>
  <td >tracMass</td>
  <td >是</td>
  <td>准牵引总质量</td>
</tr>
<tr>
  <td >comment</td>
  <td >是</td>
  <td>备注</td>
</tr>
<tr>
  <td >inspRecord</td>
  <td >是</td>
  <td>检验记录</td>
</tr>
<tr>
  <td >inspResultEffecUntil</td>
  <td >是</td>
  <td>检验有效期</td>
</tr>
</table>

##### 通用标识
<table>
<tr>
  <th>响应</th>
  <th>数据项名称</th>
  <th>是否必须</th>
  <th>描述</th>
</tr>
<tr>
  <th>响应体</th>
  <td >content</td>
  <td >是</td>
  <td>内容</td>
</tr>
</table>

## 接收上传的图片调用说明
#### URL说明
<table>
<tr>
  <th>接口名称</th>
  <th>接口描述</th>
  <th>安全认证方式</th>
  <th>请求URI</th>
  <th>HTTP方法</th>
  <th>请求数据类型</th>
</tr>
<tr>
  <td>接收上传的图片</td>
  <td >接收客户端上传的图片流，返回待识别图片的ID</td>
  <td >默认分组</td>
  <td>token认证</td>
  <td>/standardImageUpload</td>
  <td>POST</td>
</tr>
</table>

### 请求报文
#### 请求头
<table>
<tr>
  <th>参数名</th>
  <th>参数类型</th>
  <th>是否必填</th>
  <th>示例</th>
</tr>
<tr>
  <td>C-Timestamp</td>
  <td >String</td>
  <td >是</td>
  <td>1592815384591</td>
</tr>
<tr>
  <td>C-Env-Type</td>
  <td >String</td>
  <td >否</td>
  <td>tr</td>
</tr>
<tr>
  <td>C-Nonce</td>
  <td >String</td>
  <td >否</td>
  <td>c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</td>
</tr>
<tr>
  <td>C-Version</td>
  <td >String</td>
  <td >否</td>
  <td></td>
</tr>
<tr>
  <td>C-Business-Id</td>
  <td >String</td>
  <td >否</td>
  <td>7sjfdh27d-82jd-8sue-hs72-js72jshd82hs</td>
</tr>
<tr>
  <td>C-App-Id</td>
  <td >String</td>
  <td >是</td>
  <td>ICR_APP_001</td>
</tr>
<tr>
  <td>C-Tenancy-Id</td>
  <td >String</td>
  <td >是</td>
  <td>NPX_MT_001</td>
</tr>
<tr>
  <td>C-Dynamic-Password</td>
  <td >String</td>
  <td >否</td>
  <td></td>
</tr>
</table>

#### 请求体
<table>
<tr>
  <th>名称</th>
  <th>类型</th>
  <th>是否必须</th>
  <th>说明</th>
</tr>
<tr>
  <td>files</td>
  <td >File</td>
  <td >是</td>
  <td>待识别的图片流</td>
</tr>
<tr>
  <td>type</td>
  <td >Integer</td>
  <td >是</td>
  <td>图片类型</td>
</tr>
</table>

#### 请求报文示例
```  
{
"files": "xxxxxxxx",
"type": 0
}
```

### 响应报文
#### 响应头
<table>
<tr>
  <th>参数名</th>
  <th>参数类型</th>
  <th>是否必填</th>
  <th>描述</th>
  <th>示例</th>
</tr>
<tr>
  <td>C-Business-Id</td>
  <td >String</td>
  <td >否</td>
  <td>请求的唯一标识，客户端可以跟踪此流水号查询接口调用状态等信息。</td>
  <td >7sjfdh27d-82jd-8sue-hs72-js72jshd82hs</td>
  </tr>
</table>

#### 响应体
<table>
<tr>
  <th>名称</th>
  <th>类型</th>
  <th>说明</th>
</tr>
<tr>
  <td>id</td>
  <td>String</td>
  <td>任务ID</td>
</tr>
</table>

#### 响应报文示例
```  
{ 
"id": "4fe6378b-f2f3-40fb-b677-c6a5d91acbb9"
}
```

## 查询识别结果调用说明
#### URL说明
<table>
<tr>
  <th>接口名称</th>
  <th>接口描述</th>
  <th>安全认证方式</th>
  <th>请求URI</th>
  <th>HTTP方法</th>
  <th>请求数据类型</th>
</tr>
<tr>
  <td>查询识别结果</td>
  <td >根据待识别图片ID查询ICR智能识别结果</td>
  <td >默认分组</td>
  <td>token认证</td>
  <td>/getImageResult</td>
  <td>GET</td>
</tr>
</table>

### 请求报文
#### 请求头
<table>
<tr>
  <th>参数名</th>
  <th>参数类型</th>
  <th>是否必填</th>
  <th>示例</th>
</tr>
<tr>
  <td>C-Timestamp</td>
  <td >String</td>
  <td >是</td>
  <td>1592815384591</td>
</tr>
<tr>
  <td>C-Env-Type</td>
  <td >String</td>
  <td >否</td>
  <td>tr</td>
</tr>
<tr>
  <td>C-Nonce</td>
  <td >String</td>
  <td >否</td>
  <td>c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</td>
</tr>
<tr>
  <td>C-Version</td>
  <td >String</td>
  <td >否</td>
  <td></td>
</tr>
<tr>
  <td>C-Business-Id</td>
  <td >String</td>
  <td >否</td>
  <td>7sjfdh27d-82jd-8sue-hs72-js72jshd82hs</td>
</tr>
<tr>
  <td>C-App-Id</td>
  <td >String</td>
  <td >是</td>
  <td>ICR_APP_001</td>
</tr>
<tr>
  <td>C-Tenancy-Id</td>
  <td >String</td>
  <td >是</td>
  <td>NPX_MT_001</td>
</tr>
<tr>
  <td>C-Dynamic-Password</td>
  <td >String</td>
  <td >否</td>
  <td></td>
</tr>
</table>

#### 请求体
<table>
<tr>
  <th>名称</th>
  <th>类型</th>
  <th>是否必须</th>
  <th>说明</th>
</tr>
<tr>
  <td>id</td>
  <td>String</td>
  <td>是</td>
  <td>任务ID</td>
</tr>
</table>

#### 请求报文示例
```
id=4fe6378b-f2f3-40fb-b677-c6a5d91acbb9
```
### 响应报文
#### 响应头
<table>
<tr>
  <th>参数名</th>
  <th>参数类型</th>
  <th>是否必填</th>
  <th>描述</th>
  <th>示例</th>
</tr>
<tr>
  <td>C-Business-Id</td>
  <td >String</td>
  <td >否</td>
  <td>请求的唯一标识，客户端可以跟踪此流水号查询接口调用状态等信息。</td>
  <td>7sjfdh27d-82jd-8sue-hs72-js72jshd82hs</td>
</tr>
</table>

#### 响应体
<table>
<tr>
  <th>名称</th>
  <th>类型</th>
  <th>说明</th>
</tr>
<tr>
  <td>code</td>
  <td>String</td>
  <td>返回码</td>
</tr>
<tr>
  <td>msg</td>
  <td>String</td>
  <td>返回结果信息</td>
</tr>
<tr>
  <td>data</td>
  <td>json</td>
  <td>返回结果数据</td>
</tr>
</table>

#### 响应报文示例
```
{ 
"code": "200",
 "msg": "请求成功",
 "data": {
  "cardNo": "xxxxxxxxxxxxxx",
  "valiDate": "xxxxxx",
  "cardType": "xxxxxxxx"
 }
}
```
## 获取token调用说明
#### URL说明
<table>
<tr>
  <th>接口名称</th>
  <th>接口描述</th>
  <th>安全认证方式</th>
  <th>请求URI</th>
  <th>HTTP方法</th>
  <th>请求数据类型</th>
</tr>
<tr>
  <td>获取token</td>
  <td >通过用户名密码获取token</td>
  <td >默认分组</td>
  <td>无</td>
  <td>/signin</td>
  <td>POST</td>
</tr>
</table>

### 请求报文
#### 请求头
<table>
<tr>
  <th>参数名</th>
  <th>参数类型</th>
  <th>是否必填</th>
  <th>示例</th>
</tr>
<tr>
  <td>C-Timestamp</td>
  <td >String</td>
  <td >是</td>
  <td>1592815384591</td>
</tr>
<tr>
  <td>C-Env-Type</td>
  <td >String</td>
  <td >否</td>
  <td></td>
</tr>
<tr>
  <td>C-Nonce</td>
  <td >String</td>
  <td >否</td>
  <td></td>
</tr>
<tr>
  <td>C-Version</td>
  <td >String</td>
  <td >否</td>
  <td></td>
</tr>
<tr>
  <td>C-Business-Id</td>
  <td >String</td>
  <td >否</td>
  <td></td>
</tr>
<tr>
  <td>C-App-Id</td>
  <td >String</td>
  <td >是</td>
  <td>ICR_APP_001</td>
</tr>
<tr>
  <td>C-Tenancy-Id</td>
  <td >String</td>
  <td >是</td>
  <td>NPX_MT_001</td>
</tr>
<tr>
  <td>C-Dynamic-Password</td>
  <td >String</td>
  <td >否</td>
  <td></td>
</tr>
</table>

#### 请求体
<table>
<tr>
  <th>名称</th>
  <th>类型</th>
  <th>是否必须</th>
  <th>说明</th>
</tr>
<tr>
  <td>userId</td>
  <td >String</td>
  <td >是</td>
  <td>用户名</td>
</tr>
<tr>
  <td>password</td>
  <td >String</td>
  <td >是</td>
  <td>密码</td>
</tr>
</table>

#### 请求报文示例
```
{ "userId":"13437112736",
 "credential":{
  "password":"123123"
 }
}
```
### 响应报文
#### 响应头
<table>
<tr>
  <th>参数名</th>
  <th>参数类型</th>
  <th>是否必填</th>
  <th>描述</th>
  <th>示例</th>
</tr>
<tr>
  <td>C-Business-Id</td>
  <td >String</td>
  <td >否</td>
  <td>请求的唯一标识，客户端可以跟踪此流水号查询接口调用状态等信息。</td>
  <td>7sjfdh27d-82jd-8sue-hs72-js72jshd82hs</td>
</tr>
</table>

#### 响应体
<table>
<tr>
  <th>名称</th>
  <th>类型</th>
  <th>说明</th>
</tr>
<tr>
  <td>token</td>
  <td >String</td>
  <td>登录票根</td>
</tr>
</table>

#### 响应报文示例
```
{ 
"token":"eyJhbGciOiJIUzUxMiJ9.eyJwYXlsb2FkIjp7InVzZXJNb2JpbGUiOiIxMzQzNzExMjczNiIsInVzZXJQYXNzd29yZCI6IjEyMzEyMyIsInRva2VuRXhwaXJhdGlvbkluTXMiOjg2NDAwMDAwLCJ1c2VyUm9sZSI6ImFkbWluIn0sInJvbGVzIjoiUk9MRV9hZG1pbiIsImV4cCI6MTU5MzA1NDYwMCwidXNlcm5hbWUiOiIxMzQzNzExMjczNiJ9.8EzjSqnYbVMVFFUZhuxb4antMyVMRSlpiSzoZCHRUMtbKEBYK-cjo4nq_VR0gfGuT_b3t3aNecHBPNjkHYKdEg",
    "payload": {
        "userMobile": "13437112736",
        "userPassword": "123123",
        "tokenExpirationInMs": 86400000,
        "userRole": "admin"
    }
}
```

## 错误码
### 错误码说明
<table>
<tr>
  <th>接口名称</th>
  <th>错误码</th>
  <th>错误码位置
（http码/报文错误码）</th>
  <th>错误信息</th>
  <th>错误码描述</th>
</tr>
<tr>
  <td>接收上传的图片</td>
  <td>503</td>
  <td>路径不存在</td>
  <td >内部错误</td>
  <td>内部错误，路径不存在</td>
</tr>
<tr>
  <td>接收上传的图片</td>
  <td>500</td>
  <td>类型强制转换错误</td>
  <td >内部错误</td>
  <td>内部错误</td>
</tr>
<tr>
  <td>接收上传的图片</td>
  <td>9999</td>
  <td>网络错误，待会重试</td>
  <td >服务不可用</td>
  <td>该服务不可用</td>
</tr>
<tr>
  <td>接收上传的图片</td>
  <td>500</td>
  <td>识别服务不可用</td>
  <td >服务不可用</td>
  <td>该服务不可用</td>
</tr>
<tr>
  <td>查询识别结果</td>
  <td>500</td>
  <td>请输入正确的任务号</td>
  <td >参数缺失/参数不合法</td>
  <td>查询识别结果时任务ID缺失或不合法</td>
</tr>
</table>

接口名称|错误码|错误码位置（http码/报文错误码）|错误信息|错误码描述

## API签名说明
### 签名算法说明
签名算法遵循RFC 2104HMAC-SHA1规范，要签名的元素是请求自身的一些参数，由于每个API请求基本不同，所以签名的结果也不尽相同。

### Java签名示例
![java_sign_demo](./java_sign.png)
