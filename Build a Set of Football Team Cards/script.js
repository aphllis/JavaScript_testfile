const footballTeam = {
    team: "Argentina",
    year: 1986,
    headCoach: "Carlos Bilardo",
    players: [{
        name: "Sergio Almirón",
        position: "forward",
        isCaptain: false
    }, {
        name: "Sergio Batista",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Ricardo Bochini",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Claudio Borghi",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "José Luis Brown",
        position: "defender",
        isCaptain: false
    }, {
        name: "Daniel Passarella",
        position: "defender",
        isCaptain: false
    }, {
        name: "Jorge Burruchaga",
        position: "forward",
        isCaptain: false
    }, {
        name: "Néstor Clausen",
        position: "defender",
        isCaptain: false
    }, {
        name: "José Luis Cuciuffo",
        position: "defender",
        isCaptain: false
    }, {
        name: "Diego Maradona",
        position: "midfielder",
        isCaptain: true
    }, {
        name: "Jorge Valdano",
        position: "forward",
        isCaptain: false
    }, {
        name: "Héctor Enrique",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Oscar Garré",
        position: "defender",
        isCaptain: false
    }, {
        name: "Ricardo Giusti",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Luis Islas",
        position: "goalkeeper",
        isCaptain: false
    }, {
        name: "Julio Olarticoechea",
        position: "defender",
        isCaptain: false
    }, {
        name: "Pedro Pasculli",
        position: "forward",
        isCaptain: false
    }, {
        name: "Nery Pumpido",
        position: "goalkeeper",
        isCaptain: false
    }, {
        name: "Oscar Ruggeri",
        position: "defender",
        isCaptain: false
    }, {
        name: "Carlos Tapia",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Marcelo Trobbiani",
        position: "midfielder",
        isCaptain: false
    }, {
        name: "Héctor Zelada",
        position: "goalkeeper",
        isCaptain: false
    }]
};
document.addEventListener("DOMContentLoaded", () => {
    const headCoachEl = document.getElementById("head-coach");
    const teamEl = document.getElementById("team");
    const yearEl = document.getElementById("year");
    headCoachEl.innerText = footballTeam.headCoach;
    teamEl.innerText = footballTeam.team;
    yearEl.innerText = footballTeam.year;

    const playerCardsEl = document.getElementById("player-cards");

    function setPlayers(arr) {
        playerCardsEl.innerHTML = arr.map(({ name, position, isCaptain }) => {
            return `<div class="player-card">
  <h2>${isCaptain ? `(Captain) ${name}` : name}</h2>
  <p>Position: ${position}</p>
</div>`
        }).join("")
    }
    const selectPlayers = document.getElementById("players");
    selectPlayers.addEventListener("change", (e) => {
        if (e.target.value === "all") {
            setPlayers(footballTeam.players);
        } else {
            setPlayers(footballTeam.players.filter(({ position }) => position == e.target.value))
        }
    })
})