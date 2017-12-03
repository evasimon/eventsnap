import axios from "axios";

export default {
    // gets all attendees
    getAttendees: function () {
        return axios.get("/api/attendees");
    },
    // change checked-in status
    checkIn: function (uuid, id) {
        return axios.post(`/api/check-in/${uuid}/${id}`);
    },

    // gets all workshops
    getWorkshops: function () {
        return axios.get("/api/workshops");
    },

    // gets all workshops
    getOneWorkshop: function (id) {
        return axios.get(`/api/workshops/${id}`);
    }
    // // searches for articles from www.nytimes.com
    // search: function (query, startYear, endYear) {
    //     const startDate = startYear !== "" ? `&begin_date=${startYear}0101` : "";
    //     const endDate = endYear !== "" ? `&end_date=${endYear}1231` : "";

    //     return axios.get(`${baseUrl}${query}${startDate}${endDate}&api-key=${apiKey}`)
    // },
    // // deletes the saved article with the given id
    // deleteArticle: function (id) {
    //     return axios.delete("/api/saved-articles/" + id);
    // },
    // // saves an article to the database
    // saveArticle: function (articleData) {
    //     return axios.post("/api/saved-articles", articleData);
    // }
};