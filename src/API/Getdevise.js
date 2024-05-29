import axios from "axios";

export default class Getdevise{
    static async getAll() {
        try{
            const response = await axios.get('http://localhost:3000/items')
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
}
