<template>
	<div class="com-container">
		<div class="com-chart" ref="goodline_ref"></div>
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
			this.chartInstance = this.$echarts.init(this.$refs.goodline_ref)
			const option = {
				title: {
					text: '生产线良品率',
					top: '1%',
					left: '1%',
					textStyle: {
						color: '#fff',
					},
				},

				legend: {
					top: '5%',
					right: '2%',
					textStyle: {
						color: '#fff',
					},
					data: ['维修', '保养'],
				},
				grid: {
          top:'17%',
					left: '3%',
					right: '4%',
					bottom: '2%',
					containLabel: true,
				},
				xAxis: {
					type: 'category',
					boundaryGap: true,
					axisTick: {
						show: true,
						//刻度与文字对齐
						alignWithLabel: true,
					},
					axisLabel: {
						color: '#fff',
						interval: 0,
					},
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
				},
				yAxis: {
					type: 'value',
					splitLine: {
						show: true,
						lineStyle: {
							color: 'rgba(131,101,101,0.8)',
							type: 'dashed',
						},
					},
					axisLabel: {
						formatter: '{value}',
						color: '#fff',
						// fontSize: '10',
					},
				},
				series: [
					{
						name: '保养',
						type: 'line',
						stack: '总量',
						symbol: 'none',
						itemStyle: {
							color: '#FF7880',
						},
						data: [120, 132, 101, 134, 90, 230, 210, 114, 323, 323, 178, 98],
					},
					{
						name: '维修',
						type: 'line',
						stack: '总量',
						symbol: 'none',
						itemStyle: {
							color: '#5FEDFE',
						},
						data: [220, 182, 191, 234, 290, 330, 310, 233, 123, 43, 233, 365],
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
		//自适应
		screenAdapter() {
			const titleFontSize = (this.$refs.goodline_ref.offsetWidth / 100) * 2
			const screenOption = {
				title: {
					textStyle: {
						fontSize: titleFontSize * 1.9,
					},
				},
				legend: {
					itemWidth: titleFontSize * 3,
					itemHeight: titleFontSize * 1.4,
					textStyle: {
						fontSize: titleFontSize * 1.5,
					},
				},
        xAxis:{
          axisLabel:{
            fontSize:titleFontSize*1.5
          }
        },
        yAxis:{
          axisLabel:{
            fontSize:titleFontSize*1.5
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
