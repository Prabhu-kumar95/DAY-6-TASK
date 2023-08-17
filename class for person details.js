4)Write a “person” class to hold all the details.


class person {
constructor(name,age,gender,address,email,mobilenumber){
      this.name = name;
      this.age = age;
      this.gender=gender;
      this.address=address;
      this.email=email;
      this.mobilenumber=mobilenumber;
}
}
const persondetails= new person('Prabhu','28','male','A/74,chinna gonur,gonur(po),salem,636404','a.b.prabhu268@gmail.com','9150645022');
console.log(persondetails);