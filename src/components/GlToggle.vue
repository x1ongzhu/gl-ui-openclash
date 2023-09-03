<style>
.gl-toggle-wrapper {
    display: flex;
    padding: 2px;
    border: 1px solid var(--border);
    border-radius: 5px;
    background-color: var(--background-content);
    position: relative;
}
.gl-toggle-wrapper .check-box {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 0;
    height: calc(100% - 4px);
    border-radius: 5px;
    background-color: var(--secondary);
}
.gl-toggle-wrapper .check-box.show-transition {
    transition: all 0.15s cubic-bezier(0.38, 0, 0.24, 1);
}
.gl-toggle-wrapper > li.gl-toggle-item {
    transition: color 0.2s cubic-bezier(0, 0, 0.15, 1);
}
.gl-toggle-wrapper > li.gl-toggle-item.is-active {
    color: #fff;
}
.gl-toggle-wrapper > li.gl-toggle-item.is-disabled {
    color: #fff;
    background-color: var(--text-disabled);
    cursor: not-allowed;
}
.gl-toggle-wrapper > li.gl-toggle-item.is-disabled.is-active {
    background-color: var(--secondary-disabled);
}
.gl-toggle-wrapper
    > li.gl-toggle-item:hover:not(.is-active, .is-disabled) {
    background-color: var(--background-badge);
}
</style>
