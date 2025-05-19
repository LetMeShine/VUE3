<template>
	<div style="overflow: hidden; padding: 0; width: 400px; height: 400px;">
		<svg class="line-chart"></svg>
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue'
	import chartXkcd from 'chart.xkcd';
	onMounted(() => {
		initLineChart()
	})
	let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	let monthlyPageCount = [0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0]
	let monthlyLikesCount = [0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0]
	let monthlyViewsCount = [0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0]
	// 官网 https://timqian.com/chart.xkcd/
	const initLineChart = () => {
		const svg = document.querySelector('.line-chart')
		new chartXkcd.Line(svg, {
			title: 'Monthly Count',
			xLabel: 'Month',
			yLabel: 'Views',
			data: {
				labels: months,
				datasets: [
					{
						label: 'Pages',
						data: monthlyPageCount
					},
					{
						label: 'Views',
						data: monthlyViewsCount
					},
					{
						label: 'Likes',
						data: monthlyLikesCount
					}
				]
			},
			options: {}
		})
	}
</script>
