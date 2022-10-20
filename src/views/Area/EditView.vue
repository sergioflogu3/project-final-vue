<template>
    <h1 class="text-center">Editar Area</h1>
    <hr>
    <area-form-component
        v-model:name="area.name"
        v-model:manager="area.manager"
        v-model:number_official="area.number_official"
        label="Actualizar Area"
        @fire="updateArea($route.params.id)" />

</template>

<script>
import AreaFormComponent from "@/components/Area/AreaFormComponent";
import useArea from "@/composables/area/useArea";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

export default {
    name: 'EditView',
    components: {AreaFormComponent},
    setup(){
        const route = useRoute();
        const {area, updateArea, loadArea} = useArea();
        onMounted(async () => {
            await loadArea(route.params.id)
        });
        return {
            area, updateArea
        }
    }
}
</script>