<script>
    import { enhance } from "$app/forms";
    import Input from "./Input.svelte";
    export let action,
        btnName,
        inputs = [];
</script>

<form {action} method="post" class="box mx-1" use:enhance>
    {#each inputs as input}
        <Input inputName={input.name} type={input.type} />
    {/each}
    <input type="submit" value={btnName} class="button has-background-dark" />
</form>
