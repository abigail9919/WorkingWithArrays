const heroes = [
    {
        heroName: "Ikaris",
        power: "laser eyes",
        outfitColor: "blue",
        pic: "images/ikaris.webp"
    },
    {
        heroName: "Makkarai",
        power: "super fast",
        outfitColor: "red & gray",
        pic: "images/makkari.jpeg"
    },
    {
        heroName: "Thena",
        power: "warrior",
        outfitColor: "white",
        pic: "images/thena.jpg"
    },
    {
        heroName: "Sersi",
        power: "transmutation",
        outfitColor: "green",
        pic: "images/sersi.jpg"
    },
    {
        heroName: "Kingo",
        power: "strength",
        outfitColor: "purple",
        pic: "images/kingo.webp"
    }
];

const showInfo = () => {
    let heroAttribute = document.querySelector("#hero").value;
    let selectedHeroInfo = document.querySelector(".heroInfo");
    let str = "";
    let heroPic = document.querySelector(".selectedHeroImg");
    
    heroes.forEach((hero) => {
        if (heroAttribute == hero.heroName)
            str += `${hero.heroName} is a hero with the power of ${hero.power}. Their suit is ${hero.outfitColor}!`,
            heroPic.src = hero.pic;
        else if (heroAttribute == hero.power)
            str += `${hero.heroName} is a hero with the power of ${hero.power}. Their suit is ${hero.outfitColor}!`,
            heroPic.src = hero.pic;
        else if (heroAttribute == hero.outfitColor)
        str += `${hero.heroName} is a hero with the power of ${hero.power}. Their suit is ${hero.outfitColor}!`,
        heroPic.src = hero.pic;
    });

    selectedHeroInfo.textContent = str;
};

let heroTitle = document.querySelector(".heroTitle");
heroTitle.textContent = "The Eternals";

let heroList = document.querySelector(".heroList");
let fullHeroList = `<ol>`;
heroes.forEach((hero) => {
    fullHeroList += `<li> ${hero.heroName}`;
});
fullHeroList += `</ol>`;

heroList.innerHTML = fullHeroList;