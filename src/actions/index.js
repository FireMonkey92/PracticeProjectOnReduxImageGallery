// const API_URL = 'http://www.json-generator.com/api/json/get/caJdVFFeNu?indent=2';
// const API2 ="http://www.json-generator.com/api/json/get/bVJoEjSFcO?indent=2"

// const API200x300 = 'http://www.json-generator.com/api/json/get/ceGEYXnSjS?indent=2'


const API300x200 = 'http://www.json-generator.com/api/json/get/cgcnszmdbC?indent=2';
const github = 'https://my-json-server.typicode.com/FireMonkey92/PracticeProjectOnReduxImageGallery/imageIndexs';

const local = 'http://localhost:3004/imageIndexs';

export function getImages() {
    //do a network call
    
    const request = fetch(local, {
        method: 'GET'
    }).then(res => res.json());

    // console.log(request);

    //action creator creates an object and sends to each reducers   
    return {
        type: 'IMAGE_DETAILS',
        payload: request
    }
}