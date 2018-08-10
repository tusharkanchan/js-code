let i
let num=14
let p=0

for(i=1 ; i<=num; i++)
{
    if(num%i==0){
        p++
    }
}

if(p==2)
{
    console.log(`prime ${num}`)
}
else{
    console.log(`not prime ${num}`)
}