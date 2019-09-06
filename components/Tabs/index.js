// GLOBAL STATE DECLARATION
var state = {
    activeTopic: 'All',
    currentTab: '',
    topics: [],
    articles: {}
}

const topicsContainer = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        state.topics = response.data.topics;

        // SETTING CURRENT TAB ON INIT
        state.currentTab = Tab('All');
        state.currentTab.classList.add('active-tab');

        // ADDING EACH TOPIC TAB TO THE DOM
        topicsContainer.appendChild(state.currentTab);
        state.topics.forEach(topic => {
            topicsContainer.appendChild(Tab(topic));
        });
    })


function Tab(topic) {
    const tab = document.createElement('div');

    tab.classList.add('tab');
    tab.setAttribute('data-topic', topic);
    tab.textContent = topic;

    tab.addEventListener('click', e => {
        state.currentTab = e.currentTarget;
        console.log
        state.currentTab.classList.add('active-tab');

        state.activeTopic = topic;
        updateCards(state.activeTopic);
    })

    return tab;
}


