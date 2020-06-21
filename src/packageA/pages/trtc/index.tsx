import Taro, { Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux';
import { View,  Button } from '@tarojs/components';
import './index.scss'

interface ILoginProps {
  dispatch: any
}

interface ILoginState {
  loginType?: number
}

@connect(({ loginModel }) => ({
  ...loginModel,
}))
export default class TrtcPage extends Taro.Component<ILoginProps, ILoginState> {

  config: Config = {
    navigationBarTitleText: '视频查勘',
  }

  goTrtcPage (){
    console.log("w3rwr")
    this.$preload('key', 'val') //传参
    Taro.navigateTo({
      url: '/packageA/pages/trtc/verifycode'
    })
  }

  goSearchCase() {

  }

  render(){
    return (
      <View className='login-form' > 
        <Button 
          className='view-btn'
          onClick={this.goTrtcPage.bind(this)}
        >
          视频查勘
        </Button>
        <Button 
          className='search-btn'
          onClick={this.goSearchCase.bind(this)}
        >
          案件查询
        </Button>
      </View>
    );
  }
}