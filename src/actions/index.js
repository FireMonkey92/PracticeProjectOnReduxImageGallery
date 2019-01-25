// const API_URL = 'http://www.json-generator.com/api/json/get/caJdVFFeNu?indent=2';
// const API2 ="http://www.json-generator.com/api/json/get/bVJoEjSFcO?indent=2"

// const API200x300 = 'http://www.json-generator.com/api/json/get/ceGEYXnSjS?indent=2'


// const API300x200 = 'http://www.json-generator.com/api/json/get/cgcnszmdbC?indent=2';
const github = 'https://my-json-server.typicode.com/FireMonkey92/PracticeProjectOnReduxImageGallery/imageIndexs';

// const local = 'http://localhost:3004/imageIndexs';
const localcity = 'http://localhost:3004';

export function getImages() {
    //do a network call

    const request = fetch(github, {
        method: 'GET'
    }).then(res => res.json());

    // console.log(request);
    //action creator creates an object and sends to each reducers   
    return {
        type: 'IMAGE_DETAILS',
        payload: request
    }
}

export function sortByLikeAsc() {
    const request = fetch(`${github}?_sort=likes&_order=asc`, {
        method: 'GET'
    }).then(res => res.json());

    // console.log(request);
    //action creator creates an object and sends to each reducers   
    return {
        type: 'IMAGE_DETAILS_ASC_LIKES',
        payload: request
    }
}

export function sortByLikeDesc() {
    const request = fetch(`${github}?_sort=likes&_order=desc`, {
        method: 'GET'
    }).then(res => res.json());

    // console.log(request);
    //action creator creates an object and sends to each reducers   
    return {
        type: 'IMAGE_DETAILS_DESC_LIKES',
        payload: request
    }
}

export function sortByDisLikeAsc() {
    const request = fetch(`${github}?_sort=dislikes&_order=asc`, {
        method: 'GET'
    }).then(res => res.json());


    return {
        type: 'IMAGE_DETAILS_ASC_DISLIKES',
        payload: request
    }
}

export function sortByDisLikeDesc() {
    const request = fetch(`${github}?_sort=dislikes&_order=desc`, {
        method: 'GET'
    }).then(res => res.json());

    // console.log(request);
    //action creator creates an object and sends to each reducers   
    return {
        type: 'IMAGE_DETAILS_DESC_DISLIKES',
        payload: request
    }
}



export function getAllCountries() {
    const request = fetch(`${localcity}/countryIndexs`, {
        method: 'GET',
    }).then(response => response.json());
    return {
        type: 'GET_COUNTRIES_DETAILS',
        payload: request
    }

}