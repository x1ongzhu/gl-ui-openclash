<template>
    <div>
        <gl-title title="OpenClash" badge="beta"></gl-title>
        <gl-card title="Title" state="success" badge="haha"></gl-card>
        <gl-button type="primary">TEST </gl-button>
        <ElSelect v-model="a">
            <ElOption label="a" value="b"></ElOption>
        </ElSelect>
    </div>
</template>
<script>
export default {
    created() {
        console.log(this);
    },
    data() {
        return {
            a: "",
        };
    },
};
</script>
<style scoped>
@import "element-ui/lib/theme-chalk/index.css";
</style>
