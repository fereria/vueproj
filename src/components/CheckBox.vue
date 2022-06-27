<template>
	<dev>
		<div v-for="(item, index) in items" :key="index">
			<!-- itemsの数だけCheckBoxを表示する -->
			<input
				type="radio"
				name="sample1"
				:value="item"
				v-model="itemValue"
				@change="onChanged"
			/>
			{{ item }}
		</div>
	</dev>
</template>

<script>
export default {
	name: "CheckBoxGroup",
	// 選択中とCheckBoxの一覧は親コンポーネントから設定する
	props: ["selected", "items"],
	watch: {
		// selectedは変更を監視して、変更があった場合は CheckBoxの選択中を変更する
		selected: function (newVal) {
			this.itemValue = newVal;
		},
	},
	methods: {
		onChanged() {
			// CheckBoxが変更されたらおやコンポーネントを変更
			this.$emit("changed", this.itemValue);
		},
	},
	data() {
		return {
			// CheckBoxの選択中のアイテム情報を持つ
			itemValue: "",
		};
	},
};
</script>
