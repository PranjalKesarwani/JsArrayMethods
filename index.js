const arr = [1,2,3,4];

arr.at(2);// 3
arr.pop();//returns: 4, array value: [1,2,3]
arr.push(5);//[1,2,3,4,5]
arr.fill(6);//[6,6,6,6]
arr.join(" "); // "1 2 3 4" (string)
arr.shift(); //returns: 1, array value:[2,3,4]
arr.unshift(0);//[0,1,2,3,4]
arr.reverse(); //[4,3,2,1]
arr.includes(3);//true
arr.map((item)=> 3*item);//[3,6,9,12]
arr.find((item)=>item>2);//3(first match)
arr.filter((item)=>item>2);//[3,4]
arr.every((item)>item>0);//true
arr.findIndex((item)=>item===3); //2;
arr.reduce((prev,curr)=>prev+curr,0); //10