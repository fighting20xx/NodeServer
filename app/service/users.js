'use strict';

const Service = require('egg').Service;

// const mongoose = app.mongoose;
// console.log(app);
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     userName: {
//         type: String
//     },
//     password: {
//         type: String
//     },
// });

// const mongoModel = mongoose.model('User', UserSchema);

class UsersService extends Service {
    constructor(ctx) {
        super(ctx)
        //todo mongoose和sequelize不兼容
        // const mongoose = require('../../node_modules/mongoose')
        // mongoose.connect('mongodb://127.0.0.1:27017/example')
        // const Schema = mongoose.Schema;

        // const UserSchema = new Schema({
        //     userName: {
        //         type: String
        //     },
        //     password: {
        //         type: String
        //     },
        // });

        // const mongoModel = mongoose.model('User', UserSchema);

    }
    async create(req) {
        const res = await this.mongoModel.create(req);
        return res;
    }
    async index() {
        const data = await this.mongoModel.find({});
        return data.map(item => item.userName);
    }
    async update(req) {
        const res = await this.mongoModel.update({
            userName: req.userName,
        }, req);
        return res;
    }
    async destroy(req) {
        const res = await this.mongoModel.remove({
            userName: req,
        }, err => {
            console.log(err);
        });
        return res;
    }

	async say() {
		return 'Hello Man!' + new Date();
	}
}

module.exports = UsersService;
