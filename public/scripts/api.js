const API = {
    async getUsers() {
        const res = await fetch("/api/users");
        const json = await res.json();
        return json;
    },

    async manageUsers() {
        const res = await fetch("/api/manageusers");
        const json = await res.json();
        return json;
    },

    
    async addPunch(data) {
        const res = await fetch("/api/punch",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }
        );
        const json = await res.json();
        return json;
    },

    async addUser(data) {
        const res = await fetch("/api/users",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }
        );
        const json = await res.json();
        return json;
    },

    async searchUser(data) {
        const res = await fetch("/api/search?" + new URLSearchParams({
            searchterm: data
        }));
        const json = await res.json();
        return json;
    }















};



