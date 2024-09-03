<script>
    import { enhance } from "$app/forms";
    import UrlCard from "$lib/UrlCard.svelte";
    export let form;
    export let data;

    $: urls = data && data.urls ? data.urls : [];

    let isLoading = false;
    const enhanceFunction = () => {
        return ({ result, update }) => {
            isLoading = false;
            if (result.type === "success") urls = [...urls, result.data];
            update();
        };
    };
</script>

<div
    class="container is-flex is-justify-content-center is-align-items-center is-flex-direction-column my-5"
>
    {#if form?.error}
        <div class="notification">
            <button
                class="delete"
                on:click={() => (form.error = null)}
            ></button>
            {form.error}
        </div>
    {/if}
    <form
        action="?/shorten"
        method="post"
        class="field is-flex"
        use:enhance={enhanceFunction}
    >
        <div class="control {isLoading ? 'is-loading' : ''}">
            <input
                type="text"
                placeholder="Very-long-Url-with-lots-of-..."
                class="input has-background-link-dark"
                name="url"
            />
        </div>
        <button
            type="submit"
            class="button has-background-danger"
            on:click={() => (isLoading = true)}
        >
            Shorten
        </button>
    </form>
    <ul class="box">
        {#each urls as { url, shortUrl }}
            <UrlCard {shortUrl} {url} />
        {/each}
    </ul>
</div>
