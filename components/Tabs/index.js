// GLOBAL STATE DECLARATION
var state = {
    activeTopic: 'All',
    previousTab: '',
    currentTab: '',
    topics: [],
    articles: {}
}


// VARIABLE ASSIGNMENT OF DOM ELEMENT
const topicsContainer = document.querySelector('.topics');


// DATA REQUEST TO SET TOPICS TAB
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


// FUNCTIONAL TAB COMPONENT
function Tab(topic) {
    const tab = document.createElement('div');

    tab.classList.add('tab');
    tab.textContent = topic;

    tab.addEventListener('click', e => {
        // MANAGE ACTIVE-TAB CLASS TOGGLE FOR PREVIOUS TAB
        state.previousTab = state.currentTab;
        state.previousTab.classList.remove('active-tab');

        // MANAGE ACTIVE-TAB CLASS TOGGLE FOR CURRENT TAB
        state.currentTab = e.currentTarget;
        state.currentTab.classList.add('active-tab');

        state.activeTopic = topic;
        updateCards(state.activeTopic);
    })

    return tab;
}


