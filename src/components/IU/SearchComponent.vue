<template>
    <form class="d-flex">
        <input class="form-control me-2"
               type="search"
               placeholder="Search"
               name="search"
               id="search"
               @input="$emit('update:search', $event.target.value)"
                :value="search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
</template>

<script>
export default {
    name: 'SearchComponent',
    props: ['search']
}
</script>


