

export const getCurrentLocation = (location) => {
if(location === "/"){
    return "Home"
}else if(location === "/about"){
    return "About"
}else if(location === "/services"){
    return "Services"
}else if(location === "/projects"){
    return "Projects"
}else if(location === "/work-with-us"){
    return "Work"
}else if(location === "/contact"){
    return "Contact"
}
}