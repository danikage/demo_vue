import CTable from './../../components/c-table/c-table.vue'
import axios from 'axios'

export default {
	name: "VSampleTable",
	components: {
		CTable
	},
	data(){
		return {
			data_table: {
				title: '',
				table: {
					heads: [],
					rows:[]
				}
			},
			loading: {
				state: true,
				text: 'cargando',
				error: false,
				text_error: 'fallo en el servidor'
			}
		}
	},
	mounted(){
		this.get_table_values()
	},
	methods: {
		get_table_values(){
			var comp = this

			comp.loading.error = false
			axios
				.get('http://localhost:8000/get_table_values')
				.then(response => {
					comp.data_table = response.data
					comp.loading.state = false
				})
				.catch(error => {
					comp.loading.state = false
					comp.loading.error = true
					console.log(error)
				})
		},

	}
}