<template>
  <li class="input-checkbox">
    <input
      class="is-hidden"
      type="checkbox"
      :id="item.id"
      @click="$emit('on-checked')"
      :checked="item.isChecked"
    />
    <label :for="item.id">{{ item.name }}</label>
  </li>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.input-checkbox {
  color: $color_dark;
  margin-bottom: 5px;

  label {
    position: relative;
    display: block;
    padding: 0 0 0 25px;
    cursor: pointer;
    outline: none;

    &::before {
      content: "";
      position: absolute;
      top: 4px;
      left: 0;
      width: 16px;
      height: 16px;
      border: 1px solid $color_gray7;
      border-radius: 5px;
      transition: all 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      display: none;
      top: 8px;
      left: 4px;
      width: 9px;
      height: 6px;
      border: 2px solid $color_gray2;
      transform: rotate(-45deg);
      border-top-style: none;
      border-right-style: none;
      transition: all 0.3s;
    }

    &:hover,
    &:focus {
      &::before {
        border: 1px solid $color_dark;
      }
    }

    &:active {
      &::before {
        border: 1px solid $color_dark;
        opacity: 0.5;
      }
    }
  }

  input {
    width: 16px;
    height: 16px;
    color: 1px solid $color_gray3;
    cursor: pointer;
  }

  input:checked + label::after {
    display: block;
  }

  input:disabled + label {
    opacity: 0.3;
  }

  input:focus + label::before {
    outline: dotted 1px $color_gray3;
    outline-offset: 2px;
  }
}
</style>
