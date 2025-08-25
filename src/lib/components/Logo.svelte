<script lang="ts">
	import type { Logo } from "$lib/api/client";

	const { _embedded }: Logo = $props();

</script>

<img alt="logo" src={_embedded.logo._links.image.href}/>

<style>
	img {
		background-color: var(--logo-bg-color);
		width: var(--logo-size);
		height: var(--logo-size);
		border: 1px solid var(--secondary-border-color);
		padding: 1rem;
		border-radius: var(--border-radius);
	}
</style>