<template>
    <form @submit.prevent="$emit('fire')">
        <div class="mb-3">
            <label for="type_active" class="form-label">Tipo de Activo</label>
            <input type="text" name="type_active" :value="type_active"
                   @input="$emit('update:type_active', $event.target.value)"
                   class="form-control" id="type_active" required>
        </div>
        <div class="mb-3">
            <label for="mark" class="form-label">Marca</label>
            <input type="text" name="mark" :value="mark"
                   @input="$emit('update:mark', $event.target.value)"
                   class="form-control" id="mark" required>
        </div>
        <div class="mb-3">
            <label for="model" class="form-label">Modelo</label>
            <input type="text" name="model" :value="model"
                   @input="$emit('update:model', $event.target.value)"
                   class="form-control" id="model" required>
        </div>
        <div class="mb-3">
            <label for="state" class="form-label">Estado</label>
            <select class="form-select"
                    name="state"
                    id="state"
                    :value="state"
                    required
                    @input="$emit('update:state', $event.target.value)">
                <option selected>Seleccione...</option>
                <option value="Nuevo">Nuevo</option>
                <option value="Usado">Usado</option>
                <option value="En_desuso">En_desuso</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="id_area" class="form-label">Area</label>
            <select class="form-select"
                    name="id_area"
                    id="id_area"
                    :value="id_area"
                    required
                    @input="$emit('update:id_area', $event.target.value)">
                <option selected>Seleccione...</option>
                <option v-for="area in areas" :value="area.id">{{ area.name }}</option>
            </select>
        </div>

        <div class="text-center">
            <button type="submit" class="btn btn-primary">{{ label }}</button>
        </div>

    </form>
</template>

<script>
import useArea from "@/composables/area/useArea";

export default {
    name: 'ActiveFormComponent',
    props: ['type_active', 'mark', 'model', 'state', 'id_area', 'label'],
    setup(){
        const {areas, getAreas} = useArea();
        getAreas();
        return {
            areas
        }
    }
}
</script>