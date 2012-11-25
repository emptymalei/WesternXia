# Webpages@Western Xia Repo

This is the web show of Western Xia repo.

## Western Xia Timeline | 西夏歷史線

西夏歷史線將會把西夏的歷史通過時間線的方式來呈現出來。

該部分的數據目前有兩個人來提供：

* [@星河逍遥](http://weibo.com/emptymalei)
* [@自由的大梁](http://weibo.com/liangchen0802)

歡迎加入我們。

呈現數據分以下幾步：

* 從史書中摘錄。將事件的時間（公元紀年和「年號紀年」）、事件的描述、參考文獻、備註（例如關於該事件的爭議等等）這些列舉出來。
* 將幾個人的記錄合併，並按照時間順序排列。
* 製作成爲 JSON 格式的數據。如果不習慣文本編輯，可以使用[http://emptymalei.github.com/jsoneditoronline](http://emptymalei.github.com/jsoneditoronline)來輔助編輯。或者客戶端的 JSON 編輯軟件。
* 於原有的數據合併，並上載到[ github 項目](http://emptymalei.github.com/WesternXia/) 的 gh-pages 分支的 timeline/data 文件夾中。

所使用的文獻：

* 遼、金、元史
* 劍橋中國史的遼西夏金部分
* 草原帝國
* 其他

**我們都是理科生，對於歷史研究非常業餘，如果歷史系考古系等專業的人員能夠給我們提供建議，比如應該從何種史書中搜集資料等，我們將非常感謝。**








-----

迷失在歷史中的西夏王朝，失傳已久的神秘文字。

西夏，即白高大夏國，是公元一零三八年到一二二七年間存在於中國西北部的一個王朝。西夏國輝煌一時，雖然夏國曾經接受宋、金冊封，但夏國有強大的軍事實力、輝煌的文化發展，作爲附屬國燒有些喧賓奪主（？）之意。甚至元昊當朝時期，宋史所記載的宋、夏之間的戰役，大都以宋敗而終。夏國創蕃書（即西夏文），置十二監軍司，置學堂，辦策試，仿漢人建立官制。
<!--more-->
雖然，後來夏國遭受旱災和地震等天災，而且政權不穩定，但是也曾經出現國很長的一段盛世時期，但最終，一二二七年被強大的蒙古軍隊圍攻都城中興府，末代皇帝李睍被迫投降，西夏滅國。可嘆的是，雖然當時成吉思汗已死，卻留下遺命要殺主屠城，於是夏末帝被拖雷殺害。

之後元甚至沒有爲西夏修史，或許因爲西夏抵抗強烈，或許因爲西夏曾經收留蒙古叛徒，再或者，因爲西夏的實錄在戰爭中被毀，總之，後世所傳下來的關於西夏的史料少的可憐，而且很多史書中記載的歷史事件並不可信，導致我們所知的西夏歷史出現很多空白。

## 西夏歷史線項目

我和一位朋友建立了一個<a href="http://emptymalei.github.com/WesternXia/" title="西夏歷史線" target="_blank">。

西夏歷史線項目目前只是會把西夏的歷史通過時間線的方式來呈現出來，大致如下圖所示：

</a><a href="http://multiverse.lamost.org/blog/wp-content/uploads/2012/11/Screenshot-from-2012-11-25-165248.png"><img style="border:1px solid green;" src="http://multiverse.lamost.org/blog/wp-content/uploads/2012/11/Screenshot-from-2012-11-25-165248.png" alt="Timeline of Western Xia History" title="WesternXiaHistoryLine" width="550" class="aligncenter size-full wp-image-4239" /></a>


### 概覽

最基本的目標是準確，數據需要從正史中提取，而且對於像宋史這樣的有很多錯誤的史書，需要輔以其它資料。有鑑於史書所記載的時間的具體時間精度都不夠，所有只好按照年來將事件封裝，每年爲一組。

[issues 和 todo](https://github.com/emptymalei/WesternXia/issues) 包括：

* 參考文獻的引用格式和詳細內容的改進。考慮到可能會有極長的段落，可以添加自動將內容 cut 成爲一段標準長度，防止內容溢出屏幕，可以採用 fancybox 形式。
* 年號紀年應當與公元紀年來並列顯示，不管在時間軸上還是在每個 slide 中。採用長條顯示紀年，或者乾脆標示在時間軸上。
* 豎排顯示內容。內容採用豎排顯示。字體改用宋體，註釋改用仿宋體。關於字體的考慮還在進行中，所以暫且不設定。
* 快速跳轉年份。增加快速跳轉年份功能。

### 數據和呈現

數據最終決定採用 JSONP 格式，借用 TimelineJS 框架來呈現。

數據目前有兩個人來提供：

* <a href="http://weibo.com/emptymalei" style="font-style:bold;">@星河逍遥</a>
* <a href="http://weibo.com/liangchen0802" style="font-style:bold;">@自由的大梁</a>


<strong style="color:orange;">歡迎加入我們。</strong>

呈現數據分以下幾步：

* 從史書中摘錄。將事件的時間（公元紀年和「年號紀年」）、事件的描述、參考文獻、備註（例如關於該事件的爭議等等）這些列舉出來。
* 將幾個人的記錄合併，並按照時間順序排列。
* 製作成爲 JSON 格式的數據。如果不習慣文本編輯，可以使用[http://emptymalei.github.com/jsoneditoronline](http://emptymalei.github.com/jsoneditoronline)來輔助編輯。或者客戶端的 JSON 編輯軟件。
* 於原有的數據合併，並上載到[ github 項目](http://emptymalei.github.com/WesternXia/) 的 gh-pages 分支的 timeline/data 文件夾中。

所使用的文獻：

* 宋、遼、金、元史
* 劍橋中國史的遼西夏金部分
* 草原帝國
* 資治通鑑
* 續資治通鑑長編
* 西夏文文獻，如《餓藏黑水城文獻》等


### 備註

**我們都是理科生，對於歷史研究非常業餘，如果歷史系考古系等專業的人員能夠給我們提供建議，比如應該從何種史書中搜集資料等，我們將非常感謝。**


## 西夏項目

歷史線只是<a href="http://emptymalei.github.com/WesternXia/" style="color:red;font-style:bold;" target="_blank">整個項目的一部分</a>，因爲這種形式只能呈現西夏自己的歷史，而西夏與其它宋、遼、金、吐蕃等的關係沒有很形象的呈現出來，所以將來還會有更加立體化的方式來呈現這個曾經輝煌的王朝。

### TimelineJS 與 HTML5 Presentation

結合 TimelineJS 的單一性與現在流行的多向甚至 3D 元素結合起來，更好的呈現歷史。

可能用到的工具：

* [http://slides.html5rocks.com/](http://slides.html5rocks.com/)
* [https://github.com/bartaz/impress.js](https://github.com/bartaz/impress.js) (我已經 fork 出來了 [https://github.com/emptymalei/impress.js](https://github.com/emptymalei/impress.js)
* [https://github.com/hakimel/reveal.js](https://github.com/hakimel/reveal.js) (我已經 fork 出來了 [https://github.com/emptymalei/reveal.js](https://github.com/emptymalei/reveal.js) )
* [https://github.com/imakewebthings/deck.js](https://github.com/imakewebthings/deck.js) (我已經 fork 出來了 [https://github.com/emptymalei/deck.js](https://github.com/emptymalei/deck.js) )

其中 impress.js 我曾經用過，算是一個比較合理的工具，可以製作 3D canvas。這樣可以將各個國家的關係立體的呈現出來。

### 西夏文

經過<a href="http://www.zhihu.com/question/20605362" style="color:green;font-style:bold;" target="_blank">知乎朋友的幫助</a>，我現在可以將大部分的西夏文在網頁上顯示，只是處於字體版權的原因，現在還不能放在網上。

我希望將自己的西夏文學習過程整個顯示在網頁上，成爲西夏文教學網頁。同時可以順手建立網頁版的西夏文簡易詞典。計劃能否兌現，取決於我在自學西夏文這條路上能堅持多遠……



# 后记

（2012-10-25）

（抱歉突然转简化字。因为上面部分是从项目的介绍直接copy来的，所以保留了原来的字体。但是我从小受到简化字的教育，所以更喜欢简化汉字，因为简化可以提高书写速率。但是由于简化导致了简并等现象，所以处理古籍历史等事情是，还是需要使用繁体字来去简并，故项目介绍使用了繁体字。）

很久以来我一直对历史很感兴趣，只是我有一个很大的问题，对数字不敏感，因此历史时间总是记错，最终结果就是历史学的很差。但是这并不阻止我的兴趣，同学朋友凑到一起，涉及到历史事件，常常详细的像大家请教。所以时间，一般都是令我痛心的地方。

建立这个项目后，我就可以对整个历史有个大概的了解，同时也可以看到历史在哪些地方有了断层，哪些地方记载比较多，在时间线上，这些都一目了然。

我不是历史系的学生，而是一个毫不搭边的物理专业的学生，因此很有可能会把历史弄错。所以我必须提醒大家，这个项目的数据在经过专业人士校对之前，只能算是一个玩玩而已的项目，即便有些内容看上去很正式。

同时我也很希望有专业的历史学生来给我们提点建议之类，或者帮我们处理一下历史数据。专业的西夏学学者的给我们的批评我们也会虚心接受。

目前项目只有两个人，但是我希望有更多的人参与进来，我们可以一起让更多的人知道这段历史，让更多的人对西夏学感兴趣。
