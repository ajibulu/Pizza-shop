const maximumValue = (a,b,c) => {
    var first,second,third,fourth,maxValue;
    var storedNumbers=[],storedItems=[];
    //var items=['Car','Cup','Apple','Zebra','Pawpaw','Ginger','Beans','Rice','Melon','Television','Semovita'];
    //var alphabets=['M','Y','E','S','I','I','P','J','B','A'];
    first=a*(b+c);
    storedNumbers.push(first);
    second=a*b*c;
    storedNumbers.push(second);
    third=a+b*c;
    storedNumbers.push(third);
    fourth=(a+b)*3;
    storedNumbers.push(fourth);
    storedNumbers.sort((a,b) =>a-b);
    //items.sort();
    //alphabets.sort();
    maxValue=storedNumbers[3];
    //console.log(items);
    //console.log(alphabets);
    console.log("Given numbers are "+a+","+b+","+c+"\t Calculated Numbers are "+storedNumbers+"\n"+"Maximum Value: "+maxValue+"\n");

}
maximumValue(-2,-4,3);
maximumValue(4,5,3);
maximumValue(2.15,11.8,14.2);
maximumValue(-4,0.004,2);
maximumValue(3,4,5);