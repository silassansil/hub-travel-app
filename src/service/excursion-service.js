import axios from '../network/axios-setup';

export default class ExcursionService {

    static async listAll() {
        return await axios.get('agencies/excursions');
    }
}