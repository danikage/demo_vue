export default {
	name: "CTable",
	props: {
		title: {
			type: String,
			required: false,
			default: 'Título sample'
		},
		table: {
			type: Object,
			required: false,
			default: function(){
				return {
					heads: [],
					rows:[]
				}
			}
		},
		empty_text: {
			type: String,
			required: false,
			default: 'No existen valores'
		}
	}
}