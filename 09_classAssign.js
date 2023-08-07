

class Student{
   
    constructor(fName,number,collegeName,emailID,mobileNo){
        this.fullName=fName;//current object
        this.rollNo=number;
        this.college=collegeName;
        this.emailID=emailID;
        this.mobile=mobileNo;
    }
    show(){
        console.log(`Student Details is full Name: ${this.fullName}, Roll No: ${this.rollNo}, College: ${this.college}, EmailID: ${this.emailID}, Mobile No:${this.mobile}`);
    }
}

let studentAkash = new Student("akash", '01' ,"MIT COE","abc@gmailcom","9876543211");


let studentAmol = new Student("amol", '02' ,"JSPM","xyz@gmailcom","9876543212");


let studentJohn = new Student("john", '03' ,"DY Patil","qwe@gmailcom","9876543214");


const array = [studentAkash,studentAmol,studentJohn];

console.log('traversing array');
console.log(`--------------------------------------------------`);
for (const Student of array) {
    Student.show();
    console.log("----------------------------------------------");
}


/*

personAd ={
    name:"akash",
    gradution: "",
    location: "",
    city: "",
    pin: "",
}

personAmol ={
    name:"amol",
    gradution: "",
    location: "",
    city: "",
    pin: "",
}

personJenny ={
    name:"jenny",
    gradution: "",
    location: "",
    city: "",
    pin: "",
}

personRiya ={
    name:"riya",
    gradution: "",
    location: "",
    city: "",
    pin: "",
}*/