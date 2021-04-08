<template>
    <div>
        <div>{{data.writer}}</div>
        <div>{{data.title}}</div>
        <div>{{data.content}}</div>
        <button @click="updateData">Edit</button>
        <button @click="deleteData">Delete</button>
    </div>
</template>

<script>
import data from '@/data';

export default {
    name: 'Detail',
    data(){
        const index = this.$route.params.contentId
        return{
            data: data[index],
            index: index
        }
    },
    methods: {
        deleteData() {
            data.splice(this.index, 1)
            this.$router.push({
                path: '/'
            })
        }

    }
}
</script>