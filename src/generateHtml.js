// init members array
let membersArr = [];

// all team members into a function
joinAllTeam = allCards => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Outline Generator</title>
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <!-- header start -->
        <header>
            <div class="container">
                <h2>my #1 team!</h2>
            </div>
        </header>

        <!-- team members display -->
        <section class="teamDisplay">
            ${allCards}
        </section>
    </body>
    </html>
    `;
}

// // generate the HTML file
generateHtml = arr => {

    // filter through generated team arr
    for (let i = 0; i < arr.length; i++) {
        const member = arr[i];
        const role = member.getRole();

        // filter for roles
        switch(role) {
            case "Manager":
                const mgrCard = genManager(member);
                membersArr.push(mgrCard);
                break;
            case "Engineer":
                const engCard = genEngineer(member);
                membersArr.push(engCard);
                break;
            case "Intern":
                const intCard = genIntern(member);
                membersArr.push(intCard);
                break;
        }
    }

    // join all members
    const allCards = membersArr.join('');
    const joinAllCards = joinAllTeam(allCards);
    return joinAllCards;
}

// member functions

// manager
const genManager = manager => {
    return `
    <div class="member-card">
        <div class="card-header">
            <h3 class="card-name">${manager.name}</h3>
            <h4 class="card-role">Manager</h4>
        </div>
        <div class="card-body">
            <ul>
                <li class="body-list"><strong>ID:</strong> ${manager.id}</li>
                <li class="body-list"><strong>Email:</strong> <a href="mailto:${manager.email}"> ${manager.email}</a></li>
                <li class="body-list"><strong>Offce Number:</strong> ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>`;
}

// engineer
const genEngineer = engineer => {
    return `
    <div class="member-card">
        <div class="card-header">
            <h3 class="card-name">${engineer.name}</h3>
            <h4 class="card-role">Engineer</h4>
        </div>
        <div class="card-body">
            <ul>
                <li class="body-list"><strong>ID:</strong> ${engineer.id}</li>
                <li class="body-list"><strong>Email:</strong><a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
                <li class="body-list"><strong>Github:</strong> <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
    </div>`;
}

// intern
const genIntern = intern => {
    return `
    <div class="member-card">
        <div class="card-header">
            <h3 class="card-name">${intern.name}</h3>
            <h4 class="card-role">Intern</h4>
        </div>
        <div class="card-body">
            <ul>
                <li class="body-list"><strong>ID:</strong> ${intern.id}</li>
                <li class="body-list"><strong>Email:</strong><a href="mailto:${intern.email}"> ${intern.email}</a></li>
                <li class="body-list"><strong>School:</strong> ${intern.school}</a></li>
            </ul>
        </div>
    </div>`;
}

// export generateHTML
module.exports = generateHtml;