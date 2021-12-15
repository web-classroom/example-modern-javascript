import "./assets/style.css";
import join from "lodash/join";
import logo from "./assets/logo.svg";

const title = document.createElement('h1')
title.textContent = join(['Hello', 'Webpack'])
document.body.appendChild(title)

const img = new Image();
img.src = logo;

document.body.appendChild(img);

const obj = {
  foo: {
    bar: {
      baz: 42,
      print() {
        console.log(`Print ${this.baz}`);
      },
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42
const safe = obj?.xxx?.baz; // undefined
const result = baz || safe;
console.log({ result });

obj.foo.bar.print();
obj.foo.xxx?.print?.();

let { x, y, ...rest } = { x: 1, y: 2, a: 3, b: 4 };
console.log({ x }); // 1
console.log({ y }); // 2
console.log({ rest }); // { a: 3, b: 4 }

let salary = 1_000_000;
console.log({ salary: salary * 12 });

Array.from(new Set([1, 2, 3, 3, 1])); // [1,2,3]
[[1], [2], [3]].flat(); // [1,2,3]
Promise.resolve(32).finally(() => console.log("Done"));
