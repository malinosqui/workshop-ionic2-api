module.exports = (server) => {

    const sequelize = server.config.db.sequelize;
    const Sequelize = server.config.db.Sequelize;

    const Contact = sequelize.define('Contact', {
        id: {
            type: Sequelize.BIGINT,
            field: 'Id',
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            field: 'Name'
        },
        email: {
            type: Sequelize.STRING,
            field: 'Email'
        },
        phone: {
            type: Sequelize.STRING,
            field: 'Phone'
        },
        birthDate: {
            type: Sequelize.DATEONLY,
            field: 'BirthDate'
        },
        creationDate: {
            type: Sequelize.DATE,
            field: 'CreationDate',
            defaultValue: Sequelize.DataTypes.NOW,
        },
        updateDate: {
            type: Sequelize.DATE,
            field: 'UpdateDate',
            defaultValue: Sequelize.DataTypes.NOW,
        },
        active: {
            type: Sequelize.BOOLEAN,
            field: 'Active',
            defaultValue: false,
        },
        avatar: {
            type: Sequelize.TEXT('long'),
            field: 'Avatar',
        },
        uid: {
            type: Sequelize.STRING,
            field: 'UID',
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });

    function create(contact, callback) {
        return Contact.create(contact, callback);
    }

    function createBulk(contacts, callback) {
        return Contact.bulkCreate(companies, callback);
    }

    function get() {
        return Contact.findAll();
    }

    function getById(id) {
        return Contact.findOne({
            where: {
                Id: id
            }
        });
    }

    function getByUpdateDate(updateDate) {
        return Contact.findAll({
            where: {
                updateDate: {
                    $gte: updateDate
                }
            }
        });
    }

    function update(contact) {
        return Contact.update(contact, {
            where: {
                Id: contact.id
            }
        });
    }

    function remove(id) {
        return Contact.destroy({
            where: {
                id: id
            }
        });
    }

    return {
        create: create,
        get: get,
        getById: getById,
        getByUpdateDate: getByUpdateDate,
        update: update,
        remove: remove,
        schema: Contact
    };

};