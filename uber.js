class Uber {
  constructor(
    pickup,
    drop,
    distance = 4,

    time
  ) {
    this.pickup = pickup;
    this.drop = drop;
    this.distance = distance;
    this.time = time;
  }
  fare() {
    let priceperkm = 10;
    let surcharge = 15;
    let fareprice = this.distance * priceperkm;
    if (this.time !== "Night") {
      console.log(`Your fare is ${fareprice}`);
    } else {
      fareprice = this.distance * surcharge;
      console.warn(`Your surcharged fare is ${fareprice}`);
    }
  }
}
let fare1 = new Uber("Kolathur", "Koyambedu", 11, "Day");
console.log(fare1);

fare1.fare();
