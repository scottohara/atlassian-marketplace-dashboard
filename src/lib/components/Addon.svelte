<script lang="ts">
	import type { Addon } from "$lib/api/client";
	import AddonSales from "./AddonSales.svelte";
	import Logo from "./Logo.svelte";

	const { addon }: { addon: Addon } = $props();

</script>

<li>
	<header>
		<Logo _embedded={addon._embedded}/>
		<h1>{addon.name}</h1>
	</header>
	<AddonSales {addon}/>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;
		flex: 0 0 calc((100% - 9rem) / 3);
		gap: 1rem;
		list-style: none;
		padding: 1rem;
		color: var(--primary-text-color);
		background: var(--card-bg-color);
		border: 1px solid var(--primary-border-color);
		box-shadow: 0 0 0.5rem color-mix(in srgb, var(--primary-border-color) 70%, transparent);
		border-radius: var(--border-radius);

		header {
			display: flex;
			gap: 1rem;

			h1 {
				text-align: left;
				font-size: 1.5rem;
				font-weight: 500;
				min-height: var(--logo-size);
			}
		}
	}
</style>