<template>
	<div class="com-container">
		<div class="com-chart" ref="piefour_ref"></div>
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
			this.chartInstance = this.$echarts.init(this.$refs.piefour_ref)
			// var radius = [28, 38]
			// var data = [
			// 	{ name: '剧情', value: 45 },
			// 	// { name: 'other', value: 75, itemStyle: {} },
			// ]
			const option = {
				// graphic: [
				// 	{
				// 		//环形图中间添加文字
				// 		type: 'text', //通过不同top值可以设置上下显示
				// 		left: 'center',
				// 		// top: '35%',
				// 		style: {
				// 			text: data.value,
				// 			textAlign: 'center',
				// 			fill: '#2D7BFF', //文字的颜色
				// 			// fontSize: 18,
				// 		},
				// 	},
				// 	// {
				// 	// 	type: 'text',
				// 	// 	left: 'center',
				// 	// 	top: '55%',
				// 	// 	style: {
				// 	// 		textAlign: 'center',
				// 	// 		fill: '#F2712B',
				// 	// 	},
				// 	// },
				// ],
				series: [
					{
						type: 'pie',
						// radius: [30, 40],
						center: ['25%', '25%'],
						hoverAnimation: false,
						labelLine: {
							show: false,
						},
						data: [
							{
								name: '故障率',
								value: 75,
								itemStyle: {
									color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
										{
											offset: 0,
											color: '#FABAA4',
										},
										{
											offset: 1,
											color: '#FF8D8D',
										},
									]),
								},
								label: {
									show: true,
									color: '#fff',
									position: 'center',
									formatter: '{b}\n\n{d}%',
								},
							},
							{
								value: 100 - 75,
								itemStyle: {
									color: '#354961',
								},
							},
						],
					},
					{
						type: 'pie',
						// radius: [30, 40],
						center: ['70%', '25%'],
						hoverAnimation: false,
						labelLine: {
							show: false,
						},
						data: [
							{
								name: '离线率',
								value: 75,
								itemStyle: {
									color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
										{
											offset: 0,
											color: '#BBA4F1',
										},
										{
											offset: 1,
											color: '#9472E6',
										},
									]),
								},
								label: {
									show: true,
									color: '#fff',
									position: 'center',
									formatter: '{b}\n\n{d}%',
								},
							},
							{
								value: 100 - 75,
								itemStyle: {
									color: '#354961',
								},
							},
						],
					},
					{
						type: 'pie',
						// radius: [30, 40],
						center: ['25%', '75%'],
						hoverAnimation: false,
						labelLine: {
							show: false,
						},
						data: [
							{
								name: '入网率',
								value: 75,
								itemStyle: {
									color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
										{
											offset: 0,
											color: '#87FFC2',
										},
										{
											offset: 1,
											color: '#2CE375',
										},
									]),
								},
								label: {
									show: true,
									color: '#fff',
									position: 'center',
									formatter: '{b}\n\n{d}%',
								},
							},
							{
								value: 100 - 75,
								itemStyle: {
									color: '#354961',
								},
							},
						],
					},
					{
						type: 'pie',
						// radius: [30, 40],
						center: ['70%', '75%'],
						hoverAnimation: false,
						labelLine: {
							show: false,
						},
						data: [
							{
								name: '退货率',
								value: 75,
								itemStyle: {
									color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
										{
											offset: 0,
											color: '#FF9E68',
										},
										{
											offset: 1,
											color: '#F2712B',
										},
									]),
								},
								label: {
									show: true,
									color: '#fff',
									position: 'center',
									formatter: '{b}\n\n{d}%',
								},
							},
							{
								value: 100 - 75,
								itemStyle: {
									color: '#354961',
								},
							},
						],
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
			const titleFontSize = (this.$refs.piefour_ref.offsetWidth / 100) * 2
			const screenOption = {
        series:[
          // 饼图1
          {
            radius:[titleFontSize*5,titleFontSize*6.5],
            label:{
              fontSize:titleFontSize*2.1
            }
          },
          // 饼图2
          {
            radius:[titleFontSize*5,titleFontSize*6.5],
            label:{
              fontSize:titleFontSize*2.1
            }
          },
          // 饼图3
          {
            radius:[titleFontSize*5,titleFontSize*6.5],
            label:{
              fontSize:titleFontSize*2.1
            }
          },
          // 饼图4
          {
            radius:[titleFontSize*5,titleFontSize*6.5],
            label:{
              fontSize:titleFontSize*2.1
            }
          }
        ]
      }
			this.chartInstance.setOption(screenOption)
			// 适配完后调用resize函数
			this.chartInstance.resize()
		},
	},
}
</script>
