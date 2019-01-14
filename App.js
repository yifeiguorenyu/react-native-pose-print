import React, {Component} from 'react';
import {Platform, StyleSheet,NativeModules, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this._onPress = this._onPress.bind(this)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this._onPress}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }

  async _onPress(){
    console.log(122344)
    let str ="商户号:812110045110001\r\n"
    + "商户名:北京宅急送快运股份有限公司\r\n" + "终端号:45851701\r\n" + "批次号:000001\r\n"
    + "流水号:000001\r\n" + "票据号:000001\r\n" + "TPDU:6000000090\r\n"
    + "VER:0100\r\n" + "MkeyIndex:0\r\n" + "EkeyIndex:1\r\n"
    + "PinkeyIndex:2\r\n" + "MACkeyIndex:3\r\n" + "MACkeyIndex_H:4\r\n"
    + "MACkeyIndex_L:5\r\n" + "通信超时时间:30\r\n" + "冲正超时时间:30\r\n"
    + "冲正次数:3\r\n" + "重试次数:3\r\n" + "小票数:2\r\n"
    + "IP地址:218.242.247.7\r\n" + "IP端号:7002\r\n"
    + "交易总笔数:100\r\n" + "当前交易笔数:0\r\n" + "需要重置密码:0\r\n"
    + "冲正或POS查询:0\r\n" + "需要签到:1\r\n" + "手输卡号使能:0\r\n" + "快钱通知:\r\n"
    + "商户广告:\r\n";
    try {
       let res=await NativeModules.PrintModule.printGo(str)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
