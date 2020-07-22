export class HTTP {
  request({
    url,
    method = "GET",
    data = {},
  }) {
    const promise = new Promise((resolve, reject) => {
      let url = `https://api.66mz8.com/api${url}`
      wx.request({
        url,
        data,
        method,
        header: {
          'Content-Type': 'json'
        },
        success: res => {
          const statusCode = res.statusCode.toString();
          if (statusCode.startsWith("2")) {
            let data = JSON.parse(res.data)
            if (data.code == 200) {
              resolve(data)
            } else {
              reject(data.msg)
            }
          } else {
            this._show_error();
          }
        },
        fail: err => {
          reject(err);
          this._show_error();
        }
      })
      return promise;
    })
  }
  _show_error() {
    wx.showToast({
      title: '网络错误',
      icon: 'none'
    })
  }
}