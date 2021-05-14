<template>
	<div class="com-container">
		<div class="com-chart" ref="line_ref"></div>
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
		// 初始化实例对象
		initChart() {
			this.chartInstance = this.$echarts.init(this.$refs.line_ref)
			const option = {
				title: {
					text: '品类退货率分析',
					top:'2%'
				},
				grid: {
					left: '1%',
					right: '3%',
					top: '25%',
					bottom: '3%',
					containLabel: true,
				},
				tooltip: {
					show: true,
					trigger: 'item',
				},
				legend: {
					show: true,
					// x: 'right',
					right:'2%',
					top: '7%',
					// icon: 'stack',
					// itemWidth: 10,
					// itemHeight: 10,
					textStyle: {
						color: '#fff',
					},
					data: ['待机', '运行', '离线', '故障'],
				},
				xAxis: [
					{
						type: 'category',
						boundaryGap: true,
						// boundaryGap:[1,1],
						axisLabel: {
							color: '#fff',
						},
						axisLine: {
							show: true,
							lineStyle: {
								// color: '#397cbc',
							},
						},
						axisTick: {
							show: true,
							//刻度与文字对齐
							alignWithLabel: true,
						},
						// splitLine: {
						// 	show: false,
						// 	lineStyle: {
						// 		color: '#195384',
						// 	},
						// },
						data: ['2020.3 季度', '2020.4 季度', '2021.1 季度', '2021.2 季度'],
					},
				],
				yAxis: [
					{
						type: 'value',
						// name : '信息量',
						// min: 0,
						// max: 12,
						// interval:3,
						// scale: true,
						axisLabel: {
							formatter: '{value}k',
							textStyle: {
								color: '#fff',
							},
						},
						// axisLine: {
						// 	// show: false,
						// 	lineStyle: {
						// 		color: '#27b4c2',
						// 	},
						// },
						// axisTick: {
						// 	show: false,
						// },
						splitLine: {
							show: true,
							lineStyle: {
								color: '#666',
								type: 'dashed',
							},
						},
					},
					// {
					// 	type : 'value',
					// 	name : '浏览量',
					// 	min:0,
					// 	max:1000,
					// 	axisLabel : {
					// 		formatter: '{value} 人',
					// 		textStyle:{
					// 			color:'#186afe'
					// 		}
					// 	},
					// 	axisLine:{
					// 		lineStyle:{
					// 			color:'#186afe'
					// 		}
					// 	},
					// 	axisTick:{
					//           	show:false,
					//           },
					// 	splitLine:{
					// 		show:true,
					// 		lineStyle:{
					// 			color:'#11366e'
					// 		}
					// 	}
					// }
				],
				series: [
					{
						name: '待机',
						type: 'line',
						stack: '总量',
						symbol: 'none',
						// symbolSize: 8,
						itemStyle: {
							normal: {
								// color: '#0092f6',
								lineStyle: {
									color: 'rgba(95,237,254,1)',
									width: 1,
								},
								// areaStyle: {
								// 	//color: '#94C9EC'
								// 	color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
								// 		{
								// 			offset: 0,
								// 			color: 'rgba(7,44,90,0.3)',
								// 		},
								// 		{
								// 			offset: 1,
								// 			color: 'rgba(0,146,246,0.9)',
								// 		},
								// 	]),
								// },
							},
						},
						// markPoint:{
						// 	itemStyle:{
						// 		normal:{
						// 			color:'red'
						// 		}
						// 	}
						// },
						data: [12, 31, 10, 14, 9, 6, 10, 12, 11, 4, 7, 10],
					},
					{
						name: '运行',
						type: 'line',
						stack: '总量',
						symbol: 'none',
						// symbolSize: 8,

						itemStyle: {
							normal: {
								// color: '#00d4c7',
								lineStyle: {
									color: 'rgba(135,255,194,1)',
									width: 1,
								},
								// areaStyle: {
								// 	//color: '#94C9EC'
								// 	color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
								// 		{
								// 			offset: 0,
								// 			color: 'rgba(7,44,90,0.3)',
								// 		},
								// 		{
								// 			offset: 1,
								// 			color: 'rgba(0,212,199,0.9)',
								// 		},
								// 	]),
								// },
							},
						},
						data: [20, 12, 11, 24, 20, 30, 10, 21, 14, 19, 30, 10],
					},
					{
						name: '离线',
						type: 'line',
						stack: '总量',
						symbol: 'none',
						// symbolSize: 8,
						itemStyle: {
							normal: {
								// color: '#aecb56',
								lineStyle: {
									color: 'rgba(254,242,104,1)',
									width: 1,
								},
								// areaStyle: {
								// 	//color: '#94C9EC'
								// 	color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
								// 		{
								// 			offset: 0,
								// 			color: 'rgba(7,44,90,0.3)',
								// 		},
								// 		{
								// 			offset: 1,
								// 			color: 'rgba(114,144,89,0.9)',
								// 		},
								// 	]),
								// },
							},
						},
						data: [15, 32, 21, 54, 10, 30, 10, 10, 32, 21, 14, 10],
					},
					{
						name: '故障',
						type: 'line',
						stack: '总量',
						symbol: 'none',
						// symbolSize: 8,
						itemStyle: {
							normal: {
								// color: '#aecb56',
								lineStyle: {
									color: 'rgba(255,120,128,1)',
									width: 1,
								},
								// areaStyle: {
								// 	//color: '#94C9EC'
								// 	color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
								// 		{
								// 			offset: 0,
								// 			color: 'rgba(7,44,90,0.3)',
								// 		},
								// 		{
								// 			offset: 1,
								// 			color: 'rgba(114,144,89,0.9)',
								// 		},
								// 	]),
								// },
							},
						},
						data: [15, 22, 21, 14, 19, 33, 41, 15, 23, 21, 54, 19],
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
			const titleFontSize = (this.$refs.line_ref.offsetWidth / 100) * 2
			const screenOption = {
				title:{
					textStyle:{
						fontSize:titleFontSize*1.6,
						color:'#fff'
					}
				},
				legend:{
					textStyle:{
						fontSize:titleFontSize*1.3
					}
				},
				xAxis:{
					axisLabel:{
						fontSize:titleFontSize*1.4
					}
				},
				yAxis:{
					axisLabel:{
						textStyle:{
							fontSize:titleFontSize*1.4
						}
					}
				}
			}
			this.chartInstance.setOption(screenOption)
			// 适配完成后调用resize函数
			this.chartInstance.resize()
		},
	},
}
</script>
