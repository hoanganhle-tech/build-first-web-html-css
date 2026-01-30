var levels = [
  {
    name: 'justify-content 1',
    instructions: {
      'en': '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      'vi': '<p>Chào mừng bạn đến Flexbox Froggy, một trò chơi để bạn giúp đỡ Froggy và bạn bè bằng cách viết mã CSS! Hướng dẫn chú ếch này đến lá bông súng bên phải bằng cách sử dụng từ <code>justify-content</code> để sắp xếp các hạng mục theo chiều ngang và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp về phía bên trái của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp về phía bên phải của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>space-between</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li></ul><p>Ví dụ như, <code>justify-content: flex-end;</code> sẽ di chuyển chú ếch qua bên phải.</p>',
    },
    board: 'g',
    style: { 'justify-content': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 2',
    instructions: {
      'en': '<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>',
      'vi': '<p>Sử dụng <code>justify-content</code> một lần nữa để giúp đỡ những chú ếch này đến các lá bông súng. Hãy nhớ rằng thuộc tính CSS này dùng để sắp xếp các hạng mục theo chiều ngang và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp về phía bên trái của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp về phía bên phải của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>space-between</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li></ul>',
    },
    board: 'gy',
    style: { 'justify-content': 'center' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 3',
    instructions: {
      'en': '<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on <code>justify-content</code>.</p>',
      'vi': '<p>Giúp tất cả ba chú ếch tìm những lá bông súng của họ bằng cách sử dụng <code>justify-content</code>. Lần này, những lá bông súng có rất nhiều không gian xung quanh chúng. </p><p>Nếu bạn thấy mình đang quên đi những giá trị cho thuộc tính này, bạn có thể di chuột qua từ đó để xem chúng. Hãy thử di chuột qua từ này<code>justify-content</code>.</p>',
    },
    board: 'gyr',
    style: { 'justify-content': 'space-around' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 4',
    instructions: {
      'en': '<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.</p>',
      'vi': '<p>Bây giờ những lá bông súng đã trôi dạt vào bờ, tạo thêm không gian giữa chúng. Sử dụng <code>justify-content</code>. Lần này, những lá bông súng có khoảng cách bằng nhau giữa chúng.</p>',
    },
    board: 'gyr',
    style: { 'justify-content': 'space-between' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 1',
    instructions: {
      'en': '<p>Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>',
      'vi': '<p>Bây giờ sử dụng <code>align-items</code> để giúp những chú ếch đến đáy của ao. Từ thuộc tính CSS này sắp xếp những hạng mục theo chiều dọc và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp phía trên của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp phía dưới cùng của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>baseline</code>: Các hạng mục sẽ được hiển thị ở đường cơ bản của hộp chứa.</li><li><code>stretch</code>: Các hạng mục sẽ được kéo dài để phù hợp với hộp chứa.</li></ul>',
    },
    board: 'gyr',
    style: { 'align-items': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 2',
    instructions: {
      'en': '<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'vi': '<p>Dẫn chú ếch đến trung tâm của ao bằng cách kết hợp <code>justify-content</code> và <code>align-items</code>.</p>',
    },
    board: 'g',
    style: { 'justify-content': 'center', 'align-items': 'center' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 3',
    instructions: {
      'en': '<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Use a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'vi': '<p>Những chú ếch cần phải qua ao một lần nữa, lần này các lá bông súng có nhiều không gian xung quanh chúng. Kết hợp <code>justify-content</code> và <code>align-items</code>.</p>',
    },
    board: 'gyr',
    style: { 'justify-content': 'space-around', 'align-items': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 1',
    instructions: {
      'en': '<p>The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      'vi': '<p>Những chú ếch cần phải đến với các lá bông súng cùng màu của chúng bằng cách sử dụng <code>flex-direction</code>. Từ thuộc tính CSS này xác định hướng hạng mục được đặt trong hộp chứa, và chấp nhận các giá trị sau:</p><ul><li><code>row</code>: Các hạng mục được đặt cùng hướng với hướng của từ trong văn bản.</li><li><code>row-reverse</code>: Các hạng mục được đặt ngược hướng với hướng của từ trong văn bản.</li><li><code>column</code>: Các hạng mục được đặt từ trên xuống dưới.</li><li><code>column-reverse</code>: Các hạng mục được đặt từ dưới lên trên.</li></ul>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'row-reverse' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 2',
    instructions: {
      'en': '<p>Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      'vi': '<p>Giúp đỡ những chú ếch tìm thấy các lá bông súng được sắp xếp theo hàng dọc sử dụng <code>flex-direction</code>. Từ thuộc tính CSS này xác định hướng hạng mục được đặt trong hộp chứa, và chấp nhận các giá trị sau:</p><ul><li><code>row</code>: Các hạng mục được đặt cùng hướng với hướng của từ trong văn bản.</li><li><code>row-reverse</code>: Các hạng mục được đặt ngược hướng với hướng của từ trong văn bản.</li><li><code>column</code>: Các hạng mục được đặt từ trên xuống dưới.</li><li><code>column-reverse</code>: Các hạng mục được đặt từ dưới lên trên.</li></ul>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'column' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 3',
    instructions: {
      'en': '<p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>',
      'vi': '<p>Giúp đỡ những chú ếch tìm thấy các lá bông súng của chúng. Mặc dù các lá gần nhau, nhưng sẽ cần cả hai thuộc tính <code>flex-direction</code> và <code>justify-content</code> để đưa chúng đến nơi.</p><p>Chú ý rằng khi bạn thiết lập các chiều hướng của một hàng hoặc cột đảo ngược, điểm bắt đầu và kết thúc cũng được đảo ngược.</p>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'row-reverse', 'justify-content': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 4',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>',
      'vi': '<p>Giúp đỡ những chú ếch tìm thấy các lá bông súng của chúng bằng cách sử dụng <code>flex-direction</code> và <code>justify-content</code>.</p><p>Chú ý rằng khi hướng flex là hàng dọc, <code>justify-content</code> thay đổi thành chiều dọc và <code>align-items</code> to chiều ngang.</p>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'column', 'justify-content': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 5',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>',
      'vi': '<p>Giúp đỡ những chú ếch tìm các lá bông súng của họ bằng cách sử dụng <code>flex-direction</code> và <code>justify-content</code>.</p>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'column-reverse', 'justify-content': 'space-between' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 6',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>',
      'vi': '<p>Giúp đỡ những chú ếch tìm các lá bông súng của họ bằng cách sử dụng <code>flex-direction</code>, <code>justify-content</code>, và <code>align-items</code>.</p>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];