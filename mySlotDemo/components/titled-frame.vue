<template>
  <div class="frame">
    <header>
      <h2>
        <slot name="header">Title</slot>
      </h2>
    </header>
    <slot>如果这里没有指定任何内容，这就是默认内容</slot>
  </div>
</template>
