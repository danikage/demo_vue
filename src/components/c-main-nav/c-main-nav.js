export default {
	name: "CMainNav",
	props: {
		title: {
			type: String,
			default: 'Vue'
		},
		links: {
			type: Array,
			default: function (){
				return [
					{
						href: '/',
						text: 'Home'
					}
				]
			}
		}
	}
}