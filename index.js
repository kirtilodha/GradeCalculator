

const submitting= ()=>{
    let sub1= document.getElementById('sub1').value;
    let sub2= document.getElementById('sub2').value;
    let sub3= document.getElementById('sub3').value;
    let sub4= document.getElementById('sub4').value;
    let sub5= document.getElementById('sub5').value;
    let sub6= document.getElementById('sub6').value;

    let sub7= document.getElementById('sub7').value;
    let sub8= document.getElementById('sub8').value;
    let sub9= document.getElementById('sub9').value;
    let sub10= document.getElementById('sub10').value;
    let sub11= document.getElementById('sub11').value;
    let sub12= document.getElementById('sub12').value;

    let sub13= document.getElementById('sub13').value;
    let sub14= document.getElementById('sub14').value;
    let sub15= document.getElementById('sub15').value;
    let sub16= document.getElementById('sub16').value;
    let sub17= document.getElementById('sub17').value;
    let sub18= document.getElementById('sub18').value;

    let sub19= document.getElementById('sub19').value;
    let sub20= document.getElementById('sub20').value;
    let sub21= document.getElementById('sub21').value;
    let sub22= document.getElementById('sub22').value;
    let sub23= document.getElementById('sub23').value;
    let sub24= document.getElementById('sub24').value;

    let sub25= document.getElementById('sub25').value;
    let sub26= document.getElementById('sub26').value;
    let sub27= document.getElementById('sub27').value;
    let sub28= document.getElementById('sub28').value;
    let sub29= document.getElementById('sub29').value;
    let sub30= document.getElementById('sub30').value;

    let sub31= document.getElementById('sub31').value;
    let sub32= document.getElementById('sub32').value;
    let sub33= document.getElementById('sub33').value;
    let sub34= document.getElementById('sub34').value;
    let sub35= document.getElementById('sub35').value;
    let sub36= document.getElementById('sub36').value;

    let subject1= parseFloat(sub1)/5 +parseFloat(sub7)/5 +parseFloat(sub13)/5 +parseFloat(sub19)+parseFloat(sub25)+ parseFloat(sub31)/2;
    let subject2= parseFloat(sub2)/5 +parseFloat(sub8)/5 +parseFloat(sub14)/5 +parseFloat(sub20)+parseFloat(sub26)+ parseFloat(sub32)/2;
    let subject3= parseFloat(sub3)/5 +parseFloat(sub9)/5 +parseFloat(sub15)/5 +parseFloat(sub21)+parseFloat(sub27)+ parseFloat(sub33)/2;
    let subject4= parseFloat(sub4)/5 +parseFloat(sub10)/5 +parseFloat(sub16)/5 +parseFloat(sub22)+parseFloat(sub28)+ parseFloat(sub34)/2;
    let subject5= parseFloat(sub5)/5 +parseFloat(sub11)/5 +parseFloat(sub17)/5 +parseFloat(sub23)+parseFloat(sub29)+ parseFloat(sub35)/2;
    let subject6= parseFloat(sub6)/5 +parseFloat(sub12)/5 +parseFloat(sub18)/5 +parseFloat(sub24)+parseFloat(sub30)+ parseFloat(sub36)/2;
    let grade;
    let cgpa=0;
    if(subject1>=90){
       grade = 10;
    }
    else if(subject1>=80){
        grade= 9;
    }
    else if(subject1>=70){
        grade= 8;
    }
    else if(subject1>=60){
        grade= 7;
    }
    else if(subject1>=50){
        grade= 6;
    }
    else if(subject1>=40){
        grade= 5;
    }
    else{
        grade=0;
    }
    document.getElementById('g1').innerHTML=grade;
    cgpa+=grade;
    console.log(cgpa,grade);
    if(subject2>=90){
        grade = 10;
     }
     else if(subject2>=80){
         grade= 9;
     }
     else if(subject2>=70){
         grade= 8;
     }
     else if(subject2>=60){
         grade= 7;
     }
     else if(subject2>=50){
         grade= 6;
     }
     else if(subject2>=40){
         grade= 5;
     }
     else{
         grade=0;
     }
     document.getElementById('g2').innerHTML=grade;
     cgpa+=grade;
     console.log(cgpa,grade);
     if(subject3>=90){
        grade = 10;
     }
     else if(subject3>=80){
         grade= 9;
     }
     else if(subject3>=70){
         grade= 8;
     }
     else if(subject3>=60){
         grade= 7;
     }
     else if(subject3>=50){
         grade= 6;
     }
     else if(subject3>=40){
         grade= 5;
     }
     else{
         grade=0;
     }
     document.getElementById('g3').innerHTML=grade;
     cgpa+=grade;
     console.log(cgpa,grade);
     if(subject4>=90){
        grade = 10;
     }
     else if(subject4>=80){
         grade= 9;
     }
     else if(subject4>=70){
         grade= 8;
     }
     else if(subject4>=60){
         grade= 7;
     }
     else if(subject4>=50){
         grade= 6;
     }
     else if(subject4>=40){
         grade= 5;
     }
     else{
         grade=0;
     }
     document.getElementById('g4').innerHTML=grade;
     cgpa+=grade;
     if(subject5>=90){
        grade = 10;
     }
     else if(subject5>=80){
         grade= 9;
     }
     else if(subject5>=70){
         grade= 8;
     }
     else if(subject5>=60){
         grade= 7;
     }
     else if(subject5>=50){
         grade= 6;
     }
     else if(subject5>=40){
         grade= 5;
     }
     else{
         grade=0;
     }
     document.getElementById('g5').innerHTML=grade;
     cgpa+=grade;
     if(subject6>=90){
        grade = 10;
     }
     else if(subject6>=80){
         grade= 9;
     }
     else if(subject6>=70){
         grade= 8;
     }
     else if(subject6>=60){
         grade= 7;
     }
     else if(subject6>=50){
         grade= 6;
     }
     else if(subject6>=40){
         grade= 5;
     }
     else{
         grade=0;
     }
     document.getElementById('g6').innerHTML=grade;
     cgpa+=grade;
     let value=cgpa/6;
     document.getElementById('cgpa').innerHTML=value;

    let visible= document.getElementById('grade');
    visible.classList.add('status');



    
}