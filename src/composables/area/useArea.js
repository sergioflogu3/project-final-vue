import {reactive, toRefs} from 'vue';
import useAxios from "@/composables/useAxios";
import router from "@/router";

export default function () {
    const state = reactive({
        areas: [],
        area: {
            name: '',
            manager: '',
            number_official: 0
        }
    });

    const getAreas = async () => {
        const request = await useAxios(
            'areas',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        const response = await request.sendRequest();
        state.areas = await response.data;
    }

    const createArea = async () => {
        const request = await useAxios(
            'areas',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: state.area
            }
        );
        const response = await request.sendRequest();
        if (response){
            await router.push({
                name: 'Area'
            });
        }
    }

    const deleteArea = async (id) => {
        const request = await useAxios(
            `areas/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const response = await request.sendRequest();
        if (response){
            await getAreas();
        }
    }

    const updateArea = async (id) => {
        const request = await useAxios(
            `areas/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: state.area
            }
        );
        const response = await request.sendRequest();
        if (response){
            await router.push({name: 'Area'})
        }
    }

    const loadArea = async (id) => {
        const request = await useAxios(
            `areas/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const response = await request.sendRequest();
        if (response){
            state.area = await response.data;
        }
    }

    return {
        ...toRefs(state),
        getAreas, createArea, deleteArea, updateArea, loadArea
    }
}
