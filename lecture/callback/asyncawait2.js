// const myPromise = new Promise((reslove, reject) => {});
// myPromise.then((result) => {}).catch((error)=>{});

const asyncFunc1 = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const result = Math.random() >= 0.8;
      if (result) {
        reslove(result);
      } else {
        reject(`결과없음`);
      }
    }, 1000);
  });
};

const asyncFunc2 = (value) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const result = Math.random() >= 0.8;
      if (result) {
        reslove(result);
      } else {
        reject("결과없음");
      }
    }, 1000);
  });
};

const waitForResult = async (val = 0) => {
  try {
    const res1 = await asyncFunc1(val);
    // const res2 = await asyncFunc2();
    // const res3 = await asyncFunc1(res2);
    // const res4 = await asyncFunc2(res3);
    console.log(`결과: ${res1}`);
    return res1
  } catch (err) {
    console.log(`에러: ${err}, ${val}....`);
    return new Promise((reslove) => {
      setTimeout(() => {
        reslove(waitForResult(val + 1));
      }, 2000);
    });
  }
};

waitForResult().then((finalResult) => { 
  console.log(`최종결과: ${finalResult}`)
 })
