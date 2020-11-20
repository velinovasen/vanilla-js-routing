import IndexView from "./static/views/IndexView.js"
import AddMovieView from "./static/views/AddMovieView.js"
import MoviesView from "./static/views/MoviesView.js"

//changing the url
const navigateTo = (url) => {
    history.pushState(null, null, url)
    router()
}

// checking the router and matches the view
const router = async () => {
    const routes = [
        { path: '/', view: IndexView },
        { path: '/movies', view: MoviesView },
        { path: '/register', view: () => console.log('Register view')},
        { path: '/login', view: () => console.log('Login view') }
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: route.path === location.pathname
        }
    })

    let match = potentialMatches.find(route => route.isMatch)

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.getElementById('root').innerHTML = await view.getHTML();

};

// listening for events

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {   
    document.body.addEventListener('click', e => {
        if (e.target.classList.contains("nav-link")) {
            e.preventDefault();
            navigateTo(e.target.href);    
        }
    })
    
    router();
})