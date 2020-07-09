import Taro, { Config } from '@tarojs/taro'
import { View,Text } from '@tarojs/components';
import { AtNoticebar,AtDivider,AtDrawer,AtFab } from 'taro-ui'
import './index.scss'

interface ArticleProps {
  dispatch?: any;
  data?: DataType;
}

interface DataType {}
interface ArticleState {
  show: boolean;
}

export default class Camera extends Taro.Component<ArticleProps,ArticleState> {

  config: Config = {
    navigationBarTitleText: '第01封信：起点不决定终点',
  }
  constructor(props: any) {
    super(props)
    this.state = {
      show: false,
    }
  }

  onShareAppMessage = (options: any) => {
    console.log('onShareAppMessage', options)
  }

  onToggleShow=()=>{
    this.setState({
      show:!this.state.show
    })
  }

  onItemClick=(index)=>{
    console.log('查看弹窗传入的数据id>>  ',index)
  }
  
  render(){
    const {show} = this.state
    return (
      <View className='at-article'>
        <View className='at-article__h2'>
          第01封信：起点不决定终点
        </View>
        <View className='at-article__info'>
            july 20 1897 —— 约翰·D·洛克菲勒作
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__p text-justify'>
              <Text decode={true}>
                亲爱的约翰：\n &emsp;&emsp;你希望我能永远同你一起出航，这听起来很不错，但我不是你永远的船长.上帝为我们创造双脚，是要让我们靠自己的双脚走路。
                \n &emsp;&emsp;也许你尚未做好独自前行的准备，但你需要知道，我所置身的那个充满挑战与神奇的商业世界，是你新生活的出发地，你将从那里开始参加你不曾享用而又关乎你未来的人生盛宴。至于你如何使用摆放在你生命面前的刀叉，和如何品味命运天使奉上的每一道菜肴，那完全要靠你自己。
                \n &emsp;&emsp;当然，我期望你在不远的将来就能卓尔不群，并胜我一筹。而我决定将你留在我身边，无非是想把你带到你事业生涯的高起点，让你无须艰难攀爬便可享有迅速腾达的机会。
                \n &emsp;&emsp;这当然没有什么值得你庆幸和炫耀的，更无须你感激。美利坚合众国的建国信念是人人生而平等，但这种平等是权利与法律意义上的平等，与经济和文化优势无关。想想看，我们这个世界就如同一座高山，当你的父母生活在山顶上时，注定你不会生活在山脚下；当你的父母生活在山脚下时，注定你不会生活在山顶上。在多数情况下，父母的位置决定了孩子的人生起点。
                \n &emsp;&emsp;但这并不意味着，每个人的起点不同，其人生结果也不同。在这个世界上，永远没有穷、富世袭之说，也永远没有成、败世袭之说，有的只是我奋斗我成功的真理。我坚信，我们的命运由我们的行动决定，而绝非完全由我们的出身决定。
                \n &emsp;&emsp;就像你所知道的那样，在我小的时候，家境十分贫寒，记得我刚上中学时所用的书本都是好心的邻居为我买的，我的人生开始时也只是一个周薪只有5元钱的簿记员，但经由不懈的奋斗我却建立了一个令人艳羡的石油王国。在他人眼里这似乎是个传奇，我却认为这是对我持之以恒、积极奋斗的回报，是命运之神对我艰苦付出的奖赏。
                \n &emsp;&emsp;约翰，机会永远都会不平等，但结果却可能平等。在历史上，无论是在政界还是在商界，尤其在商界，白手起家的事例俯拾皆是，他们都曾因贫穷而少有机会，他们却都因奋斗而功成名就。然而，历史上也充斥着富家子弟拥有所有优势，却走向失败的事例。麻州的一项统计数字说，十七个有钱人的孩子里面，竟然没有一个在离开这个世界时还是富翁。
                \n &emsp;&emsp;而在很久以前，社会上便流传着一个讽刺富家子弟无能的故事，说在费城的一个小酒吧里，一位客人谈起某位百万富翁，说：“他是白手起家的百万富翁。”“是啊，”旁边一位比较精明的先生回答说，：“他继承了两千万，然后他把这笔钱变成了一百万。”
                \n &emsp;&emsp;这是一个令人痛心的故事。但在我们今天这年社会，富家子弟正处在一种不进则退的窘境之中，他们中的很多人注定要受人同情和怜悯，甚至要下地狱。
                \n &emsp;&emsp;家族的荣耀与成功的历史，不能保证其子孙后代的未来将会美好。我承认早期的优势的确大有帮助，但它不能保证最后会赢得胜利。我曾不止一次地思考这个对富家子弟而言带有悲哀性的问题，我似乎觉得，富家子弟开始承担了优势，却很少有机会去学习和发展生存所需要的技巧。而出身低贱的人因迫切需要解救自身，便会积极发挥创意和能力，且珍视和抢占各种机会。我还观察到，富家子弟缺乏贫贱之人的那种要拯救自己的野心，也只得祈祷上帝赐予他成就了。
                \n &emsp;&emsp;所以，在你和你的姐姐们很小的时候，我就有意识地不让你们知道你们的父亲是个富人，我向你们灌输最多的是诸如节俭、个人奋斗等价值观念，因为我知道给人带来伤害最快捷的途径就是给钱，它可以让人腐化堕落、飞扬跋扈、不可一世，失去最美好的快乐。我不能用财富埋葬我心爱的孩子，愚蠢地让你们成为不思进取、只知依赖父母的果实的无能者。
                \n &emsp;&emsp;一个真正快乐的人，是能够享受他的创造的人。那些像海绵一样，只取不予的人，只会失去快乐乐。
                \n &emsp;&emsp;我相信没有不渴望过上快乐、高贵生活的人，但真正懂得高贵快乐生活从何而来的人却不多。在我看来，高贵快乐的生活，不是来自高贵的血统，也不是来自高贵的生活方式，而是来自高贵的品格——自立精神，看看那些赢得世人尊重、处处施展魅力的高贵的人，我们就知道自立的可贵。
                \n &emsp;&emsp;约翰，你的每一个举动都会成为我挂念。但与这种挂念相比，我更对你充满信心，相信你优异的品格——比世界上任何财富都更有价值的品格，将帮助你铺设出一条美好的前程，并将助你拥有成功而又充实的人生。
                \n &emsp;&emsp;但你需要强化这样的信念：起点可能影响结果，但不会决定结果。能力、态度、性格、抱负、手段、经验和运气之类的因素，在人生和商业世界里扮演着极为重要的角色。你的人生刚刚开始，但一场人生之战就在你面前。我能深切地感觉到你想成为这场战争的胜者，但你要知道，每个人都有追求胜利的意志，只有决心做好准备的人才会赢得胜利。
                \n &emsp;&emsp;我的儿子，享有特权而无力量的人是废物，受过教育而无影响的人是一堆一文不值的垃圾。找到自己的路，上帝就会帮你！
              </Text>
            </View>
            <View className='at-article__p text-right'>
              爱你的父亲
            </View>
          </View>
        </View>
        <AtDivider content='<< 学习格言 >>' />
        <AtNoticebar marquee icon='volume-plus' speed={50}>
          格言：我们的命运由我们的行动决定，而绝非完全由我们的出身决定。享有特权而无力量的人是废物，受过教育而无影响的人是一堆一文不值的垃圾。(Men of privilege without power are waste-material.Men of enlightenment without influence ate the poorest kind of rubbish.)
        </AtNoticebar>
        <AtDrawer
          show={show}
          mask
          onClose={this.onToggleShow} 
          onItemClick={this.onItemClick}
          items={['菜单1', '菜单2']}
        >
        </AtDrawer>
        <View className='fixed-menu'>
          {!show&&<AtFab onClick={this.onToggleShow} size='small'>
            <Text className='at-fab__icon at-icon at-icon-menu'></Text>
          </AtFab>}  
        </View>
        
      </View>
    );
  }
}