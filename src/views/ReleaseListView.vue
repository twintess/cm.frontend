<template>
    <h1>Releasy aplikacji {{ getProducts.projectName }}</h1>
    <ProjectTable :releases="getProducts.releases" />
</template>
<script>
import ProjectTable from '@/components/ProjectTable.vue'
import projectDetails from '@/dummy/projectDetails'
export default {
    name: 'ReleaseListView',
    components: {
        ProjectTable,
    },
    computed: {
        getProducts(){
            return projectDetails
                .filter(item => item.projectId === parseInt(this.$route.params.id))
                [0]
        }
    },
}
</script>
<script scoped></script>