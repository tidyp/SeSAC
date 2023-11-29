// const myPromise = new Promise((reslove, reject) => {});
// myPromise.then((result) => {}).catch((error)=>{});

const asyncFunc1 = (value) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const result = value+1
      console.log(`함수1 완료: 중간값${result}`);
      reslove(result)
    }, 1000);
  });
};

const asyncFunc2 = (value) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const result = value+1
      console.log(`함수2 완료: 중간값${result}`);
      reslove(result)
    }, 1000);
  });
};

const executeOperations1 = () => {
  try {
    const res1 = asyncFunc1(0);
    const res2 = asyncFunc2(res1);
    const res3 = asyncFunc1(res2);
    const res4 = asyncFunc2(res3);
    console.log(`최종결과: ${res4}`);
  } catch (err) {
    console.log("에러", err);
  }
};

// executeOperations1();
console.log('_'.repeat(50))

const executeOperations2 = async () => {
  try {
    const res1 = await asyncFunc1(0);
    const res2 = await asyncFunc2(res1);
    const res3 = await asyncFunc1(res2);
    const res4 = await asyncFunc2(res3);
    console.log(`최종결과: ${res4}`);
  } catch (err) {
    console.log("에러", err);
  }
};

executeOperations2();
