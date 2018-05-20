<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">WiFuick</h1>
        </header>
        <div class="mui-content">
            <ul class="mui-table-view">
				
				<li class="mui-table-view-cell mui-collapse" :class="mainBoardTag=='basic' && 'mui-active'">
					<a class="mui-navigate-right collapse-title" href="#" @click="mainBoardTag='basic'">基础功能</a>
					<div class="mui-collapse-content no-padding">
						<ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/basic/nearby-ap">
								<span class="wificon icon-ap"></span>
								<div class="mui-media-body">附近热点</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/basic/nearby-term">
								<span class="wificon icon-wifi"></span>
								<div class="mui-media-body">附近终端</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/basic/captrue-mgr">
								<span class="wificon icon-capture"></span>
								<div class="mui-media-body">抓包管理</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/basic/record-info">
								<span class="wificon icon-record"></span>
								<div class="mui-media-body">信息记录</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/basic/nic-mgr">
								<span class="wificon icon-nic"></span>
								<div class="mui-media-body">网卡设置</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/basic/settings">
								<span class="wificon icon-settings"></span>
								<div class="mui-media-body">软件设置</div>
							</a></li>
						</ul> 
					</div>
				</li>
				
				<li class="mui-table-view-cell mui-collapse" :class="mainBoardTag=='expert' && 'mui-active'">
					<a class="mui-navigate-right collapse-title" href="#" @click="mainBoardTag='expert'">专家必备</a>
					<div class="mui-collapse-content no-padding">
						<ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/expert/wifi-scan">
								<span class="wificon icon-wifiscan"></span>
								<div class="mui-media-body">无线扫描</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/expert/fake-ap">
								<span class="wificon icon-killwifi"></span>
								<div class="mui-media-body">热点诱导</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/expert/kill-session">
								<span class="wificon icon-wifistop"></span>
								<div class="mui-media-body">无线终止</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/expert/soft-ap">
								<span class="wificon icon-mobileap"></span>
								<div class="mui-media-body">手机热点</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/expert/fake-ap">
								<span class="wificon icon-cipher"></span>
								<div class="mui-media-body">密钥截取</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/expert/restore-pkt">
								<span class="wificon icon-pkt"></span>
								<div class="mui-media-body">数据包还原</div>
							</a></li>
						</ul> 
					</div>
				</li>
				
				<li class="mui-table-view-cell mui-collapse" :class="mainBoardTag=='hacker' && 'mui-active'">
					<a class="mui-navigate-right collapse-title" href="#" @click="mainBoardTag='hacker'">黑客专享</a>
					<div class="mui-collapse-content no-padding">
						<ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/hacker/flow-analysis">
								<span class="wificon icon-analysis"></span>
								<div class="mui-media-body">流量分析</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/hacker/private-info">
								<span class="wificon icon-private"></span>
								<div class="mui-media-body">私密数据</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/hacker/arp-spoof">
								<span class="wificon icon-arp">
									<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
								</span>
								<div class="mui-media-body">ARP欺骗</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/hacker/dns-spoof">
								<span class="wificon icon-dns">
									<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
								</span>
								<div class="mui-media-body">DNS欺骗</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/hacker/page-ctrl">
								<span class="wificon icon-page"></span>
								<div class="mui-media-body">网页控制</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/hacker/force-download">
								<span class="wificon icon-download"></span>
								<div class="mui-media-body">强行下载</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/hacker/app-ctrl">
								<span class="wificon icon-app"></span>
								<div class="mui-media-body">应用控制</div>
							</a></li>
						</ul>
					</div>
				</li>
				
				<li class="mui-table-view-cell mui-collapse" :class="mainBoardTag=='team' && 'mui-active'">
					<a class="mui-navigate-right collapse-title" href="#" @click="mainBoardTag='team'">协同作战</a>
					<div class="mui-collapse-content no-padding">
						<ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/team/make-team">
								<span class="wificon icon-team"></span>
								<div class="mui-media-body">建立战队</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/team/team-chat">
								<span class="wificon icon-chat"></span>
								<div class="mui-media-body">队内沟通</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/team/share-info">
								<span class="wificon icon-share"></span>
								<div class="mui-media-body">信息共享</div>
							</a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/team/location">
								<span class="wificon icon-location"></span>
								<div class="mui-media-body">综合定位</div>
							</a></li>
						</ul> 
					</div>
				</li>

			</ul>
            
        </div>
    </div>
</template>

<script>
	import '@/assets/logo.css'
	import '@/assets/wificon.css'
    export default {
        name: 'App',
        data() {
            return {
				mainBoardTag: localStorage.getItem('MainBoardTag') || 'basic'
			}
        },
		components: {},
		watch: {
			'$route' (to, from) {
				console.log(to, from);
			}
		},
		methods: {
		},
		mounted(){
		},
		destroyed(){
			localStorage.setItem('MainBoardTag', this.mainBoardTag);
		}
    }

</script>

<style>
.icon-fix-style{
    width: .858em;
    height: .858em;
    animation: none;
}

.mui-table-view-cell.mui-collapse .mui-collapse-content.no-padding{
	padding: 0;
}
.no-padding > .mui-grid-view.mui-grid-9{
	padding: 0;
	margin: 0;
}
.no-padding > .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    vertical-align: top;
    padding: 11px 15px;
    margin: 0;
    border-right: 1px solid #EEE;
    border-bottom: 1px solid #EEE;
}
.mui-table-view-cell:after{
	left: 0;
}
.mui-table-view-cell.mui-active{
	background-color: #fff;
}
.mui-table-view-cell.mui-active .collapse-title{
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
	background-color: #fafafa;
}
.mui-table-view-cell.mui-active:first-child .collapse-title{
	border-top-width: 0;
}
.mui-table-view-cell.mui-collapse .no-padding .mui-table-view-cell:after{
	left: 0;
	content: none;
}

.wificon {
    font-size: 2.4em;
    position: relative;
    display: inline-block;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
}
</style>
