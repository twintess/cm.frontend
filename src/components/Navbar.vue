<template>
    <nav>
        <router-link to="/">
            <img src="@/assets/logo.png"/>
        </router-link>
        <router-link to="/admin-page">Panel administratora</router-link>
        <button ref="appButton" @click="handleAppsClick">Aplikacje</button>
        <ul v-if="isAppMenuOpened" class="menu" :style="appPositionStyle">
            <template v-for="group in apps">
                <li v-if="group.groupName !== null" class="sub-menu-wrapper">
                    <ul v-if="openedSubMenuId === group.groupId" class="sub-menu">
                        <li v-for="app in group.apps" class="menu-item" :key="app.appId">
                            <router-link :to="'/project/' + app.appId">{{ app.appName }}</router-link>
                        </li>
                    </ul>
                    <div
                        class="sub-menu-header"
                        @click="event => handleSubMenuClick(event, group.groupId)"
                        :key="group.groupId"
                    >
                        <div>{{ group.groupName }}</div>
                        <div>></div>
                    </div>
                </li>
                <template v-else>
                    <li v-for="app in group.apps" class="menu-item" :key="app.appId">
                        <router-link :to="'/project/' + app.appId">{{ app.appName }}</router-link>
                    </li>
                </template>
            </template>
        </ul>
        <button ref="integrationButton" @click="handleIntegrationsClick">Integracje</button>
        <ul v-if="isIntegrationMenuOpened" class="menu" :style="integrationPositionStyle">
            <li v-for="integration in integrations" class="menu-item" :key="integration.integrationId">
                <router-link :to="'/integration/' + integration.integrationId">{{ integration.integrationName }}</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import apps from '@/dummy/apps'
import integrations from '@/dummy/integrations'
import { faThList } from '@fortawesome/free-solid-svg-icons'
export default {
    name: 'NavbarView',
    data(){
        return {
            apps,
            isAppMenuOpened: false,
            openedSubMenuId: 1,
            appPositionStyle: null,
            integrations,
            isIntegrationMenuOpened: false,
            integrationPositionStyle: null,
        }
    },
    watch: {
        '$route': function() {
            this.isAppMenuOpened = false
        }
    },
    methods: {
        handleAppsClick(){
            this.isAppMenuOpened = !this.isAppMenuOpened
            this.isIntegrationMenuOpened = false
            const rect = this.$refs.appButton.getBoundingClientRect()
            this.appPositionStyle = {
                top: (rect.top + rect.height + 20) + 'px',
                left: rect.left + 'px',
            }

            if(!this.isAppMenuOpened){
                this.openedSubMenuId = 1
            }
        },
        handleSubMenuClick(event, id){
            this.openedSubMenuId = id
        },
        handleIntegrationsClick(){
            this.isIntegrationMenuOpened = !this.isIntegrationMenuOpened
            this.isAppMenuOpened = false
            const rect = this.$refs.integrationButton.getBoundingClientRect()
            this.integrationPositionStyle = {
                top: (rect.top + rect.height + 20) + 'px',
                left: rect.left + 'px',
            }
        }
    },
}
</script>
<style scoped>
nav {
    padding: 20px;
    display: flex;
    justify-content: start;
    gap: 20px;
    background-color: #a6eda8;
    position: relative;
    font-weight: bold;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

a, button {
    text-decoration: none;
    background-color: rgba(255,255,255,0.4);
    padding: 10px 25px;
    border-radius: 5px;
    border: none;
    transition: .3s;
    cursor: pointer;
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family : inherit;
    font-size: 1em;
}

a:hover, button:hover {
    background-color: #f8f08a;
}

a:first-child {
    background-color: transparent;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
}

img {
    max-height: 50px;
}

ul {
    list-style-type: none;
    background-color: #FFF;
    margin: 0;
    padding: 0;
    border-radius: 5px;
}

li {
    padding: 10px 20px;
    cursor: pointer;
}

.menu {
    position: absolute;
}

.menu-item > a {
    display: flex;
    justify-content: left;
}

.menu-item > a:hover{
    color: #cf345d;
    transition: initial;
}

.sub-menu-wrapper {
    position: relative;
    width: 200px;
}

.sub-menu-header {
    display: flex;
    justify-content: space-between;
}

.sub-menu {
    transform: translateX(100%);
    position: absolute;
    width: 200px;
    left: 0;
    top: 0;
    margin-left: 40px;
}

li:hover {
    background-color: #0e2f3b;
    border-radius: 5px;
    color: #cf345d;
}

</style>