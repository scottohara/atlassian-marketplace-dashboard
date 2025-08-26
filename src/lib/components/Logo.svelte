<script lang="ts">
	import type { Logo } from "$lib/api/client";

	const { _embedded }: Logo = $props();

</script>

<img alt="logo" src={_embedded.logo._links.image.href}/>

<style>
	img {
		--logo-size: 56px;

		background-color: var(--white);
		width: var(--logo-size);
		height: var(--logo-size);
		border: 1px solid var(--border-secondary);
		padding: 1rem;
		border-radius: var(--border-radius);
	}
</style>