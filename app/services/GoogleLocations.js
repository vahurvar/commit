
import * as querystring from "query-string";

export default class GoogleLocations {

    static async isGymNearby(latitude, longitude) {
        try {
            let response = await fetch(GoogleLocations.getUrl(latitude, longitude));
            let responseJson = await response.json();
            return responseJson.status === 'OK';
        } catch (error) {
            console.error(error);
        }
    }

    static getUrl(latitude, longitude) {
        let apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
        let params = querystring.stringify({
            key: 'AIzaSyAD1IVgtb98549HrYkr80p4sH8FtknzrZQ',
            location: latitude + ',' + longitude,
            type: 'gym',
            radius: 50
        });
        return apiUrl + params;
    }
}



