<template>
    <div class="card-item">
        <div class="tethering-wrapper">
            <div class="gl-card-wrapper">
                <div class="header">
                    <div class="title" v-if="title || $slots.title">
                        <span
                            v-if="state"
                            :class="['dot', 'is-' + state]"
                        ></span>
                        <template v-if="title">
                            {{ title }}
                        </template>
                        <slot v-else name="title"></slot>
                        <span v-if="badge" class="badge">{{ badge }}</span>
                    </div>

                    <div v-if="header">{{ header }}</div>
                    <slot v-else name="header"></slot>
                </div>
                <div class="container"><!----><!----><!----></div>
                <!---->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        header: {},
        footer: {},
        badge: {
            type: String,
            default: null,
        },
        title: {},
        state: {
            type: String,
            validator: function (t) {
                return ["", "no", "success", "warn"].includes(t);
            },
        },
        footerClass: String,
        iconClass: String,
        capitalize: {
            type: Boolean,
            default: !0,
        },
    },
};
</script>
<style>
.gl-card-wrapper {
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 6px 16px 6px var(--shadow);
}
.gl-card-wrapper .header {
    height: 60px;
    padding: 0 20px;
    background-color: var(--background-title);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid var(--divider);
}
.gl-card-wrapper .header .title {
    font-size: 18px;
    color: var(--text-title);
    display: flex;
    align-items: center;
}
.gl-card-wrapper .header .title .badge {
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: var(--secondary);
    border-radius: 10px;
    margin-left: 4px;
}
.gl-card-wrapper .header .title .dot {
    display: inline-block;
    margin-right: 15px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
.gl-card-wrapper .header .title .icons {
    margin-right: 15px;
}
.gl-card-wrapper .header .title .is-no {
    background-color: var(--background-badge);
}
.gl-card-wrapper .header .title .is-success {
    background-color: var(--success);
}
.gl-card-wrapper .header .title .is-warn {
    background-color: var(--warning);
}
.gl-card-wrapper .container {
    width: 100%;
    padding: 20px;
    background-color: var(--background-card);
}
.gl-card-wrapper .footer {
    padding: 0 25px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: var(--background-title);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: 1px solid var(--divider);
}
</style>
