## OpenLayer一些API

#### 删除当前layer里面的Feature
    ```
    1.通过getFeatures()方法获取当前这个Vector里面的所有的Feature
        例如： this.toolLayer['LineString'].getFeatures()
    2.消除不需要的Feature，在addFeature的时候需要先在添加的Feature里面添加用于识别的键比如说id这些的可识别唯一性的参数，通过下面方法：
        例如： let targetRoadFeature = this.toolLayer['LineString'].getFeatures().find(i => i.get('roadId') == XXXid)
    3.调用清除的API： removeFeature()
        例如：this.toolLayer['LineString'].removeFeature(targetRoadFeature)
    ```
## 浏览器关闭时候出发的API

### 主要应用于客户关闭浏览器时候通知后端做一些业务上的处理，发起一个post请求，data可以是字符串可以是base64

    ```
     window.addEventListener("beforeunload", (e) => {
        const data = { name: "Pony" };
        window.navigator.sendBeacon("http://127.0.0.1:3002/loginout", JSON.stringify(data));
    });
    ```