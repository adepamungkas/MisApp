import axios from 'axios';
import * as CONST from '../../Constans';
const moment = require('moment');
const HEADERS = { 'Content-Type': 'application/json', accept: 'application/json' };
class Service {

    createMaterial = (payload) => {

        let url = `${CONST.BASE_URL}materials/`;
        var bodyFormData = new FormData();
        bodyFormData.append('Date', moment(payload.Date).format());
        bodyFormData.append('Name', payload.Name);
        bodyFormData.append('IsBroken', payload.IsBroken);
        bodyFormData.append('Size', payload.Size);
        bodyFormData.append('Color', payload.Color);
        bodyFormData.append('Type', payload.Type);
        bodyFormData.append('Description', payload.Description);
        bodyFormData.append('InputBy', payload.InputBy);
        bodyFormData.append('Trademark', payload.Trademark);
        bodyFormData.append('Vendor', payload.Vendor);
        console.log("", moment(payload.Date).format())
        return axios.post(url, bodyFormData, { headers: HEADERS })
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
        var bodyFormData = new FormData();
        bodyFormData.append('Date', moment(payload.Date).format());
        bodyFormData.append('Name', payload.Name);
        bodyFormData.append('IsBroken', payload.IsBroken);
        bodyFormData.append('Size', payload.Size);
        bodyFormData.append('Color', payload.Color);
        bodyFormData.append('Type', payload.Type);
        bodyFormData.append('Description', payload.Description);
        bodyFormData.append('InputBy', payload.InputBy);
        bodyFormData.append('Trademark', payload.Trademark);
        bodyFormData.append('Vendor', payload.Vendor);

        let url = `${CONST.BASE_URL}materials/${id}`;
        return axios.put(url, bodyFormData, { headers: HEADERS })
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