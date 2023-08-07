let     sbiBank={
    bankName:"SBI Bank",
    location:"Pune",
    account_no:123451234,
    ifsc:"sbi2345",
    interest_rate:"6.7%",
    show: function(){
        console.log(`Bank Details are ${this.bankName},${this.location},${this.account_no},${this.ifsc},${this.interest_rate}`);
    }
}
console.log(`--------------------------------------------------------------------------------------------`);

let axisBank={

    bankName:"Axis Bank",
    location:"Pune",
    account_no:12349776654,
    ifsc:"axis5345",
    interest_rate:"4.8%",
    show: function(){
        console.log(`Bank Details are ${this.bankName},${this.location},${this.account_no},${this.ifsc},${this.interest_rate}`);
    }

}
console.log(`--------------------------------------------------------------------------------------------`);

let hdfcBank={

    bankName:"HDFC Bank",
    location:"Pune",
    account_no:865766751234,
    ifsc:"hdfc2345",
    interest_rate:"7.5%",
    show: function(){
        console.log(`Bank Details are ${this.bankName},${this.location},${this.account_no},${this.ifsc},${this.interest_rate}`);
    }
}
console.log(`--------------------------------------------------------------------------------------------`);


let yesBank={
    bankName:"Yes Bank",
    location:"Pune",
    account_no:1787687434,
    ifsc:"yes2345",
    interest_rate:"7.7%",
    show : function (){
        console.log(`Bank Details are ${this.bankName},${this.location},${this.account_no},${this.ifsc},${this.interest_rate}`);
    }

}
console.log(`--------------------------------------------------------------------------------------------`);

sbiBank.show();
axisBank.show();
hdfcBank.show();
yesBank.show();