
export default function greet(name) {
  return for(let c=0;++c<1001;)console.log((c%3?"":"Fizz")+(c%5?"":"Buzz")+(c%7?"":"Bar")||c);
}
