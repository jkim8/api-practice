import fs from "fs";
import { resolve } from "path";

const basePath = resolve(); // 현재의 경로가 basePath로 잡히게 됨

const filenames = {
  messages: resolve(basePath, "src/db/messages.json"),
  users: resolve(basePath, "src/db/users.json"),
};

export const readDB = (target) => {
  try {
    return JSON.parse(fs.readFile(filenames[target], "utf-8"));
  } catch (err) {
    console.log(err);
  }
};

export const writeDB = (target, data) => {
  try {
    return fs.writeFileSync(filenames[target], JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};
