<template>
    <button
        :class="[
            'gl-btn',
            plain ? type + '-plain' : type + '-type',
            loading ? 'is-loading' : '',
            disabled ? 'is-disabled' : '',
            round + '-round',
            'is-' + textTransform,
            cssClass,
        ]"
        :disabled="disabled"
    >
        <slot></slot>
        <span v-if="loading" class="loading iconfont icon-loading"></span>
    </button>
</template>
<script>
export default {
    props: {
        cssClass: String,
        disabled: {
            type: Boolean,
            default: !1,
        },
        type: {
            type: String,
            default: "default",
            validator: function (t) {
                return [
                    "default",
                    "primary",
                    "connect",
                    "error",
                    "abort",
                    "success",
                ].includes(t);
            },
        },
        round: {
            type: String,
            default: "oval",
            validator: function (t) {
                return ["oval", "left", "right"].includes(t);
            },
        },
        loading: {
            type: Boolean,
            default: !1,
        },
        textTransform: {
            type: String,
            default: "capitalize",
            validator: function (t) {
                return ["capitalize", "uppercase", "lowercase"].includes(t);
            },
        },
        plain: {
            type: Boolean,
            default: !1,
        },
    },
    data: function () {
        return {
            timeId: null,
            isUsing: !1,
        };
    },
    computed: {
        listeners: function () {
            return Object(u.a)(
                Object(u.a)({}, this.$listeners),
                {},
                {
                    click: this.handleClick,
                }
            );
        },
    },
    methods: {
        handleClick: function () {
            var t = this;
            clearTimeout(this.timeId);
            this.timeId = setTimeout(function () {
                t.isUsing = !1;
            }, 500);
            if (!this.isUsing) {
                this.isUsing = true;
                this.$emit("click");
            }
        },
    },
    destroyed: function () {
        clearTimeout(this.timeId);
        this.timeId = null;
    },
};
</script>
<style>
.gl-btn {
    padding: 10px 22px;
    margin: 0 10px;
    font-weight: 400;
    outline: none;
    border: none;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}
.default-plain,
.default-type {
    color: var(--text-weak);
    background-color: transparent;
    border: 1px solid var(--text-weak);
}
.default-plain:hover,
.default-type:hover {
    background-color: var(--background-main);
}
.default-plain:active,
.default-type:active {
    padding: 7px 19px;
    border: 3px solid var(--text-regular);
    background-color: transparent;
}
.default-plain.is-disabled,
.default-plain.is-loading,
.default-type.is-disabled,
.default-type.is-loading {
    opacity: 0.4;
    background-color: var(--icon-disabled);
}
.primary-plain,
.primary-type {
    background-color: var(--primary);
    color: #fff;
}
.primary-plain:hover,
.primary-type:hover {
    background-color: var(--primary-hover);
}
.primary-plain:active,
.primary-type:active {
    padding: 7px 19px;
    background-color: var(--primary);
    border: 3px solid var(--primary-disabled);
}
.primary-plain.is-disabled,
.primary-plain.is-loading,
.primary-type.is-disabled,
.primary-type.is-loading {
    background-color: var(--primary-disabled);
}
.abort-plain,
.abort-type,
.error-plain,
.error-type {
    background-color: var(--error);
    color: #fff;
}
.abort-plain:hover,
.abort-type:hover,
.error-plain:hover,
.error-type:hover {
    background-color: var(--error-hover);
}
.abort-plain:active,
.abort-type:active,
.error-plain:active,
.error-type:active {
    padding: 7px 19px;
    background-color: var(--error);
    border: 3px solid var(--error-disabled);
}
.abort-plain.is-disabled,
.abort-plain.is-loading,
.abort-type.is-disabled,
.abort-type.is-loading,
.error-plain.is-disabled,
.error-plain.is-loading,
.error-type.is-disabled,
.error-type.is-loading {
    background-color: var(--error-disabled);
}
.connect-plain,
.connect-type,
.success-plain,
.success-type {
    background-color: var(--secondary);
    color: #fff;
}
.connect-plain:hover,
.connect-type:hover,
.success-plain:hover,
.success-type:hover {
    background-color: var(--secondary-hover);
}
.connect-plain:active,
.connect-type:active,
.success-plain:active,
.success-type:active {
    padding: 7px 19px;
    border: 3px solid var(--secondary-disabled);
    background-color: var(--secondary);
}
.connect-plain.is-disabled,
.connect-plain.is-loading,
.connect-type.is-disabled,
.connect-type.is-loading,
.success-plain.is-disabled,
.success-plain.is-loading,
.success-type.is-disabled,
.success-type.is-loading {
    background-color: var(--secondary-disabled);
}
.oval-round {
    border-radius: 20px;
}
.left-round {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
.right-round {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
.is-disabled,
.is-loading {
    cursor: no-drop;
}
.loading {
    margin-left: 4px;
    font-size: 16px;
    color: inherit;
}
.is-capitalize {
    text-transform: capitalize;
}
.is-uppercase {
    text-transform: uppercase;
}
.is-lowercase {
    text-transform: lowercase;
}
</style>
