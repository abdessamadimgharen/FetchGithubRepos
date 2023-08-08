// Assignment 1

let theInput = document.querySelector('.get-repos input'),
    getBtn = document.querySelector('.get-btn'),
    reposData = document.querySelector('.show-data');

getBtn.onclick = () => {
    getRepos()
}

function getRepos() {
    if(theInput.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You Should Write Github Username!',    
        })
        reposData.innerHTML = '<span>Please enter your Github username</span>'
    } else {

        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then(response => response.json())
        .then(repos => {
            reposData.innerHTML = '';

            repos.forEach(repo => {

                let mainDiv = document.createElement('div');
                mainDiv.appendChild(document.createTextNode(repo.name));
                mainDiv.className = 'repo-box'

                let mainDivData = document.createElement('div');

                
                let theUrl = document.createElement('a');
                theUrl.appendChild(document.createTextNode('Visit'));
                theUrl.href = repo.clone_url;
                theUrl.setAttribute('target', '_blank');

                let starsSpain = document.createElement('span');
                starsSpain.appendChild(document.createTextNode(`Stars ${repo.stargazers_count}`))

                mainDivData.appendChild(starsSpain);
                mainDivData.appendChild(theUrl);
                mainDiv.appendChild(mainDivData)
                reposData.appendChild(mainDiv);

            })
        })
    }
    theInput.value = '';
}


// ##############################################################



// Assignment 2

// let postsContainer = document.querySelector('.posts-container');

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(response => {
//         response.forEach(post => {
//             let mainDiv = document.createElement('div');
//             mainDiv.className = 'post-box';

//             let childDiv = document.createElement('div');
//             childDiv.className = 'title';

//             let frSpan = document.createElement('span');
//             frSpan.appendChild(document.createTextNode(post["title"]))

//             let seSpan = document.createElement('span');
//             seSpan.appendChild(document.createTextNode(`id: ${post["id"]}`))

//             childDiv.appendChild(frSpan);
//             childDiv.appendChild(seSpan);

//             mainDiv.appendChild(childDiv);

//             let paragraph = document.createElement('p');
//             paragraph.className = 'body';
//             paragraph.appendChild(document.createTextNode(post["body"]))

//             mainDiv.appendChild(paragraph);

//             postsContainer.appendChild(mainDiv)

//         });
//     })