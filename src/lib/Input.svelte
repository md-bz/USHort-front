<script>
    export let inputName, type;
</script>

<label for={inputName}>
    {inputName.slice(0, 1).toUpperCase() + inputName.slice(1)}
</label>

<input
    class="input has-background-dark mb-2"
    {type}
    id={inputName}
    name={inputName}
/>
