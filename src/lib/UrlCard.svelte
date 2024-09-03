<script>
    export let shortUrl, url;
    import { page } from "$app/stores";

    const copyShort = () => {
        navigator.clipboard.writeText(`${$page.url.origin}/${shortUrl}`);
    };
</script>

<div class="card px-5 py-2 grid has-text-centered">
    <a class="cell" href={url}>{url.slice(0, 25) + "..."}</a>
    <a class="cell" href={shortUrl} bind>{shortUrl}</a>
    <button class="cell" on:click={copyShort}>Copy</button>
</div>
