const API = {
    async getUsers() {
        const res = await fetch("/api/users");
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
    }















};



