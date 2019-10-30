alert("Hello, Whats Popping, I am THE CYBER LION Long Time No See!.?")

let UserInput;

let User2;

let User3;

const user = () => {
    
    UserInput = prompt("WhaT Would You Like To Feed This HUNGRY BEAST,How About Some Food,What would you like feed it?: \n1.CHOCOLATE\n2.BURGER\n3.CHICKEN")
    
    console.log(UserInput)
    
    
    if(UserInput == 1) {
    
        alert("Better not eat too much")

    }

    else if (UserInput == 2){

        
        alert("I SMELL DIABETES")
    }
    
    else {
    
        alert("NICE CHOICE JUST LEAVE SOME SO WE CAN HAVE SOME EGGS TOMMOROW")
    
    }
}
   const UserB= () => {



    User2 = prompt("Play A Sport With The Pet So He Becomes More Active,Choose A Sport: \n1.Football\n2.Cricket\n3.Running")

    console.log(User2)

    if (User2 == 1){
        alert("Grab A Football")

    }
    
    else if(User2 == 2){
                
    
        alert("Grab A Cricket Ball")
        
    }
else {
        
                    alert("Nice,Be Careful!")
    
    }

        
                
}
const UserC = () => {
    User3 = prompt("The Pet Is Now Tired, Plese Allow The Cyber Pet To Rest Right Now: \n1.No I Want To Play More\n2.After You Eat Your Dinner\n3.OK,Sure Bye")
    if (User3 == 1){
        alert("Sorry I Need My Rest,Maybe Later Bye For Now")
    }
    if(User3 == 2){
        alert("OK, No Problem")
        if(User3 == 3){
            alert("Thanks,Ill See You Later")
        }
    }
}
        
    user()
    UserB()
    UserC()
   


