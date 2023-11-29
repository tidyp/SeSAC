import { readdir } from "fs";
import path from "path";

const dirPath = "./";

readdir(dirPath, (err, files) => {
  // err
  if (err) {
    console.log(`읽기 오류: ${err}`);
    return;
  }
  // files dir: ./
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    // file
    if (filePath.includes(".")) {
      console.log("├────", filePath);
    } else {
      // files dir: ./file/
      const filePath2 = dirPath + filePath;
      readdir(filePath2, (err, files) => {
        if (err) {
          console.log(`읽기 오류: ${err}`);
          return;
        }
        console.log("├────", filePath);
        files.forEach((file) => console.log(`│     ├────${file}`));
      });
    }
  });
});