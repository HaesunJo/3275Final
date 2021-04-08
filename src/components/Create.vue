<!-- added by Haesun-->
<template>
    <div>
        <input v-model="writer" placeholder="writer" />
        <input v-model="title" placeholder="title" />
        <input v-model="content" placeholder="content" />

        <button @click="upload">Upload</button>
    </div>
</template>
<script>
export default {
    name: 'Create',
    data(){
        return{
            data: data,
            writer: "",
            title: "",
            content: ""
        }
    },
    methods: {
        write(){
            this.data.push({
                writer: this.writer,
                title: this.title,
                content: this.content
            })
            this.$router.push({
                path:'/'
            })
        }
    }
}
</script>