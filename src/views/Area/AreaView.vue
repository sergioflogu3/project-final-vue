<template>
    <h1 class="text-center">Lista de Areas</h1>
    <div class="text-center">
        <router-link to="/area/create" class="btn btn-outline-primary">
            Insertar Area
        </router-link>
    </div>
    <hr>
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
import useArea from "@/composables/area/useArea";

export default {
    name: 'AreaView',
    components: {AreaComponent},
    setup(){
        const {areas, getAreas, deleteArea} = useArea();
        getAreas();
        return {
            areas, deleteArea
        }
    }
}
</script>