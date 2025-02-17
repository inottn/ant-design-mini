function getBoundingClientRect(selector) {
  return new Promise(resolve => {
    my.createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0]) {
          resolve(ret[0]);
        }
      });
  });
}



Page({
  data: {
    current: 0,
    items: [
      {
        title: '第一项',
        content:
          'Est voluptate sunt consequat laboris proident eu ut qui incididunt sint sint pariatur qui. Ut labore in duis labore cupidatat in ad quis duis aliquip irure occaecat officia reprehenderit consectetur. Enim consequat veniam nulla. Enim do nisi cillum aute pariatur ex dolor mollit ut nisi. Irure non pariatur anim Lorem ad do in elit irure minim exercitation. Dolor aliquip nisi adipisicing sunt adipisicing sunt nisi ad in non laboris in magna dolore. Fugiat aliqua labore elit occaecat consequat. Ipsum officia excepteur anim sint ipsum exercitation laborum. Excepteur exercitation ea occaecat cupidatat et consectetur exercitation non. Incididunt aliqua esse velit nisi ullamco. Do dolore ad ut. Esse ad tempor aliqua cillum consequat occaecat enim dolore enim aliquip aliquip irure. Id aliquip qui nulla dolor dolore et est. Non adipisicing mollit consequat magna sit laborum mollit nulla est consequat. Veniam in eu nisi ex sint deserunt ad sit consequat excepteur qui. Ea est sint adipisicing ea aliqua eiusmod amet pariatur officia ex voluptate. Consectetur in ipsum cillum nulla minim quis aute consequat. Et adipisicing officia nostrud id reprehenderit tempor. Laborum anim aliqua ut enim et pariatur elit tempor tempor incididunt deserunt nulla deserunt enim. Esse deserunt pariatur veniam sunt fugiat irure ullamco excepteur et Lorem. Sit adipisicing nisi consectetur nulla qui sint culpa. In aute cupidatat ad consequat proident est non sint ullamco dolor nisi irure fugiat amet deserunt. Laboris nostrud tempor aute non cillum magna labore ipsum duis ut dolor velit. Qui proident dolor occaecat consequat qui laboris sit est culpa excepteur aliqua pariatur veniam irure voluptate. Cillum adipisicing deserunt nisi quis anim fugiat ipsum incididunt veniam laboris et eiusmod minim. Tempor esse ex reprehenderit occaecat velit non do magna consequat consequat exercitation tempor elit. Ea pariatur irure laborum ipsum reprehenderit sunt sit minim excepteur pariatur magna deserunt aliqua velit non. Culpa irure dolore commodo quis do. Nulla ea consectetur ullamco deserunt laborum consectetur. Amet sunt in esse cupidatat excepteur veniam do. Est quis commodo consequat reprehenderit reprehenderit. Magna laboris dolor dolor laborum. Culpa officia dolor labore aute commodo ex nisi incididunt officia in aute incididunt voluptate. Do nisi dolore ea veniam adipisicing voluptate reprehenderit ea proident aliquip. Labore enim in minim. Aliquip cillum do consequat labore Lorem exercitation. Laborum anim aute in nisi aliqua nulla commodo nostrud laborum. Lorem cillum ut cillum laborum occaecat consequat elit duis. Dolore dolor deserunt nisi dolore laborum sit ea deserunt ipsum dolor ut sit minim. Reprehenderit esse consectetur dolore esse nostrud. Commodo laborum tempor magna cillum Lorem ad qui nisi consequat sit in amet veniam. Ex pariatur eiusmod labore aute id dolor et sunt cupidatat id et non proident enim sint. Duis duis id in et in incididunt Lorem veniam aliquip. Culpa duis deserunt eiusmod laborum labore ea non sit eu ipsum eu.',
      },
      {
        title: '第二项',
        content:
          'Excepteur esse nisi excepteur exercitation. Aliquip elit ut officia cillum nisi id. Aute in esse cillum. Enim occaecat cupidatat consequat dolor ex nulla esse non. Non ipsum ullamco veniam proident labore et exercitation dolore esse tempor culpa amet in anim mollit. Do officia proident ullamco ea ipsum reprehenderit irure occaecat proident id culpa dolore Lorem deserunt. Aliquip ut ex dolor ut eiusmod elit et velit sunt ipsum aliquip dolore. Ullamco sit excepteur dolore anim irure duis aute labore ex elit. Lorem pariatur esse in cupidatat nostrud reprehenderit tempor aute quis. Minim eiusmod aute do. Lorem aliquip ea consequat occaecat aliqua duis dolore Lorem elit in anim dolore magna veniam adipisicing. Proident consequat Lorem et. Occaecat nisi id mollit do labore eu consequat aliquip aute nulla fugiat. Irure nisi reprehenderit sint proident commodo dolore. Cillum laboris aliquip labore quis ad. Excepteur labore commodo consectetur quis sunt. Dolor voluptate laboris id et do irure exercitation ex elit consequat dolore exercitation. Id nulla ad sint excepteur occaecat sunt nostrud anim consectetur labore consequat dolor ex in sunt. Laborum elit ad enim do aute ullamco minim culpa mollit fugiat laborum adipisicing. Nostrud velit esse consequat et ea. Et deserunt minim ipsum. Anim dolore velit ex cillum occaecat magna irure culpa aliquip ex laboris duis consequat ipsum incididunt. Anim laborum aliqua tempor excepteur mollit in consequat voluptate veniam dolore. Magna commodo officia officia in anim officia ex. Adipisicing mollit eu aliqua ex elit ipsum dolor incididunt adipisicing minim proident excepteur. Veniam veniam ex occaecat culpa eu consequat quis pariatur quis duis duis. Consectetur commodo eu voluptate pariatur sit sit reprehenderit duis esse veniam ullamco ullamco est. Laboris laborum exercitation anim tempor commodo fugiat. Sit ipsum consectetur pariatur in. Officia irure ipsum culpa irure veniam commodo laborum consequat sit laboris incididunt esse. Est in eiusmod ad ad deserunt consequat adipisicing commodo sit non culpa. Officia ut ex laborum fugiat. Magna sit do ullamco ex aute elit reprehenderit. Voluptate commodo Lorem est incididunt ullamco tempor cupidatat sint magna amet occaecat qui magna. Aliquip consequat pariatur tempor voluptate est pariatur excepteur. Nulla mollit adipisicing do magna proident velit consectetur magna nisi aliquip adipisicing et velit quis ad. Mollit minim elit fugiat tempor non in exercitation cillum quis qui pariatur laborum excepteur in cillum. Enim nostrud nisi consequat deserunt deserunt consequat velit laboris amet magna et eu ipsum. Aliqua cillum elit minim do id exercitation magna. Cupidatat incididunt reprehenderit culpa occaecat ullamco anim dolore. Anim occaecat occaecat esse non occaecat duis et fugiat. Pariatur velit dolor Lorem ullamco laborum deserunt deserunt consectetur consequat deserunt mollit esse. Irure nostrud velit nostrud aliqua ad ea voluptate. Culpa ex officia consectetur eiusmod cupidatat. Nulla Lorem ut ea eu deserunt eiusmod aliqua Lorem quis aute elit. Eiusmod cillum nisi veniam veniam fugiat deserunt adipisicing exercitation amet Lorem. Mollit sit dolore tempor et magna non proident cupidatat anim veniam. Nisi velit est occaecat amet dolor ut reprehenderit mollit culpa dolore ad pariatur. Pariatur qui ex qui excepteur reprehenderit. Mollit consectetur esse incididunt adipisicing dolore.',
      },
      {
        title: '第三项',
        content:
          'Aute cillum et eu. Est ut magna sint ex ex adipisicing qui occaecat sint excepteur eiusmod adipisicing id eiusmod. Proident culpa tempor ullamco ad non ex incididunt ullamco tempor quis fugiat commodo consectetur. Id aliquip in labore occaecat ut exercitation mollit ipsum nisi pariatur occaecat ut minim duis enim. Magna cupidatat id do. Voluptate id tempor cillum aliqua mollit quis veniam sit fugiat culpa qui veniam deserunt reprehenderit. Reprehenderit qui est est consequat commodo occaecat id. Do consequat ut incididunt ea ipsum fugiat aliqua dolore velit incididunt. Dolor quis amet mollit fugiat quis ullamco culpa occaecat. Voluptate do ullamco excepteur duis dolor sit enim officia. Nostrud id aute nisi voluptate cupidatat pariatur duis et cillum. Excepteur nisi exercitation labore elit consequat officia non fugiat. Tempor deserunt eu do culpa quis fugiat proident amet qui deserunt eiusmod velit culpa. Nisi officia aliquip culpa pariatur sunt non quis eiusmod aliqua commodo et Lorem duis minim amet. Voluptate enim laborum ex dolore in anim cillum dolore ut officia Lorem ipsum exercitation irure anim. Pariatur quis consequat tempor eu quis tempor aute esse commodo ipsum non enim sunt. Sit laboris amet consequat. Aute sunt qui eiusmod enim amet ut in elit ea pariatur est et consequat. Occaecat adipisicing id ex nostrud labore anim. Ullamco eiusmod dolor et minim fugiat culpa nulla tempor cupidatat reprehenderit sit fugiat duis quis. Sunt est ipsum adipisicing. Do enim ullamco minim tempor dolore consequat. Consequat non nulla proident aute nulla magna et. Labore quis veniam adipisicing irure reprehenderit ipsum ex eu. Labore sint dolore voluptate laborum id ad eu minim aute consectetur adipisicing aliquip exercitation culpa. Ullamco exercitation dolore elit cupidatat elit ex aliqua pariatur duis cillum. Cillum consectetur ipsum cillum dolore. Et commodo id aliquip do sunt ea pariatur ut aliqua proident occaecat aute esse. Deserunt incididunt sit tempor culpa laboris ea minim laboris magna et consequat. Labore do duis cillum. Eiusmod nostrud enim sunt eiusmod consectetur. Irure ex consectetur officia nisi enim consectetur Lorem exercitation adipisicing sit consequat excepteur. Minim velit in ea nulla tempor ad irure laborum est tempor laboris enim ea non laboris. Velit magna fugiat aute laboris. Commodo sunt voluptate laborum labore tempor ullamco voluptate nostrud ea. Reprehenderit fugiat minim nulla fugiat enim sit Lorem. Est aute magna sunt magna labore do Lorem proident. Laboris et anim non aliqua eu laboris fugiat nostrud tempor deserunt ex officia quis dolore ipsum. Aliquip ea sint qui duis culpa non aliquip voluptate consectetur labore velit. Anim do est enim cupidatat ex et ad reprehenderit officia ullamco exercitation dolore. Non esse sint fugiat laborum eu enim aliqua enim nostrud. Lorem occaecat labore amet voluptate Lorem tempor do fugiat fugiat eu pariatur ea excepteur duis. Officia amet ipsum esse sunt anim deserunt. Esse eu officia mollit. Officia ut labore dolore et duis excepteur sunt cillum qui qui enim magna adipisicing. Dolor ipsum est nisi duis minim laboris magna anim ea labore eiusmod anim sunt deserunt. Est Lorem cupidatat officia laborum Lorem incididunt ex et est culpa occaecat et eiusmod exercitation. Qui do nostrud adipisicing dolore incididunt. Ex nostrud velit deserunt dolore cillum anim et exercitation magna qui pariatur consectetur laboris deserunt.',
      },
      {
        title: '第四项',
        content:
          'Nisi aliquip nulla et aliquip anim elit reprehenderit veniam. Aute incididunt cupidatat sint enim fugiat est labore. Minim ea do occaecat anim ipsum in deserunt proident magna voluptate mollit. Nisi et fugiat cillum consequat deserunt do magna. Sunt irure laboris ea cupidatat esse tempor irure occaecat cupidatat. Officia adipisicing commodo non minim culpa magna est ullamco eu consequat quis magna nisi tempor. Aute ad anim et et sint nulla proident et magna. Veniam veniam velit culpa non. Enim minim adipisicing amet velit do ea voluptate do cillum ex et excepteur. Reprehenderit dolore nulla nisi aute consectetur qui ut fugiat laboris aliquip velit nisi. Eiusmod nulla exercitation irure esse voluptate est. Consectetur est minim occaecat anim amet. Laboris exercitation id laborum ullamco ut aute irure laboris. Culpa ad irure in mollit deserunt et officia amet pariatur esse ad mollit minim sint officia. Reprehenderit commodo dolore occaecat sint reprehenderit irure esse. Cupidatat ex quis est. Fugiat quis sint deserunt quis culpa reprehenderit reprehenderit dolor ipsum tempor exercitation. Culpa occaecat minim elit incididunt do incididunt fugiat commodo excepteur anim mollit. Ad cillum et tempor do Lorem ut et aliquip ea ut do laborum ex ullamco. Sint dolor Lorem enim incididunt velit ullamco. Eiusmod et nostrud laboris culpa enim laboris. Nulla sunt veniam exercitation ea ut consectetur velit. Enim irure magna et laborum occaecat irure quis labore deserunt. Consectetur amet mollit pariatur ad nisi. Sint excepteur sunt adipisicing eiusmod duis ut. Cillum esse eu ut anim tempor Lorem dolor cillum. Veniam occaecat duis ex commodo excepteur ut consequat nulla ullamco sint fugiat ullamco. Excepteur excepteur nostrud elit. Consectetur dolor dolore reprehenderit ex sint sunt aliqua amet et. Consequat sunt cillum labore irure adipisicing nulla velit. Aliquip deserunt in id amet quis. Ut duis Lorem exercitation ad adipisicing consectetur nostrud sint dolor consequat enim aliquip id. Amet et ullamco exercitation duis eiusmod nisi Lorem. Veniam consectetur incididunt quis aliqua deserunt. Sint in deserunt in laboris labore pariatur laborum minim magna adipisicing mollit non. Dolor dolore in labore labore exercitation laboris laborum elit ex ea nostrud veniam. Est anim duis velit nostrud reprehenderit laborum nisi. Sit consequat aute aliqua consequat anim. Enim et ex reprehenderit et. Quis minim pariatur fugiat voluptate est occaecat commodo cupidatat do nostrud ad dolore pariatur cillum. Dolor eiusmod quis fugiat ullamco et reprehenderit in qui officia aliquip fugiat qui adipisicing. Anim ex proident consequat labore incididunt cillum enim eu exercitation cupidatat dolor commodo sit duis. Deserunt et fugiat dolor laboris. Anim esse voluptate esse excepteur non et culpa labore do quis ad consectetur do cupidatat sint. Ex ea amet id duis adipisicing dolore esse fugiat quis labore commodo minim nisi anim elit. Excepteur reprehenderit labore cillum commodo nisi culpa consectetur ut elit id ex excepteur eu ex. Quis aute et excepteur sit irure duis laborum velit do aliquip sit aliqua consequat duis adipisicing. Occaecat consectetur sint mollit ipsum esse laborum elit ad. Dolore Lorem do excepteur labore laboris duis esse fugiat amet. Voluptate est magna proident proident nisi est duis pariatur ut anim irure nulla anim. Labore adipisicing officia est sunt laborum Lorem occaecat anim. Do voluptate anim cillum ipsum tempor minim nostrud esse. Aliquip aliqua magna ipsum dolore non laborum mollit sint labore. Aliquip est laborum tempor sint laborum incididunt consequat dolor do occaecat commodo in mollit amet.',
      },
      {
        title: '第五项',
        content:
          'Sit occaecat reprehenderit quis incididunt elit. Voluptate amet exercitation minim mollit excepteur aliqua ut. Duis duis mollit eiusmod consectetur irure est mollit amet dolor nostrud dolore duis laborum magna. Est anim ipsum velit cillum veniam velit. Commodo eiusmod Lorem quis nisi nostrud deserunt eiusmod sit occaecat eiusmod.',
      },
      {
        title: '第六项',
        content:
          'Do nisi tempor incididunt cupidatat magna id. Ullamco consectetur consequat laboris officia occaecat laboris consequat velit irure laboris exercitation aliqua. Laborum elit sit irure eiusmod anim fugiat magna ipsum aliqua esse tempor in. Commodo occaecat Lorem voluptate pariatur commodo proident et et exercitation ex exercitation culpa tempor id. Fugiat dolore aliquip voluptate in. Velit voluptate excepteur incididunt sint sit aliqua et aliquip. Aliqua nisi consequat excepteur eiusmod dolore culpa Lorem.',
      },
    ],
    scrollTop: 0,
  },
  async updateRect() {
    this.itemRectList = await Promise.all(this.data.items.map((item, index) => getBoundingClientRect(`#tab-item-${index}`)));
    this.scrollViewRect = await getBoundingClientRect('#scroll-view');
  },
  async onReady() {
    await this.updateRect();
  },
  onChange(current) {
    this.tap = true;
    this.setData({
      scrollTop: this.itemRectList[current].top - this.scrollViewRect.top,
      current,
    });
  },
  onTouchStart() {
    this.tap = false;
  },
  onScroll(e) {
    if (this.tap) {
      return;
    }
    this.scrollTop = e.detail.scrollTop;
    const scrollTop = this.scrollTop + this.itemRectList[0].top;
    for(let i=0;i<this.itemRectList.length - 1;i++) {
      const item = this.itemRectList[i];
      if (scrollTop > item.top && scrollTop < this.itemRectList[i+1].top && i !== this.data.current) {
        this.setData({
          current: i,
        });
        return;
      }
    }
  },
});
