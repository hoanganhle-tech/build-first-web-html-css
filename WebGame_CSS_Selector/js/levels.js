var levels = [
  // 1. Chọn thẻ (Type Selector)
  {
    helpTitle: "Chọn phần tử theo tên thẻ (Type)",
    selectorName: "Bộ chọn Loại (Type Selector)",
    doThis: "Chọn các cái đĩa (plate)",
    selector: "plate",
    syntax: "A",
    help: "Chọn tất cả các phần tử thuộc loại <strong>A</strong>. Loại ở đây đề cập đến tên của thẻ, ví dụ <tag>div</tag>, <tag>p</tag> và <tag>ul</tag> là các loại phần tử khác nhau.",
    examples: [
      "<strong>div</strong> chọn tất cả các phần tử <tag>div</tag>.",
      "<strong>p</strong> chọn tất cả các phần tử <tag>p</tag>.",
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `,
  },
  // 2. .class (Class Selector)
  {
    doThis: "Chọn những quả táo nhỏ",
    selector: ".small",
    selectorName: "Bộ chọn Lớp (Class Selector)",
    helpTitle: "Chọn phần tử theo lớp (class)",
    syntax: ".classname",
    help: "Bộ chọn lớp sẽ chọn tất cả các phần tử có thuộc tính class tương ứng. Một phần tử chỉ có thể có một ID, nhưng có thể có nhiều class.",
    examples: [
      '<strong>.neato</strong> chọn tất cả các phần tử có <strong>class="neato"</strong>',
    ],
    boardMarkup: `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `,
  },
  // 3. #id (ID Selector)
  {
    doThis: "Chọn cái đĩa kiểu cách (fancy)",
    selector: "#fancy",
    selectorName: "Bộ chọn ID",
    helpTitle: "Chọn phần tử có ID",
    syntax: "#id",
    help: "Chọn một phần tử có <strong>id</strong> cụ thể. Bạn cũng có thể kết hợp bộ chọn ID với bộ chọn loại (tên thẻ).",
    examples: [
      '<strong>#cool</strong> chọn bất kỳ phần tử nào có <strong>id="cool"</strong>',
      '<strong>ul#long</strong> chọn thẻ <tag>ul</tag> có <strong>id="long"</strong>',
    ],
    boardMarkup: `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `,
  },
  // 4. * (Universal Selector)
  {
    doThis: "Chọn tất cả mọi thứ!",
    selector: "*",
    selectorName: "Bộ chọn Vạn năng (Universal Selector)",
    helpTitle: "Bạn có thể chọn tất cả!",
    syntax: "*",
    help: "Bạn có thể chọn toàn bộ các phần tử bằng bộ chọn vạn năng!",
    examples: [
      "<strong>p *</strong> chọn bất kỳ phần tử nào nằm bên trong tất cả các thẻ <tag>p</tag>.",
    ],
    boardMarkup: `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `,
  },
  // 5. Viết dính liền ~ AND (Chained Selector)
  {
    doThis: "Chọn những quả cam nhỏ",
    selector: "orange.small",
    helpTitle: "Kết hợp với Bộ chọn Lớp",
    syntax: "A.className",
    help: "Bạn có thể kết hợp bộ chọn lớp với các bộ chọn khác, ví dụ như bộ chọn tên thẻ.",
    examples: [
      '<strong>ul.important</strong> chọn tất cả các thẻ <tag>ul</tag> có <strong>class="important"</strong>',
      '<strong>#big.wide</strong> chọn tất cả các phần tử có <strong>id="big"</strong> và đồng thời có <strong>class="wide"</strong>',
    ],
    boardMarkup: `
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`,
  },
  // 6. Viết cách dấu phẩy ~ OR (Comma Combinator)
  {
    doThis: "Chọn tất cả đĩa và hộp bento",
    selector: "plate,bento",
    selectorName: "Dấu phẩy kết hợp",
    helpTitle: "Kết hợp các bộ chọn bằng... dấu phẩy!",
    syntax: "A, B",
    help: "Cách viết này giúp chọn tất cả các phần tử <strong>A</strong> VÀ các phần tử <strong>B</strong>. Bạn có thể kết hợp bất kỳ bộ chọn nào theo cách này, và có thể liệt kê nhiều hơn hai.",
    examples: [
      '<strong>p, .fun</strong> chọn tất cả các thẻ <tag>p</tag> cũng như tất cả các phần tử có <strong>class="fun"</strong>',
      "<strong>a, p, div</strong> chọn tất cả các thẻ <tag>a</tag>, <tag>p</tag> và <tag>div</tag>",
    ],
    boardMarkup: `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `,
  },
  // 7. Viết cách ra ~ Con (Descendant Selector)
  {
    helpTitle: "Chọn phần tử bên trong phần tử khác",
    selectorName: "Bộ chọn Con cháu (Descendant Selector)",
    doThis: "Chọn quả táo trên cái đĩa",
    selector: "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help: "Chọn tất cả <strong>B</strong> nằm bên trong <strong>A</strong>. <strong>B</strong> được gọi là con cháu (descendant) vì nó nằm lồng bên trong một phần tử khác.",
    examples: [
      "<strong>p&nbsp;&nbsp;strong</strong> chọn tất cả các thẻ <tag>strong</tag> nằm bên trong bất kỳ thẻ <tag>p</tag> nào",
      '<strong>#fancy&nbsp;&nbsp;span</strong> chọn bất kỳ thẻ <tag>span</tag> nào nằm bên trong phần tử có <strong>id="fancy"</strong>',
    ],
    boardMarkup: `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `,
  },
  // Mở rộng thêm!!!
  // 1. Ôn tập Class: Nhiều loại thẻ dùng chung 1 class
  {
    doThis: "Chọn tất cả các món đồ 'tươi' (fresh)",
    selector: ".fresh",
    selectorName: "Class Selector (Mở rộng)",
    helpTitle: "Một class cho nhiều loại thẻ",
    syntax: ".classname",
    help: "Class không chỉ dành cho một loại thẻ. Bạn có thể chọn tất cả táo, đĩa, hay hộp bento nếu chúng cùng có chung class <strong>fresh</strong>.",
    examples: [
      '<strong>.best</strong> chọn tất cả mọi thứ có class="best" bất kể nó là thẻ gì.',
    ],
    boardMarkup: `
    <bento class="fresh"/>
    <plate />
    <apple class="fresh"/>
    <plate class="fresh"/>
    `,
  },
  // 2. Ôn tập Con cháu (Descendant): Chọn con lồng bên trong
  {
    doThis: "Chọn quả cam ở trong hộp bento",
    selector: "bento orange",
    selectorName: "Descendant Selector (Mở rộng)",
    helpTitle: "Chọn vật nằm trong vật khác",
    syntax: "A B",
    help: "Dùng dấu cách để đi sâu vào bên trong. Câu lệnh này có nghĩa là: Tìm <strong>bento</strong>, sau đó tìm <strong>orange</strong> nằm bên trong nó.",
    examples: ["<strong>div p</strong> chọn tất cả thẻ p nằm trong thẻ div."],
    boardMarkup: `
    <plate>
      <orange/>
    </plate>
    <bento>
      <orange/>
    </bento>
    <orange/>
    `,
  },
  // 3. KẾT HỢP: Chọn con theo Class nằm trong Thẻ cha
  {
    doThis: "Chọn quả táo nhỏ nằm trên đĩa",
    selector: "plate .small",
    selectorName: "Kết hợp Con cháu & Lớp",
    helpTitle: "Phối hợp dấu cách và dấu chấm",
    syntax: "A .classname",
    help: "Bạn có thể kết hợp cả hai: Chọn phần tử có class <strong>.small</strong> nhưng CHỈ KHI nó nằm bên trong thẻ <strong>plate</strong>.",
    examples: [
      '<strong>div .nav</strong> chọn các phần tử có class="nav" nằm trong thẻ div.',
    ],
    boardMarkup: `
    <plate>
      <apple class="small"/>
    </plate>
    <plate>
      <apple/>
    </plate>
    <bento>
      <apple class="small"/>
    </bento>
    <apple class="small"/>
    `,
  },
];
