const simultEquation =(a1,b1,c1,a2,b2,c2) => {
    var det, det_x, det_y, x, y, eqn1,eqn2;
    det =((a1*b2)-(b1*a2));
    det_x=((b1*c2)-(b2*c1));
    det_y=((a1*c2)-(a2*c1));
    x=det_x/det;
    y=det_y/det;
    eqn1=a1+"x"+b1+"y="+c1;
    eqn2=a2+"x"+b2+"y="+c2;
    console.log(eqn1);
    console.log(eqn2);
    console.log("x ="+x);
    console.log("y ="+y);
}
simultEquation(2,-1,4,1,1,2);