<template>
  <div class="news-types">
      <div class="item">
          <spawn class="name">Lorem.</spawn>
      </div>
      <div class="item">
          <spawn class="name">Perspiciatis!</spawn>
      </div>
      <div class="item">
          <spawn class="name">Quisquam!</spawn>
      </div>
      <div class="item">
          <spawn class="name">Vero!</spawn>
      </div>
      <div class="item">
          <spawn class="name">Iusto?</spawn>
      </div>
      <div class="item">
          <spawn class="name">Vero.</spawn>
      </div>
      <div class="item">
          <spawn class="name">Similique?</spawn>
      </div>
      <div class="item">
          <spawn class="name">Debitis.</spawn>
      </div>
      <div class="item">
          <spawn class="name">Perspiciatis!</spawn>
      </div>
      <div class="item">
          <spawn class="name">Debitis?</spawn>
      </div>
      <div class="item">
          <spawn class="name">Aliquid.</spawn>
      </div>
      <div class="item">
          <spawn class="name">Repellendus.</spawn>
      </div>
      <div class="item">
          <spawn class="name">Alias?</spawn>
      </div>
      <div class="item">
          <spawn class="name">Magnam.</spawn>
      </div>
      <div class="item">
          <spawn class="name">Sequi!</spawn>
      </div>
      <div class="item">
          <spawn class="name">Repudiandae?</spawn>
      </div>
      <div class="item">
          <spawn class="name">Praesentium?</spawn>
      </div>
      <div class="item">
          <spawn class="name">Dolorum?</spawn>
      </div>
      <div class="item">
          <spawn class="name">Odit!</spawn>
      </div>
      <div class="item">
          <spawn class="name">Ducimus.</spawn>
      </div>
      <a href="">收起</a>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.news-types{
    margin: 30px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    padding-bottom: 15px;
}
.item{
    padding:10px 20px;
    border-radius: 5px;
    border:1px solid #ccc;
    margin-right: 15px;
    margin:7px 15px 7px 0;
    cursor: pointer;
    position: relative;
}
.item:hover{
    background: #ccc;
}
.item.active{
    background: #000;
    color: #fff;
}
.news-types a{
    align-self:flex-end;
    margin-bottom: 20px;
    color: #409eff;

}
</style>