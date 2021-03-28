const bingo = {
  maxNumber: 75,
  rows: 5,
  cols: 5,
  freeCenter: true,
  //
  name: 'ブイアパクリスマス2020',
  referenceHTML: '#ブイアパクリスマス2020 <a href="https://twitter.com/Uge_And/status/1341326316323315713">ビンゴ参加要項ツイート</a>',
  imagePath: 'vapartChristmas2020.jpg',
  imageStyle: {
    height: '100%',
    maxHeight: '1200px',
  },
  box: {
    // ビンゴの欄が均等に並んでいる前提
    firstLeft:  44,
    firstTop : 268,
    width    : 181,
    height   : 185,
    xStep    : 203,
    yStep    : 210,
  },
  text: {
    fontSize: 96,
  },
  gradientBox: {
    xPadding: 32,
    yPadding: 32,
  },
  boxCheck: {
    padding: 10,
    lineWidth: 8,
    //省略可 color
    //省略可 alpha
  },
  debug: false,
};

export default bingo;
