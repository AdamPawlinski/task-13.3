process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    switch (instruction) {
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case '/node':
        node = process.versions.node;
        process.stdout.write(node + '\n');
        break;
      case '/lang':
        lang = process.env.lang;
        process.stdout.write(lang + '\n');
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
  }
});
