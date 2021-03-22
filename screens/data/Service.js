import axios from 'axios';
import * as CONST from '../../Constans';
const HEADERS = { 'Content-Type': 'application/json', accept: 'application/json' };
class Service {

    createMaterial = ( payload) => {
        let url = `${CONST.BASE_URL}materials/`;
        return axios.post(url, payload, { headers: HEADERS })
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                // console.log(err.response.data.error);
                const error = err.response.data.error

                throw error;
            });
    }

    deleteMaterial = (id) => {
        let url = `${CONST.BASE_URL}materials/${id}`;
        return axios.delete(url, { headers: HEADERS })
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                // console.log(err.response.data.error);
                const error = err.response.data.error

                throw error;
            });
    }

    editMaterial = (id, payload) => {
        let url = `${CONST.BASE_URL}materials/${id}`;
        return axios.put(url, payload, { headers: HEADERS })
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                // console.log(err.response.data.error);
                const error = err.response.data.error

                throw error;
            });
    }

    getMaterialById = (id) => {
        let url = `${CONST.BASE_URL}materials/${id}`;
        return axios.get(url, { headers: HEADERS })
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                const error = err.response.data.error

                throw error;
            });
    }

    
    getMaterials = (params) => {
       
        let url = `${CONST.BASE_URL}materials/`;

        return axios.get(url, { headers: HEADERS })
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                // swal({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: 'Data tidak ditemukan!'
                // });
            });
    }


}

export default Service;