var options = [
  'a) pid',
  'b) title',
  'c) arch',
  'd) platform',
  'e) env',
  'm) memory usage',
  'u) uptime',
  'v) versions',
  'q) exit'
];

exports.showOptions = function (){
  options.forEach(function(option){
    console.log(option);
  });
};
