<style>
.gl-dropdown-wrapper .dropdown-label {
    display: inline-block;
    cursor: pointer;
    padding: 10px;
}
.gl-dropdown-wrapper .dropdown-label.is-disabled {
    color: var(--icon-disabled);
    cursor: not-allowed;
}
.gl-dropdown-wrapper
    .dropdown-label.has-default-label:not(.is-disabled) {
    color: var(--icon);
    display: inline-block;
    border-radius: 5px;
}
.gl-dropdown-wrapper
    .dropdown-label.has-default-label:not(.is-disabled):hover {
    padding: 8px;
    margin: 2px;
    background-color: var(--icon-active);
}
.gl-dropdown-wrapper .dropdown-label .icon-action {
    color: var(--icon);
    font-size: 16px;
}
.option-main {
    position: fixed;
    z-index: 2999;
    background-color: var(--background-card);
    box-shadow: 0 3px 6px 0 var(--shadow);
    transition: max-height 0.1s cubic-bezier(0, 0, 0.2, 1);
    border-radius: 2px;
    max-height: 0;
}
.option-main .opiton-list {
    border: 1px solid var(--border);
    padding: 4px 0;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 5px;
}
.option-main.p-top:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 0;
    height: 0;
    content: " ";
    border-width: 6px;
    border-color: transparent;
    border-style: solid;
    border-top-width: 0;
    border-bottom-color: var(--border);
}
.option-main.p-bottom {
    box-shadow: none;
}
.option-main.p-bottom:before {
    position: absolute;
    display: block;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 108%);
    width: 0;
    height: 0;
    content: " ";
    border-width: 6px;
    border-color: transparent;
    border-style: solid;
    border-bottom-width: 0;
    border-top-color: var(--border);
}
.option-main.p-left:before {
    left: 70%;
}
.option-main.p-left.p-left-end:before {
    left: 98%;
}
.option-main.p-right:before {
    left: 30%;
}
</style>
