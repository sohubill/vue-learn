<template>
  <div class="pager" v-if="total > 0">
    <a
      href=""
      class="pager-item"
      :class="{ disabled: page === 1 }"
      @click.prevent="handleChange(1)"
    >
      首页
    </a>
    <a
      href=""
      class="pager-item"
      :class="{ disabled: page === 1 }"
      @click.prevent="handleChange(page - 1)"
      >上一页</a
    >
    <a class="pager-item" href="" v-for="n in numbers" :key="n" :class="{active:page===n}" @click.prevent="handleChange(n)">{{ n }}</a>
    <a
      href=""
      class="pager-item"
      :class="{ disabled: page === pageNumber }"
      @click.prevent="handleChange(page + 1)"
      >下一页</a
    >
    <a
      href=""
      class="pager-item"
      :class="{ disabled: page === pageNumber }"
      @click.prevent="handleChange(pageNumber)"
      >尾页</a
    >

    <span>
      <i>{{ page }}</i>
      /
      <i>{{ pageNumber }}</i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      //当前页
      type: Number,
      default: 1,
    },
    total: {
      //总数据量
      type: Number,
      default: 0,
    },
    limit: {
      //页容量
      type: Number,
      default: 10,
    },
    panelNumer: {
      //最多显示多少个页码
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    numbers() {
      return [2, 3, 4, 5, 6];
    },
  },
  methods: {
    handleChange(newPage) {
      if (newPage <= 0) {
        newPage = 1;
      } else if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.page) {
        return;
      }
      this.$emit("changePage", newPage);
    },
  },
};
</script>

<style scoped>
.pager {
  text-align: center;
  margin: 20px 0;
}
.pager .pager-item {
  display: inline-block;
  padding: 5px 7px;
  border: 1px solid #ccc;
  margin: 8px;
  cursor: pointer;
  color: rgb(96, 96, 224);
}
.pager .pager-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}
.pager .pager-item.active {
  color: #f40;
  border: none;
  cursor: auto;
}
</style>
