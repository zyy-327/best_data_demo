<template>
	<div class="com-container">
		<div class="com-chart" ref="bar_ref"></div>
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
		//初始化实例对象
		initChart() {
			this.chartInstance = this.$echarts.init(this.$refs.bar_ref)
			const option = {
        title:{
          text:'设备类型分布',
          textStyle:{
            color:'#fff'
          }
        },
				grid: {
					top: '15%',
					right: '3%',
					left: '2%',
					bottom: '2%',
					containLabel: true,
				},
				xAxis: [
					{
						type: 'category',
						// color: '#59588D',
						data: ['空间消毒', '空气消毒', '低温灭菌', '物表消毒', '消毒存储','消毒存储1','消毒耗材'],
						axisLabel: {
							// margin: 20,
							color: '#fff',
               interval:0,
						},
						// axisLine: {
						// 	lineStyle: {
						// 		// color: '#d2d2d2',
						// 	},
						// },
						axisTick: {
							show: true,
						},
					},
				],
				yAxis: [
					{
						min: 0,
						max: 100,
						axisLabel: {
							formatter: '{value}k',
							color: '#fff',
						},
						// axisLine: {
						// 	show: false,
						// 	lineStyle: {
						// 		color: 'rgba(107,107,107,0.37)',
						// 	},
						// },
						// axisTick: {
						// 	show: false,
						// },
						splitLine: {
							lineStyle: {
								color: 'rgba(131,101,101,0.8)',
								type: 'dashed',
							},
						},
					},
				],
				series: [
					{
						type: 'bar',
						data: [40, 90, 10, 20, 56,35,46],
						// barWidth: '10',
						itemStyle: {
							normal: {
								color: new this.$echarts.graphic.LinearGradient(
									0,
									0,
									0,
									1,
									[
										{
											offset: 0,
											color: '#00E5FF', // 0% 处的颜色
										},
										{
											offset: 1,
											color: '#17323F', // 100% 处的颜色
										},
									],
									false
								),
								// barBorderRadius: [5, 5, 0, 0],
							},
						},
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
			const titleFontSize = (this.$refs.bar_ref.offsetWidth / 100) * 2
			const screenOption = {
        title:{
          textStyle:{
            fontSize:titleFontSize*2
          }
        },
        xAxis:{
          axisLabel:{
            textStyle:{
              fontSize:titleFontSize*1.4
            }
          }
        },
        yAxis:{
          axisLabel:{
            textStyle:{
              fontSize:titleFontSize*1.4
            }
          }
        },
        series:[
          {
            type:'bar',
            barWidth:titleFontSize*2,
           	itemStyle: {
								barBorderRadius: [titleFontSize/2, titleFontSize/2, 0, 0],
							
						},
          }
        ]
      }
			this.chartInstance.setOption(screenOption)
			// 适配完成后调用resize函数
			this.chartInstance.resize()
		},
	},
}
</script>
