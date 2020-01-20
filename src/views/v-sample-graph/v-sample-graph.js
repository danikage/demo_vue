import CChartLine from './../../components/c-chart-line/c-chart-line.vue'

export default {
	name: "VSampleGraph",
	components: {
		CChartLine
	},
	data(){
		return {
			graphs_datas: {
				datas: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [{
						label: 'Datos primeros',
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						data: [32,45,12,15,22,20,38],
						fill: false,
					}, {
						label: 'Datos segundos',
						fill: false,
						backgroundColor: 'rgb(54, 162, 235)',
						borderColor: 'rgb(54, 162, 235)',
						data: [15,23,41,33,11,15,25],
					}]
				}
			}
		}
	}
}