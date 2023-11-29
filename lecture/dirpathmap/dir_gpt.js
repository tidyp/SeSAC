import { readdir, stat } from "fs/promises";
import path from "path";

const lsfd = async (dirPath, indent = 0) => {
  try {
    const files = await readdir(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const fileStats = await stat(filePath);

      if (fileStats.isFile()) {
        console.log("".repeat(indent) + "├──" + "─".repeat(indent) + filePath);
      } else if (fileStats.isDirectory()) {
        console.log("".repeat(indent) + "├──" + "─".repeat(indent) + filePath);
        await lsfd(filePath, indent + 2);
      }
    }
  } catch (err) {
    console.error(`읽기 오류: ${err}`);
  }
};

const dirPath = "./";

lsfd(dirPath);
