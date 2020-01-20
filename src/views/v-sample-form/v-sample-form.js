import axios from 'axios'

export default {
	name: "VSampleForm",
	data(){
		return {
			month: '',
			value: '',
			insert_state: false
		}
	},
	methods: {
		sendValues(event){
			event.preventDefault()
			var comp = this

			comp.insert_state = false
			axios
				.post('http://localhost:8000/set_table_values',{
					month: comp.month,
					value: comp.value
				})
				.then(response => {
					console.log(response.data)
					comp.insert_state = true
				})
				.catch(error => {
					console.log(error)
				})
		},
	}
}