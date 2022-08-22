const playerNameCount = [];

function displayPlayerName(playerNameCount){

    const PlayerList = document.getElementById('player-list');
    PlayerList.innerHTML = '';

    for(let i = 0; i < playerNameCount.length; i++){

        playerNameCount[i];

        const name = playerNameCount[i].playerName;

        const li = document.createElement('li')

        li.innerHTML = `
            <span>${i + 1}</span>
            <span>${'  '}</span>
            <span>${name}</span>  
        `;

        PlayerList.appendChild(li);
    }
}
// Add Player onclick Button Function 
function addPlayer(element){
    const playerName = element.parentNode.children[0].innerText;

    const playerNameObj = {
        playerName: playerName
    }

    playerNameCount.push(playerNameObj)
    document.getElementById('total-selected').innerHTML = playerNameCount.length;
    
    console.log(playerNameCount);

    displayPlayerName(playerNameCount);
}
