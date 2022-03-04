require('dotenv/config');

var exec = require('child_process').exec;

var dbOptions =  {
    host: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    keepLastDaysBackup: 2,
    autoBackupPath: './backup/'
};

var currentDate = new Date();
var newBackupDir = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
var newBackupPath = dbOptions.autoBackupPath + 'mongodump-' + newBackupDir; // New backup path for current backup process

var cmd = 'mongodump ' + dbOptions.host + ' --out ' + newBackupPath;

exec(cmd, function (error, stdout, stderr) {
    console.log(error)
})