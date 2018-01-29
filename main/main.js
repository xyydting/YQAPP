var app = new Vue({
	el: '#app',
	data: {
		bottomSelected: '警示',
		warningSelected: '全部',
		subscribeSelected: '全部'
	},
	methods: {
		bottomClick: function(data) {
			if(data) {
				this.selected = data;
			}
		},
		loadTop:function() {
		}
	},
	created: function() {

	},
	mounted: function() {}
});