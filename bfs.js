function request_entry(start, end) {
  // query for id type
  return bfs([start,'Id'], [end,'Id']);
}

var test = [[0,'Id'],[456,'FID'],[456,'Id']]

function bfs(start, end) {
  var ret=[[],[],[]]
  var q = [[[start,[]],undefined],
          [],[],[]];
  var cur = 0,head,obj;
  //var api = require();
  while(true) {
    while(q[cur].length == 0);
    head=q[cur].shift();
    if(head==undefined) {
      if(cur==3)  return ret;
      q[cur]=[]
      q[cur+1].push(undefined);
      ++cur;
    }
    else {
      //api.request for next level and push to q[cur+1]
      var prepath = head[1].slice();
      prepath.push(head[0][0]);
      if(cur < 3) {
        var len = test.length;
        for(var i=0; i<len; ++i) {
          q[cur+1].push([test[i],prepath])
        }
      }
      //console.log(JSON.stringify(q[cur+1]));
      var obj=head[0];
      if(obj[0]==end[0] && obj[1]==end[1]) {
        ret[cur-1].push(prepath);
      }
    }
  }
}

exports.start = request_entry;