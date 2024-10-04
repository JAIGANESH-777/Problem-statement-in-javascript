let pizza = 200;
let biriyani = 300;
let burger = 100;
let water = 50;
let cookies = 40;
const choice ="burger";
const count = 6;
let a=0;
switch (choice) {
  case "pizza":
    a+=pizza * count;
    break;
  case "biriyani":
    a+=biriyani * count;
    break;
  case "burger":
    a+=burger * count;
    break;
  case "water":
    a+=water * count;
    break;
  case "cookies":
    a+=cookies * count;
    break;
  default:
    console.log("Invalid choice");
}
if (a>=500) a-=a/10;
console.log(a);