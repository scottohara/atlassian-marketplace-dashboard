<script lang="ts">
	import type { Total } from "$lib/api/client";
	import { Tween } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";

	const { count, revenue }: Total = $props(),
		tweenedCount = Tween.of((): number => count, { easing: cubicInOut }),
		tweenedRevenue = Tween.of((): number => revenue, { easing: cubicInOut }),
		currencyFormatter = new Intl.NumberFormat("en-AU", {
			style: "currency",
			currency: "AUD",
		});

</script>

<div>
	<span class="revenue">{currencyFormatter.format(tweenedRevenue.current)}</span>
	<span class="count">({Math.round(tweenedCount.current)})</span>
</div>

<style>
	div {
		display: flex;
		gap: 0.5em;

		.revenue {
			font-weight: 500;
			font-size: 1em;
		}

		.count {
			font-size: 0.75em;
			color: var(--text-secondary);
		}
	}
</style>

