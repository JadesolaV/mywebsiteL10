const toggleIcon = (e) => {
    e.target.classList.toggle('active');
};
$('.contacts').on('mouseover', toggleIcon);
$('.contacts').on('mouseout', toggleIcon);

$(document).ready(function () {
    $('.zoom').hover(function () {
        $(this).addClass('transition');
    }, function () {
        $(this).removeClass('transition');
    });
});

function showRepositories() {
    var repos = JSON.parse(this.responseText);
    console.log(repos);
    let repoList = `<ul>${repos
        .map(r => '<li>' + r.name + '</li>')
        .join('')}</ul>`;
    document.getElementById('postRepo').innerHTML = repoList;
}

function getRepositories() {
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener('load', showRepositories);
    xhttp.open("GET", "https://api.github.com/users/jadesolav/repos", true);
    xhttp.send();
}
