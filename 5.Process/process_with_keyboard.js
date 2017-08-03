var help = require('./help.js');

var keyboard = require('./keyboard.js');

keyboard.onReadable(function (option){
  switch(option) {
    case 'a':
      console.log('pid:' + process.pid);
      break;
    case 'b':
      console.log('title:' + process.title);
      break;
    case 'c':
      console.log('arch:' + process.arch);
      break;
    case 'd':
      console.log('platform:' + process.platform);
      break;
    case 'e':
      console.log(process.env);
      break;
    case 'm':
        console.log(process.memoryUsage());
        break;
    case 'u':
        console.log(process.uptime());
        break;
    case 'v':
        console.log(process.versions());
        break;
    case 'q':
      process.exit(0);
    default:
      help.showOptions();
  }
});
