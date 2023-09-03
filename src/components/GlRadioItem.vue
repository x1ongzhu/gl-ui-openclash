<style>
.gl-radio-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid var(--border);
    min-width: 100px;
    min-height: 35px;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 14px;
    cursor: pointer;
    color: var(--text-regular);
}
.gl-radio-wrapper .content {
    flex: 1;
    text-align: left;
}
.gl-radio-wrapper .check-box {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid var(--border);
    margin-right: 10px;
}
.gl-radio-wrapper.is-check {
    border-color: var(--secondary);
    background-color: var(--secondary-background);
}
.gl-radio-wrapper.is-check .check-box {
    position: relative;
    border-color: var(--secondary);
}
.gl-radio-wrapper.is-check .check-box:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--secondary);
}
.gl-radio-wrapper.is-disabled {
    color: var(--text-disabled);
    cursor: not-allowed;
    background-color: var(--background-disabled);
    border-color: var(--background-disabled);
}
.gl-radio-wrapper.is-disabled .check-box {
    background-color: var(--background-controller);
    border-color: var(--background-controller);
}
.gl-radio-wrapper.is-disabled .check-box:before {
    background-color: var(--background-disabled);
}
</style>
