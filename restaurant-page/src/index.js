// 3 main classes: about, food, contact
const main = document.getElementById("content")

// main page title
const title = document.createElement("div")
title.innerText = "Lau's Green Kitchen"
title.classList =  "title"
main.appendChild(title)

// navbar
const navbar = document.createElement("div")
navbar.classList = "navbar"
main.appendChild(navbar)

//navbar unordered list
const navbarContainer = document.createElement("ul")
navbar.appendChild(navbarContainer)


// navbar list
const navList = ["ABOUT","MENU","CONTACT"]
navList.forEach(
    item =>{
        const navItem = document.createElement("li")
        const navButton = document.createElement("button")
        navButton.innerText = item
        navItem.appendChild(navButton)
        navItem.addEventListener("click", () => {
            contentContainer.classList = item.toLowerCase()
            switch (contentContainer.classList.value){
                case "about":
                    aboutContent.style.display = "block";
                    menuContent.style.display = "none";
                    contactContent.style.display = "none";
                    break;
            
                case "menu":
                    aboutContent.style.display = "none";
                    menuContent.style.display = "block";
                    contactContent.style.display = "none";
                    break;
            
                case "contact":
                    aboutContent.style.display = "none";
                    menuContent.style.display = "none";
                    contactContent.style.display = "block";
                    break;
            }
        })
        navItem.classList = "nav-item"
        navItem.style.listStyle = "none"
        navbarContainer.appendChild(navItem)
})


//content container
const contentContainer = document.createElement("div")
contentContainer.id = "content-container"
contentContainer.classList = "about";
main.appendChild(contentContainer)

//display content logic
// console.log(contentContainer.classList.value);


//about content
const aboutContent = document.createElement("div")
aboutContent.style.display = "block"
aboutContent.classList = "about-content"
contentContainer.appendChild(aboutContent)

//about title
const aboutTitle = document.createElement("h2")
aboutTitle.innerText = "Lau's Green Kitchen"
aboutContent.appendChild(aboutTitle)

// about description
const aboutDescription = document.createElement("p")
aboutDescription.innerText = "Lau's Green Kitchen hopes to modernize and revolutionize the vegetarian industry by providing a green, healthier and convenient alternative for our customers as compared to convention fast food. We repackaged traditional vegetarian cuisine into a green fast casual concept, hoping to popularize the vegetarian cuisine amongst youths and ladies, and most importantly, encourage more non-vegetarians to go meat-free."
aboutContent.appendChild(aboutDescription)


//menu content
const menuContent = document.createElement("div")
menuContent.innerText = "menu-content will be displayed here"
menuContent.classList = "menu-content"
menuContent.style.display = "none"
contentContainer.appendChild(menuContent)

//contact content
const contactContentArr = [] 
const contactContent = document.createElement("div")
contactContent.classList = "contact-content"
contactContent.style.display = "none"
contentContainer.appendChild(contactContent)

//contact description
const contactTitle = document.createElement("h2")
contactTitle.innerText = "Contact Us"
contactContent.appendChild(contactTitle)

const contactInfo = ["Lau", "+65 82687364", "caseygreen@gmail.com"]
const contactDescriptionList = document.createElement("ul")
contactInfo.forEach(
    info => {
        const infoItem = document.createElement("li")
        infoItem.innerText = info
        infoItem.style.listStyle = "none"
        contactContent.appendChild(infoItem)
    }
)


