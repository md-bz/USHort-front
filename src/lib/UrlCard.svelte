<script>
    export let shortUrl, url;
    const copyShort = () => {
        navigator.clipboard.writeText(shortUrl);
    };
</script>

<div class="card px-5 py-2 grid has-text-centered">
    <a class="cell" href={url}>{url.slice(0, 25) + "..."}</a>
    <a class="cell" href={shortUrl}>{shortUrl.split("/")[3]}</a>
    <button class="cell" on:click={copyShort}>Copy</button>
</div>
