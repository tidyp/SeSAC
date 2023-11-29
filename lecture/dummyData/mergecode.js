import { writeFileSync } from "fs";

const dummyData = {
  id: "0123456789abcdef",
  lastName: "김이박최정강조윤장임",
  firstName: ["민준","서준","도윤","예준","시우","하준","지호","주원","지후","준우","준서","도현","건우","현우","우진","지훈","수호","선우","유준","서진","연우","은우","민재","현준","시윤","정우","이준","승우","윤우","지환","지우","승현","유찬","준혁","채아","예지","수현","소은","사랑","나연","지은","시현","예빈","민주","은채","윤지","세아","소연","지현","다윤","지수","승아","소민","혜원","채린","다온","하영","민아","나현","서희","세은","아영","도연","규리","이서","가윤","아현","유하"],
  si: ["서울", "부산", "인천", "대구", "대전", "광주", "울산"],
  seoul_gu: ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"],
  busan_gu: ["중구","서구","동구","영도구","부산진구","동래구","남구","북구","강서구","해운대구","사하구","금정구","연제구","수영구","사상구"],
  incheon_gu: ["중구","동구","미추홀구","연수구","남동구","부평구","계양구","서구"],
  daegu_gu: ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구"],
  daejeon_gu: ["동구", "중구", "서구", "유성구", "대덕구"],
  ulsan_gu: ["중구", "남구", "동구", "북구"],
  gwangju_gu: ["동구", "서구", "남구", "북구", "광산구"],
  coffee: ["스타벅스", "커피빈", "이디야", "투썸"],
  drinks: ['Caffè Mocha', 'Caramel Macchiato', 'Vanilla Latte', 'Flat White', 'Iced Americano', 'Espresso', 'Pumpkin Spice Latte', 'Cappuccino', 'White Chocolate Mocha', 'Cold Brew'],
  cakes: ['Chocolate Fudge Cake', 'Carrot Cake', 'Red Velvet Cake', 'Tiramisu Cake', 'Lemon Pound Cake', 'Cheesecake', 'Banana Nut Bread', 'Blueberry Muffin', 'Raspberry Swirl Pound Cake', 'Double Chocolate Brownie'],
  // 랜덤 숫자 생성
  randomVal: function (mul, sum) {
    return Math.floor(Math.random() * mul + sum);
  },
  // 배열에서 랜덤으로 값 생성
  randomLen: function (value) {
    return value[Math.floor(Math.random() * value.length)];
  },
  makeUserId: function () {
    let char = "";
    for (let i = 0; i <= 35; i++) {
      const a = this.randomLen(this.id);
      if ([8, 13, 18, 23].includes(i)) {
        char += "-";
      } else {
        char += a;
      }
    }
    return `${char}`;
  },
  makeName: function () {
    return `${this.randomLen(this.lastName)}${this.randomLen(this.firstName)}`;
  },
  gender: function () {
    return `${Math.random() > 0.5 ? "Male" : "Female"}`;
  },
  ordertime: function () {
    let h = this.randomVal(24, 0)
    h = String(h).length === 1 ? "0" + String(h) : String(h);
    let m = this.randomVal(60, 0)
    m = String(m).length === 1 ? "0" + String(m) : String(m);
    let s = this.randomVal(60, 0)
    s = String(s).length === 1 ? "0" + String(s) : String(s);
    return `${h}:${m}:${s}`;
  },
  birthdate: function (range, start) {
    const year = this.randomVal(range, start);
    let month = this.randomVal(12, 1);
    month = String(month).length === 1 ? "0" + String(month) : String(month);
    let day = this.randomVal(31, 1);
    day = String(day).length === 1 ? "0" + String(day) : String(day);
    return [2023 - year, `${year}-${month}-${day}`];
  },
  address: function () {
    const city = this.randomLen(this.si);
    let add = "";
    switch (city) {
      case "서울":
        add += `${this.randomLen(this.seoul_gu)}`;
        break;
      case "부산":
        add += `${this.randomLen(this.busan_gu)}`;
        break;
      case "인천":
        add += `${this.randomLen(this.incheon_gu)}`;
        break;
      case "대구":
        add += `${this.randomLen(this.daegu_gu)}`;
        break;
      case "대전":
        add += `${this.randomLen(this.daejeon_gu)}`;
        break;
      case "광주":
        add += `${this.randomLen(this.gwangju_gu)}`;
        break;
      case "울산":
        add += `${this.randomLen(this.ulsan_gu)}`;
        break;
      default:
        break;
    }
    return [
      `${city} ${add} ${this.randomVal(100, 1)}길 ${this.randomVal(100, 1)}`,
      `${add}`,
    ];
  },
  brand: function () {
    return this.randomLen(this.coffee);
  },
  saveCSV: function (path, data) {
    writeFileSync(path, data, (err) => {
      if (err) {
        console.log("fail");
      }
      console.log("success");
    });
  },
  receipt: function () {
    let cake = `${this.randomLen(this.cakes)}`;
    let drink = `${this.randomLen(this.drinks)}`;
    cake = [`${cake}`, `Cake`, `${this.cakes.indexOf(cake) * 500 + 4500}`];
    drink = [`${drink}`, `Drink`, `${this.drinks.indexOf(drink) * 500 + 4500}`];
    return `${Math.random() > 0.5 ? cake : drink}`;
  },
};
// ------------------------------------------------------------------------------------
console.time("runtime");
// 파일생성: user
const createUser = (row) => {
  let list = "Id,Name,Gender,Age,Birthdate,Address\n";
  for (let i = 1; i <= row; i++) {
    list += `${dummyData.makeUserId()},${dummyData.makeName()},${dummyData.gender()},${dummyData.birthdate(60,1950)},${dummyData.address()[0]}\n`;
  }
  return list;
};

