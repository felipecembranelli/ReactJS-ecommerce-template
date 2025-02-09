const INITIAL_STATE = {
    sections: [
        {
            title: "Chase dinning",
            imageUrl: "rewards-img/dinning-3.jpeg",
            id: 1,
            linkUrl: "shop/dinning"
        },
        {
            title: "Travel",
            imageUrl: "rewards-img/travel-1.jpeg",
            id: 2,
            linkUrl: "shop/travel"
        },
        {
            title: "Experiences",
            imageUrl: "rewards-img/experience-1.jpeg",
            id: 3,
            linkUrl: "shop/experience"
        },
        {
            title: "Gift Cards",
            imageUrl: "rewards-img/gift-amazon.png",
            size: "large",
            id: 4,
            linkUrl: "shop/gift-card"
        },
        {
            title: "Eletronics",
            imageUrl: "rewards-img/eletr-5.jpg",
            size: "large",
            id: 5,
            linkUrl: "shop/eletronic"
        },
        ,
        {
            title: "Transfer coins",
            imageUrl: "rewards-img/transfer.png",
            size: "large",
            id: 6,
            linkUrl: "shop/transfer-coin"
        }
    ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer