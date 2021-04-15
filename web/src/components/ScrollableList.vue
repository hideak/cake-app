<template>
  <div class="scrollable-list">
    <TitleBar :title="title" :icon="icon" />
    <div v-if="items && items.length > 0" class="counter">
      <div>Há {{ items.length }} item(s) registrado(s).</div>
    </div>
    <div v-if="!items || items.length === 0" class="no-record">
      <p>Nenhuma item foi registrado 😢</p>
      <p>Clique no botão de "+" para adicionar um novo item.</p>
    </div>
    <InputField
      v-if="items && items.length > 0"
      hasIcon
      :icon="require('@/assets/img/search-solid.svg')"
      :placeholder="searchPlaceholder"
      v-model="searchValue"
    />
    <div class="items">
      <ListItem
        v-for="item in filteredItems"
        :key="item.id"
        :content="item.name"
        @click="itemAction(item.id)"
      />
    </div>
    <AddCircleButton @click="addAction" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed } from "vue";
import AddCircleButton from "@/components/AddCircleButton.vue";
import ListItem from "@/components/ListItem.vue";
import TitleBar from "@/components/TitleBar.vue";
import InputField from "@/components/InputField.vue";
import SortableListItem from "@/model/interface/sortable-list-item.interface";

export default defineComponent({
  name: "ScrollableList",
  components: {
    AddCircleButton,
    ListItem,
    TitleBar,
    InputField,
  },
  props: {
    title: { type: String },
    icon: { type: String },
    items: {
      type: Object as PropType<SortableListItem[]>,
      default: new Array<SortableListItem>(),
    },
    searchPlaceholder: { type: String },
    addAction: { type: Function },
    itemAction: { type: Function },
  },
  setup(props) {
    const searchValue = ref("");

    const filteredItems = computed(() => {
      return props.items.filter((item: SortableListItem) => {
        return item.name
          .toLowerCase()
          .includes(searchValue.value.toLowerCase());
      });
    });

    return { searchValue, filteredItems };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

div.scrollable-list {
  display: flex;
  flex-direction: column;
  height: 100%;

  div.counter {
    padding-bottom: 1rem;
    text-align: center;
  }

  div.no-record {
    padding: 0 1rem;
    text-align: center;
  }
}

div.items {
  flex-grow: 1;
  overflow-y: scroll;
}

div.add-circle-button {
  position: fixed;
  right: 1.375rem;
  bottom: 1.375rem;
}
</style>
