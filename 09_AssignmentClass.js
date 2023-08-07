
class Vehicle{
constructor(CompanyName,VechicleName,vehicleType,seatingCapicity,colur,trasmition){
    this.CompanyName=CompanyName;
    this.VechicleName=VechicleName
    this.vehicleType=vehicleType;
    this.seatingCapicity=seatingCapicity;
    this.colur=colur;
    this.trasmition=trasmition;
}
show(){
    console.log(`Vechile Details is: Company Name: ${this.CompanyName},Vechicle Name: ${this.VechicleName} Vechicle Type: ${this.vehicleType}, seating Capicity: ${this.seatingCapicity},
                                    Colour: ${this.colur}, Trasmition:${this.trasmition}`);
}
}

let Ford = new Vehicle ("Ford","Eco Sport","SUV","4 seater","Black","automatically")
let Audi = new Vehicle ("Audi","Q8","XUV","4 seater","whilte","automatically")
let BMW = new Vehicle ("BMW","sports 389","SUV","5 seater","blue","automatically")
let Maruti = new Vehicle ("Maruti","Jimmy","XUV","7 seater","red","manual")
let TATA = new Vehicle ("TATA","Hexa","SUV","5 seater","golden","manual")

const array = [Ford,Audi,BMW,Maruti,TATA];

console.log('traversing array');
console.log(`--------------------------------------------------`);
for (const Vechicle of array) {
    Vechicle.show();
    console.log("----------------------------------------------");
}
