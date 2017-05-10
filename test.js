import test from 'ava';
import execa from 'execa';
import hasha from 'hasha';

const input = 'unicorn';

test('main', async t => {
	const {stdout} = await execa('./cli.js', [input]);
	t.is(stdout, hasha(input));
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {input});
	t.is(stdout, hasha(input));
});
