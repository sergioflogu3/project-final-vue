<template>
    <tr>
        <td>{{ active.id }}</td>
        <td>{{ active.type_active }}</td>
        <td>{{ active.mark }}</td>
        <td>{{ active.model }}</td>
        <td>{{ active.state }}</td>
        <td>{{ active.id_area }}</td>
        <td>
            <a class="btn btn-outline-danger btn-sm"
               @click="$emit('delete')">Eliminar</a>
            <router-link
                class="btn btn-outline-warning btn-sm"
                :to="`/active/${active.id}`">
                Editar
            </router-link>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'ListActiveComponent',
    props: ['active']
}
</script>