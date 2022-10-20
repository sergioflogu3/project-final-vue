<template>
    <tr>
        <td>{{ area.id }}</td>
        <td>{{ area.name }}</td>
        <td>{{ area.manager }}</td>
        <td class="text-center">{{ area.number_official }}</td>
        <td>
            <a class="btn btn-outline-danger btn-sm"
               @click="$emit('delete')">Eliminar</a>
            <router-link
                class="btn btn-outline-warning btn-sm"
                :to="`/area/${area.id}`">
                Editar
            </router-link>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'AreaComponent',
    props: ['area']
}
</script>