import Taro, { Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtSearchBar, AtCurtain,AtList, AtListItem,AtFloatLayout  } from 'taro-ui'
import { JdxBanner } from '@/components/index';
import { setCacheData, getCacheData } from '@/utils/store'
import { bannersList } from '@/assets/data/banners'
import './index.scss'

interface IndexProps {
  dispatch?: any;
  data?: DataType;
}

interface DataType {
  navbars: any[];
  banners: any[];
  litters:any[];
}

interface IndexState {
  keywords: string;
  isOpened: boolean;
  introductionIsOpened: boolean;
}

const litterLists=[
    {title:'第01封信：起点不决定终点',id:'01',motto_CN:'我们的命运由我们的行动决定，而绝非完全由我们的出身决定。享有特权而无力量的人是废物，受过教育而无影响的人是一堆一文不值的垃圾。',motto_ZN:'Men of privilege without power are waste-material.Men of enlightenment without influence ate the poorest kind of rubbish.'},
    {title:'第02封信：运气靠策划',id:'02',},
    {title:'第03封信：天堂与地狱比邻',id:'03',},
    {title:'第04封信：现在就去做',id:'04',},
    {title:'第05封信：要有竞争的决心',id:'05',},
    {title:'第06封信：为前途抵押',id:'06',},
    {title:'第07封信：最可怕的是精神破产',id:'07',},
    {title:'第08封信：只有放弃才会失败',id:'08',},
    {title:'第09封信：信念是金',id:'09',},
    {title:'第10封信：忠诚于自己',id:'10',},
    {title:'第11封信：贪心大有必要',id:'11',},
    {title:'第12封信：地狱里住满了好人',id:'12',},
    {title:'第13封信：天下没有白吃的午餐',id:'13',},
    {title:'第14封信：做傻的聪明人',id:'14',},
    {title:'第15封信：财富是勤奋的副产品',id:'15',},
    {title:'第16封信：不要找借口',id:'16',},
    {title:'第17封信：你手中握有成功的种子',id:'17',},
    {title:'第18封信：没有权力当穷人',id:'18',},
    {title:'第19封信：就要做第一',id:'19',},
    {title:'第20封信：冒险才能利用机会',id:'20',},
    {title:'第21封信：侮辱是一种动力',id:'21',},
    {title:'第22封信：用实力让对手恐惧',id:'22',},
    {title:'第23封信：要有合作精神',id:'23',},
    {title:'第24封信：不甘示弱才会赢',id:'24',},
    {title:'第25封信：让每一分钱都带来效益',id:'25',},
    {title:'第26封信：忍耐就是策略',id:'26',},
    {title:'第27封信：幸运之神眷顾勇者',id:'27',},
    {title:'第28封信：真诚相信自己会有办法',id:'28',},
    {title:'第29封信：尾声就是开始',id:'29',},
    {title:'第30封信：不要让小人拖你的后腿',id:'30',},
    {title:'第31封信：做目的主义者',id:'31',},
    {title:'第32封信：拒绝责难推委',id:'32',},
    {title:'第33封信：善用每个人的智慧',id:'33',},
    {title:'第34封信：永远做策略性思考',id:'34',},
    {title:'第35封信：将部属放在第一位',id:'35',},
    {title:'第36封信：财富是种责任',id:'36',},
    {title:'第37封信：充实你的心灵',id:'37',},
    {title:'第38封信：谁都能成为大人物',id:'38',},
]

@connect(({ index, app }) => ({
  ...index,
  ...app
}))
export default class Index extends Taro.Component<IndexProps, IndexState> {

  config: Config = {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black'
  }

  constructor(props: any) {
    super(props)
    const guide = getCacheData('guide')
    this.state = {
      keywords: '',
      isOpened: !!guide,
      introductionIsOpened:false,
    }
  }

  componentWillMount() {
    this.init()
  }

  init() {
    const { dispatch } = this.props
    dispatch({
      type: 'index/getHome'
    })
  }

  onChange() { }
  openRoute(parms){
    console.log('查看路由》》》 ',parms)
    // this.$preload({...parms}) //传参
    Taro.navigateTo({
      url: `/pages/article/index?id=${parms.id}&articleId=${parms.articleId}`
    })
  }
  toggleStatus(){
    this.setState({
        introductionIsOpened: !this.state.introductionIsOpened
      })
  }
  render() {
    const { data } = this.props
    const { banners = bannersList,litters = litterLists } = data as DataType
    const { keywords,introductionIsOpened } = this.state
    return (
      <View>
        <View className='search' >
          <AtSearchBar
            value={keywords}
            onChange={this.onChange.bind(this)}
          />
        </View>

        <JdxBanner {...{ banners }} />
        <View className='at-article__h2 text-center'>
            《洛克菲勒写给孩子的38封信》
        </View>
        <View className='at-article__info' onClick={this.toggleStatus.bind(this)}>
            作者约翰·D·洛克菲勒 John D. Rockefeller（1839—1937年） 美国实业家 &gt;&gt;&gt;
        </View>
        <AtList>
            {litters.map((item)=><AtListItem title={item.title} key={item.id} extraText='查看' arrow='right' iconInfo={{ value: 'mail', }} onClick={this.openRoute.bind(this,item)}/>)}
        </AtList>
        <AtCurtain
          isOpened={!this.state.isOpened}
          onClose={() => {
            this.setState({
              isOpened: true
            }, () => {
              setCacheData('guide', true)
            })
          }}
        >
          <Image
            style='width:100%;height:250px'
            src='https://taro-ui.jd.com/h5/static/images/curtain.png'
          />
        </AtCurtain>
        <AtFloatLayout isOpened={introductionIsOpened} title="洛克菲勒简介" onClose={this.toggleStatus.bind(this)}>
            作者约翰·D·洛克菲勒 John D. Rockefeller（1839—1937年） 美国实业家、超级资本家，美孚石油公司（标准石油）创办人。
        </AtFloatLayout>
      </View>
    );
  }
}

