const lib = require('../../../../../lib/lib.js');

const ioInject = require('../../../helpers/io-inject.js');

test('create alice-bobbi module with config options for iOS only', () => {
  const mysnap = [];

  const inject = ioInject(mysnap);

  const options = {
    platforms: ['ios'],
    name: 'alice-bobbi',
    tvosEnabled: true,
    githubAccount: 'alicebits',
    authorName: 'Alice',
    authorEmail: 'contact@alice.me',
    license: 'ISC',
    useAppleNetworking: true
  };

  return lib(options, inject)
    .then(() => { expect(mysnap).toMatchSnapshot(); });
});
