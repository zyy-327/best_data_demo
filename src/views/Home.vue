<template>
	<div class="container">
		<header>
			<div>
				<div class="sky">
					<div class="city">{{ city }}</div>
					<!-- 天气图标 -->
					<div class="sky_1">
						<img src="../assets/img/组 1145.png" alt="" v-if="sky == '阴'" />
						<img src="../assets/img/组 1146.png" alt="" v-if="sky == ''" />
						<img src="../assets/img/组 1148.png" alt="" v-if="sky == '多云'" />
						<img src="../assets/img/组 1147.png" alt="" v-if="sky == ''" />
						<img src="../assets/img/组 1149.png" alt="" v-if="sky == ''" />
						<img src="../assets/img/组 1152.png" alt="" v-if="sky == ''" />
						<img src="../assets/img/组 1153.png" alt="" v-if="sky == ''" />
						<img src="../assets/img/组 1150.png" alt="" v-if="sky == ''" />
						<img src="../assets/img/组 1151.png" alt="" v-if="sky == '晴'" />
					</div>
					<div class="PM">PM2.5&nbsp;{{ air }}ug/m³</div>
				</div>
				<div class="icon"></div>
			</div>
			<div class="title">小贝智能后台大数据分析</div>
			<div>
				<div class="timer">
					<div class="time">{{ newDateday }}</div>
					<div>{{ newWeek }}</div>
				</div>
				<div class="icon_1"></div>
			</div>
		</header> 
		<!-- 主内容 -->
		<div class="content">
			<!-- 上面 -->
			<div class="content_top">
				<!-- 左边 -->
				<div class="content_top_left">
					<!-- 上排图表 -->
					<div class="content-top_left_chart">
						<!-- 图标和数量 -->
						<div class="content_top_left_num">
							<div class="goon">
								<img src="../assets/组 1142.png" alt="" />
								<div>
									<div class="title">运行</div>
									<span class="num">21,452</span>
									<span class="num_title">台</span>
								</div>
							</div>
							<div class="goon">
								<img src="../assets/组 1137.png" alt="" />
								<div>
									<div class="title">待机</div>
									<span class="num">21,452</span>
									<span class="num_title">台</span>
								</div>
							</div>
							<div class="goon">
								<img src="../assets/组 1157.png" alt="" />
								<div>
									<div class="title">故障</div>
									<span class="num">452</span>
									<span class="num_title">台</span>
								</div>
							</div>
							<div class="goon">
								<img src="../assets/组 1143.png" alt="" />
								<div>
									<div class="title">离线</div>
									<span class="num">4,455</span>
									<span class="num_title">台</span>
								</div>
							</div>
						</div>
						<!-- 图表 -->
						<div class="chart">
							<div class="line_1">
								<LineChart></LineChart>
							</div>
							<div class="pie_1">
								<Piefour></Piefour>
							</div>
						</div>
					</div>
					<!-- 下排图表 -->
					<div class="content-top_left_chart2">
						<!-- 左 -->
						<div class="chart_left">
							<div class="title">销售占比</div>
							<div class="title_num">
								<div class="Asia">
									<div class="area">亚洲</div>
									<span class="num">120,452,1</span>
									<span class="title_1">元</span>
									<img src="../assets/组 1128.png" alt="" />
								</div>
								<div class="Asia">
									<div class="area">欧洲</div>
									<span class="num">3,452,120</span>
									<span class="title_1">元</span>
									<img src="../assets/组 1129.png" alt="" />
								</div>
								<div class="Asia">
									<div class="area">非洲</div>
									<span class="num">452,120</span>
									<span class="title_1">元</span>
									<img src="../assets/组 1130.png" alt="" />
								</div>
								<div class="Asia">
									<div class="area">亚洲</div>
									<span class="num">120,452</span>
									<span class="title_1">元</span>
									<img src="../assets/组 1133.png" alt="" />
								</div>
								<div class="Asia">
									<div class="area">北美洲</div>
									<span class="num">52,120</span>
									<span class="title_1">元</span>
									<img src="../assets/组 1132.png" alt="" />
								</div>
								<div class="Asia">
									<div class="area">南美洲</div>
									<span class="num">452,120</span>
									<span class="title_1">元</span>
									<img src="../assets/组 1131.png" alt="" />
								</div>
							</div>
						</div>
						<!-- 右 -->
						<div class="chart_right">
							<Bar></Bar>
						</div>
					</div>
				</div>
				<!-- 右边 -->
				<div class="content_top_right">
					<div class="map">
						<Map></Map>
					</div>
					<div class="cont">
						<div class="cont_1">
							<div class="cont_1_1">
								<div class="cont_1_1_titile">设备总量</div>
								<div class="cont_1_1_titile_name">同比</div>
								<div class="cont_1_1_img">
									<img src="../assets/组 1123.png" alt="" />
								</div>
								<div class="cont_1_1_titile_num">12%</div>
							</div>
							<span class="number_1">568,695</span>
							<span class="number_1_name">台</span>
						</div>
						<div class="cont_1">
							<div class="cont_1_1">
								<div class="cont_1_1_titile">设备总量</div>
								<div class="cont_1_1_titile_name">同比</div>
								<div class="cont_1_1_img">
									<img src="../assets/组 1123.png" alt="" />
								</div>
								<div class="cont_1_1_titile_num">12%</div>
							</div>
							<span class="number_1">8,695</span>
							<span class="number_1_name">家</span>
						</div>
						<div class="cont_1">
							<div class="cont_1_1">
								<div class="cont_1_1_titile">覆盖国家/地区</div>
								<div class="cont_1_1_titile_name">同比</div>
								<div class="cont_1_2_img">
									<img src="../assets/组 1126.png" alt="" />
								</div>
								<div class="cont_1_1_titile_num">12%</div>
							</div>
							<span class="number_1">95</span>
							<span class="number_1_name">个</span>
						</div>
					</div>
				</div>
			</div>
			<!-- 下面 -->
			<div class="content_bottom">
				<div class="bar_1">
					<Producebar></Producebar>
				</div>
				<div class="pie_1">
					<div class="pie_1_chart">
						<Goodpie></Goodpie>
					</div>
					<div class="pie_1_title_num">
						<div class="output">
							<div class="output_1">总产量</div>
							<div class="number">455,412</div>
							<div class="number_1">台</div>
						</div>
						<div class="output">
							<div class="output_1">总出货量</div>
							<div class="number">455,412</div>
							<div class="number_1">台</div>
						</div>
						<div class="output">
							<div class="output_1">总库存</div>
							<div class="number">455,412</div>
							<div class="number_1">台</div>
						</div>
					</div>
				</div>
				<div class="line_2">
					<Goodline></Goodline>
				</div>
				<div class="pie">
					<Pie></Pie>
				</div>
				<div class="parts">
					<Barexpend></Barexpend>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import LineChart from '../components/Line'
