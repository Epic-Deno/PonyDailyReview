/*
 * @Description: StompJs
 * @Author: Pony
 * @Date: 2021-08-17 09:41:56
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-17 09:49:45
 */
// 建立websocket获取数据
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let number = 1
const buildSocket = ()=>{

    const url = '/dataBoard/socket/websocket';   // 连接地址

    const subUrl = `/model/${projectId}/PROJECT_QUALITY_ZLJC`;  // 订阅消息地址  客户端的认证信息

    const socket = new SockJS(url);   // 建立连接对象（还未发起连接）

    const client = Stomp.over(socket);  //  获取 STOMP 子协议的客户端对象

    // 向服务器发起websocket连接并发送CONNECT帧

     client.connect({},()=> {

         client.subscribe(subUrl , response =>  {

            // 连接成功的回调函数

             if(response){

                     console.log(JSON.parse(response.body));

             }

         }, error => {

              // 连接失败的回调函数

              //连接失败时再次调用函数

               number +=1;

                if(number<=10){ 

                    buildSocket(subUrl ); 

                 }

                 console.log('error',error);

        })
        
     })

}



import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

// 连接函数
let number = 1;
function reconnect(socketUrl) {
    let url = `${BASE_URL}/ws/sdfpoint`; //连接地址
    // 建立连接对象（还未发起连接）
    let socket = new SockJS(url);
    // 获取 STOMP 子协议的客户端对象
    let stompClient = Stomp.over(socket);
    // 向服务器发起websocket连接并发送CONNECT帧
    stompClient.connect(
        {},//可添加客户端的认证信息
        function connectCallback (){//连接成功的回调函数
            //订阅频道
            stompClient.subscribe('/topic/display/control', function(data){
                if (data) {
                    console.log('subscribe data',data);
                }
            })
        },
        function errorCallBack(error){  
        //连接失败时再次调用函数
            number += 1;
            if(number<=10){
                reconnect(url);
            }
            console.log('error',error);
        }
    )     
}


/*header带参数连接*/
var headers = {
    login: 'mylogin',
    passcode: 'mypasscode',
    // additional header
    'client-id': 'my-client-id'
};
client.connect(headers, connectCallback);

/*发送消息*/

client.send("/queue/test", {priority: '' }, "Hello, STOMP");
// client会发送一个STOMP发送帧给/queue/test，这个帧包含一个设置了priority为9的header和内容为“Hello, STOMP”的body。

/*如果想让客户端订阅多个目的地，你可以在接收所有信息的时候调用相同的回调函数*/
onmessage = function(message) {
    // called every time the client receives a message
}
var sub1 = client.subscribe("queue/test", onmessage);
var sub2 = client.subscribe("queue/another", onmessage)

// 如果要中止接收消息，客户端可以在subscribe()返回的object对象调用unsubscribe()来结束接收

var subscription = client.subscribe();

subscription.unsubscribe();// 关闭链接