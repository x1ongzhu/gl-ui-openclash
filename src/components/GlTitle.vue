<template>
    <div id="view-title-wrapper">
        <div class="title capitalize">
            <template v-if="title">{{ title }}</template>
            <slot v-else name="title"></slot>
            <span v-if="badge" class="badge">
                <template v-if="badge">{{ badge }}</template>
                <slot v-else name="badge"></slot>
            </span>
        </div>
        <div></div>
    </div>
</template>
<script>
export default {
    props: {
        title: {},
        badge: {},
        capitalize: {
            type: Boolean,
            default: !0,
        },
    },
};
</script>
<style>
#view-title-wrapper {
    min-height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 16px 14px;
}
#view-title-wrapper .title {
    color: var(--text-nav);
    font-size: 22px;
    font-weight: 700;
    display: flex;
    align-items: center;
}
#view-title-wrapper .title .badge {
    margin-left: 10px;
    display: inline-block;
    font-size: 12px;
    color: #fff;
    background-color: var(--warning);
    padding: 2px 6px;
    border-radius: 5px;
}
</style>
