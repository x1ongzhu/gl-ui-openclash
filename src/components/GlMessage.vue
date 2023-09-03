<style>
.gl-message {
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 4px;
    position: fixed;
    top: 25px;
    right: 50%;
    font-size: 14px;
    transform: translateX(50%);
    transition: opacity 0.3s, transform 0.4s;
    padding: 15px 15px 15px 20px;
    color: var(--info);
    z-index: 999999;
    min-width: 380px;
    max-width: 500px;
    height: auto;
    background-color: var(--info-background);
    box-shadow: 2px 6px 16px 6px var(--shadow);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    opacity: 1;
}
.gl-message.gl-message-fade-enter,
.gl-message.gl-message-fade-leave-active {
    transition: opacity 0.3s, transform 0.4s;
    opacity: 0;
    transform: translate(50%, -25px);
    -webkit-transform: translate(50%, -25px);
}
.gl-message__content {
    line-height: 1;
}
.is-center {
    justify-content: center;
}
.close-message {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--icon);
    font-size: 16px;
}
.close-message:hover {
    color: var(--icon-hover);
}
.gl-iconfont {
    font-size: 16px;
    margin-right: 8px;
    margin-top: 1px;
}
@media screen and (max-width: 768px) {
    .gl-message {
        word-wrap: break-word;
        position: fixed;
        top: 4%;
        right: 50%;
        transform: translateX(50%);
        font-size: 12px;
        padding: 14px 10px;
        max-width: 80%;
        min-width: 70%;
        line-height: 1.8;
    }
    .gl-message.gl-message-fade-enter,
    .gl-message.gl-message-fade-leave-active {
        opacity: 0;
        transform: translate(50%, -100%);
    }
}
.gl-message--error {
    background-color: var(--error-background);
    color: var(--error);
}
.gl-message--success {
    background-color: var(--success-background);
    color: var(--success);
}
.gl-message--warning {
    background-color: var(--warning-background);
    color: var(--warning);
}
</style>
