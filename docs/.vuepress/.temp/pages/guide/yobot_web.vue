<template><h1 id="yobot会战管理网页后台使用手册"><a class="header-anchor" href="#yobot会战管理网页后台使用手册">#</a> yobot会战管理网页后台使用手册</h1>
<h2 id="初次使用"><a class="header-anchor" href="#初次使用">#</a> 初次使用</h2>
<h3 id="登录后台"><a class="header-anchor" href="#登录后台">#</a> 登录后台</h3>
<p>[图 私聊-重置密码-获得临时密码]</p>
<p>向机器人<strong>私聊</strong>发送<code>重置密码</code>，获得一个临时密码，打开<a href="http://yobot.zfjdhj.cn/yobot" target="_blank" rel="noopener noreferrer">公会战管理网页后台<OutboundLink/></a>，登录页面，输入QQ号和临时密码，确认登录。</p>
<p>[图 Web-登录-公会战后台登录页面]</p>
<p>首次登录成功后，会要求<strong>修改密码</strong>，请设置一个安全性较高的密码。如果跳过了这步，之后也可以在<strong>用户信息页面</strong>进行修改密码的操作。如果遗忘了密码，可以再次私聊机器人发送<code>重置密码</code>，使用临时密码来登录。</p>
<h3 id="个人界面"><a class="header-anchor" href="#个人界面">#</a> 个人界面</h3>
<p>[图 Web-个人界面-个人主界面]</p>
<p>登录后进入的是个人的主界面，点击头像可以打开<strong>用户信息页面</strong>，点击头像下方的公会按钮，可以进入<strong>公会战主面板</strong>。</p>
<p>[图 Web-用户信息界面-用户信息界面]</p>
<p>点击用户名一行可以修改自己在会战系统中的用户名，预约提醒偏好可选择<strong>仅提醒一次</strong>或<strong>提醒直至出刀</strong>，请根据自身情况选择。</p>
<p>用户权限分为<strong>公会战管理员</strong>和<strong>成员</strong>，如需提升权限，请由公会群内的授权人收集需要设置权限的用户的QQ账号，<a href="/guide/contact.md" target="_blank" rel="noopener noreferrer">联系维护组<OutboundLink/></a>反馈即可。</p>
<h2 id="会战管理"><a class="header-anchor" href="#会战管理">#</a> 会战管理</h2>
<h3 id="会战面板"><a class="header-anchor" href="#会战面板">#</a> 会战面板</h3>
<p>[图 Web-公会战主面板-公会战主面板]</p>
<p>会战面板可以分为两部分，上半部分是展示区，下半部分是操作区。展示区可以看到公会名、当前Boss的周目、编号、血量数字以及进度百分比。操作区可以进行报刀、锁定、SL、挂树、预约等操作。</p>
<p>[图 Web-血量进度条]</p>
<p>点击展示区内的<strong>Boss血量进度条或血量数字</strong>（分数或百分比皆可），可以<strong>修改Boss状态</strong>，调整它的周目、编号、血量。</p>
<p>[图 Web-奔跑的动画小人]</p>
<p>点击展示区内奔跑的<strong>动画小人</strong>，可以打开<strong>公会设置页面</strong>。</p>
<h3 id="修改状态"><a class="header-anchor" href="#修改状态">#</a> 修改状态</h3>
<p>[图 Web-修改BOSS状态]</p>
<p>修改状态可以修改Boss的周目、编号、血量。如果要清空数据，请在<strong>公会设置页面</strong>中操作，否则会导致分析数据不准确。</p>
<h3 id="公会设置"><a class="header-anchor" href="#公会设置">#</a> 公会设置</h3>
<p>[图 Web-公会设置页面]</p>
<p>游戏区服  本群会战系统对应的游戏区服，不同区服的周目血量不同。</p>
<ul>
<li>隐私设置<br>
出刀表无需登录：默认不勾选。勾选后，打开查刀页面不再要求登录，任何人都可查看。如果公会没有保密需求，推荐勾选，使用更加方便。<br>
允许api获取数据：默认勾选。允许外部调用会战统计数据，<code>公会战报告书</code>和<code>会战数据统计</code>需要此项，建议保持不变。</li>
<li>通知到群<br>
设置网页上的哪些操作会同步通知到公会群，默认全部通知。</li>
</ul>
<p>修改完成后，请<strong>点击确认保存设置</strong>。</p>
<p>最下方的是当前档案编号、导出数据、切换档案、删除数据。</p>
<p>当前档案编号</p>
<ul>
<li>导出数据：导出当前档案的数据。</li>
<li>切换档案：切换到其他档案。在会战结束后或开始前，需要切换到一个新的空白档案以保存下次会战的数据。</li>
</ul>
<p>[图 Web-切换档案]</p>
<p>删除数据：删除当前档案所有数据。如不需保存历史数据，可以选择使用此项。</p>
<p>[图 Web-删除数据]</p>
<h3 id="查刀页面"><a class="header-anchor" href="#查刀页面">#</a> 查刀页面</h3>
<p>[图 Web-查刀页面]</p>
<ol>
<li><strong>红名</strong>表示该成员<strong>今日已使用过SL</strong></li>
<li><strong>深色背景</strong>表示该成员<strong>已完成今日出刀</strong></li>
<li><strong>点击成员昵称或详细</strong>可以查看<strong>本日详细出刀情况</strong></li>
<li><strong>点击成员头像</strong>可以查看该成员的<strong>所有历史出刀记录</strong></li>
</ol>
<h3 id="群聊催刀"><a class="header-anchor" href="#群聊催刀">#</a> 群聊催刀</h3>
<p>[图 Web-催刀]</p>
<p>点击上方<strong>选中未完成</strong>按钮，再点击<strong>提醒出刀</strong>，确认发送即可催刀。</p>
<p>*注：因为某些原因，私聊提醒将不会得到支持</p>
<h3 id="删除成员"><a class="header-anchor" href="#删除成员">#</a> 删除成员</h3>
<p>[图 Web-催刀]</p>
<p>勾选需要删除的成员，拉到<strong>页面底部</strong>，点击<strong>删除</strong>按钮，确认删除即可删除成员。</p>
<h3 id="会战统计"><a class="header-anchor" href="#会战统计">#</a> 会战统计</h3>
<p>[图 Web-会战统计]</p>
<ul>
<li>出刀顺序<br>
能够查看到成员的报刀顺序、时间、Boss状态。</li>
<li>数据图表<br>
公会数据图表：不同Boss刀均伤害和出刀数、成员出刀考勤、尾刀统计、出刀时间、Boss血量曲线、成员Boss出刀数、成员伤害统计  成员数据图表：最高最低单次伤害、最高最低刀均伤害、Boss总伤害、伤害成长曲线、出刀时间、不同Boss刀均伤害和出刀数</li>
<li>均值偏差<br>
此处的均值偏差分数采用的是<strong>标准分数(Z-Score)</strong>。<br>
Z-Score/偏差值在统计学上是“标准化”的结果，具体的做法是将每一条数据与其平均值相减后除以其标准差，数字的大小可以诠释为“这个数据比起平均值差了多少个标准差”。<br>
可以标准化不同情况下不同的得分分数，其不受原数据的原始测量单位影响，并能正态化数据，其<strong>数值为零以上表示在平均水平以上，而数值为零以下表示在平均水平以下</strong>。<br>
在公会战中，这个数据可以排除不同Boss平均值不同、分布情况不同，以及是否尾刀/补偿刀带来的影响。<br>
由此，可以直接比较不同情况下的优劣情况而不需考虑其他因素，能够<strong>直观的看出成员的贡献大小</strong>。<br>
通过用一个标准的方式和同样打了这个boss的会内其他成员比较，来更加准确地反映出该成员出刀的水平，并且获取一个<strong>有参照意义的整体数据</strong>。</li>
<li>多维分析  <br>
能够从多个维度分析会战数据（不完善）。</li>
<li>原始数据<br>
可以查看或下载未经处理的原始数据。</li>
<li>获取api<br>
复制公会的数据接口地址，一般用来给其他插件调用。</li>
</ul>
<h2 id="本页面内容出处"><a class="header-anchor" href="#本页面内容出处">#</a> 本页面内容出处</h2>
<p>我摊牌了，我是抄的<br>
<a href="https://help.pcrlink.cn/guide/yobotweb/" target="_blank" rel="noopener noreferrer">https://help.pcrlink.cn/guide/yobotweb/<OutboundLink/></a></p>
</template>