var app = new Vue({
	el: '#app',
	data: {
		bottomSelected: '收藏',
		conFontSize: .55,
		sharePop: false,
		fontSizePop: false,
	},
	methods: {
		//分享弹窗
		shareClick: function() {
			this.sharePop = true;
		},
		//关闭弹窗
		closeShare: function() {
			this.sharePop = false;
		},
		//改变字号弹窗
		fontSizeChange: function() {
			this.fontSizePop = true;
		},
		//设置字体
		changeFont: function(data) {
			this.fontSizePop = false;
			if(data == 1) {
				this.conFontSize = .4;
			} else if(data == 2) {
				this.conFontSize = .55;
			} else if(data == 3) {
				this.conFontSize = .7;
			}
		}
	},
	created: function() {},
	mounted: function() {}
});