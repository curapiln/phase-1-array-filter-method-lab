
function findMatching(driver, name) {
    return driver.filter( wheel => wheel.toLowerCase() === name.toLowerCase())
};



function fuzzyMatch(letters, words){
    return letters.filter( fans => fans.indexOf(words) === 0 )

}
      
function matchName(city,area){
    return city.filter( ferrisWheel => ferrisWheel.name === area )
}
