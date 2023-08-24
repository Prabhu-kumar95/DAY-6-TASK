// 3)write a class to calculate the uber price.

class uberprice {
constructor(kmstravelled=0,priceperkms=0){
      this.kmstravelled=kmstravelled;
      this.priceperkms=priceperkms;
}
calculatejourney(){
return(this.kmstravelled*this.priceperkms);
}
}
const uberbill= new uberprice(80,3);
console.log(uberbill.calculatejourney());