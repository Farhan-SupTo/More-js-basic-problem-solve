function RadianToDegree(radian){
    const pi=  3.14159;
    Degree = (radian * (180/pi)).toFixed(2);
    console.log(Degree)
}

RadianToDegree(10);