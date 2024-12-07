let input = document.getElementById('result')  // the input numbers/operators get saved in input variable
let buttons = document.querySelectorAll('button') // take input and saves in buttons when selected the buttons, i.e 1,2,3,AC,DEL
let string = "" //empty string, all operation will be saved here, i.e 1+2,4/5. and result will also be shown here after pressing = button,i.e 3,0.2
let arr = Array.from(buttons)  //array will be created, i.e [1,+,2], etc
arr.forEach(button=>{    //=> - short way to create a function
    button.addEventListener('click',(e)=>  //the clicked button will be taken as input by this function
    {
        if (e.target.innerHTML=='='){    //when = is pressed in html page
            string = eval(string)        //evaluation will be done
            input.value=string          //after eval value will be saved in string
        }
        else if(e.target.innerHTML == "AC"){        //when AC is pressed
            string = "";                            //string will become empty
            input.value=string                      //after string is emptied it will be return in string variable, input.value=string is important otherwise values will not be shown in result division
        }
        else if(e.target.innerHTML=="DEL"){                 //when del is pressed
            string = string.substring(0,string.length-1)    //string's length will get -1 
            input.value = string;                           //the remaining string will be shown
        }
        else {
            string +=e.target.innerHTML                     //any other number or any operator will get added to string by this function
            input.value=string                              //return in string
        }
    })
})