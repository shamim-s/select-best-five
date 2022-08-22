//   A variable for store players name 
  const playerNameCount = [];

// Function for Set the selected player name in Ul child node
        function displayPlayerName(playerNameCount){

            //called the ul tag by using id
            const PlayerList = document.getElementById('player-list');
            PlayerList.innerHTML = '';

            // getting the array value serial by serial
            for(let i = 0; i < playerNameCount.length; i++){
                    playerNameCount[i];

                    // creating li item under the ul tag 
                    const name = playerNameCount[i].playerName;
                    const li = document.createElement('li')
                    li.innerHTML = `
                        <span>${i + 1}</span>
                        <span>${name}</span>  
                    `;
                    // Push Player name in a array 
                    PlayerList.appendChild(li);
            }
        }


// Add Player onclick Button Function 
    function addPlayer(element){
        const playerName = element.parentNode.children[0].innerText;
        const playerNameObj = {playerName: playerName};

        //condition for maximum player selection is 5
        if(playerNameCount.length >= 5){
            alert("You can't select more than 5 player");
        }else{
            playerNameCount.push(playerNameObj)
            document.getElementById('total-selected').innerHTML = playerNameCount.length;
        
            displayPlayerName(playerNameCount);

            element.disabled = true;
            element.style.backgroundColor = 'grey';
        }
            
    }

//============== Function for get integer value form a input field===============
function getInputFieldValue(elementId){
    const InputElement = document.getElementById(elementId);
    const inputStringValue = InputElement.value;
    const inputIntergerValue = parseInt(inputStringValue);

    return inputIntergerValue;
}

//====================== Calculating section==================================== 
    const playerBudget = document.getElementById('calculate').addEventListener('click', function(){

        const inputIntergerValue = getInputFieldValue('player-budget-input');

        if(isNaN(inputIntergerValue)){
            alert("Please Inter a number");
        }else if(playerNameCount.length < 1){
            alert("Please select at last one player");
        }else{
            const totalPlayerBudget = playerNameCount.length * inputIntergerValue;

            const totalExpense = document.getElementById('player-total-expense');
            totalExpense.innerText = totalPlayerBudget;
            console.log(totalPlayerBudget);
        }
    })

//====================== Total Calculating section==================================== 
    document.getElementById('total-calculate').addEventListener('click', function(){
        const perPlayerBudget = getInputFieldValue('player-budget-input');
        const totalPlayerBudget = playerNameCount.length * perPlayerBudget;

        const inputIntergerValue = getInputFieldValue('manager-input');
        const coachBudget = getInputFieldValue('coach-input');
        if(isNaN(inputIntergerValue)){
            alert("Please enter a number");
        }else{
            const totalAllBudget = inputIntergerValue+ coachBudget + totalPlayerBudget;
            const inTotal = document.getElementById('total-text');
            inTotal.innerText = totalAllBudget;
        }
    })