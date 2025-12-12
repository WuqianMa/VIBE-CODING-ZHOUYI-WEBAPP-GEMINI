import { RichHexagram } from '../types';

// Helper to create line objects quickly
const createLine = (idx: number, num: string, txt: string, xiang: string) => ({
  line_index: idx,
  line_number: num,
  text: txt,
  commentary: { xiang_zhuan: xiang }
});

const HEXAGRAM_LIST: RichHexagram[] = [
  {
    sequence: 1, symbol: "䷀", name: "乾", pinyin: "qián", binary: "111111",
    decision: {
      text: "元亨，利贞。",
      commentary: {
        tuan_zhuan: "大哉乾元，万物资始，乃统天。云行雨施，品物流形。大明始终，六位时成，时乘六龙以御天。乾道变化，各正性命，保合大和，乃利贞。首出庶物，万国咸宁。",
        xiang_zhuan: "天行健，君子以自强不息。"
      }
    },
    lines: [
      createLine(1, "初九", "潜龙，勿用。", "潜龙勿用，阳在下也。"),
      createLine(2, "九二", "见龙在田，利见大人。", "见龙在田，德施普也。"),
      createLine(3, "九三", "君子终日乾乾，夕惕若，厉，无咎。", "终日乾乾，反复道也。"),
      createLine(4, "九四", "或跃在渊，无咎。", "或跃在渊，进无咎也。"),
      createLine(5, "九五", "飞龙在天，利见大人。", "飞龙在天，大人造也。"),
      createLine(6, "上九", "亢龙有悔。", "亢龙有悔，盈不可久也。")
    ],
    yong_jiu: { text: "见群龙无首，吉。", commentary: { xiang_zhuan: "用九，天德不可为首也。" } }
  },
  {
    sequence: 2, symbol: "䷁", name: "坤", pinyin: "kūn", binary: "000000",
    decision: {
      text: "元亨，利牝马之贞。君子有攸往，先迷后得主。",
      commentary: {
        tuan_zhuan: "至哉坤元，万物资生，乃顺承天。坤厚载物，德合无疆。",
        xiang_zhuan: "地势坤，君子以厚德载物。"
      }
    },
    lines: [
      createLine(1, "初六", "履霜，坚冰至。", "履霜坚冰，阴始凝也。驯致其道，至坚冰也。"),
      createLine(2, "六二", "直方大，不习无不利。", "六二之动，直以方也。不习无不利，地道光也。"),
      createLine(3, "六三", "含章可贞。或从王事，无成有终。", "含章可贞，以时发也。或从王事，知光大也。"),
      createLine(4, "六四", "括囊，无咎无誉。", "括囊无咎，慎不害也。"),
      createLine(5, "六五", "黄裳，元吉。", "黄裳元吉，文在中也。"),
      createLine(6, "上六", "龙战于野，其血玄黄。", "龙战于野，其道穷也。")
    ],
    yong_liu: { text: "利永贞。", commentary: { xiang_zhuan: "用六永贞，以大终也。" } }
  },
  {
    sequence: 3, symbol: "䷂", name: "屯", pinyin: "zhūn", binary: "100010",
    decision: {
      text: "元亨，利贞，勿用有攸往，利建侯。",
      commentary: { tuan_zhuan: "屯，刚柔始交而难生，动乎险中，大亨贞。", xiang_zhuan: "云，雷，屯；君子以经纶。" }
    },
    lines: [
      createLine(1, "初九", "磐桓，利居贞，利建侯。", "虽磐桓，志行正也。以贵下贱，大得民也。"),
      createLine(2, "六二", "屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。", "六二之难，乘刚也。十年乃字，反常也。"),
      createLine(3, "六三", "即鹿无虞，惟入于林中，君子几，不如舍，往吝。", "即鹿无虞，以从禽也。君子几，不如舍，往吝，穷也。"),
      createLine(4, "六四", "乘马班如，求婚媾，往吉，无不利。", "求而往，明也。"),
      createLine(5, "九五", "屯其膏，小贞吉，大贞凶。", "屯其膏，施未光也。"),
      createLine(6, "上六", "乘马班如，泣血涟如。", "泣血涟如，何可长也。")
    ]
  },
  {
    sequence: 4, symbol: "䷃", name: "蒙", pinyin: "méng", binary: "010001",
    decision: {
      text: "亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。",
      commentary: { tuan_zhuan: "蒙，山下有险，险而止，蒙。", xiang_zhuan: "山下出泉，蒙；君子以果行育德。" }
    },
    lines: [
      createLine(1, "初六", "发蒙，利用刑人，用说桎梏，以往吝。", "利用刑人，以正法也。"),
      createLine(2, "九二", "包蒙吉，纳妇吉，子克家。", "子克家，刚柔接也。"),
      createLine(3, "六三", "勿用取女，见金夫，不有躬，无攸利。", "勿用取女，行不顺也。"),
      createLine(4, "六四", "困蒙，吝。", "困蒙之吝，独远实也。"),
      createLine(5, "六五", "童蒙，吉。", "童蒙之吉，顺以巽也。"),
      createLine(6, "上九", "击蒙，不利为寇，利御寇。", "利用御寇，上下顺也。")
    ]
  },
  {
    sequence: 5, symbol: "䷄", name: "需", pinyin: "xū", binary: "111010",
    decision: {
      text: "有孚，光亨，贞吉。利涉大川。",
      commentary: { tuan_zhuan: "需，须也；险在前也。刚健而不陷，其义不困穷矣。", xiang_zhuan: "云上于天，需；君子以饮食宴乐。" }
    },
    lines: [
      createLine(1, "初九", "需于郊。利用恒，无咎。", "需于郊，不犯难行也。利用恒，无咎，未失常也。"),
      createLine(2, "九二", "需于沙。小有言，终吉。", "需于沙，衍在中也。虽小有言，以终吉也。"),
      createLine(3, "九三", "需于泥，致寇至。", "需于泥，灾在外也。自我致寇，敬慎不败也。"),
      createLine(4, "六四", "需于血，出自穴。", "需于血，顺以听也。"),
      createLine(5, "九五", "需于酒食，贞吉。", "酒食贞吉，以中正也。"),
      createLine(6, "上六", "入于穴，有不速之客三人来，敬之终吉。", "不速之客来，敬之终吉。虽不当位，未大失也。")
    ]
  },
  {
    sequence: 6, symbol: "䷅", name: "讼", pinyin: "sòng", binary: "010111",
    decision: {
      text: "有孚，窒。惕中吉。终凶。利见大人，不利涉大川。",
      commentary: { tuan_zhuan: "讼，上刚下险，险而健讼。", xiang_zhuan: "天与水违行，讼；君子以作事谋始。" }
    },
    lines: [
      createLine(1, "初六", "不永所事，小有言，终吉。", "不永所事，讼不可长也。虽小有言，其辩明也。"),
      createLine(2, "九二", "不克讼，归而逋，其邑人三百户，无眚。", "不克讼，归逋窜也。自下讼上，患至掇也。"),
      createLine(3, "六三", "食旧德，贞厉，终吉，或从王事，无成。", "食旧德，从上吉也。"),
      createLine(4, "九四", "不克讼，复即命，渝安贞，吉。", "复即命，渝安贞，不失也。"),
      createLine(5, "九五", "讼，元吉。", "讼元吉，以中正也。"),
      createLine(6, "上九", "或锡之鞶带，终朝三褫之。", "以讼受服，亦不足敬也。")
    ]
  },
  {
    sequence: 7, symbol: "䷆", name: "师", pinyin: "shī", binary: "010000",
    decision: {
      text: "贞，丈人，吉无咎。",
      commentary: { tuan_zhuan: "师，众也，贞正也，能以众正，可以王矣。", xiang_zhuan: "地中有水，师；君子以容民畜众。" }
    },
    lines: [
      createLine(1, "初六", "师出以律，否臧凶。", "师出以律，失律凶也。"),
      createLine(2, "九二", "在师中，吉无咎，王三锡命。", "在师中吉，承天宠也。王三锡命，怀万邦也。"),
      createLine(3, "六三", "师或舆尸，凶。", "师或舆尸，大无功也。"),
      createLine(4, "六四", "师左次，无咎。", "左次无咎，未失常也。"),
      createLine(5, "六五", "田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。", "长子帅师，以中行也。弟子舆尸，使不当也。"),
      createLine(6, "上六", "大君有命，开国承家，小人勿用。", "大君有命，以正功也。小人勿用，必乱邦也。")
    ]
  },
  {
    sequence: 8, symbol: "䷇", name: "比", pinyin: "bǐ", binary: "000010",
    decision: {
      text: "吉。原筮元永贞，无咎。不宁方来，后夫凶。",
      commentary: { tuan_zhuan: "比，吉也，比，辅也，下顺从也。", xiang_zhuan: "地上有水，比；先王以建万国，亲诸侯。" }
    },
    lines: [
      createLine(1, "初六", "有孚比之，无咎。有孚盈缶，终来有他吉。", "比之初六，有他吉也。"),
      createLine(2, "六二", "比之自内，贞吉。", "比之自内，不自失也。"),
      createLine(3, "六三", "比之匪人。", "比之匪人，不亦伤乎？"),
      createLine(4, "六四", "外比之，贞吉。", "外比于贤，以从上也。"),
      createLine(5, "九五", "显比，王用三驱，失前禽。邑人不诫，吉。", "显比之吉，位正中也。舍逆取顺，失前禽也。邑人不诫，上使中也。"),
      createLine(6, "上六", "比之无首，凶。", "比之无首，无所终也。")
    ]
  },
  {
    sequence: 9, symbol: "䷈", name: "小畜", pinyin: "xiǎo xù", binary: "111011",
    decision: {
      text: "亨。密云不雨，自我西郊。",
      commentary: { tuan_zhuan: "小畜，柔得位，而上下应之，曰小畜。", xiang_zhuan: "风行天上，小畜；君子以懿文德。" }
    },
    lines: [
      createLine(1, "初九", "复自道，何其咎，吉。", "复自道，其义吉也。"),
      createLine(2, "九二", "牵复，吉。", "牵复在中，亦不自失也。"),
      createLine(3, "九三", "舆说辐，夫妻反目。", "夫妻反目，不能正室也。"),
      createLine(4, "六四", "有孚，血去惕出，无咎。", "有孚惕出，上合志也。"),
      createLine(5, "九五", "有孚挛如，富以其邻。", "有孚挛如，不独富也。"),
      createLine(6, "上九", "既雨既处，尚德载，妇贞厉。月几望，君子征凶。", "既雨既处，德积载也。君子征凶，有所疑也。")
    ]
  },
  {
    sequence: 10, symbol: "䷉", name: "履", pinyin: "lǚ", binary: "110111",
    decision: {
      text: "履虎尾，不咥人，亨。",
      commentary: { tuan_zhuan: "履，柔履刚也。说而应乎乾，是以履虎尾，不咥人，亨。", xiang_zhuan: "上天下泽，履；君子以辨上下，安民志。" }
    },
    lines: [
      createLine(1, "初九", "素履，往无咎。", "素履之往，独行愿也。"),
      createLine(2, "九二", "履道坦坦，幽人贞吉。", "幽人贞吉，中不自乱也。"),
      createLine(3, "六三", "眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。", "眇能视，不足以有明也。跛能履，不足以与行也。咥人 凶，位不当也。武人为于大君，志刚也。"),
      createLine(4, "九四", "履虎尾，愬愬，终吉。", "愬愬终吉，志行也。"),
      createLine(5, "九五", "夬履，贞厉。", "夬履贞厉，位正当也。"),
      createLine(6, "上九", "视履考祥，其旋元吉。", "元吉在上，大有庆也。")
    ]
  },
  {
    sequence: 11, symbol: "䷊", name: "泰", pinyin: "tài", binary: "111000",
    decision: {
      text: "小往大来，吉亨。",
      commentary: { tuan_zhuan: "泰，小往大来，吉亨。则是天地交，而万物通也。", xiang_zhuan: "天地交泰，后以财成天地之道，辅相天地之宜，以左右民。" }
    },
    lines: [
      createLine(1, "初九", "拔茅茹，以其汇，征吉。", "拔茅征吉，志在外也。"),
      createLine(2, "九二", "包荒，用冯河，不遐遗，朋亡，得尚于中行。", "包荒，得尚于中行，以光大也。"),
      createLine(3, "九三", "无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。", "无往不复，天地际也。"),
      createLine(4, "六四", "翩翩，不富以其邻，不戒以孚。", "翩翩不富，皆失实也。不戒以孚，中心愿也。"),
      createLine(5, "六五", "帝乙归妹，以祉元吉。", "以祉元吉，中以行愿也。"),
      createLine(6, "上六", "城复于隍，勿用师。自邑告命，贞吝。", "城复于隍，其命乱也。")
    ]
  },
  {
    sequence: 12, symbol: "䷋", name: "否", pinyin: "pǐ", binary: "000111",
    decision: {
      text: "否之匪人，不利君子贞，大往小来。",
      commentary: { tuan_zhuan: "否之匪人，不利君子贞。大往小来，则是天地不交，而万物不通也。", xiang_zhuan: "天地不交，否；君子以俭德辟难，不可荣以禄。" }
    },
    lines: [
      createLine(1, "初六", "拔茅茹，以其汇，贞吉亨。", "拔茅贞吉，志在君也。"),
      createLine(2, "六二", "包承，小人吉，大人否亨。", "大人否亨，不乱群也。"),
      createLine(3, "六三", "包羞。", "包羞，位不当也。"),
      createLine(4, "九四", "有命无咎，畴离祉。", "有命无咎，志行也。"),
      createLine(5, "九五", "休否，大人吉。其亡其亡，系于苞桑。", "大人之吉，位正当也。"),
      createLine(6, "上九", "倾否，先否后喜。", "否终则倾，何可长也。")
    ]
  },
  {
    sequence: 13, symbol: "䷌", name: "同人", pinyin: "tóng rén", binary: "101111",
    decision: {
      text: "同人于野，亨。利涉大川，利君子贞。",
      commentary: { tuan_zhuan: "同人，柔得位得中，而应乎乾，曰同人。", xiang_zhuan: "天与火，同人；君子以类族辨物。" }
    },
    lines: [
      createLine(1, "初九", "同人于门，无咎。", "出门同人，又谁咎也。"),
      createLine(2, "六二", "同人于宗，吝。", "同人于宗，吝道也。"),
      createLine(3, "九三", "伏戎于莽，升其高陵，三岁不兴。", "伏戎于莽，敌刚也。三岁不兴，安行也。"),
      createLine(4, "九四", "乘其墉，弗克攻，吉。", "乘其墉，义弗克也，其吉，则困而反则也。"),
      createLine(5, "九五", "同人，先号啕而后笑。大师克相遇。", "同人Zhi先，以中直也。大师相遇，言相克也。"),
      createLine(6, "上九", "同人于郊，无悔。", "同人于郊，志未得也。")
    ]
  },
  {
    sequence: 14, symbol: "䷍", name: "大有", pinyin: "dà yǒu", binary: "111101",
    decision: {
      text: "元亨。",
      commentary: { tuan_zhuan: "大有，柔得尊位，大中而上下应之，曰大有。", xiang_zhuan: "火在天上，大有；君子以遏恶扬善，顺天休命。" }
    },
    lines: [
      createLine(1, "初九", "无交害，匪咎，艰则无咎。", "大有初九，无交害也。"),
      createLine(2, "九二", "大车以载，有攸往，无咎。", "大车以载，积中不败也。"),
      createLine(3, "九三", "公用亨于天子，小人弗克。", "公用亨于天子，小人害也。"),
      createLine(4, "九四", "匪其彭，无咎。", "匪其彭，无咎；明辨皙也。"),
      createLine(5, "六五", "厥孚交如，威如；吉。", "厥孚交如，信以发志也。威如之吉，易而无备也。"),
      createLine(6, "上九", "自天佑之，吉无不利。", "大有上吉，自天佑也。")
    ]
  },
  {
    sequence: 15, symbol: "䷎", name: "谦", pinyin: "qiān", binary: "001000",
    decision: {
      text: "亨，君子有终。",
      commentary: { tuan_zhuan: "谦，亨，天道下济而光明，地道卑而上行。", xiang_zhuan: "地中有山，谦；君子以裒多益寡，称物平施。" }
    },
    lines: [
      createLine(1, "初六", "谦谦君子，用涉大川，吉。", "谦谦君子，卑以自牧也。"),
      createLine(2, "六二", "鸣谦，贞吉。", "鸣谦贞吉，中心得也。"),
      createLine(3, "九三", "劳谦，君子有终，吉。", "劳谦君子，万民服也。"),
      createLine(4, "六四", "无不利，挥谦。", "无不利，挥谦；不违则也。"),
      createLine(5, "六五", "不富以其邻，利用侵伐，无不利。", "利用侵伐，征不服也。"),
      createLine(6, "上六", "鸣谦，利用行师，征邑国。", "鸣谦，志未得也。可用行师，征邑国也。")
    ]
  },
  {
    sequence: 16, symbol: "䷏", name: "豫", pinyin: "yù", binary: "000100",
    decision: {
      text: "利建侯，行师。",
      commentary: { tuan_zhuan: "豫，刚应而志行，顺以动，豫。", xiang_zhuan: "雷出地奋，豫。先王以作乐崇德，殷荐之上帝，以配祖考。" }
    },
    lines: [
      createLine(1, "初六", "鸣豫，凶。", "初六鸣豫，志穷凶也。"),
      createLine(2, "六二", "介于石，不终日，贞吉。", "不终日，贞吉；以中正也。"),
      createLine(3, "六三", "盱豫，悔。迟有悔。", "盱豫有悔，位不当也。"),
      createLine(4, "九四", "由豫，大有得。勿疑。朋盍簪。", "由豫，大有得；志大行也。"),
      createLine(5, "六五", "贞疾，恒不死。", "六五贞疾，乘刚也。恒不死，中未亡也。"),
      createLine(6, "上六", "冥豫，成有渝，无咎。", "冥豫在上，何可长也。")
    ]
  },
  {
    sequence: 17, symbol: "䷐", name: "随", pinyin: "suí", binary: "100110",
    decision: {
      text: "元亨利贞，无咎。",
      commentary: { tuan_zhuan: "随，刚来而下柔，动而说，随。", xiang_zhuan: "泽中有雷，随；君子以向晦入宴息。" }
    },
    lines: [
      createLine(1, "初九", "官有渝，贞吉。出门交有功。", "官有渝，从正吉也。出门交有功，不失也。"),
      createLine(2, "六二", "系小子，失丈夫。", "系小子，弗兼与也。"),
      createLine(3, "六三", "系丈夫，失小子。随有求得，利居贞。", "系丈夫，志舍下也。"),
      createLine(4, "九四", "随有获，贞凶。有孚在道，以明，何咎。", "随有获，其义凶也。有孚在道，明功也。"),
      createLine(5, "九五", "孚于嘉，吉。", "孚于嘉，吉；位正中也。"),
      createLine(6, "上六", "拘系之，乃从维之。王用亨于西山。", "拘系之，上穷也。")
    ]
  },
  {
    sequence: 18, symbol: "䷑", name: "蛊", pinyin: "gǔ", binary: "011001",
    decision: { text: "元亨，利涉大川。先甲三日，后甲三日。", commentary: { tuan_zhuan: "蛊，刚上而柔下，巽而止，蛊。", xiang_zhuan: "山下有风，蛊；君子以振民育德。" } },
    lines: [
      createLine(1, "初六", "干父之蛊，有子，考无咎，厉终吉。", "干父之蛊，意承考也。"),
      createLine(2, "九二", "干母之蛊，不可贞。", "干母之蛊，得中道也。"),
      createLine(3, "九三", "干父之蛊，小有悔，无大咎。", "干父之蛊，终无咎也。"),
      createLine(4, "六四", "裕父之蛊，往见吝。", "裕父之蛊，往未得也。"),
      createLine(5, "六五", "干父之蛊，用誉。", "干父之蛊；承以德也。"),
      createLine(6, "上九", "不事王侯，高尚其事。", "不事王侯，志可则也。")
    ]
  },
  {
    sequence: 19, symbol: "䷒", name: "临", pinyin: "lín", binary: "110000",
    decision: { text: "元亨，利贞。至于八月有凶。", commentary: { tuan_zhuan: "临，刚浸而长。说而顺，刚中而应。", xiang_zhuan: "泽上有地，临；君子以教思无穷，容保民无疆。" } },
    lines: [
      createLine(1, "初九", "咸临，贞吉。", "咸临贞吉，志行正也。"),
      createLine(2, "九二", "咸临，吉，无不利。", "咸临，吉，无不利；未顺命也。"),
      createLine(3, "六三", "甘临，无攸利。既忧之，无咎。", "甘临，位不当也。既忧之，咎不长也。"),
      createLine(4, "六四", "至临，无咎。", "至临无咎，位当也。"),
      createLine(5, "六五", "知临，大君之宜，吉。", "大君之宜，行中之谓也。"),
      createLine(6, "上六", "敦临，吉，无咎。", "敦临之吉，志在内也。")
    ]
  },
  {
    sequence: 20, symbol: "䷓", name: "观", pinyin: "guān", binary: "000011",
    decision: { text: "盥而不荐，有孚颙若。", commentary: { tuan_zhuan: "大观在上，顺而巽，中正以观天下。", xiang_zhuan: "风行地上，观；先王以省方，观民设教。" } },
    lines: [
      createLine(1, "初六", "童观，小人无咎，君子吝。", "初六童观，小人道也。"),
      createLine(2, "六二", "窥观，利女贞。", "窥观女贞，亦可丑也。"),
      createLine(3, "六三", "观我生，进退。", "观我生，进退；未失道也。"),
      createLine(4, "六四", "观国之光，利用宾于王。", "观国之光，尚宾也。"),
      createLine(5, "九五", "观我生，君子无咎。", "观我生，观民也。"),
      createLine(6, "上九", "观其生，君子无咎。", "观其生，志未平也。")
    ]
  },
  {
    sequence: 21, symbol: "䷔", name: "噬嗑", pinyin: "shì hé", binary: "100101",
    decision: { text: "亨。利用狱。", commentary: { tuan_zhuan: "颐中有物，曰噬嗑。噬嗑而亨。", xiang_zhuan: "雷电，噬嗑；先王以明罚敕法。" } },
    lines: [
      createLine(1, "初九", "屦校灭趾，无咎。", "屦校灭趾，不行也。"),
      createLine(2, "六二", "噬肤灭鼻，无咎。", "噬肤灭鼻，乘刚也。"),
      createLine(3, "六三", "噬腊肉，遇毒；小吝，无咎。", "遇毒，位不当也。"),
      createLine(4, "九四", "噬乾胏，得金矢，利艰贞，吉。", "利艰贞吉，未光也。"),
      createLine(5, "六五", "噬乾肉，得黄金，贞厉，无咎。", "贞厉无咎，得当也。"),
      createLine(6, "上九", "何校灭耳，凶。", "何校灭耳，聪不明也。")
    ]
  },
  {
    sequence: 22, symbol: "䷕", name: "贲", pinyin: "bì", binary: "101001",
    decision: { text: "亨。小利有攸往。", commentary: { tuan_zhuan: "贲，亨；柔来而文刚，故亨。", xiang_zhuan: "山下有火，贲；君子以明庶政，无敢折狱。" } },
    lines: [
      createLine(1, "初九", "贲其趾，舍车而徒。", "舍车而徒，义弗乘也。"),
      createLine(2, "六二", "贲其须。", "贲其须，与上兴也。"),
      createLine(3, "九三", "贲如濡如，永贞吉。", "永贞之吉，终莫之陵也。"),
      createLine(4, "六四", "贲如皤如，白马翰如，匪寇婚媾。", "六四，当位疑也。匪寇婚媾，终无尤也。"),
      createLine(5, "六五", "贲于丘园，束帛戋戋，吝，终吉。", "六五之吉，有喜也。"),
      createLine(6, "上九", "白贲，无咎。", "白贲无咎，上得志也。")
    ]
  },
  {
    sequence: 23, symbol: "䷖", name: "剥", pinyin: "bō", binary: "000001",
    decision: { text: "不利有攸往。", commentary: { tuan_zhuan: "剥，剥也，柔变刚也。", xiang_zhuan: "山附于地，剥；上以厚下，安宅。" } },
    lines: [
      createLine(1, "初六", "剥床以足，蔑贞凶。", "剥床以足，以灭下也。"),
      createLine(2, "六二", "剥床以辨，蔑贞凶。", "剥床以辨，未有与也。"),
      createLine(3, "六三", "剥之，无咎。", "剥之无咎，失上下也。"),
      createLine(4, "六四", "剥床以肤，凶。", "剥床以肤，切近灾也。"),
      createLine(5, "六五", "贯鱼，以宫人宠，无不利。", "以宫人宠，终无尤也。"),
      createLine(6, "上九", "硕果不食，君子得舆，小人剥庐。", "君子得舆，民所载也。小人剥庐，终不可用也。")
    ]
  },
  {
    sequence: 24, symbol: "䷗", name: "复", pinyin: "fù", binary: "100000",
    decision: { text: "亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。", commentary: { tuan_zhuan: "复亨；刚反，动而以顺行，是以出入无疾，朋来无咎。", xiang_zhuan: "雷在地中，复；先王以至日闭关，商旅不行，后不省方。" } },
    lines: [
      createLine(1, "初九", "不远复，无祗悔，元吉。", "不远之复，以修身也。"),
      createLine(2, "六二", "休复，吉。", "休复之吉，以下仁也。"),
      createLine(3, "六三", "频复，厉，无咎。", "频复之厉，义无咎也。"),
      createLine(4, "六四", "中行独复。", "中行独复，以从道也。"),
      createLine(5, "六五", "敦复，无悔。", "敦复无悔，中以自考也。"),
      createLine(6, "上六", "迷复，凶，有灾眚。用行师，终有大败，以其国君，凶；至于十年，不克征。", "迷复之凶，反君道也。")
    ]
  },
  {
    sequence: 25, symbol: "䷘", name: "无妄", pinyin: "wú wàng", binary: "100111",
    decision: { text: "元亨，利贞。其匪正有眚，不利有攸往。", commentary: { tuan_zhuan: "无妄，刚自外来，而为主于内。", xiang_zhuan: "天下雷行，物与无妄；先王以茂对时，育万物。" } },
    lines: [
      createLine(1, "初九", "无妄，往吉。", "无妄之往，得志也。"),
      createLine(2, "六二", "不耕获，不菑畲，则利有攸往。", "不耕获，未富也。"),
      createLine(3, "六三", "无妄之灾，或系之牛，行人之得，邑人之灾。", "行人得牛，邑人灾也。"),
      createLine(4, "九四", "可贞，无咎。", "可贞无咎，固有之也。"),
      createLine(5, "九五", "无妄之疾，勿药有喜。", "无妄之药，不可试也。"),
      createLine(6, "上九", "无妄，行有眚，无攸利。", "无妄之行，穷之灾也。")
    ]
  },
  {
    sequence: 26, symbol: "䷙", name: "大畜", pinyin: "dà chù", binary: "111001",
    decision: { text: "利贞，不家食吉，利涉大川。", commentary: { tuan_zhuan: "大畜，刚健笃实辉光，日新其德。", xiang_zhuan: "天在山中，大畜；君子以多识前言往行，以畜其德。" } },
    lines: [
      createLine(1, "初九", "有厉，利已。", "有厉利已，不犯灾也。"),
      createLine(2, "九二", "舆说辐。", "舆说辐，中无尤也。"),
      createLine(3, "九三", "良马逐，利艰贞。曰闲舆卫，利有攸往。", "利有攸往，上合志也。"),
      createLine(4, "六四", "童牛之牿，元吉。", "六四元吉，有喜也。"),
      createLine(5, "六五", "豮豕之牙，吉。", "六五之吉，有庆也。"),
      createLine(6, "上九", "何天之衢，亨。", "何天之衢，道大行也。")
    ]
  },
  {
    sequence: 27, symbol: "䷚", name: "颐", pinyin: "yí", binary: "100001",
    decision: { text: "贞吉。观颐，自求口实。", commentary: { tuan_zhuan: "颐贞吉，养正则吉也。", xiang_zhuan: "山下有雷，颐；君子以慎言语，节饮食。" } },
    lines: [
      createLine(1, "初九", "舍尔灵龟，观我朵颐，凶。", "观我朵颐，亦不足贵也。"),
      createLine(2, "六二", "颠颐，拂经，于丘颐，征凶。", "六二征凶，行失类也。"),
      createLine(3, "六三", "拂颐，贞凶，十年勿用，无攸利。", "十年勿用，道大悖也。"),
      createLine(4, "六四", "颠颐，吉。虎视耽耽，其欲逐逐，无咎。", "颠颐之吉，上施光也。"),
      createLine(5, "六五", "拂经，居贞吉，不可涉大川。", "居贞之吉，顺以从上也。"),
      createLine(6, "上九", "由颐，厉吉，利涉大川。", "由颐厉吉，大有庆也。")
    ]
  },
  {
    sequence: 28, symbol: "䷛", name: "大过", pinyin: "dà guò", binary: "011110",
    decision: { text: "栋桡，利有攸往，亨。", commentary: { tuan_zhuan: "大过，大者过也。栋桡，本末弱也。", xiang_zhuan: "泽灭木，大过；君子以独立不惧，遁世无闷。" } },
    lines: [
      createLine(1, "初六", "藉用白茅，无咎。", "藉用白茅，柔在下也。"),
      createLine(2, "九二", "枯杨生稊，老夫得其女妻，无不利。", "老夫女妻，过以相与也。"),
      createLine(3, "九三", "栋桡，凶。", "栋桡之凶，不可以有辅也。"),
      createLine(4, "九四", "栋隆，吉；有它吝。", "栋隆之吉，不桡乎下也。"),
      createLine(5, "九五", "枯杨生华，老妇得其士夫，无咎无誉。", "枯杨生华，何可久也。老妇士夫，亦可丑也。"),
      createLine(6, "上六", "过涉灭顶，凶，无咎。", "过涉灭顶，不可咎也。")
    ]
  },
  {
    sequence: 29, symbol: "䷜", name: "坎", pinyin: "kǎn", binary: "010010",
    decision: { text: "习坎，有孚，维心亨，行有尚。", commentary: { tuan_zhuan: "习坎，重险也。", xiang_zhuan: "水洊至，习坎；君子以常德行，习教事。" } },
    lines: [
      createLine(1, "初六", "习坎，入于坎窞，凶。", "习坎入坎，失道凶也。"),
      createLine(2, "九二", "坎有险，求小得。", "求小得，未出中也。"),
      createLine(3, "六三", "来之坎坎，险且枕，入于坎窞，勿用。", "来之坎坎，终无功也。"),
      createLine(4, "六四", "樽酒簋贰，用缶，纳约自牖，终无咎。", "樽酒簋贰，刚柔际也。"),
      createLine(5, "九五", "坎不盈，只既平，无咎。", "坎不盈，中未大也。"),
      createLine(6, "上六", "系用徽纆，置于丛棘，三岁不得，凶。", "上六失道，凶三岁也。")
    ]
  },
  {
    sequence: 30, symbol: "䷝", name: "离", pinyin: "lí", binary: "101101",
    decision: { text: "利贞，亨。畜牝牛，吉。", commentary: { tuan_zhuan: "离，丽也；日月丽乎天，百谷草木丽乎土。", xiang_zhuan: "明两作离，大人以继明照于四方。" } },
    lines: [
      createLine(1, "初九", "履错然，敬之，无咎。", "履错之敬，以辟咎也。"),
      createLine(2, "六二", "黄离，元吉。", "黄离元吉，得中道也。"),
      createLine(3, "九三", "日昃之离，不鼓缶而歌，则大迭之嗟，凶。", "日昃之离，何可久也。"),
      createLine(4, "九四", "突如其来如，焚如，死如，弃如。", "突如其来如，无所容也。"),
      createLine(5, "六五", "出涕陀若，戚嗟若，吉。", "六五之吉，离王公也。"),
      createLine(6, "上九", "王用出征，有嘉折首，获匪其丑，无咎。", "王用出征，以正邦也。")
    ]
  },
  {
    sequence: 31, symbol: "䷞", name: "咸", pinyin: "xián", binary: "001110",
    decision: { text: "亨，利贞，取女吉。", commentary: { tuan_zhuan: "咸，感也。柔上而刚下，二气感应以相与。", xiang_zhuan: "山上有泽，咸；君子以虚受人。" } },
    lines: [
      createLine(1, "初六", "咸其拇。", "咸其拇，志在外也。"),
      createLine(2, "六二", "咸其腓，凶，居吉。", "虽凶居吉，顺不害也。"),
      createLine(3, "九三", "咸其股，执其随，往吝。", "咸其股，亦不处也。志在随人，所执下也。"),
      createLine(4, "九四", "贞吉，悔亡，憧憧往来，朋从尔思。", "贞吉悔亡，未感害也。憧憧往来，未光大也。"),
      createLine(5, "九五", "咸其脢，无悔。", "咸其脢，志末也。"),
      createLine(6, "上六", "咸其辅，颊，舌。", "咸其辅颊舌，滕口说也。")
    ]
  },
  {
    sequence: 32, symbol: "䷟", name: "恒", pinyin: "héng", binary: "011100",
    decision: { text: "亨，无咎，利贞，利有攸往。", commentary: { tuan_zhuan: "恒，久也。刚上而柔下，雷风相与。", xiang_zhuan: "雷风，恒；君子以立不易方。" } },
    lines: [
      createLine(1, "初六", "浚恒，贞凶，无攸利。", "浚恒之凶，始求深也。"),
      createLine(2, "九二", "悔亡。", "九二悔亡，能久中也。"),
      createLine(3, "九三", "不恒其德，或承之羞，贞吝。", "不恒其德，无所容也。"),
      createLine(4, "九四", "田无禽。", "久非其位，安得禽也。"),
      createLine(5, "六五", "恒其德，贞，妇人吉，夫子凶。", "妇人贞吉，从一而终也。夫子制义，从妇凶也。"),
      createLine(6, "上六", "振恒，凶。", "振恒在上，大无功也。")
    ]
  },
  {
    sequence: 33, symbol: "䷠", name: "遁", pinyin: "dùn", binary: "001111",
    decision: { text: "亨，小利贞。", commentary: { tuan_zhuan: "遁亨，遁而亨也。", xiang_zhuan: "天下有山，遁；君子以远小人，不恶而严。" } },
    lines: [
      createLine(1, "初六", "遁尾，厉，勿用有攸往。", "遁尾之厉，不往何灾也。"),
      createLine(2, "六二", "执之用黄牛之革，莫之胜说。", "执之用黄牛，固志也。"),
      createLine(3, "九三", "系遁，有疾厉，畜臣妾吉。", "系遁之厉，有疾惫也。畜臣妾吉，不可大事也。"),
      createLine(4, "九四", "好遁，君子吉，小人否。", "君子好遁，小人否也。"),
      createLine(5, "九五", "嘉遁，贞吉。", "嘉遁贞吉，以正志也。"),
      createLine(6, "上九", "肥遁，无不利。", "肥遁无不利，无所疑也。")
    ]
  },
  {
    sequence: 34, symbol: "䷡", name: "大壮", pinyin: "dà zhuàng", binary: "111100",
    decision: { text: "利贞。", commentary: { tuan_zhuan: "大壮，大者壮也。刚以动，故壮。", xiang_zhuan: "雷在天上，大壮；君子以非礼弗履。" } },
    lines: [
      createLine(1, "初九", "壮于趾，征凶，有孚。", "壮于趾，其孚穷也。"),
      createLine(2, "九二", "贞吉。", "九二贞吉，以中也。"),
      createLine(3, "九三", "小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。", "小人用壮，君子罔也。"),
      createLine(4, "九四", "贞吉，悔亡。藩决不羸，壮于大舆之輹。", "藩决不羸，尚往也。"),
      createLine(5, "六五", "丧羊于易，无悔。", "丧羊于易，位不当也。"),
      createLine(6, "上六", "羝羊触藩，不能退，不能遂，无攸利，艰则吉。", "不能退，不能遂，不详也。艰则吉，咎不长也。")
    ]
  },
  {
    sequence: 35, symbol: "䷢", name: "晋", pinyin: "jìn", binary: "000101",
    decision: { text: "康侯用锡马蕃庶，昼日三接。", commentary: { tuan_zhuan: "晋，进也。明出地上，顺而丽乎大明。", xiang_zhuan: "明出地上，晋；君子以自昭明德。" } },
    lines: [
      createLine(1, "初六", "晋如，摧如，贞吉。罔孚，裕无咎。", "晋如摧如，独行正也。裕无咎，未受命也。"),
      createLine(2, "六二", "晋如，愁如，贞吉。受兹介福，于其王母。", "受兹介福，以中正也。"),
      createLine(3, "六三", "众允，悔亡。", "众允之志，上行也。"),
      createLine(4, "九四", "晋如鼫鼠，贞厉。", "鼫鼠贞厉，位不当也。"),
      createLine(5, "六五", "悔亡，失得勿恤，往吉无不利。", "失得勿恤，往有庆也。"),
      createLine(6, "上九", "晋其角，维用伐邑，厉吉无咎，贞吝。", "维用伐邑，道未光也。")
    ]
  },
  {
    sequence: 36, symbol: "䷣", name: "明夷", pinyin: "míng yí", binary: "101000",
    decision: { text: "利艰贞。", commentary: { tuan_zhuan: "明入地中，明夷。", xiang_zhuan: "明入地中，明夷；君子以莅众，用晦而明。" } },
    lines: [
      createLine(1, "初九", "明夷于飞，垂其翼。君子于行，三日不食，有攸往，主人有言。", "君子于行，义不食也。"),
      createLine(2, "六二", "明夷，夷于左股，用拯马壮，吉。", "六二之吉，顺以则也。"),
      createLine(3, "九三", "明夷于南狩，得其大首，不可疾贞。", "南狩之志，乃大得也。"),
      createLine(4, "六四", "入于左腹，获明夷之心，于出门庭。", "入于左腹，获心意也。"),
      createLine(5, "六五", "箕子之明夷，利贞。", "箕子之贞，明不可息也。"),
      createLine(6, "上六", "不明晦，初登于天，后入于地。", "初登于天，照四国也。后入于地，失则也。")
    ]
  },
  {
    sequence: 37, symbol: "䷤", name: "家人", pinyin: "jiā rén", binary: "101011",
    decision: { text: "利女贞。", commentary: { tuan_zhuan: "家人，女正位乎内，男正位乎外。", xiang_zhuan: "风自火出，家人；君子以言有物，而行有恒。" } },
    lines: [
      createLine(1, "初九", "闲有家，悔亡。", "闲有家，志未变也。"),
      createLine(2, "六二", "无攸遂，在中馈，贞吉。", "六二之吉，顺以巽也。"),
      createLine(3, "九三", "家人嗃嗃，悔厉吉；妇子嘻嘻，终吝。", "家人嗃嗃，未失也；妇子嘻嘻，失家节也。"),
      createLine(4, "六四", "富家，大吉。", "富家大吉，顺在位也。"),
      createLine(5, "九五", "王假有家，勿恤吉。", "王假有家，交相爱也。"),
      createLine(6, "上九", "有孚威如，终吉。", "威如之吉，反身之谓也。")
    ]
  },
  {
    sequence: 38, symbol: "䷥", name: "睽", pinyin: "kuí", binary: "110101",
    decision: { text: "小事吉。", commentary: { tuan_zhuan: "睽，火动而上，泽动而下，二女同居，其志不同行。", xiang_zhuan: "上火下泽，睽；君子以同而异。" } },
    lines: [
      createLine(1, "初九", "悔亡，丧马勿逐，自复；见恶人，无咎。", "见恶人，以辟咎也。"),
      createLine(2, "九二", "遇主于巷，无咎。", "遇主于巷，未失道也。"),
      createLine(3, "六三", "见舆曳，其牛掣，其人天且劓，无初有终。", "见舆曳，位不当也。无初有终，遇刚也。"),
      createLine(4, "九四", "睽孤，遇元夫，交孚，厉无咎。", "交孚无咎，志行也。"),
      createLine(5, "六五", "悔亡，厥宗噬肤，往何咎。", "厥宗噬肤，往有庆也。"),
      createLine(6, "上九", "睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉。", "遇雨之吉，群疑亡也。")
    ]
  },
  {
    sequence: 39, symbol: "䷦", name: "蹇", pinyin: "jiǎn", binary: "001010",
    decision: { text: "利西南，不利东北；利见大人，贞吉。", commentary: { tuan_zhuan: "蹇，难也，险在前也。", xiang_zhuan: "山上有水，蹇；君子以反身修德。" } },
    lines: [
      createLine(1, "初六", "往蹇，来誉。", "往蹇来誉，宜待也。"),
      createLine(2, "六二", "王臣蹇蹇，匪躬之故。", "王臣蹇蹇，终无尤也。"),
      createLine(3, "九三", "往蹇来反。", "往蹇来反，内喜之也。"),
      createLine(4, "六四", "往蹇来连。", "往蹇来连，当位实也。"),
      createLine(5, "九五", "大蹇朋来。", "大蹇朋来，以中节也。"),
      createLine(6, "上六", "往蹇来硕，吉；利见大人。", "往蹇来硕，志在内也。利见大人，以从贵也。")
    ]
  },
  {
    sequence: 40, symbol: "䷧", name: "解", pinyin: "xiè", binary: "010100",
    decision: { text: "利西南，无所往，其来复吉。有攸往，夙吉。", commentary: { tuan_zhuan: "解，险以动，动而免乎险，解。", xiang_zhuan: "雷雨作，解；君子以赦过宥罪。" } },
    lines: [
      createLine(1, "初六", "无咎。", "刚柔之际，义无咎也。"),
      createLine(2, "九二", "田获三狐，得黄矢，贞吉。", "九二贞吉，得中道也。"),
      createLine(3, "六三", "负且乘，致寇至，贞吝。", "负且乘，亦可丑也。自我致戎，又谁咎也。"),
      createLine(4, "九四", "解而拇，朋至斯孚。", "解而拇，未当位也。"),
      createLine(5, "六五", "君子维有解，吉；有孚于小人。", "君子有解，小人退也。"),
      createLine(6, "上六", "公用射隼，于高墉之上，获之，无不利。", "公用射隼，以解悖也。")
    ]
  },
  {
    sequence: 41, symbol: "䷨", name: "损", pinyin: "sǔn", binary: "110001",
    decision: { text: "有孚，元吉，无咎，可贞，利有攸往。", commentary: { tuan_zhuan: "损，损下益上，其道上行。", xiang_zhuan: "山下有泽，损；君子以惩忿窒欲。" } },
    lines: [
      createLine(1, "初九", "已事遄往，无咎，酌损之。", "已事遄往，尚合志也。"),
      createLine(2, "九二", "利贞，征凶，弗损益之。", "九二利贞，中以为志也。"),
      createLine(3, "六三", "三人行，则损一人；一人行，则得其友。", "一人行，三则疑也。"),
      createLine(4, "六四", "损其疾，使遄有喜，无咎。", "损其疾，亦可喜也。"),
      createLine(5, "六五", "或益之，十朋之龟弗克违，元吉。", "六五元吉，自上佑也。"),
      createLine(6, "上九", "弗损益之，无咎，贞吉，利有攸往，得臣无家。", "弗损益之，大得志也。")
    ]
  },
  {
    sequence: 42, symbol: "䷩", name: "益", pinyin: "yì", binary: "100011",
    decision: { text: "利有攸往，利涉大川。", commentary: { tuan_zhuan: "益，损上益下，民说无疆。", xiang_zhuan: "风雷，益；君子以见善则迁，有过则改。" } },
    lines: [
      createLine(1, "初九", "利用为大作，元吉，无咎。", "元吉无咎，下不厚事也。"),
      createLine(2, "六二", "或益之，十朋之龟弗克违，永贞吉。王用享于帝，吉。", "或益之，自外来也。"),
      createLine(3, "六三", "益之用凶事，无咎。有孚中行，告公用圭。", "益用凶事，固有之也。"),
      createLine(4, "六四", "中行，告公从。利用为依迁国。", "告公从，以益志也。"),
      createLine(5, "九五", "有孚惠心，勿问元吉。有孚惠我德。", "有孚惠心，勿问之矣。惠我德，大得志也。"),
      createLine(6, "上九", "莫益之，或击之，立心勿恒，凶。", "莫益之，偏辞也。或击之，自外来也。")
    ]
  },
  {
    sequence: 43, symbol: "䷪", name: "夬", pinyin: "guài", binary: "111110",
    decision: { text: "扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。", commentary: { tuan_zhuan: "夬，决也，刚决柔也。", xiang_zhuan: "泽上于天，夬；君子以施禄及下，居德则忌。" } },
    lines: [
      createLine(1, "初九", "壮于前趾，往不胜为咎。", "不胜而往，咎也。"),
      createLine(2, "九二", "惕号，莫夜有戎，勿恤。", "莫夜有戎，得中道也。"),
      createLine(3, "九三", "壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。", "君子夬夬，终无咎也。"),
      createLine(4, "九四", "臀无肤，其行次且。牵羊悔亡，闻言不信。", "其行次且，位不当也。闻言不信，聪不明也。"),
      createLine(5, "九五", "苋陆夬夬，中行无咎。", "中行无咎，中未光也。"),
      createLine(6, "上六", "无号，终有凶。", "无号之凶，终不可长也。")
    ]
  },
  {
    sequence: 44, symbol: "䷫", name: "姤", pinyin: "gòu", binary: "011111",
    decision: { text: "女壮，勿用取女。", commentary: { tuan_zhuan: "姤，遇也，柔遇刚也。", xiang_zhuan: "天下有风，姤；后以施命诰四方。" } },
    lines: [
      createLine(1, "初六", "系于金柅，贞吉，有攸往，见凶，羸豕孚蹢躅。", "系于金柅，柔道牵也。"),
      createLine(2, "九二", "包有鱼，无咎，不利宾。", "包有鱼，义不及宾也。"),
      createLine(3, "九三", "臀无肤，其行次且，厉，无大咎。", "其行次且，行未牵也。"),
      createLine(4, "九四", "包无鱼，起凶。", "无鱼之凶，远民也。"),
      createLine(5, "九五", "以杞包瓜，含章，有陨自天。", "九五含章，中正也。有陨自天，志不舍命也。"),
      createLine(6, "上九", "姤其角，吝，无咎。", "姤其角，上穷吝也。")
    ]
  },
  {
    sequence: 45, symbol: "䷬", name: "萃", pinyin: "cuì", binary: "000110",
    decision: { text: "亨。王假有庙，利见大人，亨，利贞。", commentary: { tuan_zhuan: "萃，聚也；顺以说，刚中而应，故聚也。", xiang_zhuan: "泽上于地，萃；君子以除戎器，戒不虞。" } },
    lines: [
      createLine(1, "初六", "有孚不终，乃乱乃萃，若号一握为笑，勿恤，往无咎。", "乃乱乃萃，其志乱也。"),
      createLine(2, "六二", "引吉，无咎，孚乃利用禴。", "引吉无咎，中未变也。"),
      createLine(3, "六三", "萃如，嗟如，无攸利，往无咎，小吝。", "往无咎，上巽也。"),
      createLine(4, "九四", "大吉，无咎。", "大吉无咎，位不当也。"),
      createLine(5, "九五", "萃有位，无咎。匪孚，元永贞，悔亡。", "萃有位，志未光也。"),
      createLine(6, "上六", "赍咨涕洟，无咎。", "赍咨涕洟，未安上也。")
    ]
  },
  {
    sequence: 46, symbol: "䷭", name: "升", pinyin: "shēng", binary: "011000",
    decision: { text: "元亨，用见大人，勿恤，南征吉。", commentary: { tuan_zhuan: "柔以时升，巽而顺，刚中而应，是以大亨。", xiang_zhuan: "地中生木，升；君子以顺德，积小以高大。" } },
    lines: [
      createLine(1, "初六", "允升，大吉。", "允升大吉，上合志也。"),
      createLine(2, "九二", "孚乃利用禴，无咎。", "九二之孚，有喜也。"),
      createLine(3, "九三", "升虚邑。", "升虚邑，无所疑也。"),
      createLine(4, "六四", "王用亨于岐山，吉，无咎。", "王用亨于岐山，顺事也。"),
      createLine(5, "六五", "贞吉，升阶。", "贞吉升阶，大得志也。"),
      createLine(6, "上六", "冥升，利于不息之贞。", "冥升在上，消不富也。")
    ]
  },
  {
    sequence: 47, symbol: "䷮", name: "困", pinyin: "kùn", binary: "010110",
    decision: { text: "亨，贞，大人吉，无咎，有言不信。", commentary: { tuan_zhuan: "困，刚掩也。", xiang_zhuan: "泽无水，困；君子以致命遂志。" } },
    lines: [
      createLine(1, "初六", "臀困于株木，入于幽谷，三岁不觌。", "入于幽谷，幽不明也。"),
      createLine(2, "九二", "困于酒食，朱绂方来，利用享祀，征凶，无咎。", "困于酒食，中有庆也。"),
      createLine(3, "六三", "困于石，据于蒺藜，入于其宫，不见其妻，凶。", "据于蒺藜，乘刚也。入于其宫，不见其妻，不祥也。"),
      createLine(4, "九四", "来徐徐，困于金车，吝，有终。", "来徐徐，志在下也。虽不当位，有与也。"),
      createLine(5, "九五", "劓刖，困于赤绂，乃徐有说，利用祭祀。", "劓刖，志未得也。乃徐有说，以中直也。"),
      createLine(6, "上六", "困于葛藟，于臲卼，曰动悔。有悔，征吉。", "困于葛藟，未当也。动悔有悔，吉行也。")
    ]
  },
  {
    sequence: 48, symbol: "䷯", name: "井", pinyin: "jǐng", binary: "011010",
    decision: { text: "改邑不改井，无丧无得，往来井井。", commentary: { tuan_zhuan: "巽乎水而上水，井。", xiang_zhuan: "木上有水，井；君子以劳民劝相。" } },
    lines: [
      createLine(1, "初六", "井泥不食，旧井无禽。", "井泥不食，下也。旧井无禽，时舍也。"),
      createLine(2, "九二", "井谷射鲋，瓮敝漏。", "井谷射鲋，无与也。"),
      createLine(3, "九三", "井渫不食，为我心恻，可用汲，王明，并受其福。", "井渫不食，行恻也。求王明，受福也。"),
      createLine(4, "六四", "井甃，无咎。", "井甃无咎，修井也。"),
      createLine(5, "九五", "井冽，寒泉食。", "寒泉之食，中正也。"),
      createLine(6, "上六", "井收勿幕，有孚元吉。", "元吉在上，大成也。")
    ]
  },
  {
    sequence: 49, symbol: "䷰", name: "革", pinyin: "gé", binary: "101110",
    decision: { text: "巳日乃孚，元亨利贞，悔亡。", commentary: { tuan_zhuan: "革，水火相息，二女同居，其志不相得，曰革。", xiang_zhuan: "泽中有火，革；君子以治历明时。" } },
    lines: [
      createLine(1, "初九", "巩用黄牛之革。", "巩用黄牛，不可以有为也。"),
      createLine(2, "六二", "巳日乃革之，征吉，无咎。", "巳日革之，行有嘉也。"),
      createLine(3, "九三", "征凶，贞厉，革言三就，有孚。", "革言三就，又何之矣。"),
      createLine(4, "九四", "悔亡，有孚改命，吉。", "改命之吉，信志也。"),
      createLine(5, "九五", "大人虎变，未占有孚。", "大人虎变，其文炳也。"),
      createLine(6, "上六", "君子豹变，小人革面，征凶，居贞吉。", "君子豹变，其文蔚也。小人革面，顺以从君也。")
    ]
  },
  {
    sequence: 50, symbol: "䷱", name: "鼎", pinyin: "dǐng", binary: "011101",
    decision: { text: "元吉，亨。", commentary: { tuan_zhuan: "鼎，象也。以木逊火，亨饪也。", xiang_zhuan: "木上有火，鼎；君子以正位凝命。" } },
    lines: [
      createLine(1, "初六", "鼎颠趾，利出否，得妾以其子，无咎。", "鼎颠趾，未悖也。利出否，以从贵也。"),
      createLine(2, "九二", "鼎有实，我仇有疾，不我能即，吉。", "鼎有实，慎所之也。我仇有疾，终无尤也。"),
      createLine(3, "九三", "鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉。", "鼎耳革，失其义也。"),
      createLine(4, "九四", "鼎折足，覆公餗，其形渥，凶。", "覆公餗，信如何也。"),
      createLine(5, "六五", "鼎黄耳金铉，利贞。", "鼎黄耳，中以为实也。"),
      createLine(6, "上九", "鼎玉铉，大吉，无不利。", "玉铉在上，刚柔节也。")
    ]
  },
  {
    sequence: 51, symbol: "䷲", name: "震", pinyin: "zhèn", binary: "100100",
    decision: { text: "亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。", commentary: { tuan_zhuan: "震，亨。震来虩虩，恐致福也。", xiang_zhuan: "洊雷，震；君子以恐惧修省。" } },
    lines: [
      createLine(1, "初九", "震来虩虩，后笑言哑哑，吉。", "震来虩虩，恐致福也。笑言哑哑，后有则也。"),
      createLine(2, "六二", "震来厉，亿丧贝，跻于九陵，勿逐，七日得。", "震来厉，乘刚也。"),
      createLine(3, "六三", "震苏苏，震行无眚。", "震苏苏，位不当也。"),
      createLine(4, "九四", "震遂泥。", "震遂泥，未光也。"),
      createLine(5, "六五", "震往来厉，亿无丧，有事。", "震往来厉，危行也。其事在中，大无丧也。"),
      createLine(6, "上六", "震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。", "震索索，中未得也。虽凶无咎，畏邻戒也。")
    ]
  },
  {
    sequence: 52, symbol: "䷳", name: "艮", pinyin: "gèn", binary: "001001",
    decision: { text: "艮其背，不获其身，行其庭，不见其人，无咎。", commentary: { tuan_zhuan: "艮，止也。时止则止，时行则行，动静不失其时，其道光明。", xiang_zhuan: "兼山，艮；君子以思不出其位。" } },
    lines: [
      createLine(1, "初六", "艮其趾，无咎，利永贞。", "艮其趾，未失正也。"),
      createLine(2, "六二", "艮其腓，不拯其随，其心不快。", "不拯其随，未退听也。"),
      createLine(3, "九三", "艮其限，列其夤，厉薰心。", "艮其限，危薰心也。"),
      createLine(4, "六四", "艮其身，无咎。", "艮其身，止诸躬也。"),
      createLine(5, "六五", "艮其辅，言有序，悔亡。", "艮其辅，以中正也。"),
      createLine(6, "上九", "敦艮，吉。", "敦艮之吉，以厚终也。")
    ]
  },
  {
    sequence: 53, symbol: "䷴", name: "渐", pinyin: "jiàn", binary: "001011",
    decision: { text: "女归吉，利贞。", commentary: { tuan_zhuan: "渐之进也，女归吉也。", xiang_zhuan: "山上有木，渐；君子以居贤德，善俗。" } },
    lines: [
      createLine(1, "初六", "鸿渐于干，小子厉，有言，无咎。", "小子之厉，义无咎也。"),
      createLine(2, "六二", "鸿渐于磐，饮食衎衎，吉。", "饮食衎衎，不素饱也。"),
      createLine(3, "九三", "鸿渐于陆，夫征不复，妇孕不育，凶；利御寇。", "夫征不复，离群丑也。妇孕不育，失其道也。"),
      createLine(4, "六四", "鸿渐于木，或得其桷，无咎。", "或得其桷，顺以巽也。"),
      createLine(5, "九五", "鸿渐于陵，妇三岁不孕，终莫之胜，吉。", "终莫之胜，得所愿也。"),
      createLine(6, "上九", "鸿渐于陆，其羽可用为仪，吉。", "其羽可用为仪，不可乱也。")
    ]
  },
  {
    sequence: 54, symbol: "䷵", name: "归妹", pinyin: "guī mèi", binary: "110100",
    decision: { text: "征凶，无攸利。", commentary: { tuan_zhuan: "归妹，天地之大义也。天地不交，而万物不兴。", xiang_zhuan: "泽上有雷，归妹；君子以永终知敝。" } },
    lines: [
      createLine(1, "初九", "归妹以棣，跛能履，征吉。", "归妹以棣，以恒也。跛能履吉，相承也。"),
      createLine(2, "九二", "眇能视，利幽人之贞。", "利幽人之贞，未变常也。"),
      createLine(3, "六三", "归妹以须，反归以棣。", "归妹以须，未当也。"),
      createLine(4, "九四", "归妹愆期，迟归有时。", "愆期之志，有待而行也。"),
      createLine(5, "六五", "帝乙归妹，其君之袂，不如其棣之袂良，月几望，吉。", "帝乙归妹，不如其棣之袂良也。其位在中，以贵行也。"),
      createLine(6, "上六", "女承筐无实，士刲羊无血，无攸利。", "上六无实，承虚筐也。")
    ]
  },
  {
    sequence: 55, symbol: "䷶", name: "丰", pinyin: "fēng", binary: "101100",
    decision: { text: "亨，王假之，勿忧，宜日中。", commentary: { tuan_zhuan: "丰，大也。明以动，故丰。", xiang_zhuan: "雷电皆至，丰；君子以折狱致刑。" } },
    lines: [
      createLine(1, "初九", "遇其配主，虽旬无咎，往有尚。", "虽旬无咎，过旬灾也。"),
      createLine(2, "六二", "丰其蔀，日中见斗，往得疑疾，有孚发若，吉。", "有孚发若，信以发志也。"),
      createLine(3, "九三", "丰其沛，日中见沫，折其右肱，无咎。", "丰其沛，不可大事也。折其右肱，终不可用也。"),
      createLine(4, "九四", "丰其蔀，日中见斗，遇其夷主，吉。", "丰其蔀，位不当也。日中见斗，幽不明也。"),
      createLine(5, "六五", "来章，有庆誉，吉。", "六五之吉，有庆也。"),
      createLine(6, "上六", "丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。", "丰其屋，天际翔也。窥其户，阒其无人，自藏也。")
    ]
  },
  {
    sequence: 56, symbol: "䷷", name: "旅", pinyin: "lǚ", binary: "001101",
    decision: { text: "小亨，旅贞吉。", commentary: { tuan_zhuan: "旅，小亨，柔得中乎外，而顺乎刚，止而丽乎明。", xiang_zhuan: "山上有火，旅；君子以明慎用刑，而不留狱。" } },
    lines: [
      createLine(1, "初六", "旅琐琐，斯其所取灾。", "旅琐琐，志穷灾也。"),
      createLine(2, "六二", "旅即次，怀其资，得童仆贞。", "得童仆贞，终无尤也。"),
      createLine(3, "九三", "旅焚其次，丧其童仆，贞厉。", "旅焚其次，亦以伤也。以旅与下，其义丧也。"),
      createLine(4, "九四", "旅于处，得其资斧，我心不快。", "旅于处，未得位也。得其资斧，心未快也。"),
      createLine(5, "六五", "射雉一矢亡，终以誉命。", "终以誉命，上逮也。"),
      createLine(6, "上九", "鸟焚其巢，旅人先笑后号啕。丧牛于易，凶。", "以旅在上，其义焚也。丧牛于易，终莫之闻也。")
    ]
  },
  {
    sequence: 57, symbol: "䷸", name: "巽", pinyin: "xùn", binary: "011011",
    decision: { text: "小亨，利有攸往，利见大人。", commentary: { tuan_zhuan: "重巽以申命，刚巽乎中正而志行。", xiang_zhuan: "随风，巽；君子以申命行事。" } },
    lines: [
      createLine(1, "初六", "进退，利武人之贞。", "进退，志疑也。利武人之贞，志治也。"),
      createLine(2, "九二", "巽在床下，用史巫纷若，吉，无咎。", "纷若之吉，得中也。"),
      createLine(3, "九三", "频巽，吝。", "频巽之吝，志穷也。"),
      createLine(4, "六四", "悔亡，田获三品。", "田获三品，有功也。"),
      createLine(5, "九五", "贞吉悔亡，无不利。无初有终，先庚三日，后庚三日，吉。", "九五之吉，位正中也。"),
      createLine(6, "上九", "巽在床下，丧其资斧，贞凶。", "巽在床下，上穷也。丧其资斧，正乎凶也。")
    ]
  },
  {
    sequence: 58, symbol: "䷹", name: "兑", pinyin: "duì", binary: "110110",
    decision: { text: "亨，利贞。", commentary: { tuan_zhuan: "兑，说也。刚中而柔外，说以利贞，是以顺乎天，而应乎人。", xiang_zhuan: "丽泽，兑；君子以朋友讲习。" } },
    lines: [
      createLine(1, "初九", "和兑，吉。", "和兑之吉，行未疑也。"),
      createLine(2, "九二", "孚兑，吉，悔亡。", "孚兑之吉，信志也。"),
      createLine(3, "六三", "来兑，凶。", "来兑之凶，位不当也。"),
      createLine(4, "九四", "商兑，未宁，介疾有喜。", "九四之喜，有庆也。"),
      createLine(5, "九五", "孚于剥，有厉。", "孚于剥，位正当也。"),
      createLine(6, "上六", "引兑。", "上六引兑，未光也。")
    ]
  },
  {
    sequence: 59, symbol: "䷺", name: "涣", pinyin: "huàn", binary: "010011",
    decision: { text: "亨。王假有庙，利涉大川，利贞。", commentary: { tuan_zhuan: "涣，亨。刚来而不穷，柔得位乎外而上同。", xiang_zhuan: "风行水上，涣；先王以享于帝，立庙。" } },
    lines: [
      createLine(1, "初六", "用拯马壮，吉。", "初六之吉，顺也。"),
      createLine(2, "九二", "涣奔其机，悔亡。", "涣奔其机，得愿也。"),
      createLine(3, "六三", "涣其躬，无悔。", "涣其躬，志在外也。"),
      createLine(4, "六四", "涣其群，元吉。涣有丘，匪夷所思。", "涣其群，元吉；光大也。"),
      createLine(5, "九五", "涣汗其大号，涣王居，无咎。", "王居无咎，正位也。"),
      createLine(6, "上九", "涣其血，去逖出，无咎。", "涣其血，远害也。")
    ]
  },
  {
    sequence: 60, symbol: "䷻", name: "节", pinyin: "jié", binary: "110010",
    decision: { text: "亨。苦节不可贞。", commentary: { tuan_zhuan: "节，亨。刚柔分，而刚得中。", xiang_zhuan: "泽上有水，节；君子以制数度，议德行。" } },
    lines: [
      createLine(1, "初九", "不出户庭，无咎。", "不出户庭，知通塞也。"),
      createLine(2, "九二", "不出门庭，凶。", "不出门庭，失时极也。"),
      createLine(3, "六三", "不节若，则嗟若，无咎。", "不节之嗟，又谁咎也。"),
      createLine(4, "六四", "安节，亨。", "安节之亨，承上道也。"),
      createLine(5, "九五", "甘节，吉；往有尚。", "甘节之吉，居位中也。"),
      createLine(6, "上六", "苦节，贞凶，悔亡。", "苦节贞凶，其道穷也。")
    ]
  },
  {
    sequence: 61, symbol: "䷼", name: "中孚", pinyin: "zhōng fú", binary: "110011",
    decision: { text: "豚鱼吉，利涉大川，利贞。", commentary: { tuan_zhuan: "中孚，柔在内而刚得中。说而巽，孚，乃化邦也。", xiang_zhuan: "泽上有风，中孚；君子以议狱缓死。" } },
    lines: [
      createLine(1, "初九", "虞吉，有它不燕。", "虞吉，志未变也。"),
      createLine(2, "九二", "鸣鹤在阴，其子和之，我有好爵，吾与尔靡之。", "其子和之，中心愿也。"),
      createLine(3, "六三", "得敌，或鼓或罢，或泣或歌。", "或鼓或罢，位不当也。"),
      createLine(4, "六四", "月几望，马匹亡，无咎。", "马匹亡，绝类上也。"),
      createLine(5, "九五", "有孚挛如，无咎。", "有孚挛如，位正当也。"),
      createLine(6, "上九", "翰音登于天，贞凶。", "翰音登于天，何可长也。")
    ]
  },
  {
    sequence: 62, symbol: "䷽", name: "小过", pinyin: "xiǎo guò", binary: "001100",
    decision: { text: "亨，利贞。可小事，不可大事。", commentary: { tuan_zhuan: "小过，小者过而亨也。", xiang_zhuan: "山上有雷，小过；君子以行过乎恭，丧过乎哀，用过乎俭。" } },
    lines: [
      createLine(1, "初六", "飞鸟以凶。", "飞鸟以凶，不可如何也。"),
      createLine(2, "六二", "过其祖，遇其庚，不及其君，遇其臣；无咎。", "不及其君，臣不可过也。"),
      createLine(3, "九三", "弗过防之，从或戕之，凶。", "从或戕之，凶如何也。"),
      createLine(4, "九四", "无咎，弗过遇之。往厉必戒，勿用永贞。", "弗过遇之，位不当也。往厉必戒，终不可长也。"),
      createLine(5, "六五", "密云不雨，自我西郊，公弋取彼在穴。", "密云不雨，已上也。"),
      createLine(6, "上六", "弗遇过之，飞鸟离之，凶，是谓灾眚。", "弗遇过之，已亢也。")
    ]
  },
  {
    sequence: 63, symbol: "䷾", name: "既济", pinyin: "jì jì", binary: "101010",
    decision: { text: "亨，小利贞，初吉终乱。", commentary: { tuan_zhuan: "既济，亨，小者亨也。", xiang_zhuan: "水在火上，既济；君子以思患而预防之。" } },
    lines: [
      createLine(1, "初九", "曳其轮，濡其尾，无咎。", "曳其轮，义无咎也。"),
      createLine(2, "六二", "妇丧其茽，勿逐，七日得。", "七日得，以中道也。"),
      createLine(3, "九三", "高宗伐鬼方，三年克之，小人勿用。", "三年克之，惫也。"),
      createLine(4, "六四", "繻有衣袽，终日戒。", "终日戒，有所疑也。"),
      createLine(5, "九五", "东邻杀牛，不如西邻之禴祭，实受其福。", "东邻杀牛，不如西邻之时也。实受其福，吉大来也。"),
      createLine(6, "上六", "濡其首，厉。", "濡其首厉，何可久也。")
    ]
  },
  {
    sequence: 64, symbol: "䷿", name: "未济", pinyin: "wèi jì", binary: "010101",
    decision: { text: "亨，小狐汔济，濡其尾，无攸利。", commentary: { tuan_zhuan: "未济，亨；柔得中也。", xiang_zhuan: "火在水上，未济；君子以慎辨物居方。" } },
    lines: [
      createLine(1, "初六", "濡其尾，吝。", "濡其尾，亦不知极也。"),
      createLine(2, "九二", "曳其轮，贞吉。", "九二贞吉，中以行正也。"),
      createLine(3, "六三", "未济，征凶，利涉大川。", "未济征凶，位不当也。"),
      createLine(4, "九四", "贞吉，悔亡，震用伐鬼方，三年有赏于大国。", "贞吉悔亡，志行也。"),
      createLine(5, "六五", "贞吉，无悔，君子之光，有孚，吉。", "君子之光，其晖吉也。"),
      createLine(6, "上九", "有孚于饮酒，无咎，濡其首，有孚失是。", "饮酒濡首，亦不知节也。")
    ]
  }
];

// Convert list to dictionary for O(1) lookup
export const HEXAGRAM_DB: Record<string, RichHexagram> = {};
HEXAGRAM_LIST.forEach(h => {
  HEXAGRAM_DB[h.binary] = h;
});
