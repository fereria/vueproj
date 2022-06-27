<template>
	<div>
		<add-count @add="addCount" />
		{{ count }}
		<!-- itemsの配列のCheckBoxを作り、selectedItemを更新する -->
		<check-box
			:selected="selectedItem"
			:items="items"
			@changed="onChanged"
		/>
		{{ showValue }}
	</div>
</template>

<script>
// 自作コンポーネントを読み込み
import AddCount from "./components/AddCount.vue";
import CheckBox from "./components/CheckBox.vue";

export default {
	components: { AddCount, CheckBox },
	data() {
		return {
			count: 0,
			selectedItem: "",
			items: ["ばなな", "りんご", "ぶどう", "もも"],
		};
	},
	computed: {
		showValue() {
			return "選択中: " + this.selectedItem;
		},
	},
	mounted: function () {
		// デフォルトの選択肢を設定
		this.selectedItem = "ばなな";
	},
	methods: {
		addCount(count) {
			// SubComponentの結果を受け取り、自身のdataにセットする
			this.count = count;
		},
		onChanged(value) {
			// SubComponentのCheckBoxの選択中を親コンポーネントに反映
			this.selectedItem = value;
		},
	},
};
</script>