const userData = createUser(1000);
console.log("-".repeat(20), "1-생성완료", "-".repeat(20));
// ------------------------------------------------------------------------------------
// 파일생성: store
const createStore = (row) => {
  let list = "Id,Name,Type,Address\n";
  for (let i = 1; i <= row; i++) {
    let tempadd = dummyData.address();
    let tempbrand = dummyData.brand();
    list += `${dummyData.makeUserId()},${tempbrand} ${tempadd[1]} ${dummyData.randomVal(10, 1)}호점,${tempbrand},${tempadd[0]}\n`;
  }
  return list;
};
const storeData = createStore(100);
console.log("-".repeat(20), "2-생성완료", "-".repeat(20));
// ------------------------------------------------------------------------------------
// 파일생성: order
const createOrder = (row) => {
  let list = "Id,OrderAt,StoreId,UserId\n";
  let splitUser = userData.split("\n");
  splitUser.pop();
  splitUser.shift();
  let userID = splitUser.map((el) => el.split(",")[0]);
  let splitStore = storeData.split("\n");
  splitStore.pop();
  splitStore.shift();
  let storeID = splitStore.map((el) => el.split(",")[0]);
  for (let i = 1; i <= row; i++) {
    list += `${dummyData.makeUserId()},${dummyData.birthdate(1, 2023)[1]} ${dummyData.ordertime()},${dummyData.randomLen(userID)},${dummyData.randomLen(storeID)}\n`;
  }
  return list;
};
const orderData = createOrder(10000);
console.log("-".repeat(20), "3-생성완료", "-".repeat(20));
// ------------------------------------------------------------------------------------
// 파일생성: Item.csv
const createItem = (row) => {
  let list = "Id,Name,Type,UnitPrice\n";
  for (let i = 1; i <= row; i++) {
    list += `${dummyData.makeUserId()},${dummyData.receipt()}\n`;
  }
  return list;
};

const itemData = createItem(20);
console.log("-".repeat(20), "4-생성완료", "-".repeat(20));
// ------------------------------------------------------------------------------------
// 파일생성: OrderItem.csv;
const createOrderItem = (row) => {
  let list = "Id,OrderId,ItemId\n";
  let splitOrder = orderData.split("\n");
  splitOrder.pop();
  splitOrder.shift()
  let orderID = splitOrder.map((el) => el.split(",")[0]);
  let splitItem = itemData.split("\n");
  splitItem.pop();
  splitItem.shift()
  let itemID = splitItem.map((el) => el.split(",")[0]);
  for (let i = 1; i <= row; i++) {list += `${dummyData.makeUserId()},${dummyData.randomLen(orderID)},${dummyData.randomLen(itemID)}\n`;
  }
  return list;
};
const orderItemData = createOrderItem(50000);
console.log("-".repeat(20), "5-생성완료", "-".repeat(20));
// ------------------------------------------------------------------------------------
// 파일저장
dummyData.saveCSV("./dummyData/user.csv", userData);
console.log("-".repeat(20), "1-저장완료", "-".repeat(20));
dummyData.saveCSV("./dummyData/store.csv", storeData);
console.log("-".repeat(20), "2-저장완료", "-".repeat(20));
dummyData.saveCSV("./dummyData/order.csv", orderData);
console.log("-".repeat(20), "3-저장완료", "-".repeat(20));
dummyData.saveCSV("./dummyData/item.csv", itemData);
console.log("-".repeat(20), "4-저장완료", "-".repeat(20));
dummyData.saveCSV("./dummyData/orderitem.csv", orderItemData);
console.log("-".repeat(20), "5-저장완료", "-".repeat(20));
console.timeEnd("runtime");