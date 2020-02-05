const users = count => new Promise((resolve, reject) => {
    const api = `https://randomuser.me/api/?results=${count}&nat=us`;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', api, true);

    xhr.onload = () => {
        if(xhr.status === 200){
            //reject('Error !!!!!');
            resolve(JSON.parse(xhr.responseText).results);
        }
        else{
            console.log(xhr.responseText);
            //reject(Error(xhr.responseText));
            reject(xhr.responseText);
        }
    }

    xhr.onerror = error => reject(error);

    xhr.send();
});

users(10)
.then(
    listUsers => printInHTML(listUsers)
    // , error => console.log(
    //     new Error('Error al descargar los usuarios: ' + error)
    // )
    , error => console.log(error)
)
.catch(
    e => console.log(e)
);

function printInHTML(lstUsers) {
    let html = '';

    lstUsers.forEach(user => {
        html += `
            <li>
                nombre: ${user.name.first}
                pais: ${user.nat}
                image: <img src="${user.picture.medium}"
            </li>`;
    });

    const contentApp = document.querySelector('#app');
    contentApp.innerHTML = html;
}

