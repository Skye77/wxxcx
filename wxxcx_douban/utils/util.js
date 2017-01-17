function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function convertToStarsArray(stars) {
  var arr = [];
  var full = (stars + '')[0] - 0;
  var hasHalf = (stars + '')[1] - 0 == 5;
  for (var i = 0; i < full; i++) {
    arr.push(1);
  }
  hasHalf && arr.push(2);
  var len = arr.length;
  for (var i = 0; i < 5 - len; i++) {
    arr.push(0);
  }
  return arr;
  console.log(arr);

}

function convertToCastString(casts){
  var castsjoin = "";
    for(var idx in casts){
      castsjoin = castsjoin + casts[idx].name +" / ";
    }
    return castsjoin.substring(0, castsjoin.length-2);
}

function converToCastInfos(casts){
  var castsArray = []
  for (var idx in casts){
    var cast = {
      img:casts[idx].avatars ? casts[idx].avatars.large:"",
      name:casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray;
}

function http(url, callBack) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "content-Type": "application"
    },
    success: function (res) {
      callBack(res.data);
    },
    fail: function (error) {
      console.log(error)
    }

  })
}

module.exports = {
  convertToStarsArray: convertToStarsArray,
  http: http,
  formatTime: formatTime,
  convertToCastString:convertToCastString,
  converToCastInfos:converToCastInfos,
}

// function SaoSao() {
//   wx.scanQRCode({
//     needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
//     scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
//     success: function (res) {
//       var result = res.resultStr;
//       alert(result);//有时候弹出，有时候直接跳转
//     }
//   })

// }

// module.exports = {
//   formatTime: formatTime,
//   SaoSao: SaoSao
// }
