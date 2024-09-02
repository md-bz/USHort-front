<script>
    import "bulma/css/bulma.css";
    export let data;
    $: active = false;
    const handlePhoneNav = () => (active = !active);
    const handlePhoneClick = () => (active = false);
</script>

<head>
    <link rel="stylesheet" href="/style.css" />
</head>
<nav class="navbar is-dark">
    <div class="navbar-brand">
        <a href="/" class=" navbar-item">
            <span class="icon">
                <img src="/brand.png" alt="TODO" />
            </span>
        </a>
        <button
            class="navbar-burger {active ? 'is-active' : ''}"
            on:click={handlePhoneNav}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="navbar-menu {active ? 'is-active' : ''}"
        on:click={handlePhoneClick}
    >
        <div class="navbar-start">
            <a href="/" class="navbar-item">Home</a>
        </div>
        <div class="navbar-end">
            {#if data.jwt}
                <a href="/profile" class="navbar-item">
                    <div class="icon-text">
                        <span>Profile</span>
                        <img
                            class="icon is-small"
                            style="padding-top:2px"
                            src="/account-user-person.svg"
                            alt="user-icon"
                            srcset=""
                        />
                    </div>
                </a>
            {:else}
                <a href="/signup" class="navbar-item">Sign up</a>
                <a href="/login" class="navbar-item">Login</a>
            {/if}
        </div>
    </div>
</nav>

<slot></slot>
