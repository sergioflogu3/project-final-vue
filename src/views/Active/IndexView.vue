<template>
    <h1 class="text-center">Lista de Activos</h1>
    <div class="text-center">
        <router-link to="/active/create" class="btn btn-outline-primary">
            Insertar Activo
        </router-link>
    </div>

    <search-component
        v-model:search="search" />

    <div class="table-responsive">
        <table class="table table-bordered table-sm">
            <tr>
                <th class="bg-primary text-white">Id</th>
                <th class="bg-primary text-white">Tipo de Activo</th>
                <th class="bg-primary text-white">Marca</th>
                <th class="bg-primary text-white">Model</th>
                <th class="bg-primary text-white">Estado</th>
                <th class="bg-primary text-white">Area</th>
                <th class="bg-primary text-white">Acción</th>
            </tr>
            <list-active-component
                v-for="active in actives"
                :key="active.id"
                :active="active"
                @delete="deleteActive(active.id)"
                />
        </table>
    </div>
</template>

<script>
import ListActiveComponent from "@/components/Active/ListActiveComponent";
import useActive from "@/composables/active/useActive";
import SearchComponent from "@/components/IU/SearchComponent";

export default {
    name: 'IndexView',
    components: {SearchComponent, ListActiveComponent},
    setup(){
        const {actives, search,
            getActives, deleteActive
        } = useActive();
        getActives();
        return {
            actives, search, deleteActive
        }
    },
    computed: {
        actives() {
            return this.actives.filter(item => {
                return item.type_active.toLowerCase().includes(this.search.toLowerCase())
            });
        }
    }
}
</script>