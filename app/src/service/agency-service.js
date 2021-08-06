import axios from '../network/axios-setup';

export default class AgencyService {

    static async listAll() {
        return await axios.get('agencies');
    }
}