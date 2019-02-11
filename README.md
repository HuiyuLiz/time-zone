# JavaScript 題目篇 - 新手 JS 地下城
4F - 時區
 <a href="https://huiyuliz.github.io/time-zone/" target="_blank">完成品</a>、
 <a href="https://github.com/HuiyuLiz/time-zone" target="_blank">程式碼</a>
 
 採原生JavaScript進行破關，第一次使用 toLocaleString 取得各時區的時間。



## 取出各地時區
參考資料 : <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString" target="_blank">Date.prototype.toLocaleString()</a>

使用options設定 toLocaleString 返回的字串，並另外加入 hour12: false (使用24小时制)以及當地時區，以下以台北時間為例。
    
```javascript
    const date = new Date()
    
    //year: "numeric" 會顯示 2019，year: "2-digit" 則會顯示12    
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false }
    
    //date.toLocaleString("語言格式", { timeZone: '時區', 自訂參數})    
    console.log(date.toLocaleString("en-US", { timeZone: 'Asia/Taipei', ...options }));    
    
    //Feb 11, 2019, 16:23:09
```

產出格式為 Feb 11, 2019, 16:23:09，之後用split 拆解重組成日、月、年、時間。
```javascript
    let localTime=date.toLocaleString("en-US", { timeZone: 'Asia/Taipei', ...options })
    let str = localTime.split(' ')
    let time = str[3].substring(0, 5)
    let day = str[1].replace(/,/g, '')
    let mon = str[0].toUpperCase()
    let year = str[2].replace(/,/g, '')
    console.log({time,day,mon,year})
    //{time: "16:53", day: "11", mon: "FEB", year: "2019"}
```

將各地時區分別帶入後取出時間，用 innerHTML 渲染至 HTML 中，每秒更新一次資料。


## 延伸閱讀
<a href="https://www.youtube.com/watch?v=DDu78WvmpB0" target="_blank">moment.js 日期時間管理資源庫入門導讀</a>

介紹moment.js 以及在實務上，前後端需注意的時間轉換格式。
