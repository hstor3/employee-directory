import axios from 'axios';

export default {
    getAPI: function() {
        return axios.get('https://randomuser.me/api/');
    }
};