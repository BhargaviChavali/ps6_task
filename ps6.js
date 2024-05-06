const prompt =require("prompt-sync")();
// 1 :  Write a program to print the sum of smallest unique no and smallest duplicate number.
// input: 351886761
// output: 1+3 = 4
let num=prompt("enter a number : ");
let dup="";
let uni="";
let s="";
for(i of num)
    {
        if(!s.includes(i))
            s=s+i;
    }
    // console.log(s);
    for(i of s)
        {
            c=0;
            for(j of num)
                {
                    if(i==j)
                        c=c+1;
                }
                if(c>1)
                    dup=dup+i;
                else
                uni=uni+i;
        }
let min1=dup[0];
let min2=uni[0];
for(i of dup)
    {
        if(i<min1)
            min1=i;
    }
for(j of uni)
    {
        if(j<min2)
            min2=j;
    }
let sum=Number(min1)+Number(min2);
console.log("sum of smallest unique number and smallest duplicate number :",+sum);

// 2 : Write a program to print the sum of largest duplicate and largest unique number.
// input: 2237748
// output: 7+8 = 15
let num1=prompt("enter a number : ");
let dup1="";
let uni1="";
let s1="";
for(i of num1)
    {
        if(!s1.includes(i))
            s1=s1+i;
    }
    // console.log(s1);
    for(i of s1)
        {
            c=0;
            for(j of num1)
                {
                    if(i==j)
                        c=c+1;
                }
                if(c>1)
                    dup1=dup1+i;
                else
                uni1=uni1+i;
        }
let max1=0;
let max2=0;
for(i of dup1)
    {
        if(max1<i)
            max1=i;
    }
for(j of uni1)
    {
        if(max2<j)
            max2=j;
    }
let sum1=Number(max1)+Number(max2);
console.log("sum of largest duplicate number and largest unique number : ",+sum1);
