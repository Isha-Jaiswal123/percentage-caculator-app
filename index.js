// This variable form to get the data of container1 id

const calculatefromele=document.getElementById('container1');

// this varable is form to get the data of result id

const resultEle=document.getElementById('result');

// This is a function to submit the form
function calculatemarks(event){
    const max=400;

    // this is use to restrict the reload when we submit the form
    event.preventDefault();

    // this is use to get all the data of calculateformele means from container1 id
    const formData=new FormData(calculatefromele);

    // this is a  blank Object
    const data={};

// on formdata we use to apply foreach loop to print  the all the data of formdata element
// all the value are put in key of data and due to the addition sing all numbers are put
    formData.forEach((value,key)=>{
        data[key]= +value;
    });

    // by this we can calculate the total marks
    const total=data.Maths+data.Science+data.English+data.Social_Science;
    // by this we calculate the percentage
    const percentage=Math.round((total/max)*100);
    // by this on the place of resultEle in  the innerhtml we print all the value
    resultEle.innerText=`You have got ${total} marks out of ${max} and your percentage is ${percentage}% `
 
};