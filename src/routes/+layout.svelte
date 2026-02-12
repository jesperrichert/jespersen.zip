<script lang="ts">
    let {children} = $props();
    import "../global.css";
</script>

<div>
    {@render children()}
</div>