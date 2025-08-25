<script lang="ts">
	import { type Addons, getAddons } from "$lib/api/client";
	import Addon from "$lib/components/Addon.svelte";
	import Boundary from "./Boundary.svelte";
	import Loading from "./Loading.svelte";
	import { settings } from "$lib/state/settings.svelte";
	import { useAsyncEffect } from "$lib/utils/async-effect.svelte";

	let	addons: Addons = $state({
		_embedded: {
			addons: []
		}
	}),
		loading = $state(false),
		error: Error | null = $state(null);

	useAsyncEffect(
		async (signal: AbortSignal): Promise<void> => {
			if (!settings.vendorId) {
				return;
			}

			addons = await getAddons(settings.vendorId, signal);
		},
		(isLoading: boolean): boolean => (loading = isLoading),
		(e: Error | null): Error | null => (error = e),
		(): unknown => [settings.vendorId]
	);

</script>

<Boundary {error}>
	<Loading {loading}/>
	<ul>
		{#each addons._embedded.addons as addon (addon.key)}
			<Addon {addon}/>
		{/each}
	</ul>
</Boundary>

<style>
	ul {
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-around;
	}

	@media (max-width: 1024px) {
		ul {
			flex-direction: column;
		}
	}
</style>