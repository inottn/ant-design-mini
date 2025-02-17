const items = [
  {
    title: '第一项',
    content: 'Pariatur dolore commodo commodo elit adipisicing sunt adipisicing ex duis labore nisi sunt. Magna ut minim deserunt. Sunt velit occaecat incididunt aliqua. Dolore officia voluptate aute reprehenderit anim excepteur elit.'
  },
  {
    title: '第二项',
    content: 'Dolor reprehenderit cillum aliqua qui id Lorem elit anim do minim mollit. Commodo id cupidatat est tempor anim. Fugiat ipsum dolor nostrud officia mollit. Aliquip aliqua pariatur tempor excepteur commodo non et adipisicing magna ex nostrud dolore cillum exercitation enim. In sunt velit laboris ullamco et in reprehenderit sit excepteur aute in dolor. Sunt minim incididunt consectetur laborum sint fugiat voluptate sunt culpa fugiat duis. Ad consectetur ad aliquip aute labore magna commodo est cupidatat.'
  },
  {
    title: '第三项',
    content: 'Ad ut ullamco exercitation do excepteur ipsum ipsum consectetur nulla fugiat est et. Occaecat ullamco nulla mollit cupidatat dolore nulla minim cillum proident laboris mollit. Veniam consectetur esse consectetur. Fugiat in laborum anim.',
    brief: '辅助信息',
  },
];


Page({
  data: {
    checkboxList: items.map((item) => false),
    items,
  },
  onChange(checked, e) {
    const { index } = e.currentTarget.dataset;
    const checkboxList = [...this.data.checkboxList];
    checkboxList[index] = checked;
    this.setData({
      checkboxList,
    });
  },
  onTap() {
    my.alert({
      content: this.data.checkboxList,
    });
  }
});
