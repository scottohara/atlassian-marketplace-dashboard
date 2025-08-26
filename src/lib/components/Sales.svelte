<script lang="ts">
	import type { Total, TotalsByPlatform, TotalsBySaleType } from "$lib/api/client";
	import SalesByPlatform from "./SalesByPlatform.svelte";
	import SalesByType from "./SalesByType.svelte";
	import Totals from "./Totals.svelte";

	interface Props {
		total: Total;
		bySaleType: TotalsBySaleType;
		byPlatform: TotalsByPlatform;
	};

	const { total, bySaleType, byPlatform }: Props = $props();

</script>

<section>
	<Totals {...total}/>
</section>
<SalesByType sales={bySaleType}/>
<SalesByPlatform sales={byPlatform}/>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-size: 2rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--border-primary);
	}
</style>