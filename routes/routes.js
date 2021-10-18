
const logisticRouter = require('./logistic.routes')
const fasteningRouter = require('./fastening.routes')
const materialRouter = require('./material.routes')



const Routes = (app) =>{

    app.use('/api/logistic', logisticRouter);
    app.use('/api/fastening', fasteningRouter);
    app.use('/api/material', materialRouter);

}

module.exports = Routes;