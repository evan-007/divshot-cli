var util = require('util');
var format = require('chalk');

exports.require = ['authenticate', 'config', 'cwd'];

exports.tasks = {
  add: function (key, value) {
    this.cwd.setConfigValue(key, value);
    this.update('\nConfig value added');
    this.done();
  },
  remove: function (key) {
    if (!key) return this.error(this.errors.MISSING_CONFIG_KEY);
    
    this.cwd.removeConfigValue(key);
    this.update('\n' + format.bold(key) + ' removed');
  }
};

exports.description = 'edit keys and values from your app';
exports.tasks.add.description = 'add a value to the config file'; 
exports.tasks.remove.description = 'remove a value from the config file'; 

exports.register = function () {
  this.update(format.blue('\n=== app config ==='));
  this.update(JSON.stringify(this.config, null, 2));
  this.done(null, this.config);
};