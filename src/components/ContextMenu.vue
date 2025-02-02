<template>
    <ul :style="{ top: positionY + 'px', left: positionX + 'px'  }">
        <li v-for="item in items" :key="item.text">
            <template v-if="item.path !== ''">
                <router-link :to="item.path">
                    <font-awesome-icon :icon="item.icon" />
                    {{ item.text }}
                </router-link>
            </template>
            <template v-else>
                <p @click="$emit('contextOut')">
                    <font-awesome-icon :icon="item.icon" />
                    {{ item.text }}
                </p>
            </template>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'ContextMenu',
    props: {
        positionX: {
            type:  Number,
            required: true,
        },
        positionY: {
            type:  Number,
            required: true,
        },
        releaseId: {
            type:  Number,
            required: true,
        },
    },
    data() {
        return {
            items: [
                {
                    text: 'Edytuj release',
                    icon: 'fa-solid fa-pencil',
                    path: `/release-edit/${this.releaseId}`,
                },
                {
                    text: 'Usuń release',
                    icon: 'fa-solid fa-trash-can',
                    path: `/release-delete/${this.releaseId}`,
                },
                {
                    text: 'Zamknij menu',
                    icon: 'fa-solid fa-circle-xmark',
                    path: '',
                },
            ],
        }
    },
    emits: ['contextOut'],
}
</script>
<style scoped>

ul {
    position: absolute;
    z-index: 2;
    list-style-type: none;
    text-align: left;
    border-radius: 5px;
    background-color: #f6f08b;
    padding: 0;
    width: 200px;
}

li {
    transition: .3s;
    display: flex;
    align-items: center;
}

li:hover {
    background-color: #c5bd33;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

a {
    color: #2c3e50;
    text-decoration: none;
    transition: .3s;
    display: block;
    margin: 0;
    padding: 15px 25px 15px 15px;
    width: 100%;
    height: 100%;
}

a:hover {
    color: white;
}

p {
    margin: 0;
    padding: 15px 25px 15px 15px;
}

svg {
    height: 20px;
    margin-right: 10px;
}
</style>