import axios from "axios";

export default {
    // gets all attendees
    getAttendees : function () {
        return axios.get("/api/attendees");
    },
    // gets all workshops
    getWorkshops : function () {
        return axios.get("/api/workshops");
    },
    // gets one workshop
    getOneWorkshop : function (id) {
        return axios.get(`/api/workshops/${id}`);
    },
    // changes checked-in status
    checkIn : function (uuid, id) {
        return axios.post(`/api/check-in/${uuid}/${id}`);
    },
    // changes registered status
    registration : function (uuid, id) {
        return axios.post(`/api/registration/${uuid}`);
    }
};