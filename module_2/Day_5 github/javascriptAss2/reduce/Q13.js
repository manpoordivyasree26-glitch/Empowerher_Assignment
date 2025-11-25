const product= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
const total=product.reduce(function(acc,curr){
  if (acc[curr] === undefined) {
    acc[curr] = 1;
  } else {
    acc[curr]++;
  }
  return acc;
}, {});
console.log(total);
const sorted=Object.entries(total)
.sort(function(a,b){
    return b[1]-a[1];
})
.map(function(item){
    return item[0];
});
console.log(sorted);
