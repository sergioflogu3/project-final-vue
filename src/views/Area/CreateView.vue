<template>
    <h1 class="text-center">Crear Area</h1>
    <hr>
    <area-form-component
        v-model:name="area.name"
        v-model:manager="area.manager"
        v-model:number_official="area.number_official"
        label="Crear Area"
        @fire="createArea" />
</template>

<script>
import AreaFormComponent from "@/components/Area/AreaFormComponent";
import useArea from "@/composables/area/useArea";

export default {
    name: 'CreateView',
    components: {AreaFormComponent},
    setup(){
        const {area, createArea} = useArea();

        return {
            area, createArea
        }
    }
}
</script>