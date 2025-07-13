const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = mongoose;

const majesticSearchHistorySchema = new Schema({
    username: String,
    userId: Number,
    site: String,
    url: String,
    time: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

majesticSearchHistorySchema.statics.countSearches = async function(userId, username, site) {
    const todayEnd = moment().endOf('d').utc();
    const todayStart = moment().startOf('d').utc();

    return await this.count({
        userId,
        username,
        site,
        time: {
            $gte: todayStart,
            $lte: todayEnd
        }
    });
}

const majesticSearchHistory = mongoose.model('majesticSearchHistory', majesticSearchHistorySchema);

module.exports = majesticSearchHistory;