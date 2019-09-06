const headerContainer = document.querySelector('.headerContainer');


function Header() {
    const header = document.createElement('div');
    const date = document.createElement('date');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header;
}

headerContainer.appendChild(Header());