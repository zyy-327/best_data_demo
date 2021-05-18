// 横向柱状图
<template>
	<div class="com-container">
		<div class="com-chart" ref="barexpend_ref"></div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				//实例对象
				chartInstance: '',
			}
		},
		destroyed() {
			// 在组件销毁的时候,需要将监听器取消掉
			window.removeEventListener('resize', this.screenAdapter)
		},
		mounted() {
			// 调用实例对象
			this.initChart()
			// 监听窗口大小的变化
			window.addEventListener('resize', this.screenAdapter)
			// 当页面加载时  提前调用下分辨率配置这个函数
			this.screenAdapter()
			// 调用更新图例的函数
			this.updateChart()
		},
		methods: {
			//初始化实例对象
			initChart() {
				this.chartInstance = this.$echarts.init(this.$refs.barexpend_ref)
				const option = {
					title: {
						text: '配件消耗',
						top: '2%',
						left: '1%',
						textStyle: {
							color: '#fff',
						},
					},
					// tooltip: {
					// 	trigger: 'axis',
					// 	axisPointer: {
					// 		type: 'shadow',
					// 	},
					// },
					// legend: {
					// 	data: ['2011年', '2012年'],
					// },
					grid: {
						left: '3%',
						top: '15%',
						right: '7%',
						bottom: '3%',
						containLabel: true,
					},
					xAxis: {
						type: 'value',
						// boundaryGap: [0, 0.01],
						interval: 300,
						axisLabel: {
							formatter: '{value}',
						},
						splitLine: {
							// show:false
							lineStyle: {
								width: 1,
								color: '#666',
								type: 'dashed',
							},
						},
					},
					yAxis: {
						type: 'category',
						// data: ['广东', '湖北', '湖南', '浙江', '江苏', '四川'],
					},
					series: [
						{
							// name: '2011年',
							type: 'bar',
							// max:1200,
							// data: [182, 236, 290, 1110, 567, 630],
							itemStyle: {
								color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
									{
										offset: 0,
										color: 'rgba(26,68,84,1)',
									},
									{
										offset: 1,
										color: 'rgba(73,173,204,1)',
									},
								]),
							},
						},
						// {
						// 	name: '2012年',
						// 	type: 'bar',
						// 	data: [19325, 23438, 31000, 121594, 134141, 681807],
						// },
					],
				}
				this.chartInstance.setOption(option)
			},
			// 更新图例
			updateChart() {
				const updateOption = {
					yAxis: {
						data: ['控制板', '点击', '高效', '中效', '初效', '机芯'],
					},
					series: [
						{
							data: [182, 236, 290, 1110, 567, 630],
						},
					],
				}
				this.chartInstance.setOption(updateOption)
						// 随机数据
				setInterval(() => {
					var data = updateOption.series[0].data
					data.shift()
					data.push(Math.round(Math.random() * 1200))
			
					this.chartInstance.setOption(updateOption)
				}, 2000)
			},
			// 自适应屏幕
			screenAdapter() {
				const titleFontSize = (this.$refs.barexpend_ref.offsetWidth / 100) * 2
				const screenOption = {
					title: {
						textStyle: {
							fontSize: titleFontSize * 2.2,
						},
					},
					xAxis: [
						{
							axisLabel: {
								fontSize: titleFontSize * 1.8,
								color: '#fff',
							},
						},
					],
					yAxis: [
						{
							axisLabel: {
								fontSize: titleFontSize * 1.8,
								color: '#fff',
							},
						},
					],
					series: [
						{
							barWidth: titleFontSize * 2.5,
						},
					],
				}
				this.chartInstance.setOption(screenOption)
				// 适配完分辨率后调用resize函数
				this.chartInstance.resize()
			},
		},
	}
</script>
