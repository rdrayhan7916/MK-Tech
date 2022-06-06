const body1 = document.getElementsByTagName("body")
let formatHeading = document.getElementById('format-heading')
let formatPragraph = document.getElementById('format-pragraph')
let formatImg = document.getElementById('format-img')

const popUnder = () => {
    formatHeading.innerHTML = 'POP-UNDER'
    formatPragraph.innerHTML = "This is one of the most popular ads. After user's click, this ad opens landing page in behind. Sothat user experience is not hampered much"
    formatImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMmgXMMmUT7j7DYe-wqFwKD26p-99WUC9yA&usqp=CAU'
    console.log('ok')

}
const bannerAd = () => {
    formatHeading.innerHTML = 'BANNER AD'
    formatPragraph.innerHTML = 'Choose between the available banner formats. Highly effective ad for visibility'
    formatImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6c50JSmh4JuNXpyMIfg3lgZepmh2HZUjyJw&usqp=CAU'
    console.log('ok')

}
const native = () => {
    formatHeading.innerHTML = 'NATIVE'
    formatPragraph.innerHTML = 'Ad format with the image and the title, that perfectly fits into the content of the site. Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.'
    formatImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINXcjL_fBUQBrHdCdQVUSLucWOukO9lhYzw&usqp=CAU'
    console.log('ok')

}
const skim = () => {
    formatHeading.innerHTML = 'SKIM'
    formatPragraph.innerHTML = 'SKIM" is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user. SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers.'
    formatImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGXHKhIrfoBQFk4Mk7pqw5XRMIkeuuD5d4g&usqp=CAU'
    console.log('ok')

}