<template>
    <h1 class="text-center">Crear Activo</h1>
    <hr>
    <active-form-component
        v-model:type_active="active.type_active"
        v-model:mark="active.mark"
        v-model:model="active.model"
        v-model:state="active.state"
        v-model:id_area="active.id_area"
        label="Crear Activo"
        @fire="createActive" />
</template>

<script>
import ActiveFormComponent from "@/components/Active/ActiveFormComponent";
import useActive from "@/composables/active/useActive";

export default {
    name: 'CreateView',
    components: {ActiveFormComponent},
    setup(){
        const {active, createActive} = useActive();
        return {active, createActive}
    }
}
</script>