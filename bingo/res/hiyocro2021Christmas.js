const bingo = {
  maxNumber: 75,
  rows: 5,
  cols: 5,
  freeCenter: true,
  //
  name: 'ひよクロ2021クリスマスビンゴ',
  referenceHTML: '<a href="https://twitter.com/hashtag/%E3%81%B2%E3%82%88%E3%82%AF%E3%83%AD2021%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%93%E3%83%B3%E3%82%B4">#ひよクロ2021クリスマスビンゴ</a> <a href="https://twitter.com/Yuri_Kohakuu/status/1473492489055129601">ビンゴ参加要項ツイート</a>',
  imagePath: 'hiyocro2021Christmas.jpg',
  imageStyle: {
    height: '100%',
    maxHeight: '1200px',
  },
  box: {
    // ビンゴの欄が均等に並んでいる前提
    firstLeft:  19,
    firstTop : 177,
    width    : 173,
    height   : 173,
    xStep    : 180,
    yStep    : 178,
  },
  text: {
    fontSize: 108,
    fontColor: '#3399cc',
  },
  gradientBox: {
    xPadding: 24,
    yPadding: 24,
  },
  boxCheck: {
    padding: 10,
    lineWidth: 8,
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
