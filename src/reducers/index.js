const initialState = {
    movies: [{
        title: "twilight",
        image: "https://fr.web.img6.acsta.net/medias/nmedia/18/67/60/06/19031254.jpg",
        year:"2014"
    },
    
    {
        title: "titanic",
        image: "https://fr.web.img6.acsta.net/medias/nmedia/18/67/60/06/19031254.jpg",
        year:"1997"
}
    
    ]
}

 const rootReducer=(state = initialState, action) => {
    switch (action.type) {

    case "ADD":
        return { ...state }

    default:
        return state
    }
}
export default rootReducer