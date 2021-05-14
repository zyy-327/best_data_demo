<template>
	<div class="com-container">
		<div class="com-chart" ref="producebar_ref"></div>
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
			this.chartInstance = this.$echarts.init(this.$refs.producebar_ref)
			const option = {
				title: {
					text: '生产走势',
					top: '2%',
					textStyle: {
						color: '#fff',
					},
				},
				grid: {
					top: '20%',
					right: '12%',
					left: '8%',
					bottom: '10%',
				},
				legend: {
					top: '5%',
					right: '2%',
					// itemWidth: 10,
					// itemHeight: 10,
					textStyle: {
						// fontSize: 14,
						color: '#fff',
						// padding: [3, 8, 0, 2],
					},
					data: ['数值', '增长率'],
				},

				xAxis: [
					{
						type: 'category',
						data: [
							'1月',
							'2月',
							'3月',
							'4月',
							'5月',
							'6月',
							'7月',
							'8月',
							'9月',
							'10月',
							'11月',
							'12月',
						],
						axisLine: {
							show: false,
						},
						axisTick: {
							show: true,
						},
						splitLine: {
							show: false,
						},
						axisLabel: {
							color: '#fff',
							interval: 0,
							// textStyle: {
							// 	fontSize: 10,
							// },
							// fontFamily: 'LCDEF',
						},
					},
				],
				yAxis: [
					{
						type: 'value',
						//   name: '单位：家',
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false,
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: 'rgba(131,101,101,0.8)',
								type: 'dashed',
							},
						},
						axisLabel: {
							formatter: '{value}k',

							color: '#fff',
							// fontSize: '10',
						},
					},
					{
						type: 'value',
						// name: '合格率 (%)',
						position: 'right',
						axisLabel: {
							formatter: '{value} %',
							color: '#fff',
						},
						max: 100,
						splitLine: {
							show: false,
						},
						// axisPointer: {
						//     show: true,
						// },
						axisTick: {
							show: false,
						},
						axisLine: {
							show: false,
						},
					},
				],
				series: [
					{
						type: 'bar',
						name: '数值',
						barWidth: '20',
						data: [6, 9, 10, 5, 7, 12, 8, 22, 16, 13, 21, 14],
						itemStyle: {
							normal: {
								color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
									{
										offset: 0,
										color: '#1A4352',
									},
									{
										offset: 1,
										color: '#00FF90',
									},
								]),
							},
						},
					},
					{
						type: 'line',
						name: '增长率',
						yAxisIndex: 1,
						symbol: 'none',
						itemStyle: {
							color: '#5FEDFE',
						},
						// symbolSize: 10,
						// symbol: 'circle',
						data: [10, 35, 25, 18, 26, 41, 30, 79, 57, 48, 77, 53],
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
			const titleFontSize = (this.$refs.producebar_ref.offsetWidth / 100) * 2
			const screenOption = {
				title: {
					textStyle: {
						fontSize: titleFontSize * 1.9,
					},
				},
				legend: {
					itemWidth: titleFontSize * 2,
					itemHeight: titleFontSize * 1.4,
					textStyle: {
						fontSize: titleFontSize * 1.5,
					},
				},
				xAxis: {
					axisLabel: {
						textStyle: {
							fontSize: titleFontSize * 1.5,
						},
					},
				},
				yAxis: [
					{
						axisLabel: {
							fontSize: titleFontSize * 1.5,
						},
					},
					{
						axisLabel: {
							fontSize: titleFontSize * 1.5,
						},
					},
				],
				series: [
					{
						type: 'bar',
						barWidth: titleFontSize * 2,
					},
				],
			}
			this.chartInstance.setOption(screenOption)
			// 适配完成后调用resize函数
			this.chartInstance.resize()
		},
	},
}
</script>
