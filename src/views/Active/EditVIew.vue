<template>
    <h1 class="text-center">Editar Activo</h1>
    <hr>

    <active-form-component
        v-model:type_active="active.type_active"
        v-model:mark="active.mark"
        v-model:model="active.model"
        v-model:state="active.state"
        v-model:id_area="active.id_area"
        label="Editar Activo"
        @fire="updateActive($route.params.id)" />
</template>

<script>
import ActiveFormComponent from "@/components/Active/ActiveFormComponent";
import {useRoute} from "vue-router";
import useActive from "@/composables/active/useActive";
import {onMounted} from "vue";

export default {
    name: 'EditView',
    components: {ActiveFormComponent},
    setup(){
        const route = useRoute();
        const {active, loadActive, updateActive} = useActive();
        onMounted(async () => {
            await loadActive(route.params.id);
        });
        return {
            active, updateActive
        }
    }
}
</script>