// Imports
import Home from "./views/Home.js";
import Login from "./views/Login.js";
import Register from "./views/Register.js";



const route = (e) => {
    e = event || window.event;
    e.preventDefault(); // Prevent deafult behavior dont follow the link
    window.history.pushState(null, null, e.target.href);
    handleLocation();
};


const routes = {
    '/Home': Home, // On Path "/" use the HomeView class and inject html in the #app div
    '/Login': Login,
    '/Register': Register };

 


const handleLocation = async () => {
    const path = window.location.pathname; 
    const route = routes[path] || routes['/Home'];
    const html = await route.prototype.getHtml();
    document.getElementById("app").innerHTML = html;
    //await route.prototype.executeViewScript();
};


// On-Navigating-Back&Forth-Load the Content--Together with the url------------------------------------------------------------------------------------>
window.addEventListener("popstate", handleLocation); // On popstate "If back button is pressed" use the router array to load back the previeous SPA View
//window.onpopstate = handleLocation;
//window.route = route; // Assign router to Global variable so it can be acceset anywere instead can be exportet as module





// Listen for document fully Loaded
document.addEventListener("DOMContentLoaded", () => { // On Dom loaded add bodyEventlistener to listen for click in the body
    document.body.addEventListener("click", e => { //Listen for click in the body
        if (e.target.matches("[data-link]")) {  // If body item was clicked and it is data-link decorated 
            route(); // Load the content if the url is defined in our "Spa Urls"
        }
    });  
});


handleLocation(); // Handle location on page load otherwise the location will be handled on decorated link with data-link click or on popstate a.k.a on back and forth browser button click with window.addEventListener("popstate"








// Tests ============================================================
// Winer is Object dictionaries get by key value

//// OBJECT with props ------------------------
//const routes1 = {
    
//};


//// Add 1000 props 
//for (var i = 0; i < 1000; i++)
//{
//    routes1[i++] = 'prop' + i++;
//    i++;
//}




//routes1['/Home'] =  Home;
//routes1['/Login'] = Login;
//routes1['/Register'] = Register;




//// Methods ------------------------
//// Object key values
//const getObjectProp = (path) => {
//    return routes1[path];
//}




//console.log("The OBJECT");
//console.log("GET with Key Value pairs:");

//console.time();
//getObjectProp('/Register');
//console.timeEnd();
//console.log(getObjectProp('/Register'));








//// With for loop

//const getObjectPropWithForloop = (path) =>
//{
//    for (const prop in routes1)
//    {
//        if (prop == path)
//        {
//            return routes1[prop]; 
//        }
//    }

//}






//console.log("The OBJECT");
//console.log("GET with Key Forloop:");

//console.time();
//getObjectPropWithForloop('/Register');
//console.timeEnd();
//console.log(getObjectPropWithForloop('/Register'));





////// - ARRAY -------------------------------------------------


//const array = [];


//// Add 1000 props 
//for (var i = 0; i < 1000; i++) {
//    array[i] = {path: `${i} path`, view: i + "VIEW" }
//    i++;
//}



//array[998] = { path: "/Home", view: Home };
//array[999] = { path: "/Login", view: Login };
//array[1000] = { path: "/Register", view: Register };
 


//const getArrayObj = (path) =>
//{
//    const length = array.length;
//    for (let i = 0; i < length; i++)
//    {
//        if (array[i].path == path)
//        {
//            return array[i].view;
//        }
//        i++;
//    }
//}





//console.log("The ARRAY");
//console.log("GET Array with Forloop:");

//console.time();
//getArrayObj('/Register');
//console.timeEnd();
//console.log(getArrayObj('/Register'));












//// Array
//const array1 = [];



//for (var i = 0; i < 1000; i++) {
//    array1[i] = 'prop' + i++;
//    i++;
//}








//// ARRAY -------------------------------------    
//const routes2 = [
//    { path: "Home", view: Home },
//    { path: "/Login", view: Login },
//    { path: "/Register", view: Register }

//];



//const getObjectProp = (path) => {
//    console.log(routes1[path]);
//    return routes1[path];
//}



//const getOArrayItem = (path) => {
//    const length = array1.length;

//    for (var i = 0; i < length; i++)
//    {
//        if (array1[i] == path)
//        {
//            console.log(array1[i].view);
//            return array1[i].view; 
//        }
//    } 
//}




//const getAccociativeArrayItem = () =>
//{
//    console.log(array1[990]);
//    return array1[990];
//}



//console.log('The Dictionary:');
//console.log(routes1);


//console.log("The OBJECT");
//console.time();
//getObjectProp('/Register');
//console.timeEnd();


//console.log("The ARRAY");
//console.time();
//getOArrayItem('/Register');
//console.timeEnd();



//console.log("Accociative ARRAY");
//console.time();
//getAccociativeArrayItem('/Register');
//console.timeEnd();


