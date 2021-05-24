class Client {
    constructor(name, city, contact_info, accountId) {
        this.clientId = Math.floor(Math.random() * 1000);
        this.accounts = [accountId];
        this.name = name;
        this.city = city;
        this.contact_info = contact_info;
    }
}

module.exports = Client;