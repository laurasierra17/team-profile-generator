// Function that generates a card for each member
function createCard(member) {
    let thirdList;
    let role;

    // Generate the right third item in the list and role with icon for each member type
    if (member.getRole() === 'Manager'){ 
        thirdList = `Office number: ${member.officeNumber}`;
        role = `<i class="fa-solid fa-lg fa-mug-hot"></i> ${member.getRole()}`
    } else if (member.getRole() === 'Engineer') {
        thirdList = `GitHub: <a href="https://www.github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`
        role = `<i class="fa-solid fa-lg fa-laptop-code"></i> ${member.getRole()}`
    } else {
        thirdList = `School: ${member.getSchool()}`
        role = `<i class="fa-solid fa-lg fa-graduation-cap"></i> ${member.getRole()}`
    }

    return `
        <div class="col" style="width: 350px">
            <div class="card h-100">
            <div class="card-body">
                <div class="text-bg-warning p-2">
                    <h2 class="card-title">${member.getName()}</h2>
                    <h3 class="card-title">${role}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${member.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                    <li class="list-group-item">${thirdList}</li>
                </ul>
            </div>
            </div>
        </div>
    `;
}

// Populate new html file with this markup
function template(teamInfo) {
    return `
    <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Team Profile Generator</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <!-- Bootstrap CDN -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <!-- Font Awesome CDN -->
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
            />
        </head>

        <body>
            <!-- Main section of the body -->
            <main>
                <!-- Header of the application -->
                <header class="p-5 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5 text-bg-success">
                        <h1 class="display-5 fw-bold mx-auto" style="width: fit-content">My Team</h1>
                    </div>
                </header>

                <!-- Container for the employee cards -->
                <section class="row row-cols-1 row-cols-md-3 g-4 mx-auto" style="width: 900px" id="cards-container">
                    ${teamInfo.map(member => createCard(member))}
                </section>
            </main>
        </body>

        </html>
    `
}

module.exports = template;
