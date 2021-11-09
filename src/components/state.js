const variations = [
  {
    id: Math.ceil(Math.random() * 99999),
    name: "Màu Xanh",
    quantity: 7,
    percent: 0.25,
    price: 22000,
    imageURL: "./images/blue.jpg",
  },
  {
    id: Math.ceil(Math.random() * 99999),
    name: "Màu Đỏ",
    quantity: 5,
    percent: 0.2,
    price: 25000,
    imageURL: "./images/red.jpg",
  },
  {
    id: Math.ceil(Math.random() * 99999),
    name: "Màu Đen",
    quantity: 10,
    percent: 0,
    price: 22000,
    imageURL: "./images/black.jpg",
  },
];
const state = {
  title: "Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm",
  brand: "",
  variations,
  attrProducts: [
    {
      name: "Chất liệu ",
      value: "polyester và thun",
    },
    {
      name: "",
      value: "Thoát mồ hôi tốt",
    },
    {
      name: "",
      value:
        "Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát",
    },
    {
      name: "",
      value:
        "Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc",
    },
    {
      name: "Chất liệu ",
      value: "polyester và thun",
    },
  ],
  description: `<h2>Chất liệu bền chặt&nbsp;</h2>
      &lt;p&gt;Test hjskhfk h&lt;/p&gt; &lt;p&gt;&lt;strong&gt;&lt;span
      style="background-color:#8e44ad"&gt;fhsdjkfhsk&amp;nbsp;
      hsdjkfk&amp;nbsp;&lt;/span&gt;&lt;/strong&gt;&lt;/p&gt;
      <div>
        <p>
          Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu
          nilon thoáng mát và thoát mồ hôi tốt, kết hợp thêm sợi thun tạo độ co
          giãn giúp người tiêu dùng thoải mái khi mặc
        </p>
      </div>`,
  cart: 0,
};
const _selectedVariant = variations[0];
const stateHook = {
  title: "Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm",
  brand: "",
  variations,
  attrProducts: [
    {
      name: "Chất liệu ",
      value: "polyester và thun",
    },
    {
      name: "",
      value: "Thoát mồ hôi tốt",
    },
    {
      name: "",
      value:
        "Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát",
    },
    {
      name: "",
      value:
        "Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc",
    },
    {
      name: "Chất liệu ",
      value: "polyester và thun",
    },
  ],
  description: `<h2>Chất liệu bền chặt&nbsp;</h2>
      &lt;p&gt;Test hjskhfk h&lt;/p&gt; &lt;p&gt;&lt;strong&gt;&lt;span
      style="background-color:#8e44ad"&gt;fhsdjkfhsk&amp;nbsp;
      hsdjkfk&amp;nbsp;&lt;/span&gt;&lt;/strong&gt;&lt;/p&gt;
      <div>
        <p>
          Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu
          nilon thoáng mát và thoát mồ hôi tốt, kết hợp thêm sợi thun tạo độ co
          giãn giúp người tiêu dùng thoải mái khi mặc
        </p>
      </div>`,
};

export { _selectedVariant, stateHook };
export default state;
