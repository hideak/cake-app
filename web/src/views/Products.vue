<template>
  <div class="products">
    <ScrollableList
      title="Meus Produtos"
      :icon="require('@/assets/img/box-solid.svg')"
      :searchPlaceholder="'Pesquisar produtos...'"
      :items="products"
      :addAction="productAddAction"
      :itemAction="productItemAction"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import ScrollableList from "@/components/ScrollableList.vue";
import DatabaseConnection from "@/model/interface/database-connection.interface";
import GenericService from "@/services/shared/generic-service";
import Product from "@/model/product.model";
import ProductCreate from "@/model/dto/product-create";
import router from "@/router";

export default defineComponent({
  name: "Products",
  components: {
    ScrollableList,
  },
  setup() {
    const products = ref();

    // initializing database
    const db: DatabaseConnection = inject("dbConnection") as DatabaseConnection;
    const productsService = new GenericService<Product, ProductCreate>(
      db,
      "products"
    );

    // get product data
    productsService.getAll().then((entities: Product[]) => {
      products.value = entities;
    });

    /**
     * Navigates to the new product screen
     */
    const productAddAction = () => router.push({ name: "NewProduct" });

    /**
     * Navigates to the edit product screen
     */
    const productItemAction = (id: number) =>
      router.push({ name: "EditProduct", params: { id } });

    // expose template variables
    return { products, productAddAction, productItemAction };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

div.products {
  height: 100%;
}
</style>
