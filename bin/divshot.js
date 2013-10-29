#!/usr/bin/env node

var path = require('path');
var mkdirp = require('mkdirp');
var feedback = require('feedback');

// Create our .divshot directory
mkdirp(divshotDir(), function (err) {
  if (err) {
    return feedback.error('Looks like we don\'t have access to your home directory. Please adjust your permissions before you continue');
  }
  
  require('../lib/divshot');
});


function divshotDir() {
  return path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.divshot', 'config');
}