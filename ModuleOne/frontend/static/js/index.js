import Main from "./views/Main.js";
import Login from "./views/Login.js";
import Tickets from "./views/Tickets.js";
import Profile from "./views/Profile.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path:"/", view: Main },
        { path:"/tickets", view: Tickets },
        { path:"/login", view: Login },
        { path:"/profile", view: Profile }
    ];
    
    //Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match.route.view());

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
})