import Piefour from '../components/Piefour'
import Bar from '../components/Bar'
import Producebar from '../components/ProduceBar'
import Goodpie from '../components/Goodpie'
import Goodline from '../components/Goodline'
import Pie from '../components/Pie'
import Barexpend from '../components/BarExpend'
import Map from '../components/Map'
export default {
	components: {
		LineChart,
		Piefour,
		Bar,
		Producebar,
		Goodpie,
		Goodline,
		Pie,
		Barexpend,
		Map,
	},
	data() {
		return {
			// 定时器
			timerId: '',
			//当前时间
			newDateday: '',
			//星期
			newWeek: '',
			// 当前城市
			city: '',
			// 当前天气
			sky: '',
			// 当前pm2.5
			air: '',
		}
	},
	destroyed() {
		// 销毁定时器
		clearInterval(this.timerId)
	},
	created() {
		this.getLocalCity()
	},
	mounted() {
		// 启动定时器
		this.currentTime()
	},
	methods: {
		// 获取当前时间
		getTimer() {
			//当前时间
			let newDate = new Date()
			//当前星期
			let wk = newDate.getDay()
			//当前年份
			let yy = newDate.getFullYear()
			//当前月份
			let mm =
				newDate.getMonth() + 1 < 10
					? '0' + (newDate.getMonth() + 1)
					: newDate.getMonth() + 1
			//当前日
			let dd =
				newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()
			//当前小时
			let hh =
				newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()
			//当前分数
			let mf =
				newDate.getMinutes() < 10
					? '0' + newDate.getMinutes()
					: newDate.getMinutes()
			//星期
			let weeks = [
				'星期日',
				'星期一',
				'星期二',
				'星期三',
				'星期四',
				'星期五',
				'星期六',
			]
			let week = weeks[wk]
			//年月日时分
			this.newDateday = yy + '.' + mm + '.' + dd + '\xa0\xa0' + hh + ':' + mf
			this.newWeek = week
		},
		//时间定时器
		currentTime() {
			//判断是否有定时器了 有就清除
			if (this.timerId) {
				clearInterval(this.timerId)
			}
			//启动定时器执行时间函数
			this.timerId = setInterval(this.getTimer, 1000)
			this.timerId = setInterval(this.getLocalCity, 60000)
		},
		//获取地区位置
		getLocalCity() {
			var data = {
				key: 'WJJBZ-VYPCK-MVZJA-AO4RQ-LOJSE-K3BJH', //申请的密钥,写死就行
			}
			var url = 'https://apis.map.qq.com/ws/location/v1/ip' //这个就是地理位置信息的接口
			data.output = 'jsonp'
			this.$jsonp(url, data).then((res) => {
				// console.log(res)
				this.city = res.result.ad_info.city
				this.getskey(this.city)
				this.getAir(this.city)
				return res
			})
			// .catch((error) => {
			// 	console.log(error)
			// })
		},
		// 获取天气
		getskey(city) {
			let key = 'b708a6bcb36143a0ba843cde751f9f74'
			// 					var data = {
			// 	key: 'b708a6bcb36143a0ba843cde751f9f74', //申请的密钥,写死就行
			// }
			// data.output = 'jsonp'
			if (city && city !== '') {
				this.$axios
					.get('/skyapi/weather/now', {
						params: {
							location: city,
							key: key,
						},
					})
					.then((res) => {
						this.sky = res.data.HeWeather6[0].now.cond_txt
						// console.log(this.sky)
						// this.timerId = setTimeout(() => {
						// 	this.getLocalCity(city)
						// }, 1000)
					})
					.catch((error) => {
						console.log(error)
					})
			}
		},
		//获取PM2.5
		getAir(city) {
			//申请的密钥,写死就行
			let key = 'b708a6bcb36143a0ba843cde751f9f74'
			if (city && city !== '') {
				this.$axios
					.get('/skyapi/air/now', {
						params: {
							location: city,
							key: key,
						},
					})
					.then((res) => {
						this.air = res.data.HeWeather6[0].air_now_city.pm25
						// console.log(this.air)
					})
					.catch((error) => {
						console.log(error)
					})
			}
		},
	},
}
</script>
<style scoped lang="less">
.container {
	width: 100%;
	height: 100%;
	background: url('../assets/小贝智能销售驾驶舱 – 2.png') no-repeat;
	background-size: 100% 100%;
	header {
		display: flex;
		justify-content: space-between;
		color: #fff;
		width: 100%;
		height: 0.75rem;
		align-items: center;
		.sky {
			display: flex;
			align-items: center;
			padding-left: 0.625rem;
			.city {
				font-size: 0.225rem;
				font-family: Source Han Sans CN, Source Han Sans CN-Regular;
				font-weight: 400;
				color: #ffffff;
			}
			.sky_1 {
				margin-left: 0.25rem;
				margin-right: 0.25rem;
				img {
					width: 0.525rem;
					height: 0.525rem;
				}
			}
			.PM {
				font-size: 0.225rem;
				font-family: Source Han Sans CN, Source Han Sans CN-Regular;
				font-weight: 400;
			}
		}
		.icon {
			width: 4.125rem;
			height: 0.25rem;
			margin-left: 0.188rem;
			background: url('../assets/组 1140.png') no-repeat;
			background-size: 100% 100%;
		}
		.title {
			width: 7.5rem;
			height: 0.875rem;
			background: url('../assets/组 1139.png') no-repeat;
			background-size: 100% 100%;
			text-align: center;
			line-height: 0.875rem;

			font-size: 0.3rem;
			font-family: YouSheBiaoTiHei, YouSheBiaoTiHei-Regular;
			font-weight: 400;
			color: #ffffff;
			letter-spacing: 7px;
			text-shadow: 0px 0px 0.075rem #0080ff;
		}
		.timer {
			display: flex;
			padding-top: 0.125rem;
			font-size: 0.225rem;
			margin-left: 1rem;
			.time {
				font-family: Source Han Sans CN, Source Han Sans CN-Regular;
				font-weight: 400;
				color: #ffffff;
				margin-right: 0.375rem;
			}
		}
		.icon_1 {
			width: 4.125rem;
			height: 0.25rem;
			background: url('../assets/组 1141.png') no-repeat;
			background-size: 100% 100%;
			margin-right: 0.375rem;
			margin-top: 0.125rem;
		}
	}
	// 中间内容
	.content {
		height: 100%;
		padding: 0.25rem 0.375rem 0.375rem 0.375rem;
		.content_top {
			height: 60%;
			display: flex;
			// 上左
			.content_top_left {
				width: 45%;
				height: 100%;
				margin-right: 0.25rem;
				// 上排图表
				.content-top_left_chart {
					height: 50%;
					margin-bottom: 0.125rem;
					.content_top_left_num {
						display: flex;
						color: #fff;
						height: 18%;
						justify-content: space-between;
						margin-bottom: 0.25rem;
						.goon {
							display: flex;
							img {
								width: 0.75rem;
								height: 0.75rem;
							}
							.title {
								font-size: 0.175rem;
								font-family: Source Han Sans CN, Source Han Sans CN-Regular;
								font-weight: 400;
								color: #cccccc;
								letter-spacing: 0.175rem;
								margin-bottom: 0.188rem;
							}
							.num {
								font-size: 0.3rem;
								font-family: Source Han Sans CN, Source Han Sans CN-Bold;
								font-weight: 700;
								color: #ffffff;
								margin-right: 0.125rem;
							}
							.num_title {
								font-size: 0.2rem;
								font-family: Source Han Sans CN, Source Han Sans CN-Regular;
								font-weight: 400;
								color: #ffffff;
							}
						}
						.goon:last-child {
							margin-right: 0.375rem;
						}
					}
					.chart {
						height: 75%;
						display: flex;
						background-color: #162a36;
						.line_1 {
							width: 60%;
							height: 100%;
						}
						.pie_1 {
							width: 40%;
							height: 100%;
						}
					}
				}
				// 下排图表
				.content-top_left_chart2 {
					display: flex;
					height: 49%;
					.chart_left {
						width: 50%;
						height: 100%;
						margin-right: 0.25rem;
						background-color: #162a36;
						.title {
							font-size: 0.175rem;
							font-family: Source Han Sans CN, Source Han Sans CN-Regular;
							font-weight: 400;
							color: #ffffff;
							letter-spacing: 0.075rem;
							margin-left: 0.25rem;
							margin-top: 0.125rem;
						}
						.title_num {
							display: flex;
							flex-flow: row wrap;
							.Asia {
								width: 33.3%;
								.area {
									font-size: 0.15rem;
									font-family: Source Han Sans CN, Source Han Sans CN-Regular;
									font-weight: 400;
									color: #ffffff;
									margin-left: 0.25rem;
									margin-top: 0.125rem;
								}
								.num {
									display: inline-block;
									font-size: 0.175rem;
									font-family: Alibaba PuHuiTi, Alibaba PuHuiTi-Bold;
									font-weight: 700;
									color: #ffffff;
									margin-left: 0.25rem;
									padding-top: 0.125rem;
								}
								.title_1 {
									font-size: 0.125rem;
									font-family: Source Han Sans CN, Source Han Sans CN-Regular;
									font-weight: 400;
									color: #ffffff;
									margin-left: 0.025rem;
								}
								img {
									width: 0.75rem;
									height: 0.75rem;
									margin-left: 0.25rem;
									margin-top: 2px;
								}
							}
						}
					}
					.chart_right {
						width: 50%;
						height: 100%;
						background-color: #162a36;
					}
				}
			}
			// 上右
			.content_top_right {
				width: 55%;
				height: 100%;
				background-color: rgba(53, 73, 97, 0.4);
				.map {
					width: 100%;
					height: 85%;
				}
				.cont {
					display: flex;
					width: 100%;
					height: 15%;
					justify-content: space-around;
					.cont_1 {
						.cont_1_1 {
							display: flex;
							margin-bottom: 0.25rem;
							.cont_1_1_titile {
								font-size: 0.225rem;
								font-family: Source Han Sans CN, Source Han Sans CN-Regular;
								font-weight: 400;
								color: #ffffff;
								margin-right: 0.125rem;
							}
							.cont_1_1_titile_name {
								font-size: 0.175rem;
								font-family: Source Han Sans CN, Source Han Sans CN-Regular;
								font-weight: 400;
								color: #ffffff;
								margin-right: 0.125rem;
								margin-top: 0.025rem;
							}
							.cont_1_1_img {
								width: 0.175rem;
								height: 0.225rem;
								margin-right: 0.125rem;
								img {
									width: 0.175rem;
									height: 0.225rem;
								}
							}
							.cont_1_2_img {
								width: 0.175rem;
								height: 0.225rem;
								margin-right: 0.125rem;
								margin-top: 0.025rem;
								img {
									width: 0.175rem;
									height: 0.225rem;
								}
							}
							.cont_1_1_titile_num {
								font-size: 0.175rem;
								font-family: Source Han Sans CN, Source Han Sans CN-Regular;
								font-weight: 400;
								color: #ffffff;
								margin-top: 0.025rem;
							}
						}
						.number_1 {
							font-size: 0.3rem;
							font-family: Source Han Sans CN, Source Han Sans CN-Bold;
							font-weight: 700;
							color: #ffffff;
						}
						.number_1_name {
							font-size: 0.2rem;
							font-family: Source Han Sans CN, Source Han Sans CN-Regular;
							font-weight: 400;
							color: #ffffff;
						}
					}
				}
			}
		}
		.content_bottom {
			height: 28%;
			margin-top: 0.188rem;
			display: flex;
			.bar_1 {
				width: 27%;
				height: 100%;
				background-color: rgba(25, 57, 71, 0.5);
				margin-right: 0.25rem;
			}
			.pie_1 {
				width: 15%;
				background-color: rgba(25, 57, 71, 0.5);
				margin-right: 0.25rem;
				.pie_1_chart {
					height: 60%;
					width: 100%;
				}
				.pie_1_title_num {
					.output {
						margin: 0 auto;
						width: 2.9rem;
						height: 0.375rem;
						display: flex;
						align-items: center;
						background: url('../assets/组 1154.png') no-repeat;
						background-size: 100% 100%;
						margin-top: 0.063rem;
						.output_1 {
							font-size: 0.15rem;
							color: #ccc;
							margin-left: 0.25rem;
							width: 0.625rem;
							white-space: nowrap;
						}
						.number {
							font-size: 0.2rem;
							color: #fff;
							margin-left: 0.5rem;
							font-weight: 700;
						}
						.number_1 {
							color: #ccc;
							margin-left: 0.25rem;
						}
					}
				}
			}
			.line_2 {
				width: 20%;
				background-color: rgba(25, 57, 71, 0.5);
				margin-right: 0.25rem;
			}
			.pie {
				width: 16%;
				background-color: rgba(25, 57, 71, 0.4);
				margin-right: 0.25rem;
			}
			.parts {
				width: 18%;
				background-color: rgba(25, 57, 71, 0.5);
			}
		}
	}
}
</style>
