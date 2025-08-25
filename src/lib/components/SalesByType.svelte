<script lang="ts">
	import Pill from "./Pill.svelte";
	import Totals from "./Totals.svelte";
	import type { TotalsBySaleType } from "$lib/api/client";

	const { sales }: { sales: TotalsBySaleType } = $props();

</script>

Sales By Type
<section>
	<Pill color={0 === sales.New.revenue ? "grey" : "green"}>
		<span>New</span>
		<Totals {...sales.New}/>
	</Pill>
	<Pill color={0 === sales.Renewal.revenue ? "grey" : "blue"}>
		<span>Renewal</span>
		<Totals {...sales.Renewal}/>
	</Pill>
	<Pill color={0 === sales.Upgrade.revenue ? "grey" : "yellow"}>
		<span>Upgrade</span>
		<Totals {...sales.Upgrade}/>
	</Pill>
	<Pill color={0 === sales.Downgrade.revenue ? "grey" : "purple"}>
		<span>Downgrade</span>
		<Totals {...sales.Downgrade}/>
	</Pill>
	<Pill color={0 === sales.Refund.revenue ? "grey" : "red"}>
		<span>Refund</span>
		<Totals {...sales.Refund}/>
	</Pill>
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--primary-border-color);

		span {
			margin-right: auto;
		}
	}
</style>