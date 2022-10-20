<template>
    <form @submit.prevent="$emit('fire')">
        <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" name="name" :value="name"
                   @input="$emit('update:name', $event.target.value)"
                   class="form-control" id="name" required>
        </div>
        <div class="mb-3">
            <label for="manager" class="form-label">Responsable</label>
            <input type="text" name="manager" :value="manager"
                   @input="$emit('update:manager', $event.target.value)"
                   class="form-control" id="manager" required>
        </div>
        <div class="mb-3">
            <label for="number_official" class="form-label">Nro de Funcionarios</label>
            <input type="number" name="number_official" :value="number_official"
                   @input="$emit('update:number_official', $event.target.value)"
                   class="form-control" id="number_official" required>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-primary">{{ label }}</button>
        </div>

    </form>
</template>

<script>
export default {
    name: 'AreaFormComponent',
    props: ['name', 'manager', 'number_official', 'label']
}
</script>