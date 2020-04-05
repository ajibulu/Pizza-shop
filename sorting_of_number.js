const mySort = (nums) => {
    var k=[],j=[],kj=[],h=0;
    for(var g=0;g<nums.length;++g) {
        h=nums[g];
        if(isNaN(h)) {
            console.log("Not a number");
        } else if (h%2==0) {
            k.push(parseInt([h]));
            kj.push(parseInt([h]));
        } else {
            j.push(parseInt([h]));
            kj.push(parseInt([h]));
        }
        
    }
    kj.sort((k,j)=> k-j);
    console.log(kj);
}
mySort([90,45,66,'by',100.5]);
mySort([56,12,-34,32,78,14,75,5,1,-4,12,23,14,11,7,9,10,30,17,-1,0,0.1,-0.23]);