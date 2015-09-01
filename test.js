'use strict';
var test = require('ava');
var childProcess = require('child_process');
var hasha = require('hasha');

test('main', function (t) {
	t.plan(2);

	childProcess.execFile('./cli.js', ['unicorn'], function (err, stdout) {
		t.error(err);
		t.is(stdout.trim(), hasha('unicorn'));
	});
});

test('stdin', function (t) {
	t.plan(2);

	childProcess.exec('printf unicorn | ./cli.js', function (err, stdout) {
		t.error(err);
		t.is(stdout.trim(), hasha('unicorn'));
	});
});
