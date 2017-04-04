module.exports = (server) => {

    server.get('/contact', (req, res, next) => {
        server.api.controllers.contact.get(server, req, res, next);
    });

    server.post('/contact', (req, res, next) => {
        server.api.controllers.contact.create(server, req, res, next);
    });

    server.post('/contactCreateMany', (req, res, next) => {
        server.api.controllers.contact.createBulk(server, req, res, next);
    });

    server.post('/contactSaveMany', (req, res, next) => {
        server.api.controllers.contact.saveBulk(server, req, res, next);
    });

    server.del('/contact/:id', (req, res, next) => {
        server.api.controllers.contact.remove(server, req, res, next);
    });

    server.get('/contact/:id', (req, res, next) => {
        server.api.controllers.contact.getById(server, req, res, next);
    });

    server.get('/contact/updatedate/:updateDate', (req, res, next) => {
        server.api.controllers.contact.getByUpdateDate(server, req, res, next);
    });

};