var app = new Vue({
	el: '#app',
	data: {
		value: '',
		warningSelected: '网络热搜',
		mess: {
			name: "张三 "
		}

	},
	methods: {
		bottomClick: function(data) {
			if(data) {
				this.selected = data;
			}
		},
		loadTop: function() {}
	},
	created: function() {

	},
	mounted: function() {}
});