<script>
    import Form from "../../lib/Form.svelte";
    export let form;
    export let data;
</script>

<div class="container is-max-desktop my-3">
    {#if form?.error}
        <div class="notification">
            <button
                class="delete"
                on:click={() => (form.error = null)}
            ></button>
            {form.error}
        </div>
    {/if}

    <Form inputs={data.signupFields} action="?/signup" btnName="Sign Up" />
</div>
