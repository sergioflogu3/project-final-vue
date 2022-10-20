<template>
    <nav-bar-component />
    <div class="container">
        <router-view/>
    </div>
</template>

<script>
import NavBarComponent from '@/components/IU/NavBarComponent'

export default {
    name: 'App',
    components: {
        NavBarComponent
    }
}
</script>
