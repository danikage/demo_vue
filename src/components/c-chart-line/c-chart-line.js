import Chart from '../../global/chart.js';

export default {
	name: 'CChartLine',
	props: {
		datas: {
			type: Object,
			default: function (){
				return {}
			}
		}
	},
	data(){
		return {
			chart: null
		}
	},
	watch: {
		datas: function () {
			this.chart.update();
		}
	},
	mounted(){
		var comp = this
		var ctx = comp.$el.querySelector('.c-chart-line__canvas');
		var config = {
			type: 'line',
			data: comp.datas,
			options: {
				responsive: true,
				title: {
					display: false
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Meses'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Valores'
						}
					}]
				}
			}
		};
		comp.chart = new Chart(ctx, config);
	}
}