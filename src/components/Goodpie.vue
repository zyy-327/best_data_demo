<template>
	<div class="com-container">
		<div class="com-chart" ref="goodpie_ref"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// 实例对象
			chartInstance: '',
		}
	},
	mounted() {
		// 调用实例化对象
		this.initChart()
		// 监听窗口大小的变化
		window.addEventListener('resize', this.screenAdapter)
		// 当页面加载时  提前调用下分辨率配置这个函数
		this.screenAdapter()
		//更新图例
		this.updateChart()
	},
	methods: {
		// 初始化图例
		initChart() {
			this.chartInstance = this.$echarts.init(this.$refs.goodpie_ref)
			const option = {
				color: ['#f8bd00', '#36A500', '#546ef3'],
				title:{
					text:'生产线良品率',
					top:'2%',
					left:'2%',
					textStyle:{
						color:'#fff'
					}
				},
				legend: {
					// x: 'center',
					// y: "bottom",
					top:'18%',
					right:'4%',
					// itemWidth: 0,
        // itemHeight: 0,
					orient: 'vertical',
					//  itemGap: 35,
					data: ['一生产线', '二生产线', '三生产线'],
					textStyle:{
						color:'#fff'	
					},
					formatter: function(name) {
						var index = 0
						var clientlabels = option.legend.data
						var clientcounts = [76, 45, 58]
						clientlabels.forEach(function(value, i) {
							if (value == name) {
								index = i
							}
						})
						return name + '  ' + clientcounts[index] + '%'
					},
				},
				// tooltip: {
				// 	show: true,
				// 	trigger: 'item',
				// 	formatter: '{a} : <br />{c}%',
				// },
				polar: {
					center: ['23%', '60%'],
					// radius: '300%', //图形大小
					// radius: ['46%', '55%'],
				},
				angleAxis: {
					show: false,
					startAngle: 90,
					min: 0,
					max: 100,
				},
				radiusAxis: {
					type: 'category',
					show: false,
					data: ['一生产线', '二生产线', '三生产线'],
				},
				series: [
					{
						type: 'bar',
						name: '三生产线',
						coordinateSystem: 'polar',
						barWidth:8, //宽度
						// barCategoryGap: "100%",
						// data: ["76.25","47.09","22.09"],
						data: ['58'],
					},
					{
						type: 'bar',
						name: '二生产线',
						coordinateSystem: 'polar',
						barWidth: 8,
						// barCategoryGap: "40%",
						// data: ["14.09","55.09","27.09"]
						data: ['45'],
					},
					{
						type: 'bar',
						name: '一生产线',
						coordinateSystem: 'polar',
						barWidth: 8,
						// barCategoryGap: "40%",
						// data: ["9.66","23.09","53.09"]
						data: ['76'],
					},
				],
			}
			this.chartInstance.setOption(option)
		},
		// 更新图例
		updateChart() {
			const updateOption = {}
			this.chartInstance.setOption(updateOption)
		},
		// 自适应
		screenAdapter() {
			const titleFontSize = (this.$refs.goodpie_ref.offsetWidth / 100) * 2
			const updateOption = {
				title:{
					textStyle:{
						fontSize:titleFontSize*3
					}
				},
				legend:{
					itemGap:titleFontSize*5.5,
					itemWidth:titleFontSize*3,
					itemHeight:titleFontSize*2,
					textStyle:{
						fontSize:titleFontSize*2.3
					}
				},
				polar:{
					radius:titleFontSize*37
				},
				series:[
					{
						barWidth:titleFontSize*1.5
					},
					{
						barWidth:titleFontSize*1.5
					},
					{
						barWidth:titleFontSize*1.5
					},
				]
			}
			this.chartInstance.setOption(updateOption)
			// 适配完成后调用resize函数
			this.chartInstance.resize()
		},
	},
}
</script>
