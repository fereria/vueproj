<template>
	<div>
		<p>{{ sample }}</p>
		<div v-for="(item, index) in items" :key="index">
			<input
				type="radio"
				name="sample1"
				:value="item"
				v-model="itemValue"
			/>
			{{ item }}
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			itemValue: "りんご",
			items: ["ぶどう", "りんご", "みかん"],
		};
	},
	computed: {
		sample() {
			return "選択中: " + this.itemValue;
		},
	},
};
</script>
