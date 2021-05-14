<template>
	<div class="com-container">
		<div class="com-chart" ref="pie_ref"></div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				// 实例对象
				chartInstance: '',
				timer: '',
			}
		},
		destroyed() {
			// 在组件销毁的时候,需要将监听器取消掉
			window.removeEventListener('resize', this.screenAdapter)
					//销毁定时器
			clearInterval(this.timer)
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
			this.fun()
		},

		methods: {
			// 轮播高亮
			fun() {
				// 初始时在第0个
				let index = 0
				this.timer = setInterval(() => {
					// 隐藏提示框。
					// this.chartInstance.dispatchAction({
					// 	type: 'hideTip',
					// 	seriesIndex: 0,
					// 	dataIndex: index,
					// })
					// 取消高亮指定的数据图形
					this.chartInstance.dispatchAction({
						type: 'downplay',
						seriesIndex: 0,
						dataIndex: index == 0 ? 2 : index - 1,
					})
					// 高亮设置
					this.chartInstance.dispatchAction({
						type: 'highlight',
						seriesIndex: 0,
						dataIndex: index,
					})
					index++
					if (index > 2) {
						index = 0
					}
				}, 3000)
			},
			// 初始化实例对象
			initChart() {
				// let data=[{value:3333}]
				this.chartInstance = this.$echarts.init(this.$refs.pie_ref)
				const option = {
					// tooltip: {
					// 	show:false,
					// 	trigger: 'item',
					// },
					title: {
						text: '售后人员出勤',
						top: '2%',
						left: '2%',
						textStyle: {
							color: '#fff',
						},
					},
					color: ['#4ED5FF', '#BBA4F1', '#FF9E68'],

					series: [
						{
							type: 'pie',
							// radius: ['40%', '70%'],
							avoidLabelOverlap: false,
							// 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
							silent:true,
							label: {
								show: false,
								position: 'center',
								// fontSize: '18',
								// fontWeight: 'bold'
							},
							emphasis: {
								// focus:'none',
								label: {
									show: true,
									// fontSize: '40',
									// fontWeight: 'bold',
									color: '#fff',
									// formatter: '{d}%\n\n{b}',
									formatter: ['{a|{b}}','{b|{c}人}'].join('\n\n\n'),
								},
							},
							labelLine: {
								show: false,
							},
						},
					],
				}
				this.chartInstance.setOption(option)
			},
			// 更新图例
			updateChart() {
				const updateOption = {
					series: [
						{
							data: [
								{value: 25, name: '空间消毒'},
								{value: 15, name: '在外'},
								{value: 10, name: '物表灭菌'},
							
							],
						},
					],
				}
				this.chartInstance.setOption(updateOption)
			},
			// 自适应
			screenAdapter() {
				const titleFontSize = (this.$refs.pie_ref.offsetWidth / 100) * 2
				const screenOption = {
					// 标题文字的大小
					title: {
						textStyle: {
							fontSize: titleFontSize * 3,
						},
					},
					series: [
						//图表的大小
						{
							radius: [titleFontSize * 10, titleFontSize * 18],
							center: ['50%', '55%'],
							label: {
								fontSize: titleFontSize * 2,
							},
							emphasis: {
								label: {
									// fontSize: titleFontSize * 3.2,
									rich:{
										// 中间字的样式
										a:{
											fontSize:titleFontSize*2.5
											// color: '#f00',
										},
										// 中间数值样式
										b:{
											fontSize:titleFontSize*5
										}
									}
								},
							},
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
