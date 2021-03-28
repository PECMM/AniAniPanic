const bingo = {
  maxNumber: 75,
  rows: 5,
  cols: 5,
  freeCenter: true,
  //
  name: '',
  referenceHTML: '<a href="https://www.irasutoya.com/2018/11/blog-post_86.html">ビンゴカードのテンプレート(かわいいフリー素材集 いらすとや)</a>',
  imagePath: 'base.png',
  imageStyle: {
    height: '100%',
    maxHeight: '1200px',
  },
  box: {
    // ビンゴの欄が均等に並んでいる前提
    firstLeft:  57,
    firstTop : 213,
    width    : 100,
    height   : 100,
    xStep    : 110,
    yStep    : 110,
  },
  text: {
    fontSize: 64,
  },
  gradientBox: {
    xPadding:  9,
    yPadding: 10,
  },
  boxCheck: {
    padding  : 6,
    lineWidth: 4,
    //省略可 color
    //省略可 alpha
  },
  /** サイズ調整手順
   * 
   * BingoCardMaker.html
   *   1. debug=true, rows=1,cols=1, gradientBox.[x,y]Padding=0 にする
   *   2. box 以下の値を調整して、1文字分のサイズに合わせる
   *        box.firstLeft
   *        box.firstTop
   *        box.width
   *        box.height
   *   3. rows,cols をビンゴカードの縦,横マスの数に合わせる
   *   4. box 以下の値を調整して、全体のサイズに合わせる。
   *        box.xStep
   *        box.yStep
   *   5. text 以下の値を調整して、デフォルト文字サイズを好みに合わせる
   *   6. gradientBox 以下の値を調整して、グラデーション範囲を好みに合わせる (0のままでもよい)
   *   7. debug=false
   * 
   * BingoCardChecker.html
   *   1. boxCheck 以下の値を調整して、デフォルト値を好みに合わせる
   *      (実際に○を付けて確認する)
   */
  debug: false,
};

export default bingo;
