<template>
    <h1 class="text-center">Lista de Areas</h1>
    <div class="text-center">
        <router-link to="/area/create" class="btn btn-outline-primary">
            Insertar Area
        </router-link>
    </div>
    <search-component
        v-model:search="search"
    />
    <div class="table-responsive">
        <table class="table table-bordered table-sm">
            <tr>
                <th class="bg-primary text-white">Id</th>
                <th class="bg-primary text-white">Nombre</th>
                <th class="bg-primary text-white">Responsable</th>
                <th class="bg-primary text-white">Número de Funcionarios</th>
                <th class="bg-primary text-white">Acción</th>
            </tr>
            <area-component
                v-for="area in areas"
                :key="area.id"
                @delete="deleteArea(area.id)"
                :area="area" />
        </table>

    </div>
</template>

<script>
import AreaComponent from "@/components/Area/AreaComponent";
import SearchComponent from "@/components/IU/SearchComponent";
import useArea from "@/composables/area/useArea";

export default {
    name: 'AreaView',
    components: {SearchComponent, AreaComponent},
    setup(){
        const {areas, search, getAreas, deleteArea} = useArea();
        getAreas();
        return {
            areas, search,
            deleteArea
        }
    },
    computed: {
        areas() {
            return this.areas.filter(item => {
                return item.name.toLowerCase().includes(this.search.toLowerCase())
            });
        }
    }
}
</script>