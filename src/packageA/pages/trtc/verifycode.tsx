import Taro, { Config } from '@tarojs/taro'

import { View, Button } from '@tarojs/components';
import './index.scss'
import { AtInput } from 'taro-ui';



export default class TrtcPage extends Taro.Component {

  config: Config = {
    navigationBarTitleText: '识别码匹配',
  }

  state={ 
     num1:'',
     num2:'',
     num3:'',
     num4:''
  }

  goTrtcPage = (){
    console.log(1111);
  }

  goSearchCase = () {

  }

  render() {

    return (
      <View className='at-row at-row--wrap' >
        <View className='at-col at-col-12'><label>请填写手机短信验证码</label></View>
        
          <View className='at-col at-col-3'><AtInput
              name='num1'
            type='text'
            className='num-input'
            value={this.state.num1}
            max-length='1'
          /></View>
          <View className='at-col at-col-3'> <AtInput
            name='num2'
            className='num-input'
            type='text'
            max-length='1'
            value={this.state.num2}
          /></View>
          <View className='at-col at-col-3'><AtInput
            name='num3'
            className='num-input'
            type='text'
            max-length='1'
            value={this.state.num3}
          /></View>
          <View className='at-col at-col-3'> <AtInput
            name='num4'
            type='text'
            className='num-input'
            max-length='1'
            value={this.state.num4}
          /></View>
          <View className='at-col at-col-12'>
        <Button 
          className='verify-btn'
          onClick={this.goTrtcPage.bind(this)}
        >确定</Button>
        </View>
      </View>
    );
  }
}