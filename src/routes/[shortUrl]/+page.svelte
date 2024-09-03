<script>
    import { page } from "$app/stores";
    export let data;
</script>

{#if data.status === "fail"}
    <div class="is-flex is-justify-content-center mt-6">
        <div class="container py-6 px-6">
            <h1 class="has-text-centered is-size-1 has-text-warning">
                {data.status}
            </h1>
            <h2 class="has-text-centered is-size-5">{data.message}</h2>
        </div>
    </div>
{:else}
    <div>Something went terribly wrong</div>
{/if}
