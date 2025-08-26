<script lang="ts">
	import { dateRange } from "$lib/state/date-range.svelte";

	const newDateRange = $state({ ...dateRange });

	function updateStart(start: string): void {
		newDateRange.start = start;
		if (newDateRange.end && start > newDateRange.end) {
			newDateRange.end = start;
		}
	}

	function updateEnd(end: string): void {
		newDateRange.end = end;
		if (newDateRange.start && newDateRange.start > end) {
			newDateRange.start = end;
		}
	}

	function onclick(): void {
		Object.assign(dateRange, newDateRange);
	}
</script>

<form>
	<label>
		From
		<input type="date" bind:value={(): string => newDateRange.start, updateStart}/>
	</label>
	<label>
		To
		<input type="date" bind:value={(): string => newDateRange.end, updateEnd}/>
	</label>
	<button {onclick} type="button">Go</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		flex-grow: 0;
		gap: 1rem;
		align-items: end;

		label {
			display: flex;
			gap: 0.5rem;
			align-items: center;
			font-weight: 500;

			input {
				border: 1px solid var(--border-secondary);
				border-radius: 0.5rem;
				padding: 0.5rem;
				width: 98px;
				min-height: 17px;
				color: var(--text-primary);
			}

			input[type="date"]::-webkit-calendar-picker-indicator {
				display: none;
				-webkit-appearance: none;
			}
		}

		button {
			border: 1px solid var(--border-secondary);
			border-radius: 0.5rem;
			padding: 0.34rem;
			min-width: 5rem;
			font-size: 1.25rem;
			margin-left: auto;
			color: var(--text-primary);
		}
	}

	@media (max-width: 768px) {
		form {
			flex-direction: row;
			gap: 0.5rem;

			label {
				flex-direction: column;
				align-items: start;
			}

			button {
				min-width: 4rem;
			}
		}
	}
</style>