import { readdir, stat } from "fs";
import path from "path";

const lsfd = (filePath) => {
  // input dir
  console.log(filePath)
  // console.log(readdir(filePath))
  
  stat(filePath, (err, stats) => {
    console.log(filePath)
    if (err) {
      console.error(err);
      return;
    }
    if (stats.isFile()) {
      console.log("이것은 파일입니다.");
    } else if (stats.isDirectory()) {
      console.log("이것은 폴더입니다.");
    } else {
      console.log("파일도 폴더도 아닙니다.");
    }
  });
};

lsfd('./')
