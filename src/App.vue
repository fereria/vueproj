<template>
	<div>
		<div v-for="(item, index) in items" :key="index">
			<input
				type="radio"
				name="sample1"
				:value="item"
				v-model="itemValue"
				@change="sampleB"
			/>
			{{ item }}
		</div>
		<hello-world :childComp="itemValue" @add="add1" />
		{{ count }}
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	components: { HelloWorld },
	data() {
		return {
			itemValue: "りんご",
			count: 0,
			items: ["ぶどう", "りんご", "みかん"],
		};
	},
	computed: {
		sample() {
			return "選択中: " + this.itemValue;
		},
	},
	filters: {},
	methods: {
		sampleB() {},
		add1(count) {
			this.count = count;
		},
	},
};
</script>
