<!-- added by Haesun-->
<template>
	<div>
		<table class="table table-striped">
			<caption>Customer reviews</caption>
			<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Writer</th>
				<th scope="col">Title</th>
				<th scope="col">Content</th>
			</tr>
			</thead>

			<tbody>
				<tr :key = "index" v-for="(value, index) in data">
					<th scope="col">#</th>
					<th scope="col">{{data.writer}}</th>
					<th scope="col">{{data.title}}</th>
					<th scope="col">{{data.content}}</th>
				</tr>
			</tbody>
		</table>

		<button @click = "write">Write</button>
	</div>
</template>

<script>
export default {
	name: 'Read',
	data(){
		return{
			data: data
		}
	},
	methods: {
		write() {
			this.$router.push({
				path: 'create'
			})
		}
	}
}
</script>

