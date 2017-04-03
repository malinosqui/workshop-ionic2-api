const moment = require('moment');

module.exports.create = (server, req, res, next) => {

    req.body.birthDate = moment(req.body.birthDate).format('YYYY-MM-DD');

    if (req.body.id > 0) {
        server.api.models.contact.update(req.body).then(response => {
            res.send(response);
        });
    } else {
        server.api.models.contact.create(req.body).then(response => {
            res.send(response);
        });
    }
};

module.exports.createBulk = (server, req, res, next) => {

    req.body = req.body.map((el) => {
        el.birthDate = moment(el.birthDate).format('YYYY-MM-DD');
        return el;
    });

    server.api.models.contact.create(req.body).then(response => {
        res.send(response);
    });
};

module.exports.get = (server, req, res, next) => {
    server.api.models.contact.get().then((companies) => {
        res.send(companies);
    });
};

module.exports.getById = (server, req, res, next) => {
    server.api.models.contact.getById(req.params.id).then(company => {
        res.send(company);
    });
};

module.exports.getByUpdateDate = (server, req, res, next) => {
    server.api.models.contact.getByUpdateDate(req.params.updateDate).then(companies => {
        res.send(companies);
    });
};

module.exports.remove = (server, req, res, next) => {
    server.api.models.contact.remove(req.params.id).then(companies => {
        res.send('success');
    });
};

module.exports.updateBulk = (server, req, res, next) => {

    const contacts = req.body;

    for (let i = 0; i < contacts.length; i++) {
        contacts[i].birthDate = moment(contacts[i].birthDate).format('YYYY-MM-DD');
        contacts[i].updateDate = moment().format('YYYY-MM-DD HH:mm');
        
        server.api.models.contact.update(contacts[i]).then(response => {
            res.send(response);
        });
    }
};