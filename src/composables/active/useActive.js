import {reactive, toRefs} from 'vue';
import useAxios from "@/composables/useAxios";
import router from "@/router";

export default function () {
    const state = reactive({
        actives: [],
        active: {
            type_active: '',
            mark: '',
            model: '',
            state: '',
            id_area: 0
        },
        search: ''
    });

    const getActives = async () => {
        const request = useAxios(
            'actives',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        const response = await request.sendRequest();
        state.actives = await response.data;
    }

    const createActive = async () => {
        const request = await useAxios(
            'actives',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: state.active
            }
        );
        const response = await request.sendRequest();
        if (response){
            await router.push({
                name: 'Active'
            });
        }
    }

    const deleteActive = async (id) => {
        const request = await useAxios(
            `actives/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const response = await request.sendRequest();
        if (response){
            await getActives();
        }
    }

    const loadActive = async (id) => {
        const request = await useAxios(
            `actives/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const response = await request.sendRequest();
        if (response){
            state.active = await response.data;
        }
    }

    const updateActive = async (id) => {
        const request = await useAxios(
            `actives/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: state.active
            }
        );
        const response = await request.sendRequest();
        if (response){
            await router.push({name: 'Active'})
        }
    }

    return {
        ... toRefs(state),
        getActives, createActive, deleteActive, loadActive, updateActive
    }
